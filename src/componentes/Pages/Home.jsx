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
      <h1 className="text-4xl md:text-6xl mt-12 mb-6 text-center font-roboto font-bold text-orange-800">
        Nuestros Servicios
      </h1>
      <Main servicios={servicios} />
      <Publicidad isLoggedIn={isLoggedIn} />
      {isVendedor && <SectionVendedor />}
      {isCliente && <ServiciosOfrecidos />}
      {!isLoggedIn && <Section />}
      <SectionHome />
    </div>
  );
}
