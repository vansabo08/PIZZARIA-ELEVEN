import { Botao } from "./Botao";
import { IconeSeta } from "./Icones";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

const PILARES = ["Massa artesanal", "Produto fresco", "Atendimento próximo"];

export function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-12 bg-carvao-2">
      <div className="contentor grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <Revelar className="lg:col-span-6">
          <div className="relative sm:mr-4 sm:mb-4">
            <div aria-hidden="true" className="absolute inset-0 hidden translate-x-4 translate-y-4 border border-ambar/35 sm:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-carvao">
              <img
                src="/media/sobre-forno.webp"
                alt="Pizza com mozzarella e manjericão numa pá de madeira, à frente do forno a lenha aceso"
                loading="lazy"
                decoding="async"
                width={960}
                height={1200}
                className="size-full object-cover"
              />
            </div>
          </div>
        </Revelar>

        <div className="lg:col-span-6">
          <TituloSeccao
            id="sobre-titulo"
            alinhar="esquerda"
            antetitulo="Sobre nós"
            titulo="Feito na hora, servido como deve ser."
          />
          <Revelar atraso={0.08} className="mt-8 max-w-xl space-y-5 text-[16.5px] leading-relaxed text-creme/80">
            <p>
              Na Eleven a pizza é artesanal e só vai ao forno quando fazes o pedido. Trabalhamos com produto
              fresco, porque é aí que se nota a diferença logo à primeira fatia.
            </p>
            <p>
              Estamos defronte à Maternidade, no Lubango. Passa cá, leva para casa ou pede pelo WhatsApp:
              atendemos-te como a um amigo, com tempo e sem complicações.
            </p>
          </Revelar>
          <Revelar atraso={0.16}>
            <ul className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-creme/10 border-y border-creme/10">
              {PILARES.map((pilar, i) => (
                <li key={pilar} className="px-3 py-5 first:pl-0 sm:px-5">
                  <span className="block font-serif text-lg text-ambar italic">0{i + 1}</span>
                  <span className="mt-1 block text-[13px] leading-snug font-semibold text-creme sm:text-sm">{pilar}</span>
                </li>
              ))}
            </ul>
            <Botao variante="contorno" className="mt-10" externo href={linkWhatsApp(MENSAGENS.pedido)}>
              Fala connosco
              <IconeSeta className="size-4" />
            </Botao>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
