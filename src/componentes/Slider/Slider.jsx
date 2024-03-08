import React, { useState, useEffect } from "react";
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
export default function Slider(){
    const [currentBgIndex, setCurrentBgIndex] = useState(1);
    const [randomPhrase, setRandomPhrase] = useState("");
  

    const fondo = {
        backgroundImage: bgImages[currentBgIndex],
      };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentBgIndex((prevIndex) =>
            prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
          );
    
          setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, []);


    return (
        <header
        style={fondo}
        className="h-96 bg-cover bg-center relative flex items-center justify-center w-full bg-[#ddd]"
      >
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