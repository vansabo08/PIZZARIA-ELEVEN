import { m } from "motion/react";
import { Botao } from "./Botao";
import { IconeWhatsApp } from "./Icones";
import { Revelar } from "./Revelar";
import { useParallax } from "../hooks/useParallax";
import { fotoBanda } from "../data/fotos";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

/** Faixa a toda a largura com foto em parallax por trás e um convite a pedir. */
export function BandaPedido() {
  const { ref, y } = useParallax<HTMLDivElement>(10);

  return (
    <section aria-labelledby="banda-titulo" className="relative isolate overflow-hidden">
      <div ref={ref} className="absolute inset-0 -z-10 bg-carvao-2">
        <m.img
          src={fotoBanda.src}
          alt={fotoBanda.alt}
          loading="lazy"
          decoding="async"
          style={{ y }}
          className="absolute inset-x-0 -top-[15%] h-[130%] w-full max-w-none object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,11,.82)_0%,rgba(15,13,11,.62)_50%,rgba(15,13,11,.9)_100%)]"
        />
      </div>

      <div className="contentor flex min-h-[78svh] flex-col items-center justify-center py-28 text-center">
        <Revelar>
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.32em] text-creme/90 uppercase">
            <span aria-hidden="true" className="h-px w-7 bg-brasa" />
            Pede já
            <span aria-hidden="true" className="h-px w-7 bg-brasa" />
          </p>
        </Revelar>
        <Revelar atraso={0.08}>
          <h2
            id="banda-titulo"
            className="mt-6 max-w-4xl text-[2.9rem] leading-[1] text-creme italic sm:text-7xl lg:text-[5.5rem]"
          >
            A fome não espera. <span className="text-ambar">Nós também não.</span>
          </h2>
        </Revelar>
        <Revelar atraso={0.16} className="mt-10">
          <Botao tamanho="lg" externo href={linkWhatsApp(MENSAGENS.pedido)}>
            <IconeWhatsApp className="size-5" />
            Pedir pelo WhatsApp
          </Botao>
        </Revelar>
      </div>
    </section>
  );
}
