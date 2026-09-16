import { Botao } from "./Botao";
import { CartaoProduto } from "./CartaoProduto";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { menu } from "../data/menu";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

const creditos = menu.flatMap((item) =>
  item.foto?.credito ? [{ id: item.id, nome: item.nome, credito: item.foto.credito }] : [],
);

export function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-titulo" className="relative scroll-mt-12 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,26,0.09),transparent_65%)]"
      />
      <div className="contentor relative">
        <TituloSeccao
          id="menu-titulo"
          antetitulo="A carta"
          titulo="O Menu"
          texto="Tudo feito na hora. Escolhe, carrega em Pedir e a mensagem segue pronta para o nosso WhatsApp."
        />

        {/* Flex centrado em vez de grid: com 4 produtos em 3 colunas, o último fica ao meio e não encostado à esquerda. */}
        <ul className="mt-14 flex flex-wrap justify-center gap-5 sm:mt-16 lg:gap-6">
          {menu.map((item, i) => (
            <li key={item.id} className="w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <Revelar atraso={(i % 3) * 0.08} className="h-full">
                <CartaoProduto item={item} numero={i + 1} />
              </Revelar>
            </li>
          ))}
        </ul>

        <Revelar className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-[13px] text-cinza">
            Preços sujeitos a atualização.{creditos.length > 0 && " Fotografias ilustrativas."}
          </p>
          {creditos.length > 0 && (
            <details className="max-w-xl text-[12px] leading-relaxed text-cinza">
              <summary className="cursor-pointer underline decoration-creme/25 underline-offset-4 transition-colors hover:text-creme">
                Créditos das fotografias
              </summary>
              <ul className="mt-3 space-y-1.5">
                {creditos.map(({ id, nome, credito }) => (
                  <li key={id}>
                    {nome}: foto de{" "}
                    <a href={credito.fonte} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-creme">
                      {credito.autor}
                    </a>
                    {" "}(recortada),{" "}
                    <a href={credito.licencaUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-creme">
                      {credito.licenca}
                    </a>
                    , via Wikimedia Commons
                  </li>
                ))}
              </ul>
            </details>
          )}
          <Botao variante="contorno" tamanho="sm" externo href={linkWhatsApp(MENSAGENS.menu)}>
            Pedir o menu completo
          </Botao>
        </Revelar>
      </div>
    </section>
  );
}
