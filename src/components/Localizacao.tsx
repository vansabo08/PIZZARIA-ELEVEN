import { Botao } from "./Botao";
import { IconeLocal } from "./Icones";
import { Revelar } from "./Revelar";
import { TituloSeccao } from "./TituloSeccao";
import { HORARIO, MAPA, MORADA, TELEFONE_PRINCIPAL } from "../data/contactos";
import { linkTelefone } from "../lib/links";

export function Localizacao() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="scroll-mt-12 py-24 sm:py-32">
      <div className="contentor grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Revelar className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden border border-creme/[0.08] bg-carvao-2 lg:aspect-[16/12]">
            <iframe
              src={MAPA.embed}
              title="Mapa: Eleven Pizzaria, defronte à Maternidade do Lubango"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.92)]"
            />
          </div>
        </Revelar>

        <div className="lg:col-span-5">
          <TituloSeccao
            id="localizacao-titulo"
            alinhar="esquerda"
            antetitulo="Localização"
            titulo="Estamos defronte à Maternidade."
          />
          <Revelar atraso={0.08}>
            <dl className="mt-10 divide-y divide-creme/10 border-y border-creme/10">
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-5">
                <dt className="pt-1 text-[11px] font-bold tracking-[0.28em] text-cinza uppercase">Morada</dt>
                <dd className="text-creme">
                  {MORADA.rua}
                  <br />
                  {MORADA.cidade}
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-5">
                <dt className="pt-1 text-[11px] font-bold tracking-[0.28em] text-cinza uppercase">Horário</dt>
                <dd className="text-creme">
                  {HORARIO.dias}
                  <br />
                  <span className="tabular-nums">{HORARIO.horas}</span>
                </dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-5">
                <dt className="pt-1 text-[11px] font-bold tracking-[0.28em] text-cinza uppercase">Telefone</dt>
                <dd>
                  <a
                    href={linkTelefone(TELEFONE_PRINCIPAL)}
                    className="font-semibold text-creme tabular-nums transition-colors hover:text-ambar"
                  >
                    {TELEFONE_PRINCIPAL}
                  </a>
                </dd>
              </div>
            </dl>
            <Botao className="mt-10" externo href={MAPA.comoChegar}>
              <IconeLocal className="size-[18px]" />
              Como chegar
            </Botao>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
