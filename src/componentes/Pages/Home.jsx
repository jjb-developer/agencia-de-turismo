import Header from "../Header/Header";
import { servicios } from "../../utils/variables.js";
import SectionHome from "./Home/SectionHome.jsx";
import AgregarServicio from "./Vendedor/AgregarServicio.jsx";
import store from "../../utils/store";
import Main from "./Home/Main.jsx";
import Section from "./Home/Section.jsx";
import ServiciosOfrecidos from "./Vendedor/ServiciosOfrecidos.jsx";
import Publicidad from "./Home/Publicidad.jsx";
import SectionVendedor from "./Home/SectionVendedor.jsx";

export default function Home() {
  const { getUser } = store();

  const isLoggedIn = !!getUser; // isLoggedIn será true si getUser existe, es decir, si el usuario está logueado
  const isVendedor = isLoggedIn && getUser.role === "vendedor";
  const isCliente = isLoggedIn && getUser.role === "cliente";

  return (
    <div className="overflow-hidden">
      <Header />
      <Main servicios={servicios} />
      <Publicidad isLoggedIn={isLoggedIn} />
      {isVendedor && <SectionVendedor />}
      {isCliente && <ServiciosOfrecidos />}
      {!isLoggedIn && <Section />}
      <SectionHome />
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl mt-12 mb-6 text-center font-roboto font-bold text-emerald-950">
          {" "}
          ¿Listo para comenzar tu próxima aventura?
        </h2>
        <h3 className="text-sm md:text-lg mt-12 mx-24 mb-12 text-center font-roboto font-bold text-zinc-800">
          En Horizontes Viajeros, estamos aquí para hacer realidad tus sueños de
          viaje. Ya sea que estés planeando unas vacaciones relajantes en la
          playa, una emocionante expedición de aventura o un viaje cultural en
          una ciudad vibrante, estamos aquí para ayudarte en cada paso del
          camino. Nuestro equipo experto está listo para brindarte asistencia
          personalizada y recomendaciones cuidadosamente seleccionadas para que
          tu viaje sea único y memorable. No esperes más, ¡contáctanos hoy mismo
          y comienza a planificar la escapada de tus sueños!
        </h3>
      </div>
    </div>
  );
}
