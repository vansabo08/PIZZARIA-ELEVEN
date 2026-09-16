import { ImagemParallax } from "./ImagemParallax";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { galeria } from "../data/fotos";

// Mosaico de 4 colunas no desktop e 2 no telemóvel, em blocos de quatro: grande, pequena, alta, pequena.
// Com mais fotos em data/fotos.ts, o bloco repete-se por baixo.
const FORMAS = ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1"];

export function Galeria() {
  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="scroll-mt-12 py-24 sm:py-32">
      <div className="contentor">
        <TituloSeccao
          id="galeria-titulo"
          antetitulo="Galeria"
          titulo="Do forno para a mesa."
          texto="Pizza acabada de sair, hambúrgueres bem servidos e batata estaladiça. Vem com fome."
        />

        <ul className="mt-14 grid auto-rows-[9.5rem] grid-cols-2 gap-3 sm:mt-16 sm:auto-rows-[12.5rem] sm:gap-4 lg:auto-rows-[14.5rem] lg:grid-cols-4 lg:gap-5">
          {galeria.map((foto, i) => (
            <li key={foto.src} className={FORMAS[i % FORMAS.length]}>
              <Revelar atraso={(i % 3) * 0.08} className="h-full">
                <figure className="group relative h-full overflow-hidden bg-carvao-2">
                  <ImagemParallax src={foto.src} alt={foto.alt} zoom className="absolute inset-0" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-[linear-gradient(to_top,rgba(15,13,11,.88),rgba(15,13,11,0))] p-4 pt-14 sm:p-5 sm:pt-16">
                    <span className="font-serif text-lg leading-tight font-semibold tracking-[-0.02em] text-creme italic sm:text-2xl">
                      {foto.legenda}
                    </span>
                    <span aria-hidden="true" className="text-[11px] font-bold tracking-[0.2em] text-ambar tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </Revelar>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-[13px] text-cinza">Imagens ilustrativas.</p>
      </div>
    </section>
  );
}
