import FormularioAlerta from '@/components/ui/FormularioAlerta'
import Image from 'next/image'
import Link from 'next/link'

export default function Servicios() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-100 py-20 rounded-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">¡Dale Vida y Color a Tu Hogar con las Reformas de Pintura de Reformas Ya Barcelona!</h1>
          <p className="text-xl mb-8">¿Te gustaría que tu hogar tuviera el toque perfecto que siempre soñaste? ¡Hazlo realidad con una reforma de pintura que lo transforme por completo!</p>
        </div>
      </section>

      {/* Lo Que Hacemos por Ti */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Lo Que Hacemos por Ti</h2>
          <h3 className="text-2xl font-semibold mb-4">Pintura a Medida para Tu Estilo y Necesidades</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Colores Personalizados que Reflejan tu Estilo</li>
            <li>Pintura de Alta Calidad y Ecológica</li>
            <li>Texturas y Acabados que Deslumbran</li>
            <li>Pintura para Todos los Espacios</li>
            <li>Técnicas Avanzadas para Resultados Perfectos</li>
          </ul>
        </div>
      </section>

      {/* Ventajas de Reformar con Pintura con Nosotros */}
      <section className="">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ventajas de Reformar con Pintura con Nosotros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Transformación Rápida y Económica</h3>
              <p>Reformar con pintura es una de las formas más efectivas de renovar tu hogar. ¡En pocos días, tu casa estará como nueva sin romper el banco!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Aumenta el Valor de tu Propiedad</h3>
              <p>Una capa de pintura de calidad no solo mejora el aspecto de tu hogar, sino que también aumenta su valor. ¡Es una inversión inteligente para el presente y el futuro!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Espacios más Cálidos, Modernos y Cómodos</h3>
              <p>Queremos que cada habitación de tu casa no solo se vea bien, sino que también se sienta acogedora. Con nuestras pinturas, cada espacio tendrá la atmósfera perfecta para que te sientas a gusto.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Diseños Únicos y a Tu Medida</h3>
              <p>No nos conformamos con lo común. Cada pared es un lienzo en blanco donde puedes expresar tu personalidad. ¡Nada de soluciones de catálogo! Creamos un ambiente único que se ajusta a ti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por Qué Elegir Reformas Ya Barcelona? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">¿Por Qué Elegir Reformas Ya Barcelona?</h2>
          <p className="mb-4">Porque entendemos lo que quieres, y lo hacemos realidad.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Más de 15 años de experiencia</li>
            <li>Calidad Garantizada</li>
            <li>Asesoramiento Personalizado</li>
          </ul>
        </div>
      </section>

      {/* ¡Hazlo Realidad Hoy! */}
      <section className="  py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¡Hazlo Realidad Hoy!</h2>
          <p className="mb-8">Tu hogar está a solo un paso de brillar con un nuevo color. ¿Por qué esperar más?</p>
          <div className="space-y-4">
            <p>¿Tienes dudas o preguntas? ¡Llámanos al [número de contacto] o mándanos un WhatsApp al [número]!</p>
            <p>¿Prefieres hacerlo online? ¡Agenda tu consulta gratuita aquí!</p>
          </div>
        <FormularioAlerta text='Contactanos Ahora' className='mt-2'/>
        </div>
      </section>
    </main>
  )
}

