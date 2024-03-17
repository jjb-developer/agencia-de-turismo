import React, { useState } from "react";
import { BiX } from "react-icons/bi";

function ContactForm() {
  // Estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para controlar si el formulario se ha enviado o no
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formActive, setFormActive] = useState(true);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar alguna acción con ellos
    console.log(formData);
    // Puedes agregar aquí la lógica para enviar los datos a tu servidor usando fetch, axios u otra librería
    // Luego puedes manejar la respuesta del servidor como desees
    // Aquí marcamos el formulario como enviado
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleFormClose = () => {
    setFormSubmitted(false);
    setFormActive(false);
  };

  return (
    <div className="flex justify-end text-center rounded-xl absolute translate-x-48 lg:translate-x-full">
      {formActive ? (
        formSubmitted ? (
          <div className="text-lg text-white bg-orange-500 p-4 rounded-xl shadow-lg shadow-black font-bold font-roboto flex text-center -translate-x-80 md:translate-x-1/4">
            ¡Gracias por su sugerencia! <br />
            Para más información ¡Regístrate!
            <BiX
              className="ml-2 text-white cursor-pointer"
              onClick={handleFormClose}
            />
          </div>
        ) : (
          <form
            className="flex flex-col w-64 h-58 md:w-80 md:h-64 bg-orange-200 shadow-lg shadow-slate-900 border-4 border-slate-700 m-8 -translate-x-80 -translate-y-80 md:translate-y-2 md:translate-x-1/4 "
            onSubmit={handleSubmit}
          >
            <h1 className=" mt-6 flex mx-auto text-sm md:text-lg lg:text-2xl font-bold font-roboto ">
              Envíanos tu sugerencia
            </h1>

            <input
              className="w-3/4 mx-auto boder-2 border-black mt-4 rounded-xl  shadow-lg shadow-black font-bold font-roboto"
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-3/4 mx-auto boder-2 border-black mt-4 rounded-xl shadow-lg shadow-black font-bold font-roboto"
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-700 text-sm w-1/4 font-roboto  text-center mx-auto mb-4 text-white font-bold py-2 px-4 rounded hover:text-emerald-600 hover:bg-white hover:border-2 hover:border-emerald-600 mt-4"
            >
              Enviar
            </button>
          </form>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default ContactForm;
