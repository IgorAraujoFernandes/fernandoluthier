/**
 * Carrossel de depoimentos: autoplay, navegação por setas e pontos,
 * pausa ao passar o mouse e atualização acessível dos indicadores.
 */
export function initCarousel(): void {
  const track = document.getElementById("testimonial-track");
  const prev = document.getElementById("testimonial-prev");
  const next = document.getElementById("testimonial-next");
  const dotsWrap = document.getElementById("testimonial-dots");
  if (!track || !dotsWrap) return;

  const total = track.children.length;
  if (total === 0) return;

  const dots = Array.from(
    dotsWrap.querySelectorAll<HTMLButtonElement>("[data-dot]"),
  );
  let index = 0;
  let timer: number | undefined;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("bg-primary", active);
      dot.classList.toggle("bg-base-content/25", !active);
      dot.classList.toggle("w-5", active); // pílula no item ativo
      dot.setAttribute("aria-selected", String(active));
    });
  };

  const goTo = (i: number) => {
    index = (i + total) % total;
    update();
  };
  const nextSlide = () => goTo(index + 1);
  const prevSlide = () => goTo(index - 1);

  const startAuto = () => {
    stopAuto();
    timer = window.setInterval(nextSlide, 5000);
  };
  const stopAuto = () => {
    if (timer !== undefined) window.clearInterval(timer);
  };

  next?.addEventListener("click", () => {
    nextSlide();
    startAuto();
  });
  prev?.addEventListener("click", () => {
    prevSlide();
    startAuto();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      goTo(i);
      startAuto();
    }),
  );

  // Pausa o autoplay ao interagir.
  const container = track.parentElement;
  container?.addEventListener("mouseenter", stopAuto);
  container?.addEventListener("mouseleave", startAuto);

  // Respeita usuários que preferem menos movimento.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  update();
  if (!reduceMotion) startAuto();
}
