import { services } from "../data/services.ts";
import { testimonials } from "../data/testimonials.ts";
import { partners, gallery } from "../data/portfolio.ts";
import { icon, type IconName } from "../data/icons.ts";

/** Escapa texto para inserção segura como conteúdo HTML (evita XSS/quebra). */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Renderiza os cartões de serviços. */
export function renderServices(): void {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (s) => `
      <article class="reveal card bg-base-100 border border-base-content/10 h-full transition hover:border-primary/40 hover:shadow-xl">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center justify-center w-12 h-12 rounded-box bg-primary/10 text-primary">
              ${icon(s.icon as IconName, "w-6 h-6")}
            </span>
            <span class="font-display text-2xl font-bold text-base-content/15">${esc(s.number)}</span>
          </div>
          <h3 class="card-title mt-4 text-xl">${esc(s.title)}</h3>
          <p class="text-sm font-medium text-primary/90">${esc(s.summary)}</p>
          <p class="text-sm text-base-content/70 mt-1">${esc(s.description)}</p>
        </div>
      </article>`,
    )
    .join("");
}

/** Renderiza a grade da galeria (com atributos para abrir o lightbox). */
export function renderGallery(): void {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = gallery
    .map(
      (item, index) => `
      <button
        type="button"
        class="gallery-item reveal group relative overflow-hidden rounded-box border border-base-content/10 aspect-square"
        data-gallery-index="${index}"
        aria-label="Ampliar: ${esc(item.caption)}"
      >
        <img src="${esc(item.src)}" alt="${esc(item.caption)}" loading="lazy" class="w-full h-full object-cover transition group-hover:scale-105" />
        <span class="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-medium text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
          ${esc(item.caption)}
        </span>
      </button>`,
    )
    .join("");
}

/** Renderiza os slides e os indicadores (dots) do carrossel de depoimentos. */
export function renderTestimonials(): void {
  const track = document.getElementById("testimonial-track");
  const dots = document.getElementById("testimonial-dots");
  if (!track || !dots) return;

  track.innerHTML = testimonials
    .map(
      (t) => `
      <div class="testimonial-slide px-2" role="group" aria-roledescription="depoimento">
        <div class="card bg-base-100 border border-base-content/10 mx-auto max-w-2xl">
          <div class="card-body items-center text-center">
            <span class="text-primary/40">${icon("quote", "w-10 h-10")}</span>
            <p class="text-lg leading-relaxed">${esc(t.text)}</p>
            <div class="mt-4">
              <p class="font-semibold">${esc(t.name)}</p>
              <p class="text-xs text-base-content/60">${esc(t.source)}</p>
            </div>
          </div>
        </div>
      </div>`,
    )
    .join("");

  dots.innerHTML = testimonials
    .map(
      (_, i) =>
        `<button type="button" role="tab" class="w-2.5 h-2.5 rounded-full bg-base-content/25 transition" data-dot="${i}" aria-label="Ir para depoimento ${i + 1}"></button>`,
    )
    .join("");
}

/** Renderiza a lista de parceiros. */
export function renderPartners(): void {
  const row = document.getElementById("partners-row");
  if (!row) return;

  row.innerHTML = partners
    .map((p) => {
      const label = `<span class="font-display text-lg font-semibold text-base-content/70 hover:text-primary transition">${esc(p.name)}</span>`;
      return p.url
        ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${label}</a>`
        : label;
    })
    .join("");
}
