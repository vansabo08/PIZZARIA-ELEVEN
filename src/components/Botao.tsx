import type { ComponentProps } from "react";

const VARIANTES = {
  brasa: "bg-brasa text-carvao hover:bg-ambar",
  contorno: "border border-creme/60 text-creme hover:border-ambar hover:text-ambar",
  carvao: "bg-carvao text-creme hover:bg-carvao-2",
};

const TAMANHOS = {
  xs: "h-7 px-3 text-[12px]",
  sm: "h-10 px-4 text-[13.5px]",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg",
};

type Props = ComponentProps<"a"> & {
  variante?: keyof typeof VARIANTES;
  tamanho?: keyof typeof TAMANHOS;
  /** Abre noutro separador (WhatsApp, mapas, redes). */
  externo?: boolean;
};

export function Botao({ variante = "brasa", tamanho = "md", externo, className = "", ...resto }: Props) {
  return (
    <a
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-[3px] font-semibold whitespace-nowrap transition-colors duration-300 ease-brasa ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${className}`}
      {...resto}
    />
  );
}
