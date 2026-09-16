import { m } from "motion/react";
import { IconeWhatsApp } from "./Icones";
import { EASE_BRASA } from "./Revelar";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

export function BotaoWhatsApp() {
  return (
    <m.a
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_BRASA, delay: 0.8 }}
      href={linkWhatsApp(MENSAGENS.pedido)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      // A borda carvão mantém o botão visível quando passa por cima da secção laranja.
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex h-14 min-w-14 items-center justify-center gap-2.5 rounded-full border-2 border-carvao bg-brasa text-carvao transition-colors duration-300 hover:bg-ambar sm:right-6 sm:bottom-6 md:px-5"
    >
      <IconeWhatsApp className="size-6" />
      <span className="hidden text-[15px] font-bold md:inline">Pedir pelo WhatsApp</span>
    </m.a>
  );
}
