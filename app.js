(function () {
  var grupos = window.GRUPOS || [];
  var posts = (window.POSTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var el = Site.el;
  var t = Site.t;
  var expandidos = {};

  var GITHUB_USUARIO = 'luanpelaes18';
  var GITHUB_REPOS_IGNORADOS = ['luanpelaes18.github.io'];

  function repoParaItem(repo) {
    var desc = repo.description;
    return {
      titulo: { pt: repo.name, en: repo.name },
      desc: desc ? { pt: desc, en: desc } : null,
      url: repo.html_url,
      date: repo.pushed_at ? repo.pushed_at.slice(0, 10) : null,
      tags: repo.language ? { pt: [repo.language], en: [repo.language] } : null
    };
  }

  function carregarRepositorios() {
    var grupoProjetos = grupos.filter(function (g) { return g.id === 'projetos'; })[0];
    if (!grupoProjetos) return;
    fetch('https://api.github.com/users/' + GITHUB_USUARIO + '/repos?per_page=100&sort=pushed')
      .then(function (resp) {
        if (!resp.ok) throw new Error('GitHub API respondeu ' + resp.status);
        return resp.json();
      })
      .then(function (repos) {
        var itens = repos
          .filter(function (r) { return !r.fork && !r.archived && GITHUB_REPOS_IGNORADOS.indexOf(r.name) === -1; })
          .map(repoParaItem);
        if (itens.length) {
          grupoProjetos.itens = itens;
          render();
        }
      })
      .catch(function (err) { console.warn('Não foi possível carregar os repositórios do GitHub:', err); });
  }

  function montarCard(item, layout) {
    var tags = item.tags ? t(item.tags) : [];
    var card = el('article', 'card');

    if (layout === 'projetos') {
      var thumb = el('div', 'thumb');
      if (item.imagem) {
        var img = el('img');
        img.src = item.imagem;
        img.alt = '';
        img.loading = 'lazy';
        thumb.appendChild(img);
      } else {
        thumb.textContent = '</>';
        thumb.setAttribute('aria-hidden', 'true');
      }
      card.appendChild(thumb);
      if (item.date) card.appendChild(el('time', 'card-date card-date-solo', Site.formatarData(item.date)));
    } else {
      var topo = el('div', 'card-top');
      var base = /^[A-Z]/.test(tags[0] || '') ? tags[0] : t(item.titulo);
      topo.appendChild(el('span', 'badge', base.charAt(0).toUpperCase()));
      if (item.date) topo.appendChild(el('time', 'card-date', Site.formatarData(item.date)));
      card.appendChild(topo);
    }

    card.appendChild(el('h3', null, t(item.titulo)));
    if (item.desc) card.appendChild(el('p', 'card-desc', t(item.desc)));

    if (tags.length) {
      var ul = el('ul', 'tags');
      tags.forEach(function (tag) { ul.appendChild(el('li', null, tag)); });
      card.appendChild(ul);
    }

    var a = el('a', 'btn btn-ghost', Site.txt('saiba_mais'));
    a.href = item.url || '#';
    card.appendChild(a);
    return card;
  }

  function montarTecnologias() {
    var lista = document.getElementById('lista-tecnologias');
    var vistos = {};
    lista.textContent = '';
    grupos.forEach(function (g) {
      if (g.id === 'projetos') return; // projetos de exemplo não entram na lista
      g.itens.forEach(function (it) {
        (it.tags ? t(it.tags) : []).forEach(function (tag) {
          if (vistos[tag.toLowerCase()]) return;
          vistos[tag.toLowerCase()] = true;
          lista.appendChild(el('li', null, tag));
        });
      });
    });
  }

  function montarUltimoArtigo() {
    var caixa = document.getElementById('ultimo-artigo');
    caixa.textContent = '';
    if (!posts.length) {
      caixa.appendChild(el('p', 'empty', Site.txt('sem_artigos')));
      return;
    }
    var p = posts[0];
    var tags = p.tags ? t(p.tags) : [];
    var card = el('article', 'card card-post');
    card.appendChild(el('p', 'kicker', Site.txt('ultimo_artigo')));
    card.appendChild(el('time', 'card-date card-date-solo', Site.formatarData(p.date)));
    card.appendChild(el('h3', null, t(p.titulo)));
    card.appendChild(el('p', 'card-desc', t(p.resumo)));
    if (tags.length) {
      var ul = el('ul', 'tags');
      tags.forEach(function (tag) { ul.appendChild(el('li', null, tag)); });
      card.appendChild(ul);
    }
    var acoes = el('div', 'card-actions');
    var ler = el('a', 'btn btn-ghost', Site.txt('ler_artigo'));
    ler.href = Site.pagina('blog') + '?p=' + encodeURIComponent(p.slug);
    var todos = el('a', 'link-seta', Site.txt('todos_artigos') + ' →');
    todos.href = Site.pagina('blog');
    acoes.appendChild(ler);
    acoes.appendChild(todos);
    card.appendChild(acoes);
    caixa.appendChild(card);
  }

  function render() {
    grupos.forEach(function (g) {
      var caixa = document.querySelector('[data-grupo="' + g.id + '"]');
      var titulo = document.querySelector('[data-i18n-grupo="' + g.id + '"]');
      if (titulo) titulo.textContent = t(g.titulo);
      if (!caixa) return;
      caixa.textContent = '';

      var limite = g.visiveis && g.itens.length > g.visiveis ? g.visiveis : g.itens.length;
      var itens = expandidos[g.id] ? g.itens : g.itens.slice(0, limite);
      itens.forEach(function (it) { caixa.appendChild(montarCard(it, g.layout)); });

      if (limite < g.itens.length) {
        var mais = el('button', 'btn mais-btn', Site.txt(expandidos[g.id] ? 'mostrar_menos' : 'mostrar_mais'));
        mais.type = 'button';
        mais.setAttribute('aria-expanded', String(!!expandidos[g.id]));
        mais.addEventListener('click', function () {
          expandidos[g.id] = !expandidos[g.id];
          render();
        });
        caixa.appendChild(mais);
      }
    });
    montarTecnologias();
    montarUltimoArtigo();
  }

  Site.init(render);
  carregarRepositorios();
})();
