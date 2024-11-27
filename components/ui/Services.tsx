import FormularioAlerta from './FormularioAlerta'
import ServicesSlideShow from './SlideShow/ServicesSlideshow'

const Services = () => {
  return (
    <article className=" flex flex-col justify-between  gap-3 pt-10 lg:flex-row">
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
        <FormularioAlerta text="Pide Presupuesto!" />
      </div>
      <div className="flex w-[500px] flex-wrap justify-between gap-2 ">
          <ServicesSlideShow/>
      </div>
    </article>
  )
}

export default Services
