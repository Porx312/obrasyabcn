import { CircuitBoardIcon, DropletIcon, HammerIcon, HomeIcon, Paintbrush2Icon, PipetteIcon, Plug2Icon, ShowerHeadIcon } from 'lucide-react';
import React from 'react';

const services = [
  { Icon: HomeIcon, title: 'Reformas integrales' },
  { Icon: ShowerHeadIcon, title: 'Reformas de baños' },
  { Icon: HammerIcon, title: 'Carpintería' },
  { Icon: Plug2Icon, title: 'Instalaciones eléctricas' },
  { Icon: PipetteIcon, title: 'Fontanería' },
  { Icon: DropletIcon, title: 'Impermeabilizaciones' },
  { Icon: CircuitBoardIcon, title: 'Pladur' },
  { Icon: Paintbrush2Icon, title: 'Pintura' },
];

const ItemServices = () => {
  return (
    <div className="w-full p-4">
      <ul className="m-1 flex flex-wrap justify-between gap-4">
        {services.map(({ Icon, title }) => (
          <li
            key={title}
            className="w-[170px] lg:w-[250px] flex flex-col p-4 hover:scale-105 transition-transform duration-300 cursor-pointer items-center justify-center bg-neutral-300 rounded-xl shadow-md hover:shadow-lg"
          >
            <Icon size={24} className="mb-2" />
            <span className="text-center font-semibold">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemServices;
