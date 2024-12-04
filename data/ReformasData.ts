import {
  CheckCircle,
  Droplet,
  Paintbrush,
  Palette,
  Home,
  Box,
  Layers,
  Lightbulb,
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
      title: "Lo Que Hacemos por Ti",
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
      title: "Reformas de Cocina Hechas a Medida, Solo Para Ti",
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
      title: "Lo Que Hacemos por Ti",
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
];

export default ReformasData;
