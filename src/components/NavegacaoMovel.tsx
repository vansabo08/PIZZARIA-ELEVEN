import { useEffect, useRef, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "motion/react";
import { Botao } from "./Botao";
import { Logo } from "./Logo";
import { IconeWhatsApp } from "./Icones";
import { EASE_BRASA } from "./Revelar";
import { HORARIO, TELEFONE_PRINCIPAL } from "../data/contactos";
import { MENSAGENS, linkTelefone, linkWhatsApp } from "../lib/links";

export type Ligacao = { href: string; texto: string };

type Props = {
  aberto: boolean;
  fechar: () => void;
  ligacoes: Ligacao[];
  /** id do botão que abre, para lhe devolver o foco ao fechar com Esc ou com o X. */
  idBotaoAbrir: string;
};

/** Ecrã inteiro de navegação no telemóvel. Vai para o body por portal, fora do stacking do hero. */
export function NavegacaoMovel({ aberto, fechar, ligacoes, idBotaoAbrir }: Props) {
  const botaoFechar = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const raiz = document.documentElement;
    raiz.style.overflow = "hidden";
    botaoFechar.current?.focus();

    const tecla = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      fechar();
      document.getElementById(idBotaoAbrir)?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", tecla);
    return () => {
      raiz.style.overflow = "";
      window.removeEventListener("keydown", tecla);
    };
  }, [aberto, fechar, idBotaoAbrir]);

  function fecharEDevolverFoco() {
    fechar();
    document.getElementById(idBotaoAbrir)?.focus({ preventScroll: true });
  }

  function irPara(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    // Destranca o scroll já: o efeito só o faria depois do render, e a descida ficava presa.
    document.documentElement.style.overflow = "";
    fechar();
    document.querySelector(href)?.scrollIntoView();
    history.replaceState(null, "", href);
  }

  return createPortal(
    <AnimatePresence>
      {aberto && (
        <m.div
          id="navegacao-movel"
          role="dialog"
          aria-modal="true"
          aria-label="Navegação"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_BRASA }}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-carvao md:hidden"
        >
          <div className="contentor flex h-20 shrink-0 items-center justify-between">
            <Logo />
            <button
              ref={botaoFechar}
              type="button"
              onClick={fecharEDevolverFoco}
              aria-label="Fechar navegação"
              className="grid size-11 place-items-center rounded-full border border-creme/20 text-creme transition-colors hover:border-ambar hover:text-ambar"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Secções" className="contentor mt-4 flex-1">
            <ul>
              {ligacoes.map((ligacao, i) => (
                <m.li
                  key={ligacao.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_BRASA, delay: 0.1 + i * 0.06 }}
                  className="border-b border-creme/10"
                >
                  <a
                    href={ligacao.href}
                    onClick={(e) => irPara(e, ligacao.href)}
                    className="flex items-baseline justify-between py-5 font-serif text-[2.4rem] leading-none font-semibold tracking-[-0.02em] text-creme italic transition-colors hover:text-ambar"
                  >
                    {ligacao.texto}
                    <span aria-hidden="true" className="font-sans text-[12px] font-bold tracking-[0.2em] text-ambar not-italic">
                      0{i + 1}
                    </span>
                  </a>
                </m.li>
              ))}
            </ul>
          </nav>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_BRASA, delay: 0.4 }}
            className="contentor space-y-4 pt-10 pb-10"
          >
            <p className="text-sm text-cinza">
              {HORARIO.dias} · <span className="tabular-nums">{HORARIO.horas}</span>
            </p>
            <a href={linkTelefone(TELEFONE_PRINCIPAL)} className="block text-2xl font-bold text-creme tabular-nums">
              {TELEFONE_PRINCIPAL}
            </a>
            <Botao externo href={linkWhatsApp(MENSAGENS.pedido)} className="w-full">
              <IconeWhatsApp className="size-[18px]" />
              Pedir pelo WhatsApp
            </Botao>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
