'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactoReformas() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    numero: '',
    servicio: '',
    codigoPostal: '',
    comentario: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    try {
      // Enviar el formulario con EmailJS
      const response = await emailjs.send(
        'service_6uvz7di', // Reemplazar con tu Service ID
        'template_vr3w5rl', // Reemplazar con tu Template ID
        {
          nombre: formData.nombre,
          email: formData.email,
          numero: formData.numero,
          servicio: formData.servicio,
          codigoPostal: formData.codigoPostal,
          comentario: formData.comentario,
        },
        'VRqRX_09wtqOHiv9l' // Reemplazar con tu Public Key
      )

      console.log('Formulario enviado con éxito', response.text)
      setFormStatus('Formulario enviado con éxito')

      // Limpiar el formulario después de enviarlo
      setFormData({
        nombre: '',
        email: '',
        numero: '',
        servicio: '',
        codigoPostal: '',
        comentario: '',
      })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setFormStatus('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-2xl font-bold">Contacta con nosotros</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="numero" className="mb-1 block text-sm font-medium text-gray-700">
            Número de teléfono
          </label>
          <input
            type="tel"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="servicio" className="mb-1 block text-sm font-medium text-gray-700">
            Servicio
          </label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona un servicio</option>
            <option value="cocina">Reforma de cocina</option>
            <option value="bano">Reforma de baño</option>
            <option value="integral">Reforma integral</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="codigoPostal" className="mb-1 block text-sm font-medium text-gray-700">
            Código Postal
          </label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {formStatus && <div className="mt-4 text-center text-sm text-gray-700">{formStatus}</div>}
    </div>
  )
}
