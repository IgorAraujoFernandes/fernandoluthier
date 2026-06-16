/**
 * Comportamento de navegação:
 *  - fundo do header ao rolar
 *  - menu mobile (abrir/fechar)
 *  - destaque do link da seção atual (scroll-spy via IntersectionObserver)
 */
export function initNav(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Fundo do header ao rolar a página.
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile.
  const closeMenu = () => {
    mobileMenu?.classList.add("hidden");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Abrir menu");
  };
  toggle?.addEventListener("click", () => {
    const isOpen = !mobileMenu?.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      mobileMenu?.classList.remove("hidden");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fechar menu");
    }
  });
  // Fecha ao clicar em um link do menu mobile.
  mobileMenu?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", closeMenu),
  );
  // Fecha com a tecla Escape.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Scroll-spy: marca o link da seção visível.
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav-link"),
  );
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length > 0) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => spy.observe(s));
  }
}
