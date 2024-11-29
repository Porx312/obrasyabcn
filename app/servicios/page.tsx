import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import FormularioAlerta from "@/components/ui/FormularioAlerta";
import DoForYou from "@/components/ui/ServicesUi/DoForYou";
import EngagementSection from "@/components/ui/ServicesUi/Engangement";
import ServicesHeader from "@/components/ui/ServicesUi/ServicesHeader";
import VentajasSection from "@/components/ui/ServicesUi/VentajasSection";
import Image from "next/image";
import Link from "next/link";

export default function Servicios() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      <ServicesHeader />
      {/* Lo Que Hacemos por Ti */}
      <DoForYou />

      {/* Ventajas de Reformar con Pintura con Nosotros */}
      <VentajasSection />

      {/* ¿Por Qué Elegir Reformas Ya Barcelona? */}
      <EngagementSection />
      <FloatingWhatsAppButton />
    </main>
  );
}
