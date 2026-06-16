export interface Partner {
  name: string;
  url?: string;
}

/** Parceiros do site original. */
export const partners: Partner[] = [
  { name: "Concamusic", url: "https://concamusic.com.br/" },
  { name: "Luthier Jair Belletti", url: "http://www.luthierjairbelletti.16mb.com/" },
  { name: "Tunning" },
  {
    name: "Clube da Música Campinas",
    url: "https://www.facebook.com/clubedamusicacampinas/",
  },
];

export interface GalleryItem {
  /** Caminho da imagem (placeholder em /images até receber fotos reais). */
  src: string;
  caption: string;
}

/** Galeria com fotos reais dos serviços de luthieria. */
export const gallery: GalleryItem[] = [
  { src: "/images/work-1.jpg", caption: "Setup completo de guitarra" },
  { src: "/images/work-2.png", caption: "Troca e nivelamento de trastes" },
  { src: "/images/work-5.png", caption: "Restauração de violão" },
  { src: "/images/about.jpg", caption: "Customização de baixo" },
  { src: "/images/work-3.jpg", caption: "Regulagem e limpeza" },
  { src: "/images/work-4.png", caption: "Reparo da parte elétrica" },
  { src: "/images/hero.jpg", caption: "Pintura e retoques" },
  { src: "/images/work-2.png", caption: "Colagem estrutural" },
];
