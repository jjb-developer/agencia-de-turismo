import { servicios } from "../../utils/variables.js";
import Section from "./Home/Section.jsx";
import ContactForm from "./Home/ContactForm.jsx";
import Main from "./Home/Main.jsx";
import Slider from "../Slider/Slider.jsx";
import Navbar from "../Nav/Navbar.jsx"
import { useEffect } from 'react'
import store from '../../utils/store'
import { loadServiceHandler } from '../../utils/services.js'

export default function Home(){

  const { setAllService, getAllService } = store()

  useEffect(()=>{
    async function fetchAllServices(){
      const response = await loadServiceHandler()
      setAllService(response)
    }
    if(getAllService === null){
      fetchAllServices()
    }
  },[])


  return (
    <div className="overflow-hidden w-full">
      <Navbar/>
      <Slider/>
      <h1 className="text-5xl md:text-7xl my-16 text-center font-bold text-orange-800">
      Nuestros Servicios
      </h1>
      <Main servicios={servicios} />

      <div className="flex text-center justify-center bg-cover border-t-4 border-dotted border-slate-300">
        <img
          src="./contacto.png"
          alt=""
          className="w-full h-48 aspect-auto md:h-96 mx-auto "
        />
      </div>
      <ContactForm />
    </div>
  );
}
