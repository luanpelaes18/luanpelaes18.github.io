// Edite este arquivo para mudar o conteúdo do site.
// Todo texto tem versão em português (pt) e inglês (en).

// Textos fixos da página. Cada chave corresponde a um data-i18n no index.html.
window.TEXTOS = {
  pt: {
    status: "disponível para conversar",
    nav_conteudo: "Conteúdo",
    cta: "Ver conteúdo",
    titulo_conteudo: "Conteúdo",
    lead: "Técnico em TI. Estudo segurança da informação na prática.",
    busca: "Buscar por título, assunto ou tag",
    vazio: "Nada encontrado para essa busca.",
    topo: "voltar ao topo ↑",
    item: "item",
    itens: "itens",
    descricao: "Luã Pelaes, técnico em TI. Estudos e projetos em tecnologia e segurança."
  },
  en: {
    status: "open to chat",
    nav_conteudo: "Content",
    cta: "Browse content",
    titulo_conteudo: "Content",
    lead: "IT technician. I study information security hands-on.",
    busca: "Search by title, topic or tag",
    vazio: "Nothing found for this search.",
    topo: "back to top ↑",
    item: "item",
    itens: "items",
    descricao: "Luã Pelaes, IT technician. Studies and projects in technology and security."
  }
};

// Cada grupo vira uma aba; cada item é um card com link e tags.
// date: "AAAA-MM-DD" (opcional). url: "#" enquanto não tiver o link final.
window.GRUPOS = [
  {
    titulo: { pt: "Estudos", en: "Studies" },
    itens: [
      {
        titulo: { pt: "Hack The Box", en: "Hack The Box" },
        desc: { pt: "Estudos de segurança da informação na plataforma Hack The Box.", en: "Information security studies on the Hack The Box platform." },
        url: "https://www.hackthebox.com",
        tags: { pt: ["segurança", "laboratório"], en: ["security", "lab"] }
      }
    ]
  }
];
