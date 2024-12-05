"use client";

import UseFormEmail from "Hooks/UseFormEmail";
import { Calculator } from "lucide-react";
import ReactModal from "react-modal";

const servicios = [
 "Reforma Integral",
  "Reforma de Baño",
  "Reforma de Cocina",
  "Pintura",
  "Pladur", 
  "Fontanería",
  "Reforma de Oficinas",
  "Obras Menores"
];
interface FormularioAlertaProps {
  className?: string;
  text: string;
  reforma?: string; // `?` makes it optional
}

export default function FormularioAlerta({
  className,
  text,
  reforma,
}: FormularioAlertaProps) {
  const {
    handleSubmit,
    isOpen,
    onSubmit,
    register,
    setIsOpen,
    closeModal,
    errors,
    formStatus,
  } = UseFormEmail();
  // Función para manejar el cierre del modal
  // Función para manejar el envío del formulario

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button
      onClick={()=> setIsOpen(true)}
      className={className ? className : "group relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 px-4 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-yellow-600 hover:to-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"}
    >
      <span className="relative z-10 uppercase tracking-wider">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-0 left-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
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
        <h2 className="mb-4 text-xl text-black font-semibold">
          Formulario de Contacto
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[280px] space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email es obligatorio" })}
              className="w-full text-black rounded-md border px-3 py-2"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <input
              id="telefono"
              type="tel"
              {...register("numero", { required: "Teléfono es obligatorio" })}
              className="w-full text-black rounded-md border px-3 py-2"
            />
            {errors.numero && (
              <span className="text-sm text-red-500">
                {errors.numero.message}
              </span>
            )}
          </div>

          {/* Servicio */}
          <div>
            <label
              htmlFor="servicio"
              className="block text-sm font-medium text-gray-700"
            >
              Servicio:
            </label>
            <select
              id="servicio"
              {...register("servicio", { required: "Selecciona un servicio" })}
              className="w-full text-black rounded-md border px-3 py-2"
              defaultValue={reforma || ""}
            >
              <option value="">Seleccione un servicio</option>
              {servicios.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
            {errors.servicio && (
              <span className="text-sm text-red-500">
                {errors.servicio.message}
              </span>
            )}
          </div>

          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              id="nombre"
              type="text"
              {...register("nombre", { required: "Nombre es obligatorio" })}
              className="w-full text-black rounded-md border px-3 py-2"
            />
            {errors.nombre && (
              <span className="text-sm text-red-500">
                {errors.nombre.message}
              </span>
            )}
          </div>

          {/* Código Postal */}
          <div>
            <label
              htmlFor="codigoPostal"
              className="block text-sm font-medium text-gray-700"
            >
              Código Postal:
            </label>
            <input
              id="codigoPostal"
              type="text"
              {...register("codigoPostal", {
                required: "Código Postal es obligatorio",
              })}
              className="w-full rounded-md text-black border px-3 py-2"
            />
            {errors.codigoPostal && (
              <span className="text-sm text-red-500">
                {errors.codigoPostal.message}
              </span>
            )}
          </div>

          {/* Comentarios */}
          <div>
            <label
              htmlFor="comentario"
              className="block text-sm font-medium text-gray-700"
            >
              Comentario:
            </label>
            <textarea
              id="comentario"
              {...register("comentario")}
              className="w-full text-black rounded-md border px-3 py-2"
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
        {formStatus && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {formStatus}
          </div>
        )}
      </ReactModal>
    </div>
  );
}
