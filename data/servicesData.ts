interface Services {
  title: string;
  description: string;
  imgSrc?: string;
}

const servicesData: Services[] = [
  {
    title: "Reformas Integrales",
    description:
      "Transformamos completamente tu espacio con soluciones personalizadas y de alta calidad.",
    imgSrc: "/static/images/reformas/reformas2.jpg",
  },
  {
    title: "Cocinas Modernas",
    description:
      "Diseñamos y renovamos cocinas funcionales y estéticamente atractivas para tu hogar.",
    imgSrc: "/static/images/reformas/reformas1.jpg",
  },
  {
    title: "Baños de Lujo",
    description:
      "Creamos espacios de baño elegantes y relajantes con los mejores materiales y acabados.",
    imgSrc: "/static/images/reformas/reformas3.jpg",
  },
];

export default servicesData;
