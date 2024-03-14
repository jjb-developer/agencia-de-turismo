import { useState } from "react"; // Agregar useState
import store from "../../../utils/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { code } from "../../../utils/variables.js";
import { deleteServicioHandler } from "../../../utils/eliminarServicio.js";
import { loadServiceUser } from "../../../utils/services.js";
import { FaAngleDown } from "react-icons/fa";

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
    visited: 12,
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
    visited: 14,
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
    visited: 18,
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
    visited: 8,
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
    visited: 24,
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
    visited: 43,
  },
  {
    id_servicio: 10,
    image:
      "https://img.freepik.com/free-photo/close-up-picnic-near-eiffel-tower_23-2149151049.jpg?t=st=1710341408~exp=1710345008~hmac=84741c9438237b83206a92c25bed6147938442ea06c4f9ee3d8424c6beacbd9a&w=360",
    created_at: "2024-03-10T14:30:00.000000+00:00",
    name: "Tour literario - El Código Da Vinci",
    description:
      "Sumérgete en el fascinante mundo de 'El Código Da Vinci' con este tour literario que te llevará a los lugares destacados mencionados en la famosa novela de Dan Brown. Descubre los secretos ocultos de París mientras revives la intriga de la trama.",
    service_destination: "París, Francia",
    service_date: "2024-04-05",
    cost: 40000,
    service_code: 10,
    vendedor_id_vendedor: 5,
    visited: 19,
  },
  {
    id_servicio: 11,
    image:
      "https://img.freepik.com/free-photo/high-angle-friends-holding-chopsticks_23-2149957054.jpg?t=st=1710341590~exp=1710345190~hmac=dbc25c89096c0ccb6742cd43b8e4805570d279bd2faec5057d74bcbdd439d17d&w=900",
    created_at: "2024-03-12T09:15:00.000000+00:00",
    name: "Recorrido culinario por Singapur",
    description:
      "Explora la rica y variada cocina de Singapur con este recorrido gastronómico. Degusta platos tradicionales y saborea la fusión de influencias culinarias mientras visitas los mejores restaurantes y puestos de comida callejera de la ciudad.",
    service_destination: "Singapur",
    service_date: "2024-04-20",
    cost: 55000,
    service_code: 11,
    vendedor_id_vendedor: 5,
    visited: 12,
  },
  {
    id_servicio: 12,
    image:
      "https://img.freepik.com/free-photo/asian-woman-wearing-japanese-traditional-kimono-cherry-blossom-spring-kyoto-temple-japan_335224-130.jpg?t=st=1710341660~exp=1710345260~hmac=fc4be299c4f23f74fda98b6ccffe98ae8b6090df178309c245a1cfcd5e64b61b&w=900",
    created_at: "2024-03-14T11:45:00.000000+00:00",
    name: "Excursión cultural en Tokio",
    description:
      "Descubre la fascinante cultura japonesa con esta excursión cultural en Tokio. Visita templos antiguos, jardines tradicionales, mercados bulliciosos y museos históricos mientras te sumerges en la rica historia y tradiciones de Japón.",
    service_destination: "Tokio, Japón",
    service_date: "2024-05-10",
    cost: 60000,
    service_code: 12,
    vendedor_id_vendedor: 5,
    visited: 7,
  },
  {
    id_servicio: 13,
    image:
      "https://img.freepik.com/free-photo/man-with-rucksack-admires-gorgeous-mountain-landscape_1304-5356.jpg?t=st=1710341738~exp=1710345338~hmac=cde04fd83941a93fceacae79e5205abd9b38175d413d2e3ce32e98616af2cf21&w=826",
    created_at: "2024-03-16T15:30:00.000000+00:00",
    name: "Aventura en la Patagonia Chilena",
    description:
      "Embárcate en una emocionante aventura en la Patagonia Chilena. Explora impresionantes paisajes naturales, fiordos majestuosos, glaciares imponentes y lagos cristalinos mientras disfrutas de actividades como senderismo, navegación y avistamiento de fauna.",
    service_destination: "Patagonia, Chile",
    service_date: "2024-06-15",
    cost: 65000,
    service_code: 13,
    vendedor_id_vendedor: 5,
    visited: 3,
  },
  {
    id_servicio: 14,
    image:
      "https://img.freepik.com/free-photo/arch-constantine-rome-italy_1268-20452.jpg?t=st=1710341810~exp=1710345410~hmac=2e563367acece7187b51d068e55b4f9a4d191969036dd77ac83dc561d1836c16&w=900",
    created_at: "2024-03-18T16:45:00.000000+00:00",
    name: "Recorrido histórico por Roma",
    description:
      "Sumérgete en la historia antigua de Roma con este recorrido histórico. Explora monumentos icónicos como el Coliseo, el Foro Romano y el Panteón, mientras aprendes sobre el glorioso pasado de la ciudad y su legado cultural.",
    service_destination: "Roma, Italia",
    service_date: "2024-07-05",
    cost: 50000,
    service_code: 14,
    vendedor_id_vendedor: 5,
    visited: 14,
  },
  {
    id_servicio: 15,
    image:
      "https://img.freepik.com/free-photo/glass-wine-old-table-with-vineyard-background_1268-30578.jpg?t=st=1710341861~exp=1710345461~hmac=0a6d8eaf1e9a19bd70adc2126de717ef784d2cf6dd900a92eccd38270f2d2608&w=1060",
    created_at: "2024-03-20T14:30:00.000000+00:00",
    name: "Tour de vinos en el Valle de Napa",
    description:
      "Descubre los exquisitos vinos del Valle de Napa con este tour vinícola. Visita bodegas boutique, degusta una variedad de vinos premiados y disfruta de paisajes pintorescos mientras aprendes sobre la cultura vinícola de la región.",
    service_destination: "Valle de Napa, California, EE. UU.",
    service_date: "2024-08-10",
    cost: 60000,
    service_code: 15,
    vendedor_id_vendedor: 5,
    visited: 38,
  },
  {
    id_servicio: 16,
    image:
      "https://img.freepik.com/free-photo/friends-having-fun-traveling-by-car_23-2148771823.jpg?t=st=1710342053~exp=1710345653~hmac=840ecb76199d159598a077bb9ad71e05b6c37df728cc3d671ef15dbd416f0486&w=900",
    created_at: "2024-03-22T12:15:00.000000+00:00",
    name: "Experiencia de safari en Kenia",
    description:
      "Embárcate en una emocionante experiencia de safari en Kenia. Observa de cerca la impresionante vida salvaje africana, incluidos leones, elefantes, jirafas y rinocerontes, mientras exploras las vastas llanuras del famoso Masái Mara.",
    service_destination: "Masái Mara, Kenia",
    service_date: "2024-09-20",
    cost: 70000,
    service_code: 16,
    vendedor_id_vendedor: 5,
    visited: 24,
  },
  {
    id_servicio: 17,
    image:
      "https://img.freepik.com/free-photo/balloon-cappadocia_181624-23728.jpg?t=st=1710342112~exp=1710345712~hmac=55cd733b92dc3c1609c7df5f98775b41e899c6d01001062a6a43e058387f3d08&w=360",
    created_at: "2024-03-24T11:30:00.000000+00:00",
    name: "Paseo en globo sobre Capadocia",
    description:
      "Contempla la espectacular belleza de Capadocia desde las alturas con este paseo en globo aerostático. Disfruta de vistas panorámicas de las formaciones rocosas únicas, los valles pintorescos y los pueblos tradicionales mientras flotas en el cielo al amanecer.",
    service_destination: "Capadocia, Turquía",
    service_date: "2024-10-15",
    cost: 75000,
    service_code: 17,
    vendedor_id_vendedor: 5,
    visited: 4,
  },
  {
    id_servicio: 18,
    image:
      "https://img.freepik.com/free-photo/roman-theater-seen-from_1122-1022.jpg?t=st=1710342155~exp=1710345755~hmac=55beda02a2d77a2be82b88ce55edefe6c833e974e98a12ca39935aa40bbfbcf9&w=900",
    created_at: "2024-03-26T14:45:00.000000+00:00",
    name: "Recorrido arqueológico en Grecia",
    description:
      "Explora la rica historia y la impresionante arquitectura de la antigua Grecia con este recorrido arqueológico. Visita sitios emblemáticos como el Partenón, el Templo de Apolo y el Teatro de Epidauro mientras aprendes sobre la fascinante civilización griega.",
    service_destination: "Atenas, Grecia",
    service_date: "2024-11-10",
    cost: 55000,
    service_code: 18,
    vendedor_id_vendedor: 5,
    visited: 2,
  },
  {
    id_servicio: 19,
    image:
      "https://img.freepik.com/free-photo/restaurant-menu-street_1101-907.jpg?t=st=1710342226~exp=1710345826~hmac=24f481d793707c1f12153da2653d695927b033b8f47db66f2e02bf56a2def913&w=900",
    created_at: "2024-03-28T16:30:00.000000+00:00",
    name: "Experiencia gastronómica en París",
    description:
      "Embárcate en una deliciosa aventura gastronómica en la Ciudad de la Luz con este recorrido culinario. Descubre los sabores exquisitos de la cocina francesa mientras visitas mercados locales, panaderías tradicionales y restaurantes gourmet.",
    service_destination: "París, Francia",
    service_date: "2024-12-05",
    cost: 60000,
    service_code: 19,
    vendedor_id_vendedor: 5,
    visited: 10,
  },
  {
    id_servicio: 20,
    image:
      "https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213457.jpg?t=st=1710342277~exp=1710345877~hmac=ee1df013fc899f6b3bf80f94e096fe71cec0930c0d2b4c4d3b3a66cf6b267567&w=360",
    created_at: "2024-03-30T11:45:00.000000+00:00",
    name: "Tour de cine en Nueva York",
    description:
      "Explora los lugares icónicos de Nueva York que han aparecido en famosas películas y programas de televisión con este tour de cine. Visita escenarios emblemáticos, estudios de cine y lugares de rodaje mientras descubres la magia del cine en la Gran Manzana.",
    service_destination: "Nueva York, EE. UU.",
    service_date: "2025-01-20",
    cost: 55000,
    service_code: 20,
    vendedor_id_vendedor: 5,
    visited: 9,
  },
  {
    id_servicio: 21,
    image:
      "https://img.freepik.com/free-photo/vertical-shot-beautiful-corals-sea_181624-4281.jpg?t=st=1710342326~exp=1710345926~hmac=322250eea892cf4428791dba20e8ddd1be660764ca8ce17c6516dfba346f7449&w=360",
    created_at: "2024-04-01T14:30:00.000000+00:00",
    name: "Aventura en la Gran Barrera de Coral",
    description:
      "Sumérgete en las aguas cristalinas de la Gran Barrera de Coral con esta emocionante aventura submarina. Descubre la increíble biodiversidad marina, nada entre coloridos arrecifes de coral y observa fascinantes criaturas acuáticas en su hábitat natural.",
    service_destination: "Gran Barrera de Coral, Australia",
    service_date: "2025-02-10",
    cost: 70000,
    service_code: 21,
    vendedor_id_vendedor: 5,
    visited: 4,
  },
  {
    id_servicio: 22,
    image:
      "https://img.freepik.com/free-photo/view-church-architectural-elements_23-2150319340.jpg?t=st=1710342413~exp=1710346013~hmac=463f7d103b89187949469a7bbb6c2a80bf06b1302aa03944d533d88ac70d2ea8&w=900",
    created_at: "2024-04-03T12:15:00.000000+00:00",
    name: "Tour de arte en Florencia",
    description:
      "Explora la rica historia del arte en Florencia con este tour cultural. Visita renombrados museos, galerías de arte y monumentos históricos mientras admiras obras maestras de artistas como Leonardo da Vinci, Michelangelo y Botticelli.",
    service_destination: "Florencia, Italia",
    service_date: "2025-03-15",
    cost: 60000,
    service_code: 22,
    vendedor_id_vendedor: 5,
    visited: 7,
  },
  {
    id_servicio: 23,
    image:
      "https://img.freepik.com/free-photo/beautiful-whale-tail-blue-body-water-with-mountain_181624-5426.jpg?t=st=1710342446~exp=1710346046~hmac=b71a60e402a96f3019157b7f5a330475f70540dc1eaf336035e5b3a6882d574e&w=900",
    created_at: "2024-04-05T10:45:00.000000+00:00",
    name: "Excursión de avistamiento de ballenas",
    description:
      "Embárcate en una emocionante excursión para avistar ballenas en su hábitat natural. Disfruta de un encuentro cercano con estas majestuosas criaturas marinas mientras navegas por las aguas cristalinas en busca de ballenas jorobadas, orcas y más.",
    service_destination: "Puerto Madryn, Argentina",
    service_date: "2025-04-20",
    cost: 75000,
    service_code: 23,
    vendedor_id_vendedor: 5,
    visited: 18,
  },
];

