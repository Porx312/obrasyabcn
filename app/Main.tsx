import BtnPresupuesto from '@/components/BtnPresupuesto'
import ItemServices from '@/components/ui/ItemServices'
import Services from '@/components/ui/Services'
import Testimonios from '@/components/ui/Testimonios'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <>
      <section className=" flex flex-col justify-start ">
        <article className=" flex flex-col items-start justify-between lg:flex-row ">
          <div className="max-w-[700px] space-y-2 pb-8 pt-3  md:space-y-5">
            <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
              {siteMetadata.description}.
            </p>
            <h1 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              En ObrasYaBcn nos especializamos en diseñar y reformar ambientes que reflejan tu
              estilo único. Ya sea que quieras renovar tu hogar, oficina o cualquier otro espacio,
              nuestro equipo de expertos se encarga de todo: desde la planificación hasta la
              ejecución, con la garantía de calidad y compromiso 👇
            </h1>
            <BtnPresupuesto text="Presupuesto Gratis" />
          </div>
          <div className="relative h-[300px] w-[450px] ">
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
              className="absolute bottom-2 right-1 rounded-xl"
              src="/static/images/reformas/reformas1.jpg"
              width={200}
              height={200}
              alt="Picture"
            />
          </div>
        </article>
        <div className="flex flex-wrap justify-evenly pb-32 pt-24 ">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ItemServices key={item} />
          ))}
        </div>
        <Services />
        <Testimonios />
      </section>
      {/*    {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
