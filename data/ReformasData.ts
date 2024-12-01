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
interface ServicesReformas {
  name: string;
  title: string;
  description: string;
  doforyour: {
    title: string;
    icons: { icon: any; text: string }[];
  };
  href: string;
}

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
          icon: Palette,
          text: "Colores Personalizados que Reflejan tu Estilo",
        },
        { icon: Droplet, text: "Pintura de Alta Calidad y Ecológica" },
        { icon: Paintbrush, text: "Texturas y Acabados que Deslumbran" },
        { icon: Home, text: "Pintura para Todos los Espacios" },
        {
          icon: CheckCircle,
          text: "Técnicas Avanzadas para Resultados Perfectos",
        },
      ],
    },
    href: "reforma-pintura",
  },
  {
    name: "Cocina",
    title:
      "¡Haz de Tu Cocina el Corazón de Tu Hogar con Reformas Ya Barcelona!",
    description:
      "¿Estás listo para que tu cocina sea el lugar que siempre has soñado? ¡Lo haremos realidad, y más rápido de lo que imaginas!",
    doforyour: {
      title: "Reformas de Cocina Hechas a Medida, Solo Para Ti",
      icons: [
        { icon: Home, text: "Cocinas Personalizadas que Hablan de Ti" },
        { icon: Box, text: "Almacenaje Inteligente y Estilo sin Compromisos" },
        { icon: Lightbulb, text: "Tecnología de Punta en Tu Cocina" },
        { icon: Layers, text: "Superficies que Dejan Huella" },
        { icon: Lightbulb, text: "Ilumina tu Cocina con Estilo" },
      ],
    },
    href: "reforma-cocina",
  },
];

export default ReformasData;
