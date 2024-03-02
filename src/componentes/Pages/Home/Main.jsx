export default function main({ servicios }) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 px-16 py-8 mx-auto md:px-20 md:py-12 lg:px-24 xl:px-32 2xl:px-48">
      {servicios?.map((servicio) => (
        <article
          key={servicio.code}
          className="border-2 rounded p-5 cursor-pointer border-gray-300 shadow-2xl hover:border-orange-300 duration-300"
          style={{ height: "40rem" }} // Establecer la altura fija aquí (40rem = 640px)
        >
          <figure>
            <img
              className="w-full h-40 object-cover mb-4"
              src={servicio.image}
              alt="imagen del servicio"
            />
          </figure>
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 capitalize mb-2 text-center h-16">
                {servicio.name}
              </h3>
              <p className="text-xl text-gray-600 text-center mt-9 h-28">
                {servicio.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
