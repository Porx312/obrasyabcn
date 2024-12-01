"use client";
import { useState } from "react";
import { Clock, TrendingUp, Home, Palette } from "lucide-react";

interface Ventaja {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ventajas: Ventaja[] = [
  {
    icon: Clock,
    title: "Transformación Rápida y Económica",
    description:
      "Reformar con pintura es una de las formas más efectivas de renovar tu hogar. ¡En pocos días, tu casa estará como nueva sin romper el banco!",
  },
  {
    icon: TrendingUp,
    title: "Aumenta el Valor de tu Propiedad",
    description:
      "Una capa de pintura de calidad no solo mejora el aspecto de tu hogar, sino que también aumenta su valor. ¡Es una inversión inteligente para el presente y el futuro!",
  },
  {
    icon: Home,
    title: "Espacios más Cálidos, Modernos y Cómodos",
    description:
      "Queremos que cada habitación de tu casa no solo se vea bien, sino que también se sienta acogedora. Con nuestras pinturas, cada espacio tendrá la atmósfera perfecta para que te sientas a gusto.",
  },
  {
    icon: Palette,
    title: "Diseños Únicos y a Tu Medida",
    description:
      "No nos conformamos con lo común. Cada pared es un lienzo en blanco donde puedes expresar tu personalidad. ¡Nada de soluciones de catálogo! Creamos un ambiente único que se ajusta a ti.",
  },
];

export default function VentajasSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Ventajas de Reformar con Nosotros
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className={`mb-4 text-4xl text-black 'text-yellow-500`}>
                <ventaja.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {ventaja.title}
              </h3>
              <p className="text-gray-600 transition-all duration-300 ease-in-out ">
                {ventaja.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
