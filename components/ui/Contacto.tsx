'use client'

import UseFormEmail from 'Hooks/UseFormEmail'
const servicios = [
  'Reforma integral',
  'Reforma de baño',
  'Reforma de cocina',
  'Pintura',
  'Electricidad',
  'Fontanería',
]
export default function ContactoReformas() {
  const {handleSubmit, onSubmit,register, errors, formStatus} = UseFormEmail()



  return (
    <div className="mx-auto max-w-md rounded-lg  bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-2xl text-black font-bold">Contacta con nosotros</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email es obligatorio' })}
              className="w-full rounded-md border  text-black px-3 py-2"
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
              className="w-full rounded-md text-black border px-3 py-2"
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
              className="w-full rounded-md text-black border px-3 py-2"
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
              className="w-full rounded-md border text-black px-3 py-2"
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
              className="w-full rounded-md border text-black px-3 py-2"
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
              className="w-full rounded-md border text-black px-3 py-2"
              rows={3}
            ></textarea>
          </div>

          {/* Botones */}
          <div className="mt-4 flex justify-end gap-4">
          
            <button
              type="submit"
              className="rounded-md bg-orange-700 px-4 py-2 text-white hover:bg-orange-800"
            >
              Enviar
            </button>
          </div>
        </form>
      {formStatus && <div className="mt-4 text-center text-sm text-gray-700">{formStatus}</div>}
    </div>
  )
}
