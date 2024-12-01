import servicesData from "@/data/servicesData";
import FormularioAlerta from "./FormularioAlerta";
import { ServicesSlider } from "./SlideShow/ServicerSlider";
import ServicesSlideShow from "./SlideShow/ServicesSlideshow";

const Services = () => {
  return (
    <article className="flex flex-col w-full items-center justify-between gap-6 p-10 lg:flex-row">
      <div className="flex w-full min-w-[350px] flex-col gap-4">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
          En Obras Ya Barcelona, ¡nos enfocamos en hacer realidad tus sueños!
        </h2>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
          Desde reformas integrales hasta renovaciones específicas, nuestro
          equipo se dedica a transformar espacios con pasión y profesionalismo.
          <strong className="text-blue-600">
            {" "}
            Tu proyecto es nuestra prioridad.{" "}
          </strong>
          ¡Creamos ambientes únicos, modernos y funcionales, diseñados a la
          medida de tus necesidades!
        </p>
        <FormularioAlerta text="¿Listo para transformar tu espacio?" />
      </div>
      <div className="flex w-full flex-wrap items-center justify-end gap-4">
        <ServicesSlider services={servicesData} />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Más de 10 años de experiencia nos respaldan. ¡Déjanos inspirarte!
        </p>
      </div>
    </article>
  );
};

export default Services;
