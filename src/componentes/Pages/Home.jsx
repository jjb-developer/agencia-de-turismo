import { useEffect } from "react";
import { servicios } from "../../utils/variables.js";
import Section from "./Home/Section.jsx";
import ContactForm from "./Home/ContactForm.jsx";
import Main from "./Home/Main.jsx";
import Slider from "../Slider/Slider.jsx";
import Navbar from "../Nav/Navbar.jsx"
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
      <div className="bg-gray-800 h-48 flex items-center justify-center">
      <h1 className="text-3xl text-center text-gray-50">
      Que ofrecemos?
      </h1>
      </div>
      <Main servicios={servicios} />
      <Section className="scroll-section" />
    </div>
  );
}
