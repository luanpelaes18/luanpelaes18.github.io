(function () {
  var abas = document.getElementById('abas');
  var painel = document.getElementById('painel');
  var campo = document.getElementById('busca');
  var vazio = document.getElementById('vazio');
  var grupos = window.GRUPOS || [];
  var textos = window.TEXTOS;
  var LOCALES = { pt: 'pt-BR', en: 'en-US' };
  var idioma = 'pt';
  var ativo = 0;

  document.getElementById('ano').textContent = new Date().getFullYear();

  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined) e.textContent = texto;
    return e;
  }

  function t(campoI18n) {
    return typeof campoI18n === 'string' ? campoI18n : campoI18n[idioma];
  }

  function formatarData(iso) {
    var d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(LOCALES[idioma], { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\./g, '');
  }

  function combina(item, q) {
    if (!q) return true;
    var tags = item.tags ? t(item.tags) : [];
    var alvo = [t(item.titulo), item.desc ? t(item.desc) : ''].concat(tags).join(' ').toLowerCase();
    return alvo.indexOf(q) !== -1;
  }

  function montarItem(item) {
    var li = el('li', 'item');
    var a = el('a', 'item-titulo', t(item.titulo));
    a.href = item.url || '#';
    li.appendChild(a);
    if (item.date) li.appendChild(el('time', 'item-data', formatarData(item.date)));
    if (item.desc) li.appendChild(el('p', 'item-desc', t(item.desc)));
    var tags = item.tags ? t(item.tags) : [];
    if (tags.length) {
      var ul = el('ul', 'tags');
      tags.forEach(function (tag) { ul.appendChild(el('li', null, tag)); });
      li.appendChild(ul);
    }
    return li;
  }

  function rotuloContagem(n) {
    return n + ' ' + (n === 1 ? textos[idioma].item : textos[idioma].itens);
  }

  function render() {
    var q = campo.value.trim().toLowerCase();
    var filtrados = grupos.map(function (g) {
      return g.itens.filter(function (it) { return combina(it, q); });
    });
    var total = filtrados.reduce(function (s, l) { return s + l.length; }, 0);

    if (!filtrados[ativo] || !filtrados[ativo].length) {
      var primeiro = filtrados.findIndex(function (l) { return l.length > 0; });
      if (primeiro !== -1) ativo = primeiro;
    }

    abas.textContent = '';
    grupos.forEach(function (g, i) {
      if (!filtrados[i].length) return;
      var b = el('button', 'tab');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(i === ativo));
      b.appendChild(document.createTextNode(t(g.titulo)));
      b.appendChild(el('small', null, String(filtrados[i].length)));
      b.addEventListener('click', function () { ativo = i; render(); });
      abas.appendChild(b);
    });

    painel.textContent = '';
    painel.hidden = total === 0;
    vazio.hidden = total > 0;
    if (total === 0) return;

    var cab = el('div', 'panel-head');
    cab.appendChild(el('h3', null, t(grupos[ativo].titulo)));
    cab.appendChild(el('span', null, rotuloContagem(filtrados[ativo].length)));
    painel.appendChild(cab);

    var lista = el('ul', 'itens');
    filtrados[ativo].forEach(function (it) { lista.appendChild(montarItem(it)); });
    painel.appendChild(lista);
  }

  function aplicarIdioma(novo) {
    idioma = textos[novo] ? novo : 'pt';
    document.documentElement.lang = LOCALES[idioma];
    document.querySelector('meta[name="description"]').content = textos[idioma].descricao;

    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      n.textContent = textos[idioma][n.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (n) {
      n.placeholder = textos[idioma][n.getAttribute('data-i18n-placeholder')];
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === idioma));
    });

    render();
    try { localStorage.setItem('idioma', idioma); } catch (e) { /* sem armazenamento */ }
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { aplicarIdioma(b.getAttribute('data-lang')); });
  });
  campo.addEventListener('input', render);

  var inicial = (navigator.language || '').slice(0, 2);
  try { inicial = localStorage.getItem('idioma') || inicial; } catch (e) { /* sem armazenamento */ }
  aplicarIdioma(inicial);
})();
