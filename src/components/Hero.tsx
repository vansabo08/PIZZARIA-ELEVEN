import { useCallback, useEffect, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Botao } from "./Botao";
import { Logo } from "./Logo";
import { NavegacaoMovel } from "./NavegacaoMovel";
import { Revelar } from "./Revelar";
import { IconeWhatsApp } from "./Icones";
import { FACEBOOK, HORARIO, INSTAGRAM } from "../data/contactos";
import { MENSAGENS, linkWhatsApp } from "../lib/links";

const NAVEGACAO = [
  { href: "#menu", texto: "Menu" },
  { href: "#galeria", texto: "Galeria" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#contactos", texto: "Contactos" },
];

const sublinhado =
  "relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ambar after:transition-transform after:duration-500 after:ease-brasa hover:after:scale-x-100";

export function Hero() {
  const topo = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduzirMovimento = useReducedMotion();
  const [navAberta, setNavAberta] = useState(false);
  const fecharNav = useCallback(() => setNavAberta(false), []);

  // Parallax: ao descer, o vídeo fica para trás e cresce um pouco; o texto sobe e apaga-se.
  const { scrollYProgress } = useScroll({ target: topo, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const videoEscala = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textoOpacidade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // O React nem sempre escreve o atributo `muted`, e sem ele o iOS não deixa tocar sozinho.
    v.muted = true;
    if (reduzirMovimento) {
      v.pause();
      return;
    }
    // Com poupança de dados o browser pode recusar: fica o poster, que é o primeiro frame.
    v.play().catch(() => {});
  }, [reduzirMovimento]);

  return (
    <>
      <header
        ref={topo}
        id="topo"
        className="relative isolate flex h-[100vh] min-h-[600px] flex-col overflow-hidden bg-carvao supports-[height:100svh]:h-svh"
      >
        <m.div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={reduzirMovimento ? undefined : { y: videoY, scale: videoEscala }}
        >
          <video
            ref={video}
            // No telemóvel o recorte vertical guarda a pizza, que no início do vídeo está à esquerda.
            className="size-full object-cover object-[30%_50%] md:object-center"
            poster="/media/hero-poster.webp"
            autoPlay={!reduzirMovimento}
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </m.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, rgba(15,13,11,.35) 0%, rgba(15,13,11,.9) 100%)" }}
        />
        {/* Reforço de leitura: escurece a faixa da navegação e o lado do texto. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,13,11,.55)_0%,rgba(15,13,11,0)_24%),linear-gradient(90deg,rgba(15,13,11,.6)_0%,rgba(15,13,11,0)_68%)]"
        />

        <div className="hidden border-b border-creme/10 md:block">
          <div className="contentor flex h-10 items-center justify-between text-[12px] text-creme/80">
            <p>
              Aberto {HORARIO.dias.toLowerCase()} · {HORARIO.horas}
            </p>
            <div className="flex items-center gap-6">
              <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className="hover:text-ambar">
                Instagram
              </a>
              <a href={FACEBOOK.url} target="_blank" rel="noopener noreferrer" className="hover:text-ambar">
                Facebook
              </a>
              <Botao tamanho="xs" externo href={linkWhatsApp(MENSAGENS.pedido)}>
                Pedir agora
              </Botao>
            </div>
          </div>
        </div>

        <nav aria-label="Principal" className="contentor flex h-20 items-center justify-between sm:h-24">
          <a href="#topo" aria-label="Eleven Pizzaria, voltar ao início">
            <Logo />
          </a>
          <ul className="hidden items-center gap-10 text-[15px] font-semibold text-creme md:flex">
            {NAVEGACAO.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`${sublinhado} hover:text-ambar`}>
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
          <button
            id="abrir-navegacao"
            type="button"
            onClick={() => setNavAberta(true)}
            aria-label="Abrir navegação"
            aria-expanded={navAberta}
            aria-controls={navAberta ? "navegacao-movel" : undefined}
            className="grid size-11 place-items-center rounded-full border border-creme/25 text-creme transition-colors hover:border-ambar hover:text-ambar md:hidden"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M4 9h16M4 15h10" />
            </svg>
          </button>
        </nav>

        <m.div
          className="contentor mt-auto pb-28 sm:pb-[clamp(7rem,17vh,11rem)]"
          style={reduzirMovimento ? undefined : { y: textoY, opacity: textoOpacidade }}
        >
          <Revelar>
            {/* Creme e não âmbar: a 11px sobre o vídeo, o âmbar ficava abaixo de 4.5:1. */}
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-creme/90 uppercase">
              <span aria-hidden="true" className="h-px w-7 bg-brasa" />
              Pizzaria no Lubango
            </p>
          </Revelar>
          <Revelar atraso={0.08}>
            <h1 className="mt-5 max-w-[12ch] text-[3.1rem] leading-[0.98] text-creme sm:text-7xl lg:text-[6.4rem]">
              Prova, não perdes <em className="text-ambar">nada.</em>
            </h1>
          </Revelar>
          <Revelar atraso={0.16}>
            <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-creme/85 sm:text-lg">
              Pizza, hambúrgueres e sumos naturais. Defronte à Maternidade do Lubango.
            </p>
          </Revelar>
          <Revelar atraso={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Botao externo href={linkWhatsApp(MENSAGENS.pedido)}>
              <IconeWhatsApp className="size-[18px]" />
              Pedir pelo WhatsApp
            </Botao>
            <Botao variante="contorno" href="#menu">
              Ver o menu
            </Botao>
          </Revelar>
        </m.div>

        <a
          href="#menu"
          aria-label="Descer para o menu"
          className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-8"
        >
          <span className="hidden text-[10px] font-bold tracking-[0.34em] text-creme/60 uppercase transition-colors group-hover:text-ambar sm:block">
            Descer
          </span>
          <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-creme/20">
            <span className="absolute inset-x-0 top-0 block h-4 animate-descer bg-brasa motion-reduce:animate-none" />
          </span>
        </a>
      </header>

      <NavegacaoMovel aberto={navAberta} fechar={fecharNav} ligacoes={NAVEGACAO} idBotaoAbrir="abrir-navegacao" />
    </>
  );
}
