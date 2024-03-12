import { useState, useEffect } from "react";
import { loadServiceHandler } from "../../../utils/services";
import { AiOutlineClose } from "react-icons/ai";

const responseService = [
  {
    id_servicio: 4,
    image:
      "https://www.welcomeargentina.com/paseos/cosquin-rock/cosquin-rock-1.jpg",
    created_at: "2024-02-24T08:40:05.065868+00:00",
    name: "Entrada VIP para Cosquín Rock",
    description:
      "Disfruta de una experiencia única en el legendario festival de música rock en la provincia de Córdoba. Tu entrada VIP incluye acceso exclusivo a áreas premium, artistas invitados sorpresa y mucho más.",
    service_destination: "Córdoba, Argentina",
    service_date: "2024-02-15",
    cost: 30000,
    service_code: 7,
    vendedor_id_vendedor: 5,
  },
  {
    id_servicio: 5,
    image:
      "https://www.greekvillasboutique.com/wp-content/uploads/2017/06/Villa-Aria-11-e1539772047193-1920x1080.jpg",
    created_at: "2024-02-26T23:52:20.146347+00:00",
    name: "Estadía de lujo en hotel frente al mar",
    description:
      "Relájate y rejuvenece en este lujoso hotel 5 estrellas con vistas panorámicas al océano. Disfruta de una experiencia inolvidable con habitaciones elegantes, servicios exclusivos y acceso directo a la playa.",
    service_destination: "Bolivia",
    service_date: "2024-03-15",
    cost: 470000,
    service_code: 1,
    vendedor_id_vendedor: 5,
  },
  {
    id_servicio: 6,
    image:
      "https://th.bing.com/th/id/R.ba1edb604cfeb65a1310a90a719819b4?rik=CBXF22lp83%2b8Kg&riu=http%3a%2f%2fwww.consultingservicesibiza.com%2fwp-content%2fuploads%2falquiler_coche_lujo_Porsche_911_Cabrio_consulting_services_ibiza_productos_coches_galeria_foto_1.jpg&ehk=dmYK52SLZ3whtpyLZ6TcnnlB%2bsIz0u7ys2H8nGBzfTE%3d&risl=&pid=ImgRaw&r=0",
    created_at: "2024-02-26T23:54:18.454198+00:00",
    name: "Alquiler de auto de lujo",
    description:
      "Explora la ciudad de Singapur con estilo y comodidad con nuestro servicio de alquiler de autos de lujo. Te ofrecemos una amplia gama de vehículos exclusivos, incluyendo el legendario Ferrari, para que disfrutes de la experiencia de conducir como nunca antes.",
    service_destination: "Singapur",
    service_date: "2024-09-13",
    cost: 80000,
    service_code: 3,
    vendedor_id_vendedor: 5,
  },
  {
    id_servicio: 7,
    image:
      "https://i.pinimg.com/originals/5a/b0/ea/5ab0ea409b418d805213180d016090e8.jpg",
    created_at: "2024-02-26T23:55:34.750845+00:00",
    name: "Paseo en colectivo turístico",
    description:
      "Descubre los encantos de la Ciudad Autónoma de Buenos Aires desde la comodidad de nuestro colectivo turístico. Disfruta de un recorrido guiado por los principales puntos de interés de la ciudad, con aire acondicionado y atención personalizada.",
    service_destination: "Ciudad Autónoma de Buenos Aires, Argentina",
    service_date: "2024-11-04",
    cost: 1,
    service_code: 4,
    vendedor_id_vendedor: 5,
  },
  {
    id_servicio: 8,
    image:
      "https://www.machupicchu-viajes.com/wp-content/uploads/2017/01/gastronomia-peru-img04.jpg",
    created_at: "2024-02-28T10:15:30.789123+00:00",
    name: "Tour gastronómico",
    description:
      "Embárcate en un viaje culinario único explorando los sabores y aromas de la cocina local. Este tour gastronómico te llevará a los mejores restaurantes y mercados de la ciudad, donde podrás degustar platos tradicionales y experimentar la cultura culinaria de la región.",
    service_destination: "Lima, Perú",
    service_date: "2024-04-20",
    cost: 60000,
    service_code: 8,
    vendedor_id_vendedor: 5,
  },
  {
    id_servicio: 9,
    image:
      "https://th.bing.com/th/id/OIP.HZCficD_bolb_Ldy9tOY_wHaE9?w=710&h=475&rs=1&pid=ImgDetMain",
    created_at: "2024-03-02T14:45:10.982456+00:00",
    name: "Clases de surf",
    description:
      "Aprende a surfear las olas con nuestras clases de surf personalizadas. Nuestros instructores expertos te guiarán a través de los fundamentos del surf y te ayudarán a mejorar tus habilidades en las hermosas playas de la costa. ¡No se requiere experiencia previa!",
    service_destination: "Bali, Indonesia",
    service_date: "2024-05-15",
    cost: 80000,
    service_code: 9,
    vendedor_id_vendedor: 5,
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
     <div><h2 className="text-2xl font-roboto"> &#11088; Servicios estrella &#11088;</h2></div>
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
