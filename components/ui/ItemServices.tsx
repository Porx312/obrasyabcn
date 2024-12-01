"use client";
import { useState, useRef } from "react";

import {
  HomeIcon,
  ShowerHeadIcon,
  HammerIcon,
  Plug2Icon,
  PipetteIcon,
  DropletIcon,
  CircuitBoardIcon,
  Paintbrush2Icon,
  WrenchIcon,
  SunIcon,
  WindIcon,
  Move3dIcon,
  CloudDrizzleIcon,
  ZapIcon,
  UmbrellaIcon,
  BuildingIcon,
  UtensilsCrossedIcon,
  BriefcaseIcon,
  LandmarkIcon,
  HouseIcon,
  FactoryIcon,
  ScissorsIcon,
  LayersIcon,
  ConstructionIcon,
  LockIcon,
  GridIcon,
  MoreHorizontalIcon,
  TruckIcon,
  LeafIcon,
  BugIcon,
  ThermometerSunIcon,
  RulerIcon,
} from "lucide-react";
import Link from "next/link";

/* const services = [
  { Icon: HomeIcon, title: 'Reformas integrales' },
  { Icon: ShowerHeadIcon, title: 'Reformas de baños' },
  { Icon: HammerIcon, title: 'Carpintería' },
  { Icon: Plug2Icon, title: 'Instalaciones eléctricas' },
  { Icon: PipetteIcon, title: 'Fontanería' },
  { Icon: DropletIcon, title: 'Impermeabilizacion' },
  { Icon: CircuitBoardIcon, title: 'Pladur' },
  { Icon: Paintbrush2Icon, title: 'Pintura' },
  ] */
const services = [
  { Icon: Paintbrush2Icon, title: "Pintura", href: "reforma-pintura" },
  {
    Icon: UtensilsCrossedIcon,
    title: "Reformas cocinas",
    href: "reforma-cocina",
  },
  /*  { Icon: HomeIcon, title: "Reformas integrales" },
  { Icon: ShowerHeadIcon, title: "Reformas de baños" },
  { Icon: HammerIcon, title: "Carpintería" },
  { Icon: Plug2Icon, title: "Instalaciones eléctricas" },
  { Icon: PipetteIcon, title: "Fontanería" },
  { Icon: DropletIcon, title: "Impermeabilización" },
  { Icon: CircuitBoardIcon, title: "Pladur" },
  { Icon: WrenchIcon, title: "Aladores" },
  { Icon: SunIcon, title: "Placas solares" },
  { Icon: WindIcon, title: "Aire acondicionado" },
  { Icon: Move3dIcon, title: "Ascensores" },
  { Icon: CloudDrizzleIcon, title: "Aerotermia" },
  { Icon: ZapIcon, title: "Electricistas" },
  { Icon: UmbrellaIcon, title: "Toldos" },
  { Icon: BuildingIcon, title: "Reformas" },
  { Icon: ShowerHeadIcon, title: "Reformas baños" },
  { Icon: HomeIcon, title: "Reformas viviendas" },
  { Icon: BriefcaseIcon, title: "Reformas oficinas" },
  { Icon: LandmarkIcon, title: "Rehabilitación fachadas" },
  { Icon: HouseIcon, title: "Construcción casas" },
  { Icon: HouseIcon, title: "Construcción casas prefabricadas" },
  { Icon: FactoryIcon, title: "Construcción naves industriales" },
  { Icon: ScissorsIcon, title: "Derribos" },
  { Icon: LayersIcon, title: "Obras menores" },
  { Icon: DropletIcon, title: "Humedades" },
  { Icon: Paintbrush2Icon, title: "Pintores" },
  { Icon: ConstructionIcon, title: "Albañiles" },
  { Icon: WrenchIcon, title: "Fontaneros" },
  { Icon: LockIcon, title: "Cerrajeros" },
  { Icon: GridIcon, title: "Hormigón impreso" },
  { Icon: TruckIcon, title: "Mudanzas" },
  { Icon: LeafIcon, title: "Jardineros" },
  { Icon: BugIcon, title: "Control plagas" },
  { Icon: ThermometerSunIcon, title: "Calefacción" },
  { Icon: RulerIcon, title: "Arquitectos" },
  { Icon: MoreHorizontalIcon, title: "Otros trabajos" }, */
];

const ItemServices = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Número de servicios visibles inicialmente
  const containerRef = useRef<HTMLDivElement>(null); // Referencia para volver a la posición inicial

  const toggleVisibility = () => {
    if (visibleCount === 8) {
      setVisibleCount(services.length); // Mostrar todos los servicios
    } else {
      setVisibleCount(8); // Colapsar la lista y volver a la posición inicial
      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="flex w-full   my-6 p-10  flex-col gap-2" ref={containerRef}>
      <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
        ¿Te apetece algún servicio en específico?
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Selecciona uno de nuestros servicios y lo mejor es que el presupuesto es
        gratis!
      </p>
      {/* Lista de servicios */}
      <ul
        className={`m-1 flex flex-wrap justify-evenly gap-4 transition-all duration-300 ${
          visibleCount === services.length ? "max-h-[3000px]" : "max-h-[500px]"
        }`}
      >
        {services.slice(0, visibleCount).map(({ Icon, title, href }) => (
          <Link
            href={`servicios/${href}`}
            key={title}
            className="flex w-[140px] cursor-pointer flex-col items-center justify-center rounded-xl bg-neutral-200 p-4 text-black shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:w-[250px]"
          >
            {Icon ? <Icon /> : <span>No Icon Available</span>}
            <span className="text-center font-semibold">{title}</span>
          </Link>
        ))}
      </ul>
      {/* Botón de alternar */}
      <button
        onClick={toggleVisibility}
        className="flex bg-slate-50 hover:scale-105 transition-all self-center mt-2 p-2 w-[200px] text-black items-center justify-center rounded-lg"
      >
        {visibleCount === 8 ? "Ver más Servicios" : "Ver menos Servicios"}
      </button>
    </div>
  );
};

export default ItemServices;
