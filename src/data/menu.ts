// O menu do site. Para acrescentar um produto, copia um bloco e muda os campos.
// Fotografias: as actuais são ilustrativas, da Wikimedia Commons, recortadas em 4:5.
// Para usar fotos da casa, põe o ficheiro em /public/media (de preferência 4:5,
// em WebP), escreve o caminho em `foto.src` e apaga o `credito`.

export type Ilustracao = "pizza" | "hamburguer" | "batata" | "sumo";

export type ItemMenu = {
  id: string;
  categoria: string;
  nome: string;
  /** Tamanho ou dose. Aparece no cartão e segue na mensagem do pedido. */
  tamanho?: string;
  descricao: string;
  /** Preço em kwanzas. `null` mostra "Sob consulta". */
  preco: number | null;
  /** Sem foto, o cartão mostra um desenho do produto. */
  foto?: {
    src: string;
    alt: string;
    /** Que parte da foto fica à vista se não estiver em 4:5, como em CSS `object-position`. */
    posicao?: string;
    /** Obrigatório para fotos com licença Creative Commons (aparece nos créditos por baixo do menu). */
    credito?: { autor: string; licenca: string; licencaUrl: string; fonte: string };
  };
  ilustracao: Ilustracao;
};

export const menu: ItemMenu[] = [
  {
    id: "pizza-picanha-chourico",
    categoria: "Pizza",
    nome: "Pizza Picanha & Chouriço",
    tamanho: "Pequena",
    descricao: "Picanha e chouriço sobre queijo derretido, feita na hora e servida a sair do forno.",
    preco: 8500,
    foto: {
      src: "/media/menu-pizza-picanha.webp",
      alt: "Pizza coberta de carnes fatiadas e enchidos, servida num prato branco",
      credito: {
        autor: "RegionVisitor90",
        licenca: "CC0 1.0",
        licencaUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.pt",
        fonte: "https://commons.wikimedia.org/wiki/File:Meat_Tsunami_Pizza_@_Walkers_Arms_Hotel,_Walkerville_20250415-125130.jpg",
      },
    },
    ilustracao: "pizza",
  },
  {
    id: "hamburguer-composto",
    categoria: "Hambúrguer",
    nome: "Hambúrguer Composto",
    descricao: "Para quando a fome pede algo a sério. Bem composto, bem servido e com aquele sabor que dá vontade de repetir.",
    preco: 4500,
    foto: {
      src: "/media/menu-hamburguer.webp",
      alt: "Hambúrguer alto com bacon, queijo derretido e um ovo estrelado por cima",
      credito: {
        autor: "David Pursehouse",
        licenca: "CC BY 2.0",
        licencaUrl: "https://creativecommons.org/licenses/by/2.0/deed.pt",
        fonte: "https://commons.wikimedia.org/wiki/File:Triple_hamburger_with_bacon,_cheese_and_fried_egg_(2977440787).jpg",
      },
    },
    ilustracao: "hamburguer",
  },
  {
    id: "batata-mexicana",
    categoria: "Acompanhamento",
    nome: "Batata Mexicana",
    descricao: "Batata com tempero à mexicana. Boa sozinha, ainda melhor ao lado de uma pizza.",
    preco: null,
    foto: {
      src: "/media/menu-batata.webp",
      alt: "Prato de batata palha estaladiça, com uma taça de molho ao lado",
      credito: {
        autor: "Edsel Little",
        licenca: "CC BY-SA 2.0",
        licencaUrl: "https://creativecommons.org/licenses/by-sa/2.0/deed.pt",
        fonte: "https://commons.wikimedia.org/wiki/File:Shoestring_potatoes.jpg",
      },
    },
    ilustracao: "batata",
  },
  {
    id: "sumos-naturais",
    categoria: "Bebidas",
    nome: "Sumos Naturais",
    descricao: "Feitos com fruta, para acompanhar. Pergunta-nos pelos sabores do dia.",
    preco: null,
    foto: {
      src: "/media/menu-sumos.webp",
      alt: "Garrafa de sumo de laranja natural ao lado de laranjas frescas",
      credito: {
        autor: "Shixart1985",
        licenca: "CC BY 2.0",
        licencaUrl: "https://creativecommons.org/licenses/by/2.0/deed.pt",
        fonte: "https://commons.wikimedia.org/wiki/File:Enjoying_fresh_oranges_and_juice_on_a_sunny_morning.jpg",
      },
    },
    ilustracao: "sumo",
  },
];

/** 8500 -> "8.500 Kz". O Intl em pt não separa milhares com 4 dígitos, por isso é à mão. */
export function formatarPreco(preco: number | null) {
  if (preco === null) return "Sob consulta";
  return `${String(preco).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}

/** Nome com o tamanho, como segue na mensagem do WhatsApp. */
export function nomeParaPedido(item: ItemMenu) {
  return item.tamanho ? `${item.nome} (${item.tamanho.toLowerCase()})` : item.nome;
}
