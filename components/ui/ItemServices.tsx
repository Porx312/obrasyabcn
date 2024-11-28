import {
  CircuitBoardIcon,
  DropletIcon,
  HammerIcon,
  HomeIcon,
  Paintbrush2Icon,
  PipetteIcon,
  Plug2Icon,
  ShowerHeadIcon,
} from 'lucide-react'
import React from 'react'
import FormularioAlerta from './FormularioAlerta'

const services = [
  { Icon: HomeIcon, title: 'Reformas integrales' },
  { Icon: ShowerHeadIcon, title: 'Reformas de baños' },
  { Icon: HammerIcon, title: 'Carpintería' },
  { Icon: Plug2Icon, title: 'Instalaciones eléctricas' },
  { Icon: PipetteIcon, title: 'Fontanería' },
  { Icon: DropletIcon, title: 'Impermeabilizacion' },
  { Icon: CircuitBoardIcon, title: 'Pladur' },
  { Icon: Paintbrush2Icon, title: 'Pintura' },
]

const ItemServices = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-4">
      <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
        Te apetece Algun Servicio en especifico?
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Selecciona uno de nuestros servicios y lo mejor es que el presupuesto es gratis!
      </p>
      <ul className="m-1 flex flex-wrap justify-between gap-4">
        {services.map(({ Icon, title }) => (
          <li
            key={title}
            className="flex w-[140px] cursor-pointer flex-col items-center justify-center rounded-xl bg-neutral-200 p-4 text-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:w-[250px]"
          >
            <Icon size={24} className="mb-2" />
            <span className="text-center font-semibold">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemServices
