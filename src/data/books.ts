export type Genre =
  | "CF"
  | "Fantasía"
  | "Terror"
  | "Erótica"
  | "Realismo"
  | "Humor"
  | "Juvenil"
  | "Ensayo"
  | "Antología";

// Display labels — the data key stays compact ("CF") but the UI spells it out.
export const genreLabels: Record<Genre, string> = {
  CF: "Ciencia Ficción",
  Fantasía: "Fantasía",
  Terror: "Terror",
  Erótica: "Erótica",
  Realismo: "Realismo",
  Humor: "Humor",
  Juvenil: "Juvenil",
  Ensayo: "Ensayo",
  Antología: "Antología",
};

export type Book = {
  title: string;
  year: number | null;
  genre: Genre;
  award?: string;
  summary: string;
  translations?: string[];
  cover?: string;
};

// Bibliografía basada en la lista de obras y el currículum del autor.
// Ordenada por año de primera edición. (Las sinopsis provienen del propio Yoss.)
export const books: Book[] = [
  {
    title: "Timshel",
    year: 1989,
    genre: "CF",
    award: "Premio David de Ciencia Ficción (1988)",
    summary:
      "Su debut y carta de presentación: los cuentos con que, siendo un veinteañero, entró al mapa de la ciencia ficción cubana.",
  },
  {
    title: "Los pecios y los náufragos",
    year: 2000,
    genre: "CF",
    award: "Premio Luis Rogelio Nogueras",
    summary:
      "Siglo XXII: sin recursos ni naves, la humanidad saquea su propio pasado con viajes en el tiempo disfrazados de «investigación». El crononauta Targo Ridal descubre la verdad y acaba exiliado al Pleistoceno, entre tigres dientes de sable… y verdades sobre el origen del hombre que alguien quiere enterrar.",
  },
  {
    title: "Se alquila un planeta",
    year: 2001,
    genre: "CF",
    summary:
      "Su salto internacional. En una Tierra dominada por razas extraterrestres, la Agencia Turística Planetaria alquila los cuerpos de los humanos más pobres a los visitantes xenoides. Siete historias que son una alegoría feroz de la Cuba del Período Especial.",
    translations: [
      "Inglés (A Planet for Rent, Restless Books)",
      "Francés (Planète à louer)",
    ],
    cover: "/covers/a-planet-for-rent.jpg",
  },
  {
    title: "El Encanto de Fin de Siglo",
    year: 2001,
    genre: "Realismo",
    summary:
      "Con Danilo Manera. Dos voces, una femenina y otra masculina, recorren diez años clave de Cuba —de 1989 a 1999—: la caída del Muro, la llegada del turismo, el colapso de los absolutos y una generación obligada a reinventarse para sobrevivir.",
  },
  {
    title: "Al final de la senda",
    year: 2003,
    genre: "CF",
    summary:
      "En el siglo XXIV un puñado de asesinos de élite —los matadores— sostiene el equilibrio de la galaxia. El soldado Davo Stephan ben Yassiel jamás soñó con serlo, hasta que la inescrutable Lema Bocatrix lo elige como discípulo. La novela definitiva sobre la formación de un asesino profesional.",
  },
  {
    title: "Polvo rojo",
    year: 2004,
    genre: "CF",
    award: "Mención Premio UPC (2003)",
    summary:
      "El noir se encuentra con la space opera: Philip Marlowe, un robot obsesionado con el cine de detectives, y Vasili Mendoza, un mutante capaz de torcer la probabilidad, son los únicos que pueden impedir que un renegado le prenda fuego al universo entero.",
    translations: ["Inglés (Red Dust, Restless Books)"],
    cover: "/covers/red-dust.jpg",
  },
  {
    title: "Precio justo",
    year: 2006,
    genre: "CF",
    award: "Premio Calendario",
    summary:
      "Cuentos premiados donde el comercio interestelar siempre tiene un precio… y casi nunca es justo.",
  },
  {
    title: "Pluma de león",
    year: 2007,
    genre: "Erótica",
    summary:
      "Una joven sin escrúpulos se hace amante de un longevo extraterrestre aviario… y se enamora. Reescritura en clave de CF de El amante de Duras: erotismo desbocado y hondas disquisiciones sobre el futuro de la especie. Filosofía y sexo a chorros.",
  },
  {
    title: "Crónicas del mañana",
    year: 2009,
    genre: "Antología",
    summary:
      "Cincuenta años de cuentos cubanos de ciencia ficción, antologados por Yoss para celebrar medio siglo del género en la Isla. Traducida al gallego como Cronicas do mañá.",
  },
  {
    title: "Las quimeras no existen",
    year: 2010,
    genre: "Juvenil",
    summary:
      "Cuentos para niños y jóvenes: lo fantástico y lo imposible al alcance de los primeros lectores.",
  },
  {
    title: "Leyendas de los Cinco Reinos",
    year: 2010,
    genre: "Fantasía",
    summary:
      "Cinco relatos que tejen un solo universo mágico: un dragón y el caballero que va ¿a matarlo?, un mago tras el secreto de los unicornios, un país que por volverse invulnerable deja de ser país. De lo más alto del vuelo poético de la fantasía cubana.",
  },
  {
    title: "Tropas auxiliares",
    year: 2010,
    genre: "CF",
    summary:
      "Seres insectoides, los araños, casi acaban con la humanidad. Cuando los ejércitos derrotados se reúnen para la reconquista, descubren en la batalla por La Habana quién está realmente detrás de los invasores. Primera entrega de una trilogía de space opera bélica.",
  },
  {
    title: "La espada y sus historias",
    year: 2012,
    genre: "Ensayo",
    award: "Premio La Edad de Oro",
    summary:
      "Ameno ensayo sobre la espada —el arma humana por antonomasia— a través de los tiempos, las culturas y los rituales, con ejemplos del cine y de la literatura histórica y fantástica.",
  },
  {
    title: "Mentiras cubanas",
    year: 2012,
    genre: "Realismo",
    summary:
      "Cuentos de realismo: la Cuba cotidiana contada sin anestesia y con el humor ácido de la casa.",
  },
  {
    title: "Super Extra Grande",
    year: 2012,
    genre: "CF",
    award: "Premio UPC de Ciencia Ficción",
    summary:
      "Jan Amos Sangan Dongo es el veterinario de los gigantes: el único capaz de tratar a las mayores formas de vida de la galaxia. Su reto: rescatar a dos diplomáticas atrapadas dentro de una ameba de decenas de kilómetros. Humor chispeante y space opera de la desmesura.",
    translations: ["Inglés (Restless Books)"],
    cover: "/covers/super-extra-grande.jpg",
  },
  {
    title: "Condonautas",
    year: 2012,
    genre: "CF",
    summary:
      "En la Vía Láctea del siglo XXIV cada pacto entre razas se sella con sexo, y de ahí nace una casta singular: los condonautas. Josué Valdés, nacido en el marginal Barrio Ripio, debe contactar a las primeras entidades extragalácticas… y asumir por fin quién es. Un raro ejemplo de space opera queer.",
    translations: ["Inglés (Condomnauts, Restless Books)"],
    cover: "/covers/condonautas.jpg",
  },
  {
    title: "La quinta dimensión de la literatura",
    year: 2012,
    genre: "Ensayo",
    summary:
      "Ensayos y crónicas sobre la ciencia ficción en Cuba y el mundo, con la lista —muy personal— de las cincuenta mejores novelas del género de todos los tiempos.",
  },
  {
    title: "La voz del abismo",
    year: 2013,
    genre: "Terror",
    summary:
      "Un joven nacido sin cuerdas vocales se vuelve un vocalista de rock excepcional gracias al hechizo de un palero ciego… que también podría abrir la puerta a entidades de más allá del tiempo. Lovecraft y el imaginario del rock bajo un sol caribeño.",
  },
  {
    title: "Angélica",
    year: 2014,
    genre: "CF",
    summary:
      "Un planeta-prisión cubierto de arena y de monstruos, los onis, donde los convictos sobreviven cazándolos. Hasta que una joven idealista y un viejo superviviente lo cambian todo. Space opera ecologista; homenaje explícito a Dune… con arena y artes marciales, pero sin gusanos.",
  },
  {
    title: "El Laberinto del Olvido",
    year: 2015,
    genre: "Juvenil",
    summary:
      "Con Michel Encinosa. Las reglas, tablas, poderes y habilidades del primer juego de rol de fantasía comercializado oficialmente en Cuba.",
  },
  {
    title: "Ingenieros y jenízaros",
    year: 2015,
    genre: "CF",
    summary:
      "Los telayones, una raza artrópode, conquistan planeta tras planeta. La teniente Carla Herrera, especialista en ingeniería inversa, sueña con descubrir el secreto de su biotecnología… y cae en una pesadilla de cautiverio con un desenlace inesperado. Ambiciosa space opera.",
  },
  {
    title: "Misión Korad",
    year: 2015,
    genre: "Juvenil",
    summary:
      "Versión narrativa del primer ballet de ciencia ficción de la historia, estrenado en 1980 con coreografía de Alicia Alonso e inspirado en el poema de Oscar Hurtado.",
  },
  {
    title: "El gato tras la reja",
    year: 2016,
    genre: "Erótica",
    summary:
      "El sueño de todo macho latino convertido en trampa: un tímido poeta enredado entre dos mujeres opuestas se ve obligado a crecer, en una historia a la vez trágica y esperanzadora.",
  },
  {
    title: "Para leer con una sola mano",
    year: 2016,
    genre: "Erótica",
    summary:
      "Diez relatos —uno de ciencia ficción, otro de fantasía— con lo mejor de la producción erótica del autor.",
  },
  {
    title: "País grande, país pequeño",
    year: 2017,
    genre: "CF",
    summary:
      "Tres relatos donde el absurdo rige las relaciones entre dos países vecinos: una antena que capta el futuro, gente que se vuelve piezas de un mecanismo ignoto y dos fábricas en una carrera ridícula por la chimenea más alta del mundo.",
  },
  {
    title: "Reto prehistórico",
    year: 2017,
    genre: "CF",
    summary:
      "En un foro de fanáticos de la paleontología se discute qué bestia extinta ganaría un duelo… hasta que alguien empieza a subir reels de batallas imposibles, con un realismo que da miedo. La novela que todo fan de los dinosaurios soñó leer.",
  },
  {
    title: "Que den un paso al frente los caídos",
    year: 2017,
    genre: "CF",
    summary:
      "Siglo XXII: la humanidad guerrea contra un enemigo que no da la cara y manda a luchar a humanos manipulados. La historia del capitán de subrepticios Alain y su duelo casi personal con un capitán enemigo. Space opera retrofuturista al estilo de Run Silent, Run Deep.",
  },
  {
    title: "El mercenario y el desierto",
    year: 2018,
    genre: "Fantasía",
    summary:
      "No es la historia de un elegido, sino de un simple soldado. Yxo de Aigar corre cada noche por el Gran Desierto de Sal hacia un torneo mortal… y un encuentro lo arrastra a una rebelión y a una magia que nunca soñó poseer. Libro I de La Ciudad de Sal.",
  },
  {
    title: "El grifo casi feliz",
    year: 2019,
    genre: "Juvenil",
    summary:
      "Ala-Que-Ruge, un grifo de las faldas del Olimpo, sueña con una familia en armonía mientras una vieja amenaza, Tifón, escapa del Tártaro. Cuento ilustrado para niños.",
  },
  {
    title: "Etcétera… y otras cosas",
    year: 2020,
    genre: "CF",
    summary:
      "Ciencia ficción contada en forma de paratextos: una receta de cocina, el prospecto de un cosmético, las entradas de un diccionario bilingüe…",
  },
  {
    title: "La ciudad y el torneo",
    year: 2021,
    genre: "Fantasía",
    summary:
      "Yxo de Aigar llega por fin a la Ciudad de Sal. Heredero de una misión libertadora, debe luchar en el Vendaval de Acero y Sangre y reclutar rebeldes contra el casi omnipotente Mago Blanco… entre rivales formidables, uno de ellos, un hijo suyo. Libro II de La Ciudad de Sal.",
  },
  {
    title: "El advenimiento",
    year: 2021,
    genre: "CF",
    summary:
      "La esperada secuela de Al final de la senda. Veinte años después, el temido matador Davo Stephan ben Yassiel llega al planeta-monasterio Tobado, donde místicos de todas las religiones anuncian la inminente encarnación de un dios… al que tal vez deba eliminar.",
  },
  {
    title: "Prueba de destrucción",
    year: 2021,
    genre: "CF",
    summary:
      "Cuentos de ciencia ficción que llevan al límite a hombres, máquinas y mundos.",
  },
  {
    title: "Sobras encogidas",
    year: 2023,
    genre: "Humor",
    summary:
      "Cuentos de humor: la cara más gamberra y desprejuiciada del autor.",
  },
];
