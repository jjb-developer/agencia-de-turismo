import { useState, useEffect } from 'react'

export default function Section({ allServicios }) {
  const [filteredServicios, setFilteredServicios] = useState(allServicios);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para filtrar los servicios
  const handleSearch = () => {
    const filtered = allServicios.filter((servicio) =>
      servicio.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServicios(filtered);
  };

  return (
    <section className="mt-8 mb-8 px-4">
      {/* Input de búsqueda
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar servicio..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Buscar
        </button>
      </div>

      // Mostrar los servicios filtrados
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredServicios.map((servicio, index) => (
          <div key={index} className="flex-shrink-0">
            <article className="border rounded p-4 border-gray-300 pb-16 shadow-md hover:border-orange-300 duration-300">
              <figure>
                <img
                  className="w-full h-40 object-cover mb-4"
                  src={servicio.image}
                  alt="imagen del servicio"
                />
              </figure>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-playfair text-gray-800 capitalize mt-3 mb-2 text-center h-16">
                    {servicio.name}
                  </h3>
                  <p className="text-xl text-gray-600 font-semibold text-center mt-9 mx-8 px-5 h-80  shadow-xl shadow-orange-300">
                    {servicio.description}
                  </p>
                  <p>${servicio.costo}</p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div> */}
    </section>
  );
}
