import { useState } from "react"; // Agregar useState
import store from "../../../utils/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { code } from "../../../utils/variables.js";
import { deleteServicioHandler } from "../../../utils/eliminarServicio.js";
import { loadServiceUser } from "../../../utils/services.js";
import { FaAngleDown, FaHotel, FaCar, FaBus, FaPlane, FaTrain, FaHiking, FaTicketAlt } from "react-icons/fa";
import { service } from "../../../assets/serviciosGenerales.js";

export default function ServiciosOfrecidos() {
  const navigate = useNavigate();
  const {
    getUserService,
    setUserService,
    setInitialServiceToAdd,
    setIdService,
    setAddOrUpdate,
    getUser, // Asegúrate de tener esta función en tu store
  } = store();

  // Estado para controlar la visibilidad del menú desplegable
  const [showFilters, setShowFilters] = useState(false);

  // Define los títulos para cada tipo de servicio basado en el código
  const titlesByCode = [
    { code: 1, title: "Hoteles", icon: <FaHotel /> },
    { code: 2, title: "Alquiler de autos", icon: <FaCar /> },
    { code: 3, title: "Pasajes de colectivos", icon: <FaBus /> },
    { code: 4, title: "Pasajes de avión", icon: <FaPlane /> },
    { code: 5, title: "Pasajes de tren", icon: <FaTrain /> },
    { code: 6, title: "Excursiones", icon: <FaHiking /> },
    { code: 7, title: "Entradas a eventos", icon: <FaTicketAlt /> }
  ];

  // Agrupa los servicios por código
  const servicesByCode = service.reduce((acc, sv) => {
    if (!acc[sv.service_code]) {
      acc[sv.service_code] = [];
    }
    acc[sv.service_code].push(sv);
    return acc;
  }, {});

  useEffect(() => {
    loadServiceUser(setUserService);
  }, []);

  return (
    <main className="bg-emerald-50 p-10 w-[100%] mx-auto relative">
      <h3 className="capitalize text-5xl text-center mt-36 mb-16 tracking-tight font-bold text-zinc-800 ">
        Servicios ofrecidos
      </h3>
      <section className="mt-5 flex justify-between items-center gap-x-2 mb-16 relative z-10 ">
        <div className="flex items-center gap-x-2 w-3/4">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full rounded-lg"
          />
          <button className="bg-zinc-300 hover:bg-sky-500 rounded-lg h-full p-3 text-sky-950 duration-300 font-bold uppercase text-sm">
            buscar
          </button>
        </div>
        <button
          className="bg-orange-200 border-2 border-orange-700 flex justify-center text-center w-24 text-xl font-bold rounded-lg p-2 mb-5 mr-16"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtros
          <FaAngleDown className="mt-1 ml-2" />
        </button>
      </section>
      {showFilters && (
        <section className="bg-orange-200 border-2 border-orange-700 rounded-2xl p-5 text-xl font-medium tracking-tight absolute top-96 right-24 z-20">
          Contenido del menú desplegable de filtros...
        </section>
      )}
      <section className="mt-2 gap-x-2">
        {/* Itera sobre los servicios agrupados por código */}
        {Object.entries(servicesByCode).map(([code, services]) => (
          <div key={code}>
           <div className="flex items-center justify-center my-8 h-16 p-4 shadow-lg text-teal-950 shadow-teal-800 rounded-3xl">   
           <span className="my-auto mr-3 text-4xl">{titlesByCode.find(item => item.code === parseInt(code))?.icon}</span> 
            <h2 className="text-4xl text-center my-auto font-roboto uppercase rounded-2xl font-semibold text-zinc-800">
              {titlesByCode.find(item => item.code === parseInt(code))?.title} 
            </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((sv, index) => (
                <div key={index}>
                  <div
                    className="w-[500px] h-80 bg-center bg-cover overflow-hidden flex flex-col content-center items-end group rounded-lg"
                    style={{ backgroundImage: `url(${sv.image})` }}
                  >
                    <h1 className="text-md mx-auto p-1 rounded-xl bg-[#0000003e] text-white uppercase font-bold tracking-tight mb-36 mt-4">
                      {sv.name}
                    </h1>
                    <p className="mt-4 text-lg text-slate-900 font-bold bg-[#ffff004d] mr-4 rounded-lg border-2 border-yellow-100 p-1">
                      ${sv.cost}
                    </p>
                    {getUser.role === "cliente" && (
                      <div>
                        <button
                          onClick={() => {
                            setIdService(sv.id_servicio);
                            setAddOrUpdate("update");
                            setInitialServiceToAdd({
                              name: sv.name,
                              description: sv.description,
                              service_destination: sv.service_destination,
                              service_date: sv.service_date,
                              cost: sv.cost,
                              service_code: sv.service_code,
                            });
                            navigate("/carrito");
                          }}
                          className="hover:bg-green-500 hover:text-black bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md mr-2 py-2 px-4 rounded mt-2"
                        >
                          Comprar
                        </button>
                        <button
                          onClick={() => {
                            // Lógica para ver más detalles
                          }}
                          className="hover:bg-orange-500 hover:text-black bg-[#030a077b] border-2 border-orange-600 text-orange-200 font-bold text-md mr-2 py-2 px-4 rounded mt-2"
                        >
                          Ver más
                        </button>
                      </div>
                    )}
                    {getUser.role === "vendedor" && (
                      <div className="mt-4 flex gap-x-2 mr-4">
                        <button
                          onClick={() => {
                            setIdService(sv.id_servicio);
                            setAddOrUpdate("update");
                            setInitialServiceToAdd({
                              name: sv.name,
                              description: sv.description,
                              service_destination: sv.service_destination,
                              service_date: sv.service_date,
                              cost: sv.cost,
                              service_code: sv.service_code,
                            });
                            navigate("/agregarServicio");
                          }}
                          className="hover:bg-green-500 hover:text-black  bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md py-1.5 rounded px-5 uppercase"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() =>
                            deleteServicioHandler(
                              sv.id_servicio,
                              setUserService
                            )
                          }
                          className=" bg-[#030a077b] hover:bg-red-500 hover:text-black border-2 border-red-600 text-red-200 font-bold text-md py-1.5 rounded px-5 uppercase"
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
