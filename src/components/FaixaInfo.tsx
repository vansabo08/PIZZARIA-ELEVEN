import { IconeLocal, IconeRelogio, IconeTelefone } from "./Icones";
import { HORARIO, MORADA, TELEFONE_PRINCIPAL } from "../data/contactos";
import { linkTelefone } from "../lib/links";

export function FaixaInfo() {
  return (
    <div className="sticky top-0 z-40 border-b border-creme/[0.07] bg-carvao-2">
      <ul className="contentor flex h-11 items-center justify-between text-[12px] whitespace-nowrap text-creme/85 sm:h-12 sm:text-[13px] md:justify-center md:divide-x md:divide-creme/15 [&>li]:md:px-5 [&>li]:lg:px-8">
        <li className="flex items-center gap-2">
          <IconeRelogio className="size-3.5 shrink-0 text-brasa" />
          <span>
            {HORARIO.horas} · {HORARIO.dias}
          </span>
        </li>
        <li className="hidden items-center gap-2 md:flex">
          <IconeLocal className="size-3.5 shrink-0 text-brasa" />
          <span>{MORADA.curta}</span>
        </li>
        <li>
          <a
            href={linkTelefone(TELEFONE_PRINCIPAL)}
            className="flex items-center gap-2 font-semibold tabular-nums transition-colors hover:text-ambar"
          >
            <IconeTelefone className="size-3.5 shrink-0 text-brasa" />
            {TELEFONE_PRINCIPAL}
          </a>
        </li>
      </ul>
    </div>
  );
}
