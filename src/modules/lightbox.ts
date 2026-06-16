import { gallery } from "../data/portfolio.ts";

/**
 * Lightbox da galeria: abre num <dialog>, com navegação por setas,
 * teclado (Esc / ← / →) e legenda. Usa os dados de `gallery`.
 */
export function initLightbox(): void {
  const dialog = document.getElementById("lightbox") as HTMLDialogElement | null;
  const img = document.getElementById("lightbox-img") as HTMLImageElement | null;
  const caption = document.getElementById("lightbox-caption");
  const grid = document.getElementById("gallery-grid");
  if (!dialog || !img || !caption || !grid) return;

  let current = 0;

  const show = (index: number) => {
    current = (index + gallery.length) % gallery.length;
    const item = gallery[current];
    if (!item) return;
    img.src = item.src;
    img.alt = item.caption;
    caption.textContent = item.caption;
  };

  const open = (index: number) => {
    show(index);
    if (!dialog.open) dialog.showModal();
  };

  // Abre ao clicar em qualquer item da galeria.
  grid.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-gallery-index]",
    );
    if (!btn) return;
    open(Number(btn.dataset.galleryIndex));
  });

  document
    .getElementById("lightbox-next")
    ?.addEventListener("click", () => show(current + 1));
  document
    .getElementById("lightbox-prev")
    ?.addEventListener("click", () => show(current - 1));
  document
    .getElementById("lightbox-close")
    ?.addEventListener("click", () => dialog.close());

  // Navegação por teclado enquanto o lightbox está aberto.
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(current + 1);
    else if (e.key === "ArrowLeft") show(current - 1);
  });
}
