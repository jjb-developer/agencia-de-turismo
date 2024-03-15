import React, { useState, useEffect } from "react";
import { BiUser, BiCart, BiSolidHotel } from "react-icons/bi";
import { ImAirplane, ImCart } from "react-icons/im";
import { FaCarAlt, FaBusAlt, FaTrain } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
const bgImages = [
  "0.webp",
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
];

export default function Slider() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [arr, setArr] = useState(bgImages);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(null);

  useEffect(() => {
    const images = [];
    let loadedImages = 0;

    function imageLoaded() {
      loadedImages++;
      if (loadedImages === bgImages.length) {
        setImagesLoaded(true);
      }
    }

    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = imageLoaded;
      images.push(img);
    });

    return () => {
      images.forEach((img) => {
        img.onload = null; // Limpiar el evento onload para evitar memory leaks
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4500);
    return () => {
      clearInterval(timer);
    };
  }, [arr, currentBgIndex]);

  function handleClick(index) {
    if (index !== undefined) {
      setAnimatingIndex(index);
      setCurrentBgIndex(index);
      setAnimatingIndex(null);
    }
  }

  function nextImage() {
    if (currentBgIndex < arr.length - 1) {
      setCurrentBgIndex(currentBgIndex + 1);
    } else {
      setCurrentBgIndex(0);
    }
  }

  function previewImage() {
    setAnimatingIndex(animatingIndex - 1);
    if (currentBgIndex === 0) {
      setCurrentBgIndex(arr.length - 1);
    } else {
      setCurrentBgIndex(currentBgIndex - 1);
    }
  }

  return (
    imagesLoaded && (
      <article
        className="w-full h-screen bg-center bg-cover bg-no-repeat relative z-0 p-4 pb-10 overflow-hidden transition-all shadow-lg"
        style={{ backgroundImage: `url(${bgImages[currentBgIndex]})` }}
      >
        <div className="h-full w-full left-1/2 flex items-end justify-end gap-2 overflow-hidden">
          <div className=" flex flex-col gap-2 min-w-32 max-w-96 self-center backdrop-blur-sm rounded-lg bg-gray-800/30 shadow-lg text-wrap font-semibold text-gray-100 absolute left-10 p-2">
            <span className="text-3xl text-blue-300">PAQUETES</span>
            <span className="text-sm">
              ¡Descubre nuestras ofertas exclusivas y elige el paquete perfecto
              para tus vacaciones! Desde emocionantes combos de pasaje de avión
              y hotel hasta opciones adicionales para personalizar tu
              experiencia.</span>
              <ul className="flex items-center justify-center gap-2">
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
          <button
            onClick={previewImage}
            className="px-2 py-1 text-white  cursor-pointer font-semibold text-2xl rounded hover:bg-gray-50/20"
          >
            &lt;
          </button>
          {arr.map((image, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-24 w-24 top-1/2 right-1/3 bg-center bg-cover rounded-lg ${
                index === animatingIndex ? "animate-wiggle" : ""
              }${index == currentBgIndex ? "animate-wiggle" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <button
            onClick={nextImage}
            className="px-2 py-1 text-white cursor-pointer font-semibold text-2xl rounded hover:bg-gray-50/20"
          >
            &gt;
          </button>
        </div>
      </article>
    )
  );
}
