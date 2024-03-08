import React, { useState, useEffect, useRef } from "react";

const bgImages = [
  "https://images.pexels.com/photos/15537287/pexels-photo-15537287/free-photo-of-carretera-montanas-arboles-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15700862/pexels-photo-15700862/free-photo-of-glaciar-de-svartisen-en-noruega.jpeg",
  "https://images.pexels.com/photos/15900831/pexels-photo-15900831/free-photo-of-paisaje-punto-de-referencia-puente-arboles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6478474/pexels-photo-6478474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function Slider() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [arr, setArr] = useState(bgImages);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const divAnimadoRef = useRef(null);
  const lastDivAnimadoRef=useRef(null);

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
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [arr]);

  function nextImage() {
    divAnimadoRef.current.classList.add("animate-wiggle");
    setTimeout(() => {
      let copy = arr.map((e) => e);
      let aux = copy.shift();
      copy.push(aux);
      setArr(copy);
      if (currentBgIndex < arr.length - 1) {
        setCurrentBgIndex(currentBgIndex + 1);
      } else {
        setCurrentBgIndex(0);
      }
      divAnimadoRef.current.classList.remove("animate-wiggle");
    }, 500);
  }

  function previewImage() {
    lastDivAnimadoRef.current.classList.add("animate-wiggle");
    setTimeout(() => {
    let copy = arr.map((e) => e);
    let aux = copy.pop();
    copy.unshift(aux);
    setArr(copy);
    if (currentBgIndex === 0) {
      setCurrentBgIndex(arr.length - 1);
    } else {
      setCurrentBgIndex(currentBgIndex - 1);
    }
    lastDivAnimadoRef.current.classList.remove("animate-wiggle");
    }, 500);
  }

  function handleClick(e) {
    if (e.target.id === "next") {
      nextImage();
    }
    if (e.target.id === "preview") {
      previewImage();
    }
  }

  return (
    imagesLoaded && (
      <article
        className="w-full h-80 bg-center bg-cover bg-no-repeat relative p-4 overflow-hidden transition-all shadow-lg"
        style={{ backgroundImage: `url(${bgImages[currentBgIndex]})` }}
      >
        <div className="h-full w-full left-1/2 flex items-end justify-end gap-2 overflow-hidden">
          <button
            onClick={handleClick}
            id="preview"
            className="px-2 py-1 text-white  cursor-pointer font-semibold text-2xl rounded hover:bg-gray-50/20"
          >
            &lt;
          </button>
          {arr.map((image, index) => {
            if (index !== 0) {
              return index === 1 ? (
                <div
                  ref={divAnimadoRef}
                  key={index}
                  className="bg-red-500 divAnimado h-24 w-24 top-1/2 right-1/3 bg-center bg-cover rounded-lg animate-wiggle"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : index == arr.length - 1 ? (
                <div
                ref={lastDivAnimadoRef}
                  key={index}
                  className="bg-red-500 h-24 w-24 top-1/2 right-1/3 bg-center bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div
                  key={index}
                  className="bg-red-500 h-24 w-24 top-1/2 right-1/3 bg-center bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${image})` }}
                />
              );
            }
          })}
          <button
            onClick={handleClick}
            id="next"
            className="px-2 py-1 text-white cursor-pointer font-semibold text-2xl rounded hover:bg-gray-50/20"
          >
            &gt;
          </button>
        </div>
      </article>
    )
  );
}
