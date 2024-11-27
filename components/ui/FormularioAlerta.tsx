'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const servicios = ['Reforma integral', 'Reforma de baño', 'Reforma de cocina', 'Pintura', 'Electricidad', 'Fontanería']
interface Props {
    text: string
    className?: string
}
export default function FormularioAlerta({text, className}: Props) {
  const [formData, setFormData] = useState({
    email: '',
    telefono: '',
    servicio: '',
    nombre: '',
    apellido: '',
    comentario: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    MySwal.close()
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  }

  const mostrarFormulario = () => {
    MySwal.fire({
      title: `Solicitar Informacion`,
      html: (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Seleccione un servicio</option>
            {servicios.map((servicio) => (
              <option key={servicio} value={servicio}>{servicio}</option>
            ))}
          </select>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <textarea
            name="comentario"
            placeholder="Comentario"
            value={formData.comentario}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      ),
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        container: '!z-[1000]'
      }
    })
  }

  return (
    <button
      onClick={mostrarFormulario}
      className={`${className} w-[200px] rounded-lg bg-orange-700 p-3 text-white transition-all hover:bg-orange-700`}
    >
     {text}
    </button>
  )
}

