import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { Hero } from "./components/Hero";
import { FaixaInfo } from "./components/FaixaInfo";
import { Menu } from "./components/Menu";
import { Sobre } from "./components/Sobre";
import { Encomendas } from "./components/Encomendas";
import { Localizacao } from "./components/Localizacao";
import { Rodape } from "./components/Rodape";
import { BotaoWhatsApp } from "./components/BotaoWhatsApp";

export default function App() {
  return (
    // LazyMotion com domAnimation chega para fades e whileInView, e carrega menos JavaScript.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-brasa focus:px-4 focus:py-2 focus:font-semibold focus:text-carvao"
        >
          Saltar para o menu
        </a>
        <Hero />
        <FaixaInfo />
        <main>
          <Menu />
          <Sobre />
          <Encomendas />
          <Localizacao />
        </main>
        <Rodape />
        <BotaoWhatsApp />
      </MotionConfig>
    </LazyMotion>
  );
}
