/**
 * Dados de contato e identidade do negócio.
 * Centralizados aqui para facilitar manutenção (um único lugar para editar).
 */

export const site = {
  name: "Fer Luthier",
  owner: "Fernando Vieira",
  tagline: "Luthier em Sumaré e região de Campinas",
  description:
    "Manutenção, regulagem, restauração e customização de instrumentos de corda com mais de duas décadas de experiência.",
  location: "Sumaré / SP",
  region: "Região de Campinas",
  yearsOfExperience: 20,
  email: "contato@ferluthier.com.br",
  phoneDisplay: "(19) 98103-1622",
  whatsappDisplay: "(19) 98122-1622",
  /** Número no formato internacional, usado nos links do WhatsApp. */
  whatsappNumber: "5519981221622",
  social: {
    facebook: "https://www.facebook.com/fernandovieiraluthier/",
    instagram: "https://www.instagram.com/fernandovieiraluthier/",
  },
} as const;

/** Monta um link de WhatsApp com mensagem pré-preenchida e codificada. */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${text}`;
}
