(function () {
  var posts = (window.POSTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var slug = new URLSearchParams(location.search).get('p');
  var raiz = document.getElementById('blog-conteudo');
  var cabecalho = document.getElementById('blog-cabecalho');
  var el = Site.el;
  var t = Site.t;

  function minutos(post) {
    var palavras = t(post.corpo).trim().split(/\s+/).length;
    return Math.max(1, Math.round(palavras / 200));
  }

  function meta(post) {
    var p = el('p', 'post-meta');
    p.appendChild(el('time', null, Site.formatarData(post.date)));
    p.appendChild(document.createTextNode(' · ' + minutos(post) + ' ' + Site.txt('min_leitura')));
    return p;
  }

  function tags(post) {
    var lista = post.tags ? t(post.tags) : [];
    if (!lista.length) return null;
    var ul = el('ul', 'tags');
    lista.forEach(function (tag) { ul.appendChild(el('li', null, tag)); });
    return ul;
  }

  // **negrito**, `código` e [texto](link); o resto é texto puro.
  function inline(pai, texto) {
    texto.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/).forEach(function (parte) {
      if (!parte) return;
      var negrito = parte.match(/^\*\*([^*]+)\*\*$/);
      var codigo = parte.match(/^`([^`]+)`$/);
      var link = parte.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (negrito) pai.appendChild(el('strong', null, negrito[1]));
      else if (codigo) pai.appendChild(el('code', null, codigo[1]));
      else if (link && /^(https?:\/\/|mailto:|\/|\.|#)/.test(link[2])) {
        var a = el('a', null, link[1]);
        a.href = link[2];
        pai.appendChild(a);
      } else pai.appendChild(document.createTextNode(parte));
    });
  }

  function montarCorpo(destino, texto) {
    var linhas = texto.replace(/\r/g, '').split('\n');
    var paragrafo = [];
    var lista = null;

    function fecharParagrafo() {
      if (!paragrafo.length) return;
      var p = el('p');
      inline(p, paragrafo.join(' '));
      destino.appendChild(p);
      paragrafo = [];
    }

    for (var i = 0; i < linhas.length; i++) {
      var linha = linhas[i];
      var titulo = linha.match(/^(#{2,3}) (.+)$/);
      var item = linha.match(/^- (.+)$/);

      if (/^```/.test(linha)) {
        fecharParagrafo();
        lista = null;
        var bloco = [];
        i++;
        while (i < linhas.length && !/^```/.test(linhas[i])) { bloco.push(linhas[i]); i++; }
        var pre = el('pre');
        pre.appendChild(el('code', null, bloco.join('\n')));
        destino.appendChild(pre);
      } else if (!linha.trim()) {
        fecharParagrafo();
        lista = null;
      } else if (titulo) {
        fecharParagrafo();
        lista = null;
        var h = el('h' + titulo[1].length);
        inline(h, titulo[2]);
        destino.appendChild(h);
      } else if (item) {
        fecharParagrafo();
        if (!lista) { lista = el('ul'); destino.appendChild(lista); }
        var li = el('li');
        inline(li, item[1]);
        lista.appendChild(li);
      } else {
        paragrafo.push(linha.trim());
      }
    }
    fecharParagrafo();
  }

  function linkArtigo(post) {
    return Site.pagina('blog') + '?p=' + encodeURIComponent(post.slug);
  }

  function renderLista() {
    cabecalho.hidden = false;
    document.title = 'Blog | Luã Pelaes';
    if (!posts.length) {
      raiz.appendChild(el('p', 'empty', Site.txt('sem_artigos')));
      return;
    }
    var grade = el('div', 'post-list');
    posts.forEach(function (post) {
      var card = el('article', 'card card-post');
      card.appendChild(meta(post));
      var h3 = el('h3');
      var a = el('a', null, t(post.titulo));
      a.href = linkArtigo(post);
      h3.appendChild(a);
      card.appendChild(h3);
      card.appendChild(el('p', 'card-desc', t(post.resumo)));
      var ul = tags(post);
      if (ul) card.appendChild(ul);
      var ler = el('a', 'btn btn-ghost', Site.txt('ler_artigo'));
      ler.href = linkArtigo(post);
      card.appendChild(ler);
      grade.appendChild(card);
    });
    raiz.appendChild(grade);
  }

  function renderArtigo(post) {
    cabecalho.hidden = true;
    document.title = t(post.titulo) + ' | Luã Pelaes';
    var voltar = el('a', 'link-seta', Site.txt('voltar_blog'));
    voltar.href = Site.pagina('blog');
    raiz.appendChild(voltar);

    var artigo = el('article', 'post');
    artigo.appendChild(el('h1', null, t(post.titulo)));
    artigo.appendChild(meta(post));
    var ul = tags(post);
    if (ul) artigo.appendChild(ul);
    var corpo = el('div', 'post-corpo');
    montarCorpo(corpo, t(post.corpo));
    artigo.appendChild(corpo);
    raiz.appendChild(artigo);
  }

  function render() {
    raiz.textContent = '';
    var post = slug && posts.filter(function (p) { return p.slug === slug; })[0];
    if (slug && !post) {
      cabecalho.hidden = true;
      var voltar = el('a', 'link-seta', Site.txt('voltar_blog'));
      voltar.href = Site.pagina('blog');
      raiz.appendChild(voltar);
      raiz.appendChild(el('p', 'empty', Site.txt('artigo_nao_encontrado')));
    } else if (post) {
      renderArtigo(post);
    } else {
      renderLista();
    }
  }

  Site.init(render);
})();
