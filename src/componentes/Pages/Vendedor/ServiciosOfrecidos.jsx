import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaHotel, FaCar, FaBus, FaPlane, FaTrain, FaHiking, FaTicketAlt } from "react-icons/fa";
import store from "../../../utils/store";
import { deleteServicioHandler } from "../../../utils/eliminarServicio";
import { loadServiceUser } from "../../../utils/services";
import { service } from "../../../assets/serviciosGenerales";

export default function ServiciosOfrecidos() {
  const navigate = useNavigate();
  const { setUserService, setInitialServiceToAdd, setIdService, setAddOrUpdate, getUser } = store();

  const [showFilters, setShowFilters] = useState(false);

  const titlesByCode = [
    { code: 1, title: "Hoteles", icon: <FaHotel /> },
    { code: 2, title: "Alquiler de autos", icon: <FaCar /> },
    { code: 3, title: "Pasajes de colectivos", icon: <FaBus /> },
    { code: 4, title: "Pasajes de avión", icon: <FaPlane /> },
    { code: 5, title: "Pasajes de tren", icon: <FaTrain /> },
    { code: 6, title: "Excursiones", icon: <FaHiking /> },
    { code: 7, title: "Entradas a eventos", icon: <FaTicketAlt /> }
  ];

  const servicesByType = titlesByCode.map(({ code }) => ({
    type: code,
    services: service.filter(sv => sv.service_code === code)
  }));

  useEffect(() => {
    loadServiceUser(setUserService);
  }, []);

  return (
    <main className="bg-emerald-50 pt-36 lg:p-10 w-[100%] mx-auto relative">
      <h3 className="capitalize text-5xl text-center mt-4 lg:mt-36 mb-16 tracking-tight font-bold text-zinc-800 ">
        Servicios ofrecidos
      </h3>
      <section className="mt-5 flex flex-wrap lg:flex-nowrap justify-between items-center gap-x-2 mb-16 relative z-10 ">
        <div className="flex items-center gap-x-2 w-3/4 mx-auto">
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
          className="bg-orange-200 border-2 border-orange-700 mt-3 lg:mt-1 flex justify-center text-center w-24
           text-xl font-bold rounded-lg p-2 mb-5 mx-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtros
          <FaAngleDown className="mt-1 ml-2" />
        </button>
      </section>
      {showFilters && (
        <section className="bg-orange-200 border-2 border-orange-700 rounded-2xl p-5 text-xl 
        font-medium tracking-tight absolute top-[450px] rigth-8 lg:top-96 lg:right-24 z-20">
          Contenido del menú desplegable de filtros...
        </section>
      )}
      <section className="mt-2 gap-x-2 custom-scrollbar">
        {/* Itera sobre los servicios agrupados por tipo */}
        {servicesByType.map(({ type, services }) => (
          <div key={type} className="relative " 
          style={{ overflowX: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'green' }}>
            <div className="flex items-center justify-center my-8 h-16 p-4 shadow-lg text-teal-950 shadow-teal-800 rounded-3xl">   
              <span className="my-auto mr-3 text-xl lg:text-4xl">{titlesByCode.find(item => item.code === type)?.icon}</span> 
              <h2 className="text-xl lg:text-4xl text-center my-auto font-roboto uppercase rounded-2xl font-semibold text-zinc-800">
                {titlesByCode.find(item => item.code === type)?.title} 
              </h2>
            </div>
            <div className="flex gap-4 overflow-x-auto p-4"
           style={{ scrollbarWidth: 'thin', scrollbarColor: 'blue' }}>
              {services.map((sv, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="bg-center bg-cover h-80 rounded-lg relative">
                    <img src={sv.image} alt={sv.name} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2 text-white">
                      <h1 className="text-md font-bold">{sv.name}</h1>
                      <p className="text-lg font-bold">${sv.cost}</p>
                      <div className="mt-2">
                        {getUser.role === "cliente" && (
                          <>
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
                              className="hover:bg-green-500 hover:text-black bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md py-2 px-4 rounded mt-2"
                            >
                              Comprar
                            </button>
                            <button
                              onClick={() => {
                                // Lógica para ver más detalles
                              }}
                              className="hover:bg-orange-500 hover:text-black bg-[#030a077b] border-2 border-orange-600 text-orange-200 font-bold text-md py-2 px-4 rounded mt-2 ml-2"
                            >
                              Ver más
                            </button>
                          </>
                        )}
                        {getUser.role === "vendedor" && (
                          <div className="flex gap-2 mt-2">
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
                              className="hover:bg-green-500 hover:text-black bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md py-2 px-4 rounded"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() =>
                                deleteServicioHandler(sv.id_servicio, setUserService)
                              }
                              className="hover:bg-red-500 hover:text-black bg-[#030a077b] border-2 border-red-600 text-red-200 font-bold text-md py-2 px-4 rounded"
                            >
                              Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
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
