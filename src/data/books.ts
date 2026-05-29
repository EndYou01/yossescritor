export type Book = {
  title: string;
  year: number | null;
  genre: "CF" | "Fantasía" | "Juvenil" | "Antología" | "Ensayo";
  award?: string;
  summary: string;
  translations?: string[];
  cover?: string;
};

export const books: Book[] = [
  {
    title: "Timshel",
    year: 1989,
    genre: "CF",
    award: "Premio David de Ciencia Ficción (1988)",
    summary:
      "Colección de cuentos que lo puso en el mapa de la ciencia ficción cubana siendo apenas un veinteañero.",
  },
  {
    title: "Los pecios y los náufragos",
    year: 2000,
    genre: "Juvenil",
    award: "Premio Luis Rogelio Nogueras",
    summary:
      "Novela juvenil de aventuras y supervivencia en clave de ciencia ficción.",
  },
  {
    title: "Se alquila un planeta",
    year: 2001,
    genre: "CF",
    summary:
      "Su salto internacional: una space opera amarga y divertida sobre una Tierra alquilada como destino turístico galáctico.",
    translations: ["Inglés (A Planet for Rent, Restless Books)"],
    cover: "/covers/a-planet-for-rent.jpg",
  },
  {
    title: "Precio justo",
    year: 2005,
    genre: "CF",
    award: "Premio Calendario",
    summary: "Cuentos donde el comercio interestelar tiene precio humano.",
  },
  {
    title: "Pluma de león",
    year: 2007,
    genre: "Fantasía",
    summary:
      "Aventura, espada y honor en una novela que mezcla fantasía heroica y filosofía de tatami.",
  },
  {
    title: "Crónicas del mañana",
    year: 2008,
    genre: "Antología",
    summary:
      "Cincuenta años de ciencia ficción cubana antologados por Yoss para celebrar medio siglo del género en la Isla.",
  },
  {
    title: "Super Extra Grande",
    year: 2011,
    genre: "CF",
    award: "Premio UPC de Ciencia Ficción (Barcelona)",
    summary:
      "Un veterinario de monstruos gigantes resuelve incidentes diplomáticos del tamaño de un sistema solar.",
    translations: ["Inglés (Restless Books)"],
    cover: "/covers/super-extra-grande.jpg",
  },
  {
    title: "Condonautas",
    year: null,
    genre: "CF",
    summary:
      "Sátira espacial sobre los «condonautas»: humanos que sellan la diplomacia galáctica con sexo en la primera línea del contacto alienígena.",
    translations: ["Inglés (Condomnauts, Restless Books)"],
    cover: "/covers/condonautas.jpg",
  },
  {
    title: "Red Dust",
    year: null,
    genre: "CF",
    summary:
      "Homenaje noir a Raymond Chandler: un robot detective positrónico llamado Raymond persigue criminales extraterrestres que viven por encima de las leyes de la física.",
    translations: ["Inglés (Red Dust, Restless Books)"],
    cover: "/covers/red-dust.jpg",
  },
];
