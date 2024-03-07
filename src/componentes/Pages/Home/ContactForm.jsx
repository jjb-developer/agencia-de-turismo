import React, { useState } from 'react';

function ContactForm() {
  // Estado para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
  };

  return (
    <div className='flex justify-center text-center rounded-xl'>
 <form className="flex flex-col w-96 shadow-lg shadow-slate-900 border-4 border-slate-700 m-8 " onSubmit={handleSubmit}>
      <input
      className='w-3/4 mx-auto boder-2 border-black mt-4 rounded-xl  shadow-lg shadow-black font-bold font-roboto'
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
      className='w-3/4 mx-auto boder-2 border-black mt-4 rounded-xl shadow-lg shadow-black font-bold font-roboto'
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
      className='w-3/4 mx-auto boder-2 border-black mt-4 rounded-xl shadow-lg shadow-black font-bold font-roboto'
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        required
      ></textarea>
      <button type="submit" className="bg-emerald-700 text-xl w w-1/4 font-roboto  text-center mx-auto mb-4 text-white font-bold py-2 px-4 rounded hover:text-emerald-600 hover:bg-white hover:border-2 hover:border-emerald-600 mt-4">
        Enviar
      </button>
    </form>
    </div>
   
  );
}

export default ContactForm;
