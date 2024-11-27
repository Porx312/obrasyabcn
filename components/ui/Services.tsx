import BtnPresupuesto from '../BtnPresupuesto'
import ServicesSlidesShow from './SlideShow/ServicesSlideshow'

const Services = () => {
  return (
    <article className=" flex flex-col justify-between gap-3 pt-10 lg:flex-row">
      <div className="flex max-w-[700px] flex-col gap-2 ">
        <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
          en obras ya barcelona nos enfocamos en
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, tenetur tempora
          dolores rerum natus laboriosam voluptas laudantium. Aliquam ratione et sunt magni.
          Perspiciatis laborum quos veniam, delectus libero culpa necessitatibus!
        </p>
        <BtnPresupuesto text="Pide Presupuesto!" />
      </div>
      <div className="flex w-[450px] flex-wrap justify-between gap-2 ">
        <div className="col-span-1 md:col-span-2 ">
          <ServicesSlidesShow />
        </div>
      </div>
    </article>
  )
}

export default Services
