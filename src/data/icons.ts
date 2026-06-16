/**
 * Ícones SVG inline (sem dependência de fontes de ícones externas).
 * Cada entrada é o conteúdo interno de um <svg viewBox="0 0 24 24">.
 */

type IconName =
  | "frets"
  | "tune"
  | "restore"
  | "glue"
  | "electric"
  | "paint"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "mapPin"
  | "phone"
  | "mail"
  | "arrowRight"
  | "chevronLeft"
  | "chevronRight"
  | "close"
  | "menu"
  | "star"
  | "quote";

const paths: Record<IconName, string> = {
  // Serviços (estilo linha, stroke)
  frets:
    '<path d="M4 3v18M9 3v18M14 3v18M19 3v18" /><path d="M2 8h20M2 14h20" />',
  tune:
    '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" /><circle cx="4" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="20" cy="14" r="2"/>',
  restore:
    '<path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" />',
  glue:
    '<path d="M9 3h6v4l2 3v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l2-3z" /><path d="M9 13h6" />',
  electric: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />',
  paint:
    '<path d="M19 3 8 14M5 21c1.5-2 1-3 2.5-4.5L12 12l3 3-4.5 4.5C9 21 7 20.5 5 21z" /><path d="M14 5l5 5" />',
  // UI / marcas
  whatsapp:
    '<path d="M12 2a10 10 0 0 0-8.7 15l-1.3 5 5.1-1.3A10 10 0 1 0 12 2z" /><path d="M8.5 7.5c-.3 0-.7.1-1 .5s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.5c.2.3 2.4 3.7 5.9 5 .8.3 1.5.5 2 .4.7-.1 1.6-.7 1.9-1.4.2-.6.2-1.1.2-1.2l-.2-.4c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.7 1c-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.5c-.9-.8-1.4-1.7-1.6-2-.1-.3 0-.4.2-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4z" fill="currentColor" stroke="none"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>',
  facebook:
    '<path d="M14 9V7c0-1 .5-2 2-2h2V2h-3c-2.5 0-4 1.7-4 4v3H8v3h3v9h3v-9h2.5l.5-3h-3z" fill="currentColor" stroke="none"/>',
  mapPin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />',
  phone:
    '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L21 19v-4l-5-2-1.5 2.5" /><path d="M5 3a16 16 0 0 0 16 16" />',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6" />',
  chevronLeft: '<path d="M15 6l-6 6 6 6" />',
  chevronRight: '<path d="M9 6l6 6-6 6" />',
  close: '<path d="M6 6l12 12M18 6 6 18" />',
  menu: '<path d="M4 7h16M4 12h16M4 17h16" />',
  star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3z" fill="currentColor" stroke="none"/>',
  quote:
    '<path d="M7 7H4v6h3c0 2-1 3-3 3v2c3 0 5-2 5-5V7zm10 0h-3v6h3c0 2-1 3-3 3v2c3 0 5-2 5-5V7z" fill="currentColor" stroke="none"/>',
};

/** Retorna o markup completo de um ícone SVG com classes utilitárias. */
export function icon(name: IconName, className = "w-6 h-6"): string {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

export type { IconName };
