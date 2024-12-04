"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Qué incluye el servicio de reformas integrales?",
    answer:
      "El servicio de reformas integrales incluye la renovación completa de una vivienda, oficina o local. Esto puede abarcar desde la demolición inicial hasta la instalación de nuevos sistemas eléctricos, fontanería, revestimientos, y acabados finales como pintura y carpintería.",
  },
  {
    question: "¿Cuánto tiempo lleva completar una reforma?",
    answer:
      "El tiempo necesario para completar una reforma varía según la magnitud del proyecto. Las reformas integrales pueden llevar entre 6 y 12 semanas, mientras que reformas más pequeñas, como un baño o cocina, pueden completarse en 2 a 4 semanas.",
  },
  {
    question: "¿Ofrecen asesoramiento en el diseño?",
    answer:
      "Sí, ofrecemos asesoramiento personalizado en el diseño para asegurarnos de que la reforma cumpla con sus expectativas. Esto incluye la selección de materiales, distribución de espacios y acabados que se adapten a sus necesidades y presupuesto.",
  },
  {
    question: "¿Necesito permisos para realizar una reforma?",
    answer:
      "Dependiendo del tipo de reforma, puede ser necesario obtener permisos. Por ejemplo, trabajos estructurales o modificaciones en fachadas suelen requerir autorización. Nos encargamos de gestionar todos los permisos necesarios por usted.",
  },
  {
    question: "¿Cuál es el costo de una reforma integral?",
    answer:
      "El costo depende de varios factores, como el tamaño del espacio, los materiales seleccionados y el alcance del trabajo. Ofrecemos presupuestos detallados y personalizados para que tenga una idea clara de los costos antes de comenzar.",
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b w-full  border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-base">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 ">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Resolvemos tus dudas
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </section>
  );
}
