import type { SVGProps } from "react";
import type { Ilustracao } from "../data/menu";

type Desenho = SVGProps<SVGSVGElement>;

const traco = {
  viewBox: "0 0 120 120",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function Pizza(props: Desenho) {
  return (
    <svg {...traco} {...props}>
      <circle cx="60" cy="60" r="44" />
      <circle cx="60" cy="60" r="36" />
      <path d="M60 24v72M28.8 42l62.4 36M28.8 78l62.4-36" />
      <circle cx="46" cy="44" r="4" />
      <circle cx="75" cy="50" r="4" />
      <circle cx="52" cy="76" r="4" />
      <circle cx="78" cy="76" r="3" />
    </svg>
  );
}

function Hamburguer(props: Desenho) {
  return (
    <svg {...traco} {...props}>
      <path d="M22 56c0-19 17-29 38-29s38 10 38 29Z" />
      <path d="M44 38l3 2M60 34v3M74 39l-3 2M52 46l2 1M68 46l-2 1" />
      <path d="M18 64c6-5 12 5 18 0s12 5 18 0 12 5 18 0 12 5 18 0 12 5 16 0" />
      <rect x="20" y="70" width="80" height="12" rx="6" />
      <path d="M22 88h76l-3 6a8 8 0 0 1-7 4H32a8 8 0 0 1-7-4Z" />
    </svg>
  );
}

function Batata(props: Desenho) {
  return (
    <svg {...traco} {...props}>
      <path d="M44 58 40 22M52 58l-2-40M60 58V20M68 58l3-42M76 58l5-34" />
      <path d="M32 56h56l-8 46H40Z" />
      <path d="M40 72c10 5 30 5 40 0" />
    </svg>
  );
}

function Sumo(props: Desenho) {
  return (
    <svg {...traco} {...props}>
      <path d="M36 34h48l-7 68H43Z" />
      <path d="M39 56c14 4 28-4 42 0" />
      <path d="M66 46 76 12h10" />
      <circle cx="84" cy="36" r="11" />
      <path d="M84 25v22M73 36h22M76.2 28.2l15.6 15.6M91.8 28.2 76.2 43.8" />
    </svg>
  );
}

const DESENHOS: Record<Ilustracao, (props: Desenho) => React.JSX.Element> = {
  pizza: Pizza,
  hamburguer: Hamburguer,
  batata: Batata,
  sumo: Sumo,
};

/** Marcador enquanto não há fotografia do produto. */
export function FotoEmBreve({ ilustracao }: { ilustracao: Ilustracao }) {
  const Desenho = DESENHOS[ilustracao];

  return (
    <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_50%_55%,rgba(255,107,26,0.14),transparent_62%)]">
      <Desenho className="w-[44%] text-ambar/90 transition-transform duration-700 ease-brasa group-hover:scale-[1.04]" />
      <p className="absolute bottom-5 text-[10.5px] font-bold tracking-[0.3em] text-cinza uppercase">
        Fotografia em breve
      </p>
    </div>
  );
}
