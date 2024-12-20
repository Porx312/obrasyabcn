import LocationMap from "@/components/LocationMap";
import ComoTrabajamos from "@/components/ui/ComoTrabajamos";
import FormularioReforma from "@/components/ui/Contacto/FormularioReforma";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import ItemServices from "@/components/ui/ItemServices";
import FAQSection from "@/components/ui/PreguntasFaq";
import Services from "@/components/ui/Services";
import Testimonios from "@/components/ui/Testimonios";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <>
      <section className=" flex  flex-col justify-center items-center ">
        <article className=" flex  flex-col items-center justify-between w-full lg:flex-row ">
          <div className="max-w-[700px] space-y-2 pb-8 pt-3  md:space-y-5">
            <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
              {siteMetadata.description}.
            </p>
            <h1 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              En <strong>ObrasYaBcn</strong> nos especializamos en diseñar y reformar ambientes
              que reflejan tu estilo único. Ya sea que quieras renovar tu hogar,
              oficina o cualquier otro espacio, nuestro equipo de expertos se
              encarga de todo: desde la planificación hasta la ejecución, con la
              garantía de calidad y compromiso.
            </h1>
            <FormularioReforma />
          </div>
          <div className="relative h-[300px] w-full lg:w-[500px]    ">
            <Image
              className="absolute left-16 top-8 rounded-xl"
              src="/static/images/reformas/reformas3.jpg"
              width={300}
              height={300}
              alt="Picture"
            />
            <Image
              className="absolute rounded-xl"
              src="/static/images/reformas/reformas2.jpg"
              width={200}
              height={200}
              alt="Picture"
            />
            <Image
              className="absolute bottom-1 right-20 rounded-xl"
              src="/static/images/reformas/reformas1.jpg"
              width={200}
              height={200}
              alt="Picture"
            />
          </div>
        </article>
        <ComoTrabajamos />
        <div className="flex flex-wrap justify-evenly pb-10 pt-20 ">
          <ItemServices />
        </div>

        <Services />
        <Testimonios />
        {/*    <LocationMap/> */}
        <FAQSection />
        <FloatingWhatsAppButton />
      </section>

      {/*    {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}
