import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import store from "../../../utils/store";
import { HiArrowRight } from "react-icons/hi";

export default function Main({ servicios }) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [animateShow, setAnimateShow] = useState(true);

  useEffect(() => {
    // Cuando cambia el índice del servicio actual, activa la animación
    setAnimateShow(true);

    // Desactiva la animación después de 1.5 segundos (ajusta según la duración de la animación)
    const animationTimeout = setTimeout(() => {
      setAnimateShow(false);
    }, 1500);

    // Limpia el temporizador cuando el componente se desmonta o cuando cambia el índice del servicio actual
    return () => clearTimeout(animationTimeout);
  }, [currentServiceIndex]);

  useEffect(() => {
    // Iniciar el intervalo para cambiar automáticamente el servicio cada 1 minuto
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 60000 milisegundos = 1 minuto

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [currentServiceIndex]); // Ejecutar el efecto cuando cambie el índice del servicio actual

  const handleNext = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === servicios.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === 0 ? servicios.length - 1 : prevIndex - 1
    );
  };

  const navigate = useNavigate();
  const statusLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const { getUser, setUser } = store();

  // Ejemplo de cómo usar setUser para actualizar el estado de autenticación
  const handleLogin = () => {
    setUser({ isLoggedIn: true, username: "exampleUser" });
    navigate("/"); // Redirigir al usuario después de iniciar sesión
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-6xl mt-12 mb-6 text-center font-roboto font-bold text-orange-800">
          Nuestros Servicios
        </h1>
        <h3 className="text-sm md:text-lg mt-12 mx-24 mb-6 text-center font-roboto font-bold text-zinc-800">
          En Horizontes Viajeros, estamos comprometidos a hacer que cada paso de
          tu viaje sea memorable y sin preocupaciones. ¡Déjanos ser tu compañero
          de viaje confiable!
        </h3>
        <h3 className="text-sm md:text-lg mt-4 mx-24 mb-6 text-center font-roboto font-bold text-zinc-800">
          En Horizontes Viajeros, nos enorgullece ofrecer una amplia gama de
          servicios diseñados para hacer que tu experiencia de viaje sea
          inolvidable. Ya sea que estés buscando el alojamiento perfecto, la
          libertad de explorar a tu propio ritmo, o la comodidad de reservar tus
          medios de transporte, ¡nosotros lo tenemos cubierto! Descubre nuestros
          servicios a continuación:
        </h3>
      </div>

      <div className="container h-[600px] mx-auto bg-cover bg-center relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center absolute top-0 left-0 inset-1"
          style={{
            backgroundImage: `url(${servicios[currentServiceIndex].image})`,
          }}
        >
          <div
            className={`content absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto font-bold text-base shadow-lg
           shadow-black w-[90%] max-w-md bg-slate-600 text-black p-4 opacity-80 rounded-xl ${
             animateShow ? "animate-show" : ""
           }`}
          >
            <div className="w-full bg-slate-400 rounded-lg shadow-lg shadow-black mx-auto">
              <h2 className="text-3xl font-900 uppercase font-arialBlack text-sky-800 text-center pt-4 pb-2 shadow-md shadow-black">
                {servicios[currentServiceIndex].name}
              </h2>
              <p className="text-xl px-6 pb-4 mt-6 mb-6 font-400">
                {servicios[currentServiceIndex].description}
              </p>
            </div>
            {getUser && ( // Verifica si el usuario está logueado
              <div className="flex justify-end mt-4">
                <span
                  onClick={() => {
                    navigate("/all_servicios");
                  }}
                  className="text-3xl text-white p-2"
                >
                  <HiArrowRight />
                </span>
              </div>
            )}
          </div>
          <div className="secondary-images mb-8 w-100% opacity-90 flex-shrink-0 flex justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[1] select-none duration-300">
            {servicios.map((service, index) => (
              <div
                key={index}
                className="secondary-image-container w-[50px] h-[90px] hidden lg:flex justify-start bottom-8 left-0 rounded-lg overflow-hidden shadow-lg shadow-gray-900 ml-2"
                style={{
                  transform: `translateX(calc(${
                    (index - currentServiceIndex) * 10
                  }px)) translateY(${
                    index === currentServiceIndex ? "-20px" : "0"
                  })`,
                  zIndex: index === currentServiceIndex ? 1 : -1,
                  opacity: index === currentServiceIndex ? 0.8 : 1,
                  border:
                    index === currentServiceIndex ? "4px double darkgray" : "",
                  boxShadow:
                    index === currentServiceIndex
                      ? "2px 3px 4px rgba(0,0,0,0.5)"
                      : "",
                  transition: "transform 0.5s, opacity 0.2s",
                }}
                onClick={() => setCurrentServiceIndex(index)}
              >
                <div
                  className="secondary-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50px",
                    height: "90px",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="nav absolute bottom-1 left-1/2 transform -translate-x-1/2 z-[3] select-none">
            <button
              onClick={handlePrev}
              className="btn prev bg-gray-400 text-black border-2 border-black rounded-lg mx-1 py-1 px-2 hover:bg-gray-900 hover:text-white"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="btn next bg-gray-400 text-black border-2 border-black rounded-lg mx-1 py-1 px-2 hover:bg-gray-900 hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
