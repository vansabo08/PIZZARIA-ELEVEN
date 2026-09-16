// Fotografias ilustrativas da galeria e da faixa "Pede já". As da Wikimedia Commons levam crédito;
// a "Brasa" é um recorte do vídeo do hero. Os ficheiros estão em /public/media.
// Para trocar por fotos da casa, muda o `src` e apaga o `credito`.
import { menu } from "./menu";

export type Credito = { autor: string; licenca: string; licencaUrl: string; fonte: string };
export type Foto = { src: string; alt: string; credito?: Credito };
export type FotoGaleria = Foto & { legenda: string };

const CC_BY_2 = { licenca: "CC BY 2.0", licencaUrl: "https://creativecommons.org/licenses/by/2.0/deed.pt" };
const CC_BY_SA_4 = { licenca: "CC BY-SA 4.0", licencaUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.pt" };
const commons = (ficheiro: string) => `https://commons.wikimedia.org/wiki/File:${ficheiro.replaceAll(" ", "_")}`;

/** Pela ordem das formas do mosaico: grande, pequena, alta, pequena. */
export const galeria: FotoGaleria[] = [
  {
    src: "/media/galeria-forno.webp",
    alt: "Forno a lenha com as chamas acesas e duas pizzas a cozer",
    legenda: "Sai do forno",
    credito: { autor: "Basheer Tome", ...CC_BY_2, fonte: commons("Wood fire brick oven for baking pizza.jpg") },
  },
  {
    src: "/media/galeria-hamburguer.webp",
    alt: "Hambúrguer e batatas fritas servidos em papel, numa mesa de café",
    legenda: "Hambúrguer & batata",
    credito: {
      autor: "Acabashi",
      ...CC_BY_SA_4,
      fonte: commons("Beefburger - A114 Whips Cross Road café hut - Waltham Forest London England.jpg"),
    },
  },
  {
    src: "/media/galeria-brasa.webp",
    alt: "Borda dourada de uma pizza numa pá de madeira, com as chamas do forno desfocadas ao fundo",
    legenda: "Brasa",
  },
  {
    src: "/media/galeria-batata.webp",
    alt: "Batatas fritas temperadas com especiarias, num saco de papel",
    legenda: "Batata estaladiça",
    credito: {
      autor: "Chris Woodrich",
      ...CC_BY_SA_4,
      fonte: commons("Cajun fries from Popeyes Louisiana Kitchen, Stratford, Ontario, 2025-08-04.jpg"),
    },
  },
];

export const fotoBanda: Foto = {
  src: "/media/banda-forno.webp",
  alt: "Pizza a cozer dentro de um forno a lenha, junto às brasas",
  credito: { autor: "oakwoodfirepizza.com", ...CC_BY_SA_4, fonte: commons("Wood Oven Pizza.jpg") },
};

/** Todas as fotos com crédito, pela ordem em que aparecem na página. */
export function creditosDasFotos() {
  const lista: { titulo: string; credito: Credito }[] = [];
  for (const item of menu) {
    if (item.foto?.credito) lista.push({ titulo: `Menu, ${item.nome}`, credito: item.foto.credito });
  }
  for (const foto of galeria) {
    if (foto.credito) lista.push({ titulo: `Galeria, ${foto.legenda}`, credito: foto.credito });
  }
  if (fotoBanda.credito) lista.push({ titulo: "Pede já", credito: fotoBanda.credito });
  return lista;
}
