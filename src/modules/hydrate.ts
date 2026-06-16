import { icon, type IconName } from "../data/icons.ts";
import { whatsappLink, site } from "../data/site.ts";
import { asset } from "../asset.ts";

/**
 * Substitui todos os marcadores <span data-icon="nome"> pelo SVG correspondente.
 * Mantém o HTML enxuto e os ícones centralizados em icons.ts.
 */
export function hydrateIcons(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-icon]").forEach((el) => {
    const name = el.dataset.icon as IconName | undefined;
    if (!name) return;
    // Usa a classe existente do elemento como tamanho do ícone, se houver.
    const size = el.className.match(/\bw-\d+\b/) ? el.className : "w-6 h-6";
    // O WhatsApp usa a logo oficial (imagem real) em vez de ícone SVG.
    if (name === "whatsapp") {
      el.innerHTML = `<img src="${asset("/images/whatsapp.png")}" alt="WhatsApp" class="${size} object-contain" />`;
      return;
    }
    el.innerHTML = icon(name, size);
  });
}

/** Preenche todos os links de WhatsApp da página com a mensagem padrão. */
export function wireWhatsappLinks(): void {
  const defaultMessage =
    "Olá! Quero mais informações sobre os serviços de Luthier.";
  const href = whatsappLink(defaultMessage);
  const ids = [
    "nav-whatsapp",
    "hero-whatsapp",
    "contact-whatsapp",
    "footer-whatsapp",
    "float-whatsapp",
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id) as HTMLAnchorElement | null;
    if (el) el.href = href;
  });
  void site; // garante import usado mesmo se o link mudar no futuro
}
