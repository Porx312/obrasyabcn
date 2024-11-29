interface Services {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
}

const servicesData: Services[] = [
  {
    title: "Reformas Integrales",
    description: `¿Qué tal si pudieras buscar cualquier información en el mundo? Páginas web, imágenes, videos
      y más. Google tiene muchas características para ayudarte a encontrar exactamente lo que estás buscando
      for.`,
    imgSrc: "/static/images/reformas/reformas1.jpg",
    href: "https://www.google.com",
  },
  {
    title: "The Time Machine",
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
      to the desired date and press "Go". No more worrying about lost keys or
      forgotten headphones with this simple yet affordable solution.`,
    imgSrc: "/static/images/reformas/reformas2.jpg",

    href: "/blog/the-time-machine",
  },
  {
    title: "The Time Machine",
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
        to the desired date and press "Go". No more worrying about lost keys or
        forgotten headphones with this simple yet affordable solution.`,
    imgSrc: "/static/images/reformas/reformas3.jpg",

    href: "/blog/the-time-machine",
  },
];

export default servicesData;
