import { useState, useEffect } from "react";
import { loadServiceHandler } from "../../../utils/services";
import { AiOutlineClose } from "react-icons/ai";

const responseService = [
  {
    "id_servicio": 2,
    "image": "https://th.bing.com/th/id/OIP._cQPFprkjlbmXSsXDgfKJgHaDw?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Hotel del Bosque",
    "description": "Sumérgete en la naturaleza en el Hotel del Bosque, situado en medio de exuberantes bosques. Disfruta de actividades al aire libre durante el día y comodidades de lujo por la noche.",
    "service_destination": "Montañas Verdes, Canadá",
    "service_date": "2024-06-15",
    "cost": 180000,
    "service_code": 1,
    "vendedor_id_vendedor": 2,
    "visited": 70
  },
  {
    "id_servicio": 34,
    "image": "https://th.bing.com/th/id/OIP.3mnpZ63xOEaOHOLguDPJzgHaEo?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Tren Glacier Express de Zermatt a St. Moritz",
    "description": "Embárcate en un viaje panorámico a través de los Alpes suizos con el tren Glacier Express. Disfruta de vistas espectaculares de montañas, valles y glaciares en este recorrido inolvidable.",
    "service_destination": "Zermatt, Suiza - St. Moritz, Suiza",
    "service_date": "2024-09-05",
    "cost": 120000,
    "service_code": 5,
    "vendedor_id_vendedor": 4,
    "visited": 60
  },
  {
    "id_servicio": 51,
    "image": "https://th.bing.com/th/id/OIP.KnAhNf723m72AMWm1ws4OgHaEm?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Concierto de Coldplay",
    "description": "¡No te pierdas la oportunidad de ver a Coldplay en concierto! Disfruta de una noche llena de música, energía y emoción con una de las bandas más icónicas del mundo.",
    "service_destination": "Estadio Wembley, Londres, Reino Unido",
    "service_date": "2024-07-10",
    "cost": 10000,
    "service_code":7,
    "vendedor_id_vendedor": 1,
    "visited": 40
  },
  {
    "id_servicio": 6,
    "image": "https://th.bing.com/th/id/OIP.Ks_hUUwQ_Z2W00uI6qpyTAHaE8?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Hotel Montaña",
    "description": "Escápate a la montaña y disfruta de la tranquilidad en el Hotel Montaña. Rodeado de naturaleza, este hotel es perfecto para los amantes del aire libre.",
    "service_destination": "Montañas Nevadas, Suiza",
    "service_date": "2024-09-05",
    "cost": 250000,
    "service_code": 1,
    "vendedor_id_vendedor": 6,
    "visited": 55
  },
  {
    "id_servicio": 12,
    "image": "https://th.bing.com/th/id/OIP.JlkTLA9clENQsDwOSg_0AAAAAA?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Ford Mustang Convertible",
    "description": "Siente la emoción de conducir un clásico americano con este Ford Mustang Convertible. Ideal para disfrutar del sol y la brisa en tus viajes.",
    "service_destination": "Miami, Estados Unidos",
    "service_date": "2024-09-10",
    "cost": 120000,
    "service_code": 2,
    "vendedor_id_vendedor": 2,
    "visited": 55
  },
  {
    "id_servicio": 70,
    "image": "https://th.bing.com/th/id/OIP.cGyIU-nYFCwcxEZvkc9wHQHaEK?rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Excursión a la Gran Barrera de Coral",
    "description": "Sumérgete en las aguas cristalinas de la Gran Barrera de Coral en Australia. Explora arrecifes de coral, nados con tiburones y una increíble diversidad marina.",
    "service_destination": "Queensland, Australia",
    "service_date": "2024-09-10",
    "cost": 17000,
    "service_code": 6,
    "vendedor_id_vendedor": 10,
    "visited": 55
  },
  {
    id_servicio: 21,
    image:
      "https://i.pinimg.com/736x/eb/11/a9/eb11a985ab723315a01e56f436e13d53.jpg",
    created_at: "2024-03-14T00:00:00.000000+00:00",
    name: "Vuelo de Nueva York a París",
    description:
      "¡Experimenta la magia de París con este vuelo directo desde la bulliciosa ciudad de Nueva York! Descubre la belleza de la Ciudad de la Luz y su encanto inigualable.",
    service_destination: "Nueva York, Estados Unidos - París, Francia",
    service_date: "2024-07-10",
    cost: 120000,
    service_code: 4,
    vendedor_id_vendedor: 1,
    visited: 40,
  },
  {
    "id_servicio": 63,
    "image": "https://th.bing.com/th/id/OIP.M1w6he8HmICsyWLXHOn9SAHaIU?w=1024&h=1150&rs=1&pid=ImgDetMain",
    "created_at": "2024-03-14T00:00:00.000000+00:00",
    "name": "Excursión a la Gran Muralla China",
    "description": "Camina sobre la legendaria Gran Muralla China y maravíllate con sus impresionantes vistas. Descubre la historia y la grandeza de esta maravilla arquitectónica.",
    "service_destination": "Pekín, China",
    "service_date": "2024-07-20",
    "cost": 8000,
    "service_code": 6,
    "vendedor_id_vendedor": 3,
    "visited": 50
  },
];

export default function Section() {
  const [filteredServicios, setFilteredServicios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  /* useEffect (()=> {
  handlerLoadService();
},[])*/

  async function handlerLoadService() {
    const loadService = await loadServiceHandler(
      "https://agencia-de-turismo.onrender.com"
    );
    setFilteredServicios(loadService);
  }

  return (
    <section className="bg-gray-50 flex flex-wrap flex-col justify-center items-center min-h-screen w-full gap-4 p-4">
      <div>
        <h2 className="text-2xl lg:text-5xl font-roboto">
          {" "}
          &#11088; Servicios estrella &#11088;
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full h-auto gap-4 p-4">
        {responseService.map((servicio, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-center bg-cover overflow-hidden relative flex items-end group rounded-lg "
            style={{ backgroundImage: `url(${servicio.image})` }}
          >
            <div className="w-full flex justify-start absolute top-0 left-0 p-2">
              <h3 className="text-gray-200 text-lg font-roboto">
                {servicio.name}
              </h3>
            </div>
            <article className="bg-gray-700/60 w-full p-2 absolute -left-full group-hover:left-0 transition-all">
              <div>
                <h3 className="text-xl text-gray-50 font-bold h-24">
                  Destino: {servicio.service_destination}
                </h3>
              </div>

              {/* Botón "Ver más" para mostrar la descripción */}
              {selectedService !== index && (
                <div className="text-center mt-auto">
                  <button className="text-gray-50 font-semibold border-2 border-gray-50 p-2 rounded-xl">
                    Ver más
                  </button>
                </div>
              )}
              {/* Mostrar descripción solo si está seleccionada */}
              <div
                className={`absolute w-[450px] h-28 ${
                  index === responseService.length - 1
                    ? "-translate-x-64"
                    : "translate-x-9"
                }`}
              >
                {selectedService === index && (
                  <div className="p-6 flex flex-col justify-between bg-slate-100 border-4 border-gray-400 shadow-xl shadow-black rounded-xl hover:border-orange-600">
                    <p className="text-lg text-gray-600 font-bold mb-2 text-center font-playfair">
                      {servicio.description}
                    </p>

                    <div className="h-20 flex text-center justify-center">
                      <button
                        className="text-orange-500 border-2 border-orange-700 p-3 hover:bg-orange-600
                           hover:text-yellow-50 text-xl rounded-2xl font-semibold mt-auto"
                      >
                        Ver menos
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
