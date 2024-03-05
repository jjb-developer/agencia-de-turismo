import { Link } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";

export default function Main({ servicios }) {
  return (
    <main className="mt-8 mb-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {servicios?.map((servicio, index) => (
          <div key={index} className="flex-shrink-0">
            <article className="border rounded p-6 border-gray-300 pb-16 shadow-md hover:border-orange-300 duration-300">
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
                  <p className="text-xl text-gray-600 font-semibold text-center mt-9 mx-8 px-5 pb-16 h-96 shadow-xl shadow-orange-300">
                    {servicio.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    to={`/ruta/${servicio.name}`} // Cambia "/ruta/" por la ruta deseada
                    className="text-gray-800 text-xl hover:text-orange-700 translate-y-11 font-semibold flex items-center"
                  >
                    <BsPlusSquareFill className="mr-1" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
