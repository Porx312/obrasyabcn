"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface FormData {
  email: string;
  numero: string;
  servicio: string;
  nombre: string;
  codigoPostal: string;
  comentario: string;
}

const UseFormEmail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const closeModal = () => setIsOpen(false);

  const onSubmit = async (data: FormData) => {
    setFormStatus("loading"); // Set loading status while sending
    // Log environment variables to check if they are being loaded correctly
    try {
      // Send the form data with EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILSJS_SERVICE_ID || "", // Ensure the service ID is defined
        process.env.NEXT_PUBLIC_EMAILSJS_TEMPLATE_ID || "", // Ensure the template ID is defined
        {
          nombre: data.nombre,
          email: data.email,
          numero: data.numero,
          servicio: data.servicio,
          codigoPostal: data.codigoPostal,
          comentario: data.comentario,
        },
        process.env.NEXT_PUBLIC_EMAILSJS_PUBLIC_KEY || "", // Ensure the public key is defined
      );

      console.log("Formulario enviado con éxito", response.text);
      setFormStatus("success"); // Success message

      reset(); // Reset the form after submission
      closeModal(); // Close the modal
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormStatus("error"); // Error message
      alert("Error al enviar el formulario: " + error.message);
    }
  };

  return {
    onSubmit,
    setIsOpen,
    isOpen,
    handleSubmit,
    register,
    closeModal,
    errors,
    formStatus,
  };
};

export default UseFormEmail;
