import { m, type HTMLMotionProps } from "motion/react";

export const EASE_BRASA: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Props = HTMLMotionProps<"div"> & { atraso?: number };

/** Fade com 24px de subida quando entra no ecrã. Acontece uma vez só. */
export function Revelar({ atraso = 0, ...resto }: Props) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_BRASA, delay: atraso }}
      {...resto}
    />
  );
}
