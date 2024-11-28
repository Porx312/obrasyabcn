import SlideShowTestimonios from './SlideShow/SlideshowTestimonios'

const Testimonios = () => {
  return (
    <article className=" flex flex-col-reverse items-center justify-between gap-3 pt-10 lg:flex-row ">
      <div className="">
        <SlideShowTestimonios />
      </div>
      <div className="flex w-[400px] flex-col gap-3 lg:w-[600px]">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-orange-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl">
          opiniones
        </h2>
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
          Que dicen sobre nosotros
        </h3>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia, libero est
          totam reiciendis dolore officiis, soluta sit, voluptatibus laboriosam voluptate recusandae
          assumenda accusamus. Nam architecto vero repudiandae ratione nihil.
        </p>
      </div>
    </article>
  )
}

export default Testimonios
