import Image from "next/image";
import { Paintbrush, Palette, Droplet, Home, CheckCircle } from "lucide-react";
import FormularioAlerta from "../FormularioAlerta";

export default function DoForYou() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Lo Que Hacemos por Ti
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Pintura a Medida para Tu Estilo y Necesidades
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: Palette,
                  text: "Colores Personalizados que Reflejan tu Estilo",
                },
                { icon: Droplet, text: "Pintura de Alta Calidad y Ecológica" },
                {
                  icon: Paintbrush,
                  text: "Texturas y Acabados que Deslumbran",
                },
                { icon: Home, text: "Pintura para Todos los Espacios" },
                {
                  icon: CheckCircle,
                  text: "Técnicas Avanzadas para Resultados Perfectos",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <FormularioAlerta
                text="Solicita Tu Presupuesto gratis"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              ></FormularioAlerta>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <Image
              src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1732883130/rexn3klewfnucdfzxbyz.jpg"
              alt="Pintura profesional en acción"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-yellow-500 opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
