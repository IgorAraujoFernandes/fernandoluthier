/** Serviços oferecidos. O `icon` é o nome de um path SVG definido em icons.ts. */
export interface Service {
  number: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Nivelamento e Troca de Trastes",
    summary: "Remoção ou colocação de trastes novos.",
    description:
      "O alinhamento perfeito dos trastes é essencial: qualquer desnível gera trastejo e imprecisão na afinação. Fazemos o nivelamento e a troca completa com acabamento preciso.",
    icon: "frets",
  },
  {
    number: "02",
    title: "Regulagem, Ajuste e Limpeza",
    summary: "Mantenha tudo em perfeita harmonia.",
    description:
      "Setup completo para melhorar o conforto, a afinação e a tocabilidade, além de prevenir problemas futuros. Seu instrumento fica pronto para tocar.",
    icon: "tune",
  },
  {
    number: "03",
    title: "Restauração e Customização",
    summary: "Deixe o instrumento como desejar.",
    description:
      "Restauração de instrumentos antigos e depreciados aos padrões originais, além de customizações sob medida para o seu estilo.",
    icon: "restore",
  },
  {
    number: "04",
    title: "Colagens",
    summary: "Qualidade e garantia.",
    description:
      "Cada colagem é avaliada conforme a área do instrumento — algumas exigem maior resistência estrutural, outras são estéticas. Usamos a técnica certa para cada caso.",
    icon: "glue",
  },
  {
    number: "05",
    title: "Parte Elétrica",
    summary: "Equipe técnica especializada.",
    description:
      "Reparo e refação da eletrônica de guitarras, baixos, cavacos, pedais e amplificadores. Atendimento sob medida para o seu equipamento.",
    icon: "electric",
  },
  {
    number: "06",
    title: "Pinturas e Retoques",
    summary: "Vernizes recomendados para madeiras.",
    description:
      "Mudança de cor, desenhos personalizados ou restauração da pintura original, sempre com materiais e técnicas adequadas à madeira.",
    icon: "paint",
  },
];
