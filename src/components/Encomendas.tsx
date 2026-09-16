import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Botao } from "./Botao";
import { IconeWhatsApp } from "./Icones";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { LINHAS } from "../data/contactos";
import { MENSAGENS, linkTelefone, linkWhatsApp } from "../lib/links";

export function Encomendas() {
  const seccao = useRef<HTMLElement>(null);
  const reduzirMovimento = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: seccao, offset: ["start end", "end start"] });
  // A palavra em contorno atravessa a secção na horizontal enquanto se desce.
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-45%"]);

  return (
    <section
      ref={seccao}
      id="contactos"
      aria-labelledby="contactos-titulo"
      data-tom="brasa"
      className="relative isolate scroll-mt-12 overflow-hidden bg-brasa text-carvao"
    >
      <m.p
        aria-hidden="true"
        style={reduzirMovimento ? undefined : { x }}
        className="pointer-events-none absolute top-1/2 left-0 -z-10 -translate-y-1/2 font-serif text-[40vw] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-transparent italic select-none [-webkit-text-stroke:2px_rgba(15,13,11,0.14)] lg:text-[28rem]"
      >
        eleven pizzaria
      </m.p>

      <div className="contentor py-24 text-center sm:py-32">
        <TituloSeccao
          id="contactos-titulo"
          tom="brasa"
          antetitulo="Encomendas"
          titulo="Estamos prontos para te atender."
          texto="Liga para qualquer uma das linhas ou manda mensagem. Diz-nos o que queres e nós tratamos do resto."
        />

        <Revelar atraso={0.08}>
          <div className="mx-auto mt-14 grid max-w-3xl divide-y divide-carvao/20 border-y border-carvao/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {LINHAS.map((linha) => (
              <div key={linha.rede} className="py-8 sm:px-8 sm:py-10">
                <p className="text-[11px] font-bold tracking-[0.32em] uppercase">{linha.rede}</p>
                <ul className="mt-4 space-y-2">
                  {linha.numeros.map((numero) => (
                    <li key={numero}>
                      <a
                        href={linkTelefone(numero)}
                        aria-label={`Ligar para ${numero} (${linha.rede})`}
                        className="text-[1.9rem] font-bold tracking-tight tabular-nums decoration-1 underline-offset-[6px] hover:underline sm:text-[2.1rem]"
                      >
                        {numero}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Revelar>

        <Revelar atraso={0.16} className="mt-12">
          <Botao variante="carvao" tamanho="lg" externo href={linkWhatsApp(MENSAGENS.encomenda)}>
            <IconeWhatsApp className="size-5" />
            Encomendar pelo WhatsApp
          </Botao>
        </Revelar>
      </div>
    </section>
  );
}
