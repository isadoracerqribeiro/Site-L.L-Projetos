/* ============================================================
   CADASTRO DE PROJETOS – copie um bloco e edite.
   - id: nome único, sem espaços (aparece na URL)
   - featured: true → aparece também na home
   - cover: foto da lista; hero (opcional): foto de abertura da página do projeto
   - short: frase que aparece ao passar o mouse na lista
   - images: fotos do projeto; planta/desenho: { src: "...", plan: true }
   ============================================================ */
const PROJECTS = [
  {
    id: "Apartamento CB", featured: true,
    cover: "img/Apartamento CB/capa.jpg",
    title: { pt: "Apartamento C|B", en: "Apartment C|B" },
    place: "Maceió, AL", year: "2023",
    type: { pt: "Residencial", en: "Residential" },
    short: {
      pt: "Um apartamento que traduz a história de um casal entre dois polos: Miami e Maceió.",
      en: "An apartment that reflects a couple’s story, spanning two poles: Miami and Maceió."
    },
    desc: {
      pt: "Um apartamento que traduz a história de um casal entre dois polos: Miami e Maceió.\nO projeto parte da estética clássica americana, com inspiração Hamptons, e ganha leveza tropical nos detalhes, nas texturas e na atmosfera.\n Entre identidade, equilíbrio e suavidade, os ambientes foram pensados para refletir uma forma de morar sofisticada, afetiva e cheia de personalidade.",
      en: "An apartment that reflects a couple’s story, spanning two poles: Miami and Maceió.\nRooted in classic American design with Hamptons-inspired influences, the project embraces a tropical lightness through its details, textures, and atmosphere.\nWith a sense of identity, balance, and softness, each space was thoughtfully designed to reflect a sophisticated way of living—full of warmth, meaning, and personality."
    },
    images: ["img/Apartamento CB/01.jpg", "img/Apartamento CB/02.jpg", "img/Apartamento CB/03.jpg", "img/Apartamento CB/04.jpg", "img/Apartamento CB/05.jpg", "img/Apartamento CB/06.jpg", "img/Apartamento CB/07.jpg", "img/Apartamento CB/08.jpg",
      "img/Apartamento CB/09.jpg", "img/Apartamento CB/10.jpg", "img/Apartamento CB/11.jpg", "img/Apartamento CB/12.jpg", "img/Apartamento CB/13.jpg", "img/Apartamento CB/14.jpg", "img/Apartamento CB/15.jpg", "img/Apartamento CB/16.jpg", "img/Apartamento CB/17.jpg", 
      "img/Apartamento CB/18.jpg", "img/Apartamento CB/19.jpg", "img/Apartamento CB/20.jpg", "img/Apartamento CB/21.jpg", { src: "img/Apartamento CB/creuzaesandra.jpg", plan: true }]
  },
  {
    id: "apartamento-exemplo-2", featured: true,
    cover: "img/apto-2/capa.jpg",
    title: { pt: "Apartamento Exemplo 2", en: "Example Apartment 2" },
    place: "Maceió, AL", year: "2024",
    type: { pt: "Interiores", en: "Interiors" },
    short: { pt: "Interiores em tons quentes, com marcenaria sob medida e vista para o mar.", en: "Warm-toned interiors with custom joinery and sea views." },
    desc: { pt: "Descrição do projeto.", en: "Project description." },
    images: ["img/apto-2/01.jpg", "img/apto-2/02.jpg", "img/apto-2/03.jpg"]
  },
  {
    id: "loja-exemplo-3", featured: true,
    cover: "img/loja-3/capa.jpg",
    title: { pt: "Loja Exemplo 3", en: "Example Store 3" },
    place: "Recife, PE", year: "2024",
    type: { pt: "Comercial", en: "Commercial" },
    short: { pt: "Espaço comercial com materiais naturais e iluminação que valoriza o produto.", en: "Retail space with natural materials and lighting that highlights the product." },
    desc: { pt: "Descrição do projeto.", en: "Project description." },
    images: ["img/loja-3/01.jpg", "img/loja-3/02.jpg", "img/loja-3/03.jpg"]
  },
  {
    id: "casa-exemplo-4", featured: true,
    cover: "img/casa-4/capa.jpg",
    title: { pt: "Casa Exemplo 4", en: "Example House 4" },
    place: "Maragogi, AL", year: "2023",
    type: { pt: "Residencial", en: "Residential" },
    short: { pt: "Casa de praia que se abre para a paisagem, com varandas amplas e ventilação cruzada.", en: "Beach house open to the landscape, with wide verandas and cross ventilation." },
    desc: { pt: "Descrição do projeto.", en: "Project description." },
    images: ["img/casa-4/01.jpg", "img/casa-4/02.jpg", "img/casa-4/03.jpg"]
  }
];
