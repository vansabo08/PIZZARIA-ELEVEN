import { m } from "motion/react";
import { useParallax } from "../hooks/useParallax";

type Props = {
  src: string;
  alt: string;
  /** Quanto a foto desliza, em % da sua altura. Até 8 cabe na folga de 20% que a foto tem. */
  distancia?: number;
  /** Deve trazer o posicionamento e o tamanho; sem `absolute`, o contentor fica `relative`. */
  className?: string;
  /** Aproxima a foto quando o rato passa por cima do `group` mais próximo. */
  zoom?: boolean;
  largura?: number;
  altura?: number;
};

/** Foto que desliza mais devagar do que a página, dentro de uma moldura que a recorta. */
export function ImagemParallax({ src, alt, distancia = 7, className = "", zoom = false, largura, altura }: Props) {
  const { ref, y } = useParallax<HTMLDivElement>(distancia);
  const posicao = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";

  return (
    <div ref={ref} className={`${posicao} overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 ${zoom ? "transition-transform duration-700 ease-brasa group-hover:scale-[1.05]" : ""}`}
      >
        <m.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={largura}
          height={altura}
          style={{ y }}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full max-w-none object-cover"
        />
      </div>
    </div>
  );
}
