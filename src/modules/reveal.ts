/**
 * Anima elementos com a classe `.reveal` quando entram na viewport.
 * Usa IntersectionObserver e respeita prefers-reduced-motion (via CSS).
 */
export function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>(".reveal");
  if (items.length === 0) return;

  // Sem suporte: mostra tudo imediatamente.
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((el) => observer.observe(el));
}
