import type { ReactNode } from "react";
import { Botao } from "./Botao";
import { Logo } from "./Logo";
import { IconeFacebook, IconeInstagram, IconeWhatsApp } from "./Icones";
import { FACEBOOK, HORARIO, INSTAGRAM, LINHAS } from "../data/contactos";
import { MENSAGENS, linkTelefone, linkWhatsApp } from "../lib/links";

const LIGACOES = [
  { href: "#menu", texto: "Menu" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#contactos", texto: "Encomendas" },
  { href: "#localizacao", texto: "Localização" },
];

function Coluna({ titulo, children, className = "" }: { titulo: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-xl text-ambar italic">{titulo}</h2>
      <div className="mt-5 space-y-2.5 text-[14.5px] text-cinza">{children}</div>
    </div>
  );
}

const ligacao = "transition-colors hover:text-creme";

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-creme/[0.08] bg-carvao">
      <div className="contentor grid gap-12 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-6 font-serif text-2xl font-semibold tracking-[-0.02em] text-creme italic">
            Prova, não perdes nada.
          </p>
          <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-cinza">
            Pizza, hambúrgueres e sumos naturais, defronte à Maternidade do Lubango.
          </p>
          <Botao tamanho="sm" className="mt-7" externo href={linkWhatsApp(MENSAGENS.pedido)}>
            <IconeWhatsApp className="size-4" />
            Pedir agora
          </Botao>
        </div>

        <Coluna titulo="Navegação" className="lg:col-span-2">
          <ul className="space-y-2.5">
            {LIGACOES.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={ligacao}>
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </Coluna>

        <Coluna titulo="Horário" className="lg:col-span-2">
          <p>{HORARIO.dias}</p>
          <p className="font-semibold text-creme tabular-nums">{HORARIO.horas}</p>
        </Coluna>

        <Coluna titulo="Contactos" className="lg:col-span-2">
          <ul className="space-y-2.5">
            {LINHAS.flatMap((linha) =>
              linha.numeros.map((numero) => (
                <li key={numero}>
                  <a href={linkTelefone(numero)} className={`${ligacao} tabular-nums`}>
                    {numero}
                  </a>
                  <span className="ml-2 text-[11px] tracking-[0.18em] text-cinza/80 uppercase">{linha.rede}</span>
                </li>
              )),
            )}
          </ul>
        </Coluna>

        <Coluna titulo="Segue-nos" className="lg:col-span-2">
          <ul className="space-y-3">
            <li>
              <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className={`${ligacao} inline-flex items-center gap-2.5`}>
                <IconeInstagram className="size-[18px] text-brasa" />
                {INSTAGRAM.utilizador}
              </a>
            </li>
            <li>
              <a href={FACEBOOK.url} target="_blank" rel="noopener noreferrer" className={`${ligacao} inline-flex items-center gap-2.5`}>
                <IconeFacebook className="size-[18px] text-brasa" />
                {FACEBOOK.nome}
              </a>
            </li>
          </ul>
        </Coluna>
      </div>

      <div className="border-t border-creme/[0.06]">
        {/* O pb-28 deixa o texto acima do botão flutuante do WhatsApp quando se chega ao fim da página. */}
        <div className="contentor flex flex-col gap-2 pt-6 pb-28 text-[12.5px] text-cinza sm:flex-row sm:items-center sm:justify-between">
          <p>© {ano} Eleven Pizzaria. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <span className="font-semibold text-creme/80">Vantech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
