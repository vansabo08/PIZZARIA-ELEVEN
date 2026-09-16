import { m } from "motion/react";
import { IconeWhatsApp } from "./Icones";
import { EASE_BRASA } from "./Revelar";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

/** Botão flutuante verde, só com o ícone. O anel que pulsa pára com "reduzir movimento". */
export function BotaoWhatsApp() {
  return (
    <m.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE_BRASA, delay: 0.8 }}
      href={linkWhatsApp(MENSAGENS.pedido)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white transition-colors duration-300 hover:bg-whatsapp-escuro sm:right-6 sm:bottom-6 sm:size-16"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-pulsar rounded-full bg-whatsapp motion-reduce:hidden" />
      <IconeWhatsApp className="relative size-7 sm:size-8" />
    </m.a>
  );
}
