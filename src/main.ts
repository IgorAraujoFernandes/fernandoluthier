import "./style.css";

import { hydrateIcons, wireWhatsappLinks } from "./modules/hydrate.ts";
import {
  renderServices,
  renderGallery,
  renderTestimonials,
  renderPartners,
} from "./modules/sections.ts";
import { initNav } from "./modules/nav.ts";
import { initCarousel } from "./modules/carousel.ts";
import { initLightbox } from "./modules/lightbox.ts";
import { initForm } from "./modules/form.ts";
import { initReveal } from "./modules/reveal.ts";

/** Ponto de entrada: renderiza o conteúdo dinâmico e ativa as interações. */
function main(): void {
  // 1. Renderiza as seções a partir dos dados tipados.
  renderServices();
  renderGallery();
  renderTestimonials();
  renderPartners();

  // 2. Hidrata ícones (inclui os recém-renderizados) e links de WhatsApp.
  hydrateIcons();
  wireWhatsappLinks();

  // 3. Ano dinâmico no rodapé (Date nativo — sem bibliotecas).
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 4. Ativa os comportamentos interativos.
  initNav();
  initCarousel();
  initLightbox();
  initForm();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
