'use client'

import { useState } from 'react'
import ReactModal from 'react-modal'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

interface FormData {
  email: string
  numero: string
  servicio: string
  nombre: string
  codigoPostal: string
  comentario: string
}

const servicios = [
  'Reforma integral',
  'Reforma de baño',
  'Reforma de cocina',
  'Pintura',
  'Electricidad',
  'Fontanería',
]
interface FormularioAlertaProps {
  className?: string
  text: string // `?` makes it optional
}

export default function FormularioAlerta({ className, text }: FormularioAlertaProps) {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  // Función para manejar el cierre del modal
  const closeModal = () => setIsOpen(false)

  // Función para manejar el envío del formulario
  const onSubmit = async (data: FormData) => {
    console.log('Formulario enviado:', data)
    try {
      // Enviar el formulario con EmailJS
      const response = await emailjs.send(
        'service_6uvz7di', // Reemplazar con tu Service ID
        'template_vr3w5rl', // Reemplazar con tu Template ID
        {
          nombre: data.nombre,
          email: data.email,
          numero: data.numero,
          servicio: data.servicio,
          codigoPostal: data.codigoPostal,
          comentario: data.comentario,
        },
        'VRqRX_09wtqOHiv9l' // Reemplazar con tu Public Key
      )

      console.log('Formulario enviado con éxito', response.text)
      reset() // Limpiar el formulario después de enviarlo
      closeModal() // Cerrar el modal después de enviarlo
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className={`w-[200px] rounded-lg bg-orange-700 p-3 text-white transition-all hover:bg-orange-800 ${className}`}
      >
        {text}
      </button>

      {/* Modal con el formulario */}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario de Contacto"
        ariaHideApp={false} // Solo si no estás usando React Strict Mode
        className="modal mx-auto max-w-lg rounded-md bg-white p-8 shadow-lg"
        overlayClassName="overlay z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="mb-4 text-xl font-semibold">Formulario de Contacto</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[380px] space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email es obligatorio' })}
              className="w-full rounded-md border px-3 py-2"
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono:
            </label>
            <input
              id="telefono"
              type="tel"
              {...register('numero', { required: 'Teléfono es obligatorio' })}
              className="w-full rounded-md border px-3 py-2"
            />
            {errors.numero && <span className="text-sm text-red-500">{errors.numero.message}</span>}
          </div>

          {/* Servicio */}
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
              Servicio:
            </label>
            <select
              id="servicio"
              {...register('servicio', { required: 'Selecciona un servicio' })}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Seleccione un servicio</option>
              {servicios.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
            {errors.servicio && (
              <span className="text-sm text-red-500">{errors.servicio.message}</span>
            )}
          </div>

          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              id="nombre"
              type="text"
              {...register('nombre', { required: 'Nombre es obligatorio' })}
              className="w-full rounded-md border px-3 py-2"
            />
            {errors.nombre && <span className="text-sm text-red-500">{errors.nombre.message}</span>}
          </div>

          {/* Código Postal */}
          <div>
            <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700">
              Código Postal:
            </label>
            <input
              id="codigoPostal"
              type="text"
              {...register('codigoPostal', { required: 'Código Postal es obligatorio' })}
              className="w-full rounded-md border px-3 py-2"
            />
            {errors.codigoPostal && (
              <span className="text-sm text-red-500">{errors.codigoPostal.message}</span>
            )}
          </div>

          {/* Comentarios */}
          <div>
            <label htmlFor="comentario" className="block text-sm font-medium text-gray-700">
              Comentario:
            </label>
            <textarea
              id="comentario"
              {...register('comentario')}
              className="w-full rounded-md border px-3 py-2"
              rows={3}
            ></textarea>
          </div>

          {/* Botones */}
          <div className="mt-4 flex justify-end gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-orange-700 px-4 py-2 text-white hover:bg-orange-800"
            >
              Enviar
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  )
}
