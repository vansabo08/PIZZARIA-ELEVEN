import { WHATSAPP } from "../data/contactos";

export const MENSAGENS = {
  pedido: "Olá, Eleven Pizzaria! Quero fazer um pedido.",
  encomenda: "Olá, Eleven Pizzaria! Quero fazer uma encomenda.",
  menu: "Olá, Eleven Pizzaria! Podem enviar-me o menu completo?",
};

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

export function mensagemProduto(nome: string) {
  return `Olá, Eleven Pizzaria! Quero pedir: ${nome}.`;
}

/** "928 459 758" -> "tel:+244928459758" */
export function linkTelefone(numero: string) {
  return `tel:+244${numero.replace(/\D/g, "")}`;
}
