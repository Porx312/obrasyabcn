import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import FormularioAlerta from "../FormularioAlerta";

const ServicesHeader = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1732883130/rexn3klewfnucdfzxbyz.jpg"
          alt="Reforma de pintura"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 pt-16 pb-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            ¡Dale Vida y Color a Tu Hogar con las Reformas de Pintura de
            Reformas Ya Barcelona!
          </h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            ¿Te gustaría que tu hogar tuviera el toque perfecto que siempre
            soñaste? ¡Hazlo realidad con una reforma de pintura que lo
            transforme por completo!
          </p>
          <div className="text-center">
            <FormularioAlerta
              text="Solicitar Reforma de Baño!"
               className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
