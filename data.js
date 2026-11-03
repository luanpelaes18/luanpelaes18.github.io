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
    descricao: "Luã Pelaes, técnico em TI. Certificados, estudos e projetos em tecnologia e segurança."
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
    descricao: "Luã Pelaes, IT technician. Certifications, studies and projects in technology and security."
  }
};

// Cada grupo vira uma aba; cada item é um card com link e tags.
// date: "AAAA-MM-DD" (opcional). url: "#" enquanto não tiver o link final.
var CREDLY = "https://www.credly.com/users/lua-kristian-araujo-pelaes/badges";

window.GRUPOS = [
  {
    titulo: { pt: "Certificados", en: "Certifications" },
    itens: [
      {
        titulo: { pt: "CompTIA Security+ ce Certification", en: "CompTIA Security+ ce Certification" },
        desc: { pt: "Emitida pela CompTIA. Válida até 20/10/2029.", en: "Issued by CompTIA. Valid until Oct 20, 2029." },
        url: CREDLY,
        tags: { pt: ["CompTIA", "segurança"], en: ["CompTIA", "security"] }
      },
      {
        titulo: { pt: "Build Infrastructure with Terraform on Google Cloud", en: "Build Infrastructure with Terraform on Google Cloud" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-17",
        tags: { pt: ["Google Cloud", "Terraform"], en: ["Google Cloud", "Terraform"] }
      },
      {
        titulo: { pt: "Implement Cloud Security Fundamentals on Google Cloud", en: "Implement Cloud Security Fundamentals on Google Cloud" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-17",
        tags: { pt: ["Google Cloud", "segurança"], en: ["Google Cloud", "security"] }
      },
      {
        titulo: { pt: "Set Up an App Dev Environment on Google Cloud", en: "Set Up an App Dev Environment on Google Cloud" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-17",
        tags: { pt: ["Google Cloud"], en: ["Google Cloud"] }
      },
      {
        titulo: { pt: "Build a Secure Google Cloud Network", en: "Build a Secure Google Cloud Network" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-16",
        tags: { pt: ["Google Cloud", "redes"], en: ["Google Cloud", "networking"] }
      },
      {
        titulo: { pt: "Develop Your Google Cloud Network", en: "Develop Your Google Cloud Network" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-16",
        tags: { pt: ["Google Cloud", "redes"], en: ["Google Cloud", "networking"] }
      },
      {
        titulo: { pt: "Implement Load Balancing on Compute Engine", en: "Implement Load Balancing on Compute Engine" },
        desc: { pt: "Medalha de habilidade do Google Cloud.", en: "Google Cloud skill badge." },
        url: CREDLY, date: "2025-12-10",
        tags: { pt: ["Google Cloud", "redes"], en: ["Google Cloud", "networking"] }
      },
      {
        titulo: { pt: "AWS Academy Graduate - Cloud Foundations", en: "AWS Academy Graduate - Cloud Foundations" },
        desc: { pt: "Medalha de treinamento da Amazon Web Services.", en: "Amazon Web Services training badge." },
        url: CREDLY, date: "2023-02-01",
        tags: { pt: ["AWS", "nuvem"], en: ["AWS", "cloud"] }
      }
    ]
  },
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
