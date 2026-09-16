const PALAVRAS = ["Pizza", "Hambúrgueres", "Batata Mexicana", "Sumos Naturais", "Feito na hora", "Lubango"];

function Grupo() {
  return (
    <ul aria-hidden="true" className="flex shrink-0 items-center">
      {PALAVRAS.map((palavra, i) => (
        <li key={palavra} className="flex items-center">
          <span
            className={`px-6 font-serif text-[2.4rem] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap italic sm:px-10 sm:text-6xl ${
              i % 2 ? "text-transparent [-webkit-text-stroke:1px_var(--creme)]" : "text-creme"
            }`}
          >
            {palavra}
          </span>
          <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 shrink-0 text-brasa sm:size-3">
            <path d="M6 0 12 6 6 12 0 6Z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

/** Faixa de palavras a correr sem fim. Dois grupos iguais: ao chegar a -50% o recomeço não se nota. */
export function FaixaPalavras() {
  return (
    <div className="overflow-hidden border-y border-creme/[0.08] py-7 sm:py-9">
      <p className="sr-only">Pizza, hambúrgueres, batata mexicana e sumos naturais, feitos na hora no Lubango.</p>
      <div className="flex w-max animate-deslizar hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Grupo />
        <Grupo />
      </div>
    </div>
  );
}
