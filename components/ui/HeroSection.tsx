import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import FormularioAlerta from "./FormularioAlerta";

interface HeroSectionProps {
  siteMetadata: {
    description: string;
  };
}

export default function HeroSection({ siteMetadata }: HeroSectionProps) {
  return (
    <article className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="max-w-[700px] space-y-6 pb-8 pt-3 lg:pr-8">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
              {siteMetadata.description}
            </h1>
            <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
              En ObrasYaBcn nos especializamos en diseñar y reformar ambientes
              que reflejan tu estilo único. Ya sea que quieras renovar tu hogar,
              oficina o cualquier otro espacio, nuestro equipo de expertos se
              encarga de todo: desde la planificación hasta la ejecución, con la
              garantía de calidad y compromiso.
            </p>
            <div className="flex items-center space-x-4">
              <FormularioAlerta text="Presupuesto gratis" />
              <a
                href="#servicios"
                className="group flex items-center space-x-2 text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Ver nuestros servicios</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                4.9 de 5 estrellas (basado en más de 500 reseñas)
              </span>
            </div>
          </div>
          <div className="relative h-[400px] w-full max-w-[500px] lg:h-[500px]">
            <Image
              className="absolute left-0 top-0 rounded-xl shadow-lg transition-transform hover:scale-105"
              src="/static/images/reformas/reformas3.jpg"
              width={300}
              height={300}
              alt="Reforma de cocina moderna"
              layout="responsive"
            />
            <Image
              className="absolute right-0 top-1/4 rounded-xl shadow-lg transition-transform hover:scale-105"
              src="/static/images/reformas/reformas2.jpg"
              width={250}
              height={250}
              alt="Reforma de baño elegante"
              layout="responsive"
            />
            <Image
              className="absolute bottom-0 left-1/4 rounded-xl shadow-lg transition-transform hover:scale-105"
              src="/static/images/reformas/reformas1.jpg"
              width={250}
              height={250}
              alt="Reforma de salón acogedor"
              layout="responsive"
            />
            <div className="absolute -right-4 -top-4 rounded-lg bg-yellow-400 p-4 shadow-lg">
              <p className="text-lg font-bold text-gray-900">
                ¡Oferta especial!
              </p>
              <p className="text-sm text-gray-800">
                10% de descuento en tu primera reforma
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
