import React, { useState, useEffect } from "react";
import { BiUser, BiCart, BiSolidHotel } from "react-icons/bi";
import { ImAirplane, ImCart } from "react-icons/im";
import { FaCarAlt, FaBusAlt, FaTrain } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdEvent } from "react-icons/md";

export default function Header() {
  const [currentBgIndex, setCurrentBgIndex] = useState(1);
  const [randomPhrase, setRandomPhrase] = useState("");

  const bgImages = [
    "url(https://images.pexels.com/photos/15537287/pexels-photo-15537287/free-photo-of-carretera-montanas-arboles-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    "url(https://images.pexels.com/photos/15700862/pexels-photo-15700862/free-photo-of-glaciar-de-svartisen-en-noruega.jpeg)",
    "url(https://images.pexels.com/photos/15900831/pexels-photo-15900831/free-photo-of-paisaje-punto-de-referencia-puente-arboles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    "url(https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    "url(https://images.pexels.com/photos/6478474/pexels-photo-6478474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    "url(https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
  ];

  const phrases = [
    "Descubre la belleza natural del mundo: ¡Tu próximo destino te espera!",
    "Explora paisajes impresionantes y vive nuevas aventuras",
    "Disfruta de la tranquilidad de la naturaleza en tu próximo viaje",
    "Déjate sorprender por la diversidad de nuestro planeta",
    "Conoce lugares únicos y crea recuerdos inolvidables",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
      );

      setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }, 8000); 

    return () => clearInterval(interval); 
  }, []);

  const fondo = {
    backgroundImage: bgImages[currentBgIndex],
  };

  return (
    <header
      style={fondo}
      className="h-[500px] bg-cover bg-center relative flex items-center justify-center w-full bg-[#ddd]"
    >
       <div className=" flex flex-col gap-2 w-full px-4 sm:min-w-32 sm:max-w-96 self-center backdrop-blur-sm rounded-lg bg-gray-800/30 shadow-lg text-wrap font-semibold text-gray-100 absolute sm:left-10 p-2">
            <span className="text-3xl text-blue-300">Elige tu aventura</span>
            <span className="text-sm">
              ¡Descubre nuestras ofertas exclusivas y elige el paquete perfecto
              para tus vacaciones! Desde pasajes de avión
              y hotel hasta opciones adicionales para personalizar tu
              experiencia.</span>
              <ul className="flex items-center justify-center gap-1">
                <li className="bg-blue-600 text-white text-2xl p-2 inline-block rounded-full">
                  <ImAirplane />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <FaCarAlt />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <BiSolidHotel />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <FaBusAlt />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <FaTrain />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <MdEvent />
                </li>
                <li className="bg-blue-600 text-white text-2xl inline-block p-2 rounded-full">
                  <GiJourney />
                </li>
              </ul>
            
          </div>
      <h3
        className="absolute bottom-7 left-10 text-4xl font-medium tracking-tighter text-emerald-60 capitalize"
        style={{
          textShadow: "2px 2px 2px rgba(255,255, 255, 0.8)",
        }}
      >
        {randomPhrase}
      </h3>
    </header>
  );
}
