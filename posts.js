// Artigos do blog. Para publicar um novo, copie um bloco abaixo e coloque-o NO INÍCIO da lista.
//
//   slug:   identificador na URL (blog.html?p=slug). Sem espaços nem acentos.
//   date:   "AAAA-MM-DD". O mais recente aparece como "Último artigo" na home.
//   titulo / resumo / corpo: texto simples ou { pt: "...", en: "..." }.
//   tags:   lista de texto ou { pt: [...], en: [...] }.
//
// Formatação do corpo (um parágrafo por bloco, separados por linha em branco):
//   ## Subtítulo        ### Subtítulo menor        - item de lista
//   ```  (linha só com três crases abre e fecha um bloco de código)
//   **negrito**   `código`   [texto do link](https://endereco)
window.POSTS = [
  {
    slug: "artigo-de-exemplo",
    date: "2026-11-01",
    titulo: { pt: "Título de um artigo de exemplo", en: "Title of an example article" },
    resumo: {
      pt: "Texto genérico de exemplo para mostrar como o resumo do último artigo aparece na página inicial. Substitua pelo resumo real quando publicar.",
      en: "Generic sample text to show how the latest article summary appears on the home page. Replace it with the real summary when you publish."
    },
    tags: { pt: ["exemplo", "tecnologia"], en: ["example", "technology"] },
    corpo: {
      pt: "Este é o primeiro parágrafo do artigo de exemplo. Ele existe só para mostrar como o texto fica na página do blog.\n\n## Um subtítulo\n\nAqui entra mais texto, com **negrito**, `código em linha` e um [link de exemplo](https://example.com).\n\n- Primeiro item da lista\n- Segundo item da lista\n- Terceiro item da lista\n\n```\ncomando --de-exemplo --para-mostrar-o-bloco-de-codigo\n```\n\n## Conclusão\n\nUm parágrafo final de exemplo. Apague este artigo quando publicar o primeiro de verdade.",
      en: "This is the first paragraph of the example article. It only exists to show how text looks on the blog page.\n\n## A subheading\n\nMore text goes here, with **bold**, `inline code` and a [sample link](https://example.com).\n\n- First list item\n- Second list item\n- Third list item\n\n```\nsample-command --to-show-the-code-block\n```\n\n## Conclusion\n\nA final sample paragraph. Delete this article when you publish the first real one."
    }
  },
  {
    slug: "segundo-artigo-de-exemplo",
    date: "2026-10-15",
    titulo: { pt: "Outro artigo de exemplo", en: "Another example article" },
    resumo: {
      pt: "Segundo texto genérico, só para a lista do blog ter mais de um artigo.",
      en: "A second generic text, just so the blog list has more than one article."
    },
    tags: { pt: ["exemplo"], en: ["example"] },
    corpo: {
      pt: "Conteúdo de exemplo do segundo artigo.\n\n## Seção\n\nTexto genérico para preencher a página.",
      en: "Sample content for the second article.\n\n## Section\n\nGeneric text to fill the page."
    }
  }
];
