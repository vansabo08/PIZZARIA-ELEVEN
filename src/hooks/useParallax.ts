import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Deslocamento vertical ligado ao scroll enquanto o elemento atravessa o ecrã,
 * de -distancia a +distancia. Com "reduzir movimento" ligado, fica parado.
 */
export function useParallax<T extends HTMLElement>(distancia: number, unidade: "%" | "px" = "%") {
  const ref = useRef<T>(null);
  const reduzirMovimento = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-distancia}${unidade}`, `${distancia}${unidade}`]);
  return { ref, y: reduzirMovimento ? 0 : y };
}
