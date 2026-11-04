// Edite este arquivo para mudar o conteúdo do site.
// Todo texto tem versão em português (pt) e inglês (en).

// Textos fixos da página. Cada chave corresponde a um data-i18n no index.html.
window.TEXTOS = {
  pt: {
    ola: "Olá, eu sou",
    cargo: "Técnico em TI.",
    lead: "Estudo segurança da informação na prática e reúno aqui meus certificados e estudos.",
    nav_inicio: "Início",
    nav_projetos: "Projetos",
    nav_estudos: "Estudos",
    nav_certificados: "Certificados",
    nav_blog: "Blog",
    nav_contato: "Contato",
    saiba_mais: "Ver mais",
    blog_titulo: "Blog",
    blog_intro: "Artigos sobre tecnologia, segurança e o que estou aprendendo.",
    ultimo_artigo: "Último artigo",
    ler_artigo: "Ler artigo",
    todos_artigos: "Ver todos os artigos",
    sem_artigos: "Nenhum artigo publicado ainda.",
    voltar_blog: "← Voltar ao blog",
    artigo_nao_encontrado: "Artigo não encontrado.",
    min_leitura: "min de leitura",
    mostrar_mais: "Ver mais",
    mostrar_menos: "Ver menos",
    tecnologias: "Tecnologias e plataformas que estudo",
    contato_titulo: "Contato",
    contato_texto: "Vamos conversar? Me encontre nos links abaixo.",
    topo: "voltar ao topo ↑",
    descricao: "Luã Pelaes, técnico em TI. Certificados, estudos e projetos em tecnologia e segurança."
  },
  en: {
    ola: "Hi, I'm",
    cargo: "IT technician.",
    lead: "I study information security hands-on and gather my certifications and studies here.",
    nav_inicio: "Home",
    nav_projetos: "Projects",
    nav_estudos: "Studies",
    nav_certificados: "Certifications",
    nav_blog: "Blog",
    nav_contato: "Contact",
    saiba_mais: "Learn more",
    blog_titulo: "Blog",
    blog_intro: "Articles about technology, security and what I'm learning.",
    ultimo_artigo: "Latest article",
    ler_artigo: "Read article",
    todos_artigos: "View all articles",
    sem_artigos: "No articles published yet.",
    voltar_blog: "← Back to blog",
    artigo_nao_encontrado: "Article not found.",
    min_leitura: "min read",
    mostrar_mais: "Show more",
    mostrar_menos: "Show less",
    tecnologias: "Technologies and platforms I study",
    contato_titulo: "Contact",
    contato_texto: "Let's talk? Find me through the links below.",
    topo: "back to top ↑",
    descricao: "Luã Pelaes, IT technician. Certifications, studies and projects in technology and security."
  }
};

// Cada grupo vira uma aba; cada item é um card com link e tags.
// date: "AAAA-MM-DD" (opcional). url: "#" enquanto não tiver o link final.
var CREDLY = "https://www.credly.com/users/lua-kristian-araujo-pelaes/badges";

// layout: "projetos" mostra uma área de imagem no topo do card (imagem: "caminho.png", opcional).
window.GRUPOS = [
  {
    id: "projetos",
    layout: "projetos",
    titulo: { pt: "Projetos", en: "Projects" },
    itens: [
      {
        titulo: { pt: "Projeto de exemplo 1", en: "Example project 1" },
        desc: { pt: "Texto genérico de exemplo. Descreva aqui o objetivo do projeto, as tecnologias usadas e o resultado obtido.", en: "Generic sample text. Describe the project goal, the technologies used and the result here." },
        url: "#",
        tags: { pt: ["exemplo", "tecnologia"], en: ["example", "technology"] }
      },
      {
        titulo: { pt: "Projeto de exemplo 2", en: "Example project 2" },
        desc: { pt: "Texto genérico de exemplo. Descreva aqui o objetivo do projeto, as tecnologias usadas e o resultado obtido.", en: "Generic sample text. Describe the project goal, the technologies used and the result here." },
        url: "#",
        tags: { pt: ["exemplo", "tecnologia"], en: ["example", "technology"] }
      },
      {
        titulo: { pt: "Projeto de exemplo 3", en: "Example project 3" },
        desc: { pt: "Texto genérico de exemplo. Descreva aqui o objetivo do projeto, as tecnologias usadas e o resultado obtido.", en: "Generic sample text. Describe the project goal, the technologies used and the result here." },
        url: "#",
        tags: { pt: ["exemplo", "tecnologia"], en: ["example", "technology"] }
      },
      {
        titulo: { pt: "Projeto de exemplo 4", en: "Example project 4" },
        desc: { pt: "Texto genérico de exemplo. Descreva aqui o objetivo do projeto, as tecnologias usadas e o resultado obtido.", en: "Generic sample text. Describe the project goal, the technologies used and the result here." },
        url: "#",
        tags: { pt: ["exemplo", "tecnologia"], en: ["example", "technology"] }
      }
    ]
  },
  {
    id: "certificados",
    visiveis: 4, // quantos itens aparecem antes do botão "Ver mais"
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
    id: "estudos",
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
