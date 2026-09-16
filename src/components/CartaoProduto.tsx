import { Botao } from "./Botao";
import { FotoEmBreve } from "./FotoEmBreve";
import { IconeWhatsApp, Ornamento } from "./Icones";
import { formatarPreco, nomeParaPedido, type ItemMenu } from "../data/menu";
import { linkWhatsApp, mensagemProduto } from "../lib/links";

export function CartaoProduto({ item, numero }: { item: ItemMenu; numero: number }) {
  const nome = nomeParaPedido(item);

  return (
    <article className="group flex h-full flex-col border border-creme/[0.06] bg-carvao-2 p-5 sm:p-6">
      <div className="flex flex-1 flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full border border-brasa/80 font-serif text-[15px] font-semibold text-brasa"
        >
          {String(numero).padStart(2, "0")}
        </span>
        <p className="mt-4 text-[11px] font-bold tracking-[0.24em] text-cinza uppercase">
          {item.categoria}
          {item.tamanho && ` · ${item.tamanho}`}
        </p>
        <h3 className="mt-2 text-[1.7rem] leading-tight text-creme">{item.nome}</h3>
        <p className="mt-3 max-w-[32ch] text-[14.5px] leading-relaxed text-cinza">{item.descricao}</p>
        <Ornamento className="mt-auto pt-6 text-brasa/70" />
      </div>

      <div className="relative mt-5 aspect-[4/5] overflow-hidden bg-carvao">
        {item.foto ? (
          <img
            src={item.foto.src}
            alt={item.foto.alt}
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            style={item.foto.posicao ? { objectPosition: item.foto.posicao } : undefined}
            className="size-full object-cover transition-transform duration-700 ease-brasa group-hover:scale-[1.04]"
          />
        ) : (
          <FotoEmBreve ilustracao={item.ilustracao} />
        )}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className={`font-bold text-brasa tabular-nums ${item.preco === null ? "text-base" : "text-xl"}`}>
          <span className="sr-only">Preço: </span>
          {formatarPreco(item.preco)}
        </p>
        <Botao
          tamanho="sm"
          externo
          href={linkWhatsApp(mensagemProduto(nome))}
          aria-label={`Pedir ${nome} pelo WhatsApp`}
        >
          <IconeWhatsApp className="size-4" />
          Pedir
        </Botao>
      </div>
    </article>
  );
}
