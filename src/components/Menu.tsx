import { Botao } from "./Botao";
import { CartaoProduto } from "./CartaoProduto";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { menu } from "../data/menu";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

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

        {/* Uma coluna no telemóvel, 2×2 no tablet e os quatro lado a lado a partir de 1280px. */}
        <ul className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {menu.map((item, i) => (
            <li key={item.id}>
              <Revelar atraso={(i % 4) * 0.08} className="h-full">
                <CartaoProduto item={item} numero={i + 1} />
              </Revelar>
            </li>
          ))}
        </ul>

        <Revelar className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-[13px] text-cinza">
            Preços sujeitos a atualização. Fotografias ilustrativas, com créditos no rodapé.
          </p>
          <Botao variante="contorno" tamanho="sm" externo href={linkWhatsApp(MENSAGENS.menu)}>
            Pedir o menu completo
          </Botao>
        </Revelar>
      </div>
    </section>
  );
}
