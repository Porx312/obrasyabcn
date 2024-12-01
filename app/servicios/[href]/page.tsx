import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import DoForYou from "@/components/ui/ServicesUi/DoForYou";
import EngagementSection from "@/components/ui/ServicesUi/Engangement";
import ServicesHeader from "@/components/ui/ServicesUi/ServicesHeader";
import VentajasSection from "@/components/ui/ServicesUi/VentajasSection";
import ReformasData from "@/data/ReformasData";
interface Props {
  params: {
    href: string;
  };
}

const page = ({ params }: Props) => {
  const { href } = params;

  return (
    <>
      {ReformasData.filter((item) => item.href === href).map((item) => (
        <>
          <ServicesHeader
            name={item.name}
            description={item.description}
            title={item.title}
          />

          <DoForYou icons={item.doforyour.icons} title={item.doforyour.title} />
          <VentajasSection />
          <EngagementSection />
          <FloatingWhatsAppButton />
        </>
      ))}
    </>
  );
};

export default page;
