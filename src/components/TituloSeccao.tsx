import type { ReactNode } from "react";
import { Revelar } from "./Revelar";

type Props = {
  id: string;
  antetitulo: string;
  titulo: ReactNode;
  texto?: ReactNode;
  alinhar?: "centro" | "esquerda";
  /** "brasa" para títulos sobre o fundo laranja. */
  tom?: "escuro" | "brasa";
};

export function TituloSeccao({ id, antetitulo, titulo, texto, alinhar = "centro", tom = "escuro" }: Props) {
  const centro = alinhar === "centro";
  const naBrasa = tom === "brasa";

  return (
    <Revelar className={`max-w-3xl ${centro ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase ${
          centro ? "justify-center" : ""
        } ${naBrasa ? "text-carvao" : "text-ambar"}`}
      >
        <span aria-hidden="true" className="h-px w-7 bg-current" />
        {antetitulo}
        {centro && <span aria-hidden="true" className="h-px w-7 bg-current" />}
      </p>
      <h2
        id={id}
        className={`mt-5 text-[2.6rem] leading-[1.04] italic sm:text-5xl lg:text-[3.75rem] ${
          naBrasa ? "text-carvao" : "text-creme"
        }`}
      >
        {titulo}
      </h2>
      {texto && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${centro ? "mx-auto max-w-xl" : "max-w-xl"} ${
            naBrasa ? "text-carvao/85" : "text-cinza"
          }`}
        >
          {texto}
        </p>
      )}
    </Revelar>
  );
}
