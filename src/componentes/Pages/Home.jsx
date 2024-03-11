import Header from "../Header/Header";
import { servicios } from "../../utils/variables.js";
import Section from "./Home/Section.jsx";
import ContactForm from "./Home/ContactForm.jsx";
import Main from "./Home/Main.jsx";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <h1 className="text-5xl md:text-7xl my-16 text-center font-roboto font-bold text-orange-800">
        Nuestros Servicios
      </h1>
      <Main servicios={servicios} />
      <div className="mx-auto mt-24 bg-emerald-200 w-[350px] md:w-[768px] lg:w-[1024px] xl:w-[1400px] 2xl:w-[1800px] h-[200px] md:h-[400px] flex justify-around text-center">
        <h1
          className="my-auto mx-auto text-xl md:text-4xl lg:text-5xl font-bold font-roboto "
          style={{ transform: "rotate(-6deg)" }}
        >
          Encontrá tu próximo destino.
          <br /> Regístrate y vivi una experiencia única
        </h1>
        <img
          src="./imagenTurismo.png"
          alt=""
          className=" w-[600px] h-96 hidden md:hidden lg:hidden 2xl:block bg-cover my-auto mr-64"
        />
      </div>
      <h1 className="text-3xl md:text-7xl mb-16 mt-24 text-center font-roboto font-bold text-slate-800">
        Los más vendidos
      </h1>
      <Section />
      <div className="flex text-center justify-center bg-cover mt-16 mb-10 border-t-4 border-dotted border-slate-300">
        <img
          src="./contacto.png"
          alt=""
          className="w-[350px] md:w-[700px] h-48  md:h-96 mx-auto "
        />
      </div>
      <ContactForm />
    </div>
  );
}
