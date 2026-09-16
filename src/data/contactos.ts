// Contactos, horário e redes da Eleven. O que mudar aqui muda no site todo.

export const TELEFONE_PRINCIPAL = "928 459 758";

/** Número do WhatsApp com o indicativo de Angola, só dígitos. */
export const WHATSAPP = "244928459758";

export const LINHAS = [
  { rede: "Unitel", numeros: ["928 459 758", "942 948 494"] },
  { rede: "Africell", numeros: ["957 844 980", "950 245 779"] },
];

export const HORARIO = { dias: "Todos os dias", horas: "08h00 – 22h00" };

export const MORADA = {
  curta: "Defronte à Maternidade, Lubango",
  rua: "Defronte à Maternidade",
  cidade: "Lubango, Huíla — Angola",
};

export const INSTAGRAM = {
  utilizador: "@elevenpizzaria.oficial",
  url: "https://www.instagram.com/elevenpizzaria.oficial/",
};

export const FACEBOOK = {
  nome: "Eleven Pizzaria",
  url: "https://www.facebook.com/profile.php?id=61576437063984",
};

// A maternidade do Lubango é a Maternidade Irene Neto.
const DESTINO_MAPA = "Maternidade Irene Neto, Lubango, Angola";

export const MAPA = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(DESTINO_MAPA)}&z=16&output=embed`,
  comoChegar: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(DESTINO_MAPA)}`,
};
