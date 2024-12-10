import {
  CheckCircle,
  Droplet,
  Paintbrush,
  Palette,
  Home,
  Box,
  Layers,
  Lightbulb,
  Plug,
  Wrench,
} from "lucide-react";

// Centralizamos los íconos para evitar redundancia y errores tipográficos.
const Icons = {
  CheckCircle,
  Droplet,
  Paintbrush,
  Palette,
  Home,
  Box,
  Layers,
  Lightbulb,
  Plug,
  Wrench,
};

// Definimos la interfaz que estructura la información de los servicios de reformas.
interface ServicesReformas {
  name: string; // Nombre del servicio (e.g., "Pintura", "Cocina")
  title: string; // Título principal del servicio
  description: string; // Descripción breve del servicio
  doforyour: {
    title: string; // Título de la sección "Lo Que Hacemos por Ti"
    icons: { icon: any; text: string }[]; // Lista de íconos y textos descriptivos
  };
  href: string; // Enlace para más detalles del servicio
  img: string;
}

// Datos de las reformas, estructurados y mejor organizados.
const ReformasData: ServicesReformas[] = [
  {
    name: "Pintura",
    title:
      "¡Dale Vida y Color a Tu Hogar con las Reformas de Pintura de Reformas Ya Barcelona!",
    description:
      "¿Te gustaría que tu hogar tuviera el toque perfecto que siempre soñaste? ¡Hazlo realidad con una reforma de pintura que lo transforme por completo!",
    doforyour: {
      title: "¡Transformamos Tus Paredes en Obras de Arte!",
      icons: [
        {
          icon: Icons.Palette,
          text: "Colores Personalizados que Reflejan tu Estilo",
        },
        { icon: Icons.Droplet, text: "Pintura de Alta Calidad y Ecológica" },
        { icon: Icons.Paintbrush, text: "Texturas y Acabados que Deslumbran" },
        { icon: Icons.Home, text: "Pintura para Todos los Espacios" },
        {
          icon: Icons.CheckCircle,
          text: "Técnicas Avanzadas para Resultados Perfectos",
        },
      ],
    },
    href: "reforma-pintura",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733315345/coiwowmwsulew2w6gk05.jpg",
  },
  {
    name: "Reforma de Cocina",
    title:
      "¡Haz de Tu Cocina el Corazón de Tu Hogar con Reformas Ya Barcelona!",
    description:
      "¿Estás listo para que tu cocina sea el lugar que siempre has soñado? ¡Lo haremos realidad, y más rápido de lo que imaginas!",
    doforyour: {
      title: "¡Crea la Cocina de Tus Sueños, Hecha a Tu Medida!",
      icons: [
        { icon: Icons.Home, text: "Cocinas Personalizadas que Hablan de Ti" },
        {
          icon: Icons.Box,
          text: "Almacenaje Inteligente y Estilo sin Compromisos",
        },
        { icon: Icons.Lightbulb, text: "Tecnología de Punta en Tu Cocina" },
        { icon: Icons.Layers, text: "Superficies que Dejan Huella" },
        { icon: Icons.Lightbulb, text: "Ilumina tu Cocina con Estilo" },
      ],
    },
    href: "reforma-cocina",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733315205/t5eej5opgmqvu1fjuvmg.jpg",
  },
  {
    name: "Reforma de Baño",
    title: "¡Convierte tu Baño en un Oasis de Relax con Reformas Ya Barcelona!",
    description:
      "¿Sueñas con un baño moderno, funcional y elegante? ¡Reformas Ya Barcelona lo hace realidad con soluciones a medida que combinan confort y estilo!",
    doforyour: {
      title: "¡Diseñamos Baños que Te Harán Sentir en un Spa!",
      icons: [
        { icon: Icons.Home, text: "Diseños Personalizados que Encantan" },
        { icon: Icons.Droplet, text: "Soluciones Eficientes y Sostenibles" },
        { icon: Icons.Layers, text: "Materiales de Alta Calidad y Duraderos" },
        { icon: Icons.Lightbulb, text: "Iluminación que Realza tu Espacio" },
        {
          icon: Icons.CheckCircle,
          text: "Detalles y Acabados que Hacen la Diferencia",
        },
      ],
    },
    href: "reforma-banos",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1732883130/rexn3klewfnucdfzxbyz.jpg",
  },
  {
    name: "Reforma Integral",
    title:
      "¡Transforma tu Hogar con Reformas Integrales de Calidad con Reformas Ya Barcelona!",
    description:
      "¿Quieres darle una nueva vida a tu hogar? Reformas Ya Barcelona te ofrece reformas integrales adaptadas a tus necesidades, combinando funcionalidad, estética y calidad en cada rincón de tu casa.",
    doforyour: {
      title: "¡Rediseñamos tu Hogar de Arriba a Abajo!",
      icons: [
        {
          icon: Icons.Home,
          text: "Proyectos Personalizados para Cada Espacio",
        },
        { icon: Icons.Droplet, text: "Soluciones Innovadoras y Sostenibles" },
        {
          icon: Icons.Layers,
          text: "Materiales de Alta Gama y Larga Durabilidad",
        },
        { icon: Icons.Lightbulb, text: "Diseño de Interiores que Inspira" },
        {
          icon: Icons.CheckCircle,
          text: "Acabados Impecables para un Toque de Distinción",
        },
      ],
    },
    href: "reforma-integral",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733319801/fn7px9zicbna4mwqhm6z.jpg",
  },
  {
    name: "Pladur",
    title:
      "¡Crea Espacios Versátiles y Modernos con Instalaciones de Pladur de Reformas Ya Barcelona!",
    description:
      "El pladur es la solución ideal para construir espacios funcionales y estéticamente impecables. Desde tabiques hasta techos y revestimientos, te ofrecemos acabados de alta calidad que se adaptan a cualquier estilo.",
    doforyour: {
      title: "¡Reinventa tu Hogar o Local con Pladur!",
      icons: [
        { icon: Icons.Layers, text: "Tabiques y Techos a Medida" },
        { icon: Icons.Lightbulb, text: "Sistemas de Iluminación Integrados" },
        { icon: Icons.Home, text: "Aislamiento Térmico y Acústico" },
        { icon: Icons.CheckCircle, text: "Montaje Rápido y Duradero" },
        {
          icon: Icons.Box,
          text: "Soluciones Creativas para Espacios Reducidos",
        },
      ],
    },
    href: "reforma-pladur",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397012/wixolg0ovovz4damhrn8.jpg",
  },
  {
    name: "Fontanería",
    title:
      "¡Soluciones de Fontanería Eficientes y Confiables con Reformas Ya Barcelona!",
    description:
      "¿Problemas con tus tuberías o necesitas renovar tu sistema de fontanería? Nuestro equipo de profesionales garantiza instalaciones modernas, eficientes y libres de preocupaciones.",
    doforyour: {
      title: "¡Hacemos que el Agua Fluya sin Problemas!",
      icons: [
        { icon: Icons.Droplet, text: "Instalaciones y Reparaciones Complejas" },
        { icon: Icons.Wrench, text: "Mantenimiento Preventivo y Correctivo" },
        { icon: Icons.Plug, text: "Sistemas de Agua Caliente Eficientes" },
        { icon: Icons.Box, text: "Renovación Completa de Baños y Cocinas" },
        { icon: Icons.CheckCircle, text: "Soluciones Rápidas y Garantizadas" },
      ],
    },
    href: "reforma-fontaneria",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397175/ttyz9lpmjzvxprg4pc26.jpg",
  },
  {
    name: "Reforma de Oficinas",
    title:
      "¡Transforma tu Espacio de Trabajo con las Reformas de Oficinas de Reformas Ya Barcelona!",
    description:
      "¿Buscas una oficina moderna, funcional y acorde a las necesidades de tu equipo? Reformas Ya Barcelona convierte cualquier espacio en un lugar productivo y estilizado.",
    doforyour: {
      title: "¡Crea Oficinas que Inspiran y Motivan!",
      icons: [
        { icon: Icons.Home, text: "Diseño Ergonométrico y Funcional" },
        { icon: Icons.Lightbulb, text: "Iluminación Profesional y Ambiental" },
        { icon: Icons.Box, text: "Espacios de Almacenaje Inteligentes" },
        { icon: Icons.Palette, text: "Acabados Modernos y Elegantes" },
        {
          icon: Icons.CheckCircle,
          text: "Adecuación Técnica y Cableado Eficiente",
        },
      ],
    },
    href: "reforma-oficinas",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397096/y4qgps38o0squksbboto.jpg",
  },
  {
    name: "Obras Menores",
    title: "¡Pequeñas Obras, Grandes Resultados con Reformas Ya Barcelona!",
    description:
      "¿Necesitas ajustes o reparaciones rápidas? En Reformas Ya Barcelona atendemos pequeñas obras con el mismo compromiso y calidad que los grandes proyectos.",
    doforyour: {
      title: "¡Resolvemos Tus Necesidades con Rapidez y Precisión!",
      icons: [
        { icon: Icons.Wrench, text: "Reparaciones y Ajustes Precisos" },
        { icon: Icons.Paintbrush, text: "Pequeños Trabajos de Pintura" },
        { icon: Icons.Layers, text: "Revestimientos y Mejoras Puntuales" },
        { icon: Icons.Box, text: "Montaje de Muebles y Elementos Decorativos" },
        { icon: Icons.CheckCircle, text: "Atención Rápida y Profesional" },
      ],
    },
    href: "obras-menores",
    img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396757/rvy4iclukm3duyo48wsl.jpg",
  },
];

export default ReformasData;
