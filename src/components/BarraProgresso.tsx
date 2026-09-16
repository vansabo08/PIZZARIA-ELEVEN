import { m, useScroll } from "motion/react";

/** Linha brasa no topo do ecrã que enche à medida que se desce a página. */
export function BarraProgresso() {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brasa"
    />
  );
}
