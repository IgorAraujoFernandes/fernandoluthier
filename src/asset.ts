/**
 * Resolve o caminho de um asset estático respeitando a `base` do Vite.
 *
 * Em runtime, strings literais como "/images/foo.png" NÃO são reescritas pelo
 * Vite (diferente do HTML). Quando o site é publicado em um subcaminho
 * (ex.: GitHub Pages em /fernandoluthier/), esses caminhos absolutos quebram.
 * Este helper prefixa com `import.meta.env.BASE_URL` para funcionar em
 * dev ("/") e em produção ("/fernandoluthier/").
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "/") + path.replace(/^\//, "");
}
