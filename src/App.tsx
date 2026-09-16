import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { BarraProgresso } from "./components/BarraProgresso";
import { Hero } from "./components/Hero";
import { FaixaInfo } from "./components/FaixaInfo";
import { Menu } from "./components/Menu";
import { FaixaPalavras } from "./components/FaixaPalavras";
import { Galeria } from "./components/Galeria";
import { Sobre } from "./components/Sobre";
import { BandaPedido } from "./components/BandaPedido";
import { Encomendas } from "./components/Encomendas";
import { Localizacao } from "./components/Localizacao";
import { Rodape } from "./components/Rodape";
import { BotaoWhatsApp } from "./components/BotaoWhatsApp";

export default function App() {
  return (
    // LazyMotion com domAnimation chega para fades, whileInView e saídas; o parallax usa motion values.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-brasa focus:px-4 focus:py-2 focus:font-semibold focus:text-carvao"
        >
          Saltar para o menu
        </a>
        <BarraProgresso />
        <Hero />
        <FaixaInfo />
        <main>
          <Menu />
          <FaixaPalavras />
          <Galeria />
          <Sobre />
          <BandaPedido />
          <Encomendas />
          <Localizacao />
        </main>
        <Rodape />
        <BotaoWhatsApp />
      </MotionConfig>
    </LazyMotion>
  );
}