export default function SectionVendedor() {

  const navigate = useNavigate();
  const {
    getUserService,
    setUserService,
    setInitialServiceToAdd,
    setIdService,
    setAddOrUpdate,
    getUser // Agrega getUser desde tu store
  } = store();

  const [sortedServices, setSortedServices] = useState([]);

  useEffect(() => {
    // Ordenar los servicios por la cantidad de visitas de mayor a menor
    const sorted = responseService.sort((a, b) => b.visited - a.visited);
    // Tomar los primeros 8 servicios
    const topServices = sorted.slice(0, 8);
    setSortedServices(topServices);
    // Cargar los servicios del usuario
    loadServiceUser(setUserService);
  }, []);

  return (
    <main className="bg-sky-50 p-10 w-[100%] mx-auto relative">
      <h3 className="capitalize text-5xl text-center mt-36 mb-16 tracking-tight font-bold text-zinc-800 ">
        Estas son tus publicaciones más visitadas
      </h3>
      <section className="mt-5 gap-x-2">
        <div className="grid grid-cols-2 gap-4">
          {sortedServices.map((sv, index) => (
            <div key={index}>
              <div
                className="w-[500px] h-80 bg-center bg-cover overflow-hidden flex flex-col content-center items-end group rounded-lg"
                style={{ backgroundImage: `url(${sv.image})` }}
              >
                <h1
                  className="text-md mx-auto p-1 rounded-xl bg-[#0000003e] text-white uppercase font-bold tracking-tight mb-36 mt-4
                "
                >
                  {sv.name}
                </h1>
                <p className="mt-4 text-lg text-slate-900 font-bold bg-[#ffff004d] mr-4 rounded-lg border-2 border-yellow-100 p-1">
                  ${sv.cost}
                </p>
                  <div className="mt-4 flex gap-x-2 mr-4 ">
                    <button
                      onClick={() => {
                        setIdService(sv.id_servicio);
                        setAddOrUpdate("update");
                        setInitialServiceToAdd({
                          name: sv.name,
                          description: sv.description,
                          service_destination: sv.service_destination,
                          service_date: sv.service_date,
                          cost: sv.cost,
                          service_code: code[sv.name],
                        });
                        navigate("/agregarServicio");
                      }}
                      className="hover:bg-green-500 hover:text-black  bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md py-1.5 rounded px-5 uppercase"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() =>
                        deleteServicioHandler(sv.id_servicio, setUserService)
                      }
                      className=" bg-[#030a077b] hover:bg-red-500 hover:text-black border-2 border-red-600 text-red-200 font-bold text-md py-1.5 rounded px-5 uppercase"
                    >
                      Eliminar
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
