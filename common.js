(function () {
  var LOCALES = { pt: 'pt-BR', en: 'en-US' };
  var Site = { idioma: 'pt' };

  Site.el = function (tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined) e.textContent = texto;
    return e;
  };

  // Aceita texto simples ou { pt, en }; se faltar o idioma, usa o português.
  Site.t = function (valor) {
    if (valor == null) return '';
    if (typeof valor === 'string') return valor;
    return valor[Site.idioma] || valor.pt || '';
  };

  Site.txt = function (chave) {
    return window.TEXTOS[Site.idioma][chave] || '';
  };

  Site.formatarData = function (iso) {
    var d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(LOCALES[Site.idioma], { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\./g, '');
  };

  Site.pagina = function (nome) {
    return nome + '.html';
  };

  Site.init = function (aoMudarIdioma) {
    var textos = window.TEXTOS;
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();

    function aplicar(novo) {
      Site.idioma = textos[novo] ? novo : 'pt';
      document.documentElement.lang = LOCALES[Site.idioma];
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.content = textos[Site.idioma].descricao;

      document.querySelectorAll('[data-i18n]').forEach(function (n) {
        n.textContent = textos[Site.idioma][n.getAttribute('data-i18n')];
      });
      document.querySelectorAll('.lang button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === Site.idioma));
      });

      if (aoMudarIdioma) aoMudarIdioma();
      try { localStorage.setItem('idioma', Site.idioma); } catch (e) { /* sem armazenamento */ }
    }

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { aplicar(b.getAttribute('data-lang')); });
    });

    var inicial = (navigator.language || '').slice(0, 2);
    try { inicial = localStorage.getItem('idioma') || inicial; } catch (e) { /* sem armazenamento */ }
    aplicar(inicial);
  };

  window.Site = Site;
})();
