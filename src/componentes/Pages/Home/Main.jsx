import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main({ servicios }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="mt-8 mb-8">
      <Slider {...settings} className="gap-x-4">
        {servicios?.map((servicio) => (
          <div key={servicio.code} className="px-2"> {/* Agregar margen horizontal */}
            <article
              className="border-2 rounded p-5 cursor-pointer border-gray-300 shadow-2xl hover:border-orange-300 duration-300"
              style={{ height: "50rem" }}
            >
              <figure className=" shadow-xl shadow-slate-600 rounded-lg">
                <img
                  className="w-full h-60 object-cover object-center rounded-lg mb-4"
                  src={servicio.image}
                  alt="imagen del servicio"
                />
              </figure>
              <div className="h-full flex flex-col justify-between">
                <div>
                <h3 className="text-3xl font-bold font-playfair text-gray-800 capitalize mt-4 mb-2 text-center h-16">
                    {servicio.name}
                  </h3>
                  <p className="text-2xl text-gray-600 font-semibold text-center mt-9 mx-8 px-5 h-80  shadow-xl shadow-orange-300">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </main>
  );
}
