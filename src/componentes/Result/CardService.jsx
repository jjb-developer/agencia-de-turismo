export default function CardService({
  image,
  nombre,
  descripcion,
  fecha,
  precio,
}) {
  return (
    <div className="group bg-gray-50 h-72 w-64 rounded-2xl  border-2 cursor-pointer ease-out duration-300 hover:scale-125 hover:h-auto shadow-lg">
      <div className="h-48 w-full bg-background bg-center rounded-t-lg" style={{backgroundImage: `url(${image})`}}>
		{/*deja el fondo como background sino te va a dar problemas para los estilos. y utiliza rutas absolutas fijate en el componente info que las cambie*/}	  
	  </div>
      <div className="w-full flex flex-col relative px-2">
        <h1 className=" font-bold">{nombre}</h1>
        <p className="text-sm text-zinc-500 truncate group-hover:text-wrap ease-out duration-500">
          {descripcion}
        </p>

        <div className="w-full h-full flex items-center justify-between">
          <span className="text-sm text-zinc-500">{fecha}</span>
          <span className="font-bold">$ {precio}</span>
        </div>
      </div>
    </div>
  );
}
