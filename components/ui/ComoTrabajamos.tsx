import React from "react";
import { Hammer, Pencil, Calendar, ThumbsUp } from "lucide-react";

const ComoTrabajamos = () => {
  const pasos = [
    {
      icon: Pencil,
      title: "Diseño",
      description:
        "Creamos un diseño personalizado según tus necesidades y preferencias.",
    },
    {
      icon: Calendar,
      title: "Planificación",
      description:
        "Desarrollamos un plan detallado y un cronograma para tu proyecto.",
    },
    {
      icon: Hammer,
      title: "Ejecución",
      description:
        "Llevamos a cabo la reforma con profesionales altamente cualificados.",
    },
    {
      icon: ThumbsUp,
      title: "Entrega",
      description:
        "Realizamos una revisión final y te entregamos tu espacio renovado.",
    },
  ];

  return (
    <section className=" py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Cómo Trabajamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <paso.icon className="w-12 h-12 text-primary text-black" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {paso.title}
              </h3>
              <p className="text-gray-600 text-center">{paso.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajamos;
