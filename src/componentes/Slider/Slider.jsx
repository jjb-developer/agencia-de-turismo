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

export default function Slider() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [arr, setArr] = useState(bgImages);

  function actualizarArr() {
    let copy = arr.map((e) => e);
    let aux = copy.shift();
    copy.push(aux);
    setArr(copy);
    if(currentBgIndex<arr.length-1){
      setCurrentBgIndex(currentBgIndex+1)
    }else{setCurrentBgIndex(0)}
    
  }
  useEffect(() => {
    const timer = setInterval(() => {
      actualizarArr();
    }, 8000);
    return () => {
      clearInterval(timer);
    };
  }, [arr]);

  return (
    <article
      className="w-full h-80 bg-center bg-cover bg-no-repeat relative p-4 overflow-hidden transition-all shadow-lg"
      style={{ backgroundImage: bgImages[currentBgIndex] }}
    >
      <div className="h-full w-full left-1/2 flex items-end justify-end gap-2 overflow-hidden">
        {arr.map((image, index) => {
          if(index>0){
          return <div
            key={index}
            className="bg-red-500 h-24 w-24 top-1/2 right-1/3 bg-center bg-cover rounded-lg"
            style={{ backgroundImage: image }}
          />;
}})}
      </div>
    </article>
  );
}
