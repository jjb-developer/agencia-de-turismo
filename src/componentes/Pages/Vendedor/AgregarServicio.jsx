import { BiImage, BiPlus } from "react-icons/bi";
import { code, initialStateServicetoAdd } from "../../../utils/variables.js";
import store from "../../../utils/store";
import Navbar from "../../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import { updateServiceHandle } from "../../../utils/actualizarServicio.js";
import { addServiceHandle } from "../../../utils/agregarServicio.js";
import { loadServiceHandler } from "../../../utils/services.js";

export default function AgregarServicio() {
  const navigate = useNavigate();
  const {
    getInitialServiceToAdd,
    setUserService,
    setInitialServiceToAdd,
    getAddOrUpdate,
    getIdService,
    setAllService,
  } = store();

  async function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const data =
      getAddOrUpdate === "add"
        ? getInitialServiceToAdd
        : { ...getInitialServiceToAdd, id_service: getIdService };

    if (getAddOrUpdate === "update") {
      const response = await updateServiceHandle(data, user);
      if (response) {
        setInitialServiceToAdd(initialStateServicetoAdd);
        setUserService(null);
        navigate("/serviciosOfrecidos");
      }
    }

    if (getAddOrUpdate === "add") {
      const response = await addServiceHandle(data, user);
      if (response) {
        setInitialServiceToAdd(initialStateServicetoAdd);
        setUserService(null);

        const resultAllService = await loadServiceHandler();
        //hacer peticion a all service y guardar la respuesta como estado en...
        if (resultAllService) {
          setAllService(resultAllService);
        }
      }
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-sky-100 py-10 pb-48"
        style=
        {{
          backgroundImage: "url('/agregarServicio.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.9, 
        }}>
        <div className="mx-auto p-10 bg-zinc-50 max-w-[500px] mt-36">
          <h4 className="mb-7 pb-10 text-2xl font-medium tracking-tight capitalize max-w-[500px] mx-auto text-zinc-800 border-b-2">
            Agregar Servicios
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-2 max-w-[500px] mx-auto"
          >
            <div className="w-full flex flex-col gap-y-0">
              <div className="w-full flex flex-col h-[92px]">
                <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
                  Tipo de Servicio
                </label>
                <select
                  name="name"
                  value={getInitialServiceToAdd.name}
                  className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
                  onChange={(e) => {
                    setInitialServiceToAdd({
                      ...getInitialServiceToAdd,
                      name: e.target.value,
                      service_code: code[e.target.value],
                    });
                  }}
                >
                  <option value="hotel por noche">hotel por noche</option>
                  <option value="alquiler de auto">alquiler de auto</option>
                  <option value="pasajes de colectivos">
                    pasajes de colectivos
                  </option>
                  <option value="pasaje de avion">pasaje de avión</option>
                  <option value="pasaje de tren">pasaje de tren</option>
                  <option value="excursiones">excursiones</option>
                  <option value="entradas a eventos">entradas a eventos</option>
                </select>
              </div>
              <div className="w-full flex flex-col h-[92px]">
                <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
                  Costo del servicio
                </label>
                <input
                  required
                  name="cost"
                  type="text"
                  pattern="^[0-9]{1,12}$"
                  value={getInitialServiceToAdd.cost}
                  placeholder="Escribe el costo del servicio...."
                  className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
                  onChange={(e) =>
                    setInitialServiceToAdd({
                      ...getInitialServiceToAdd,
                      cost: e.target.value,
                    })
                  }
                />
                <span className="text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300">
                  Solo caracteres numericos (min 1, max 12).
                </span>
              </div>

              <div className="w-full flex flex-col h-[92px]">
                <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
                  Destino del servicio
                </label>
                <input
                  required
                  name="service_destination"
                  type="text"
                  pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
                  value={getInitialServiceToAdd.service_destination}
                  placeholder="Escribe el destino del servico."
                  className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
                  onChange={(e) =>
                    setInitialServiceToAdd({
                      ...getInitialServiceToAdd,
                      service_destination: e.target.value,
                    })
                  }
                />
                <span className="text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300">
                  Solo caracteres alfabeticos.
                </span>
              </div>

              <div className="w-full flex flex-col h-[92px]">
                <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
                  Fecha Del Servicio
                </label>
                <input
                  name="service_date"
                  className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
                  type="date"
                  value={getInitialServiceToAdd.service_date}
                  onChange={(e) =>
                    setInitialServiceToAdd({
                      ...getInitialServiceToAdd,
                      service_date: e.target.value,
                    })
                  }
                />
              </div>

              <div className="w-full flex flex-col h-[92px]">
                <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
                  Descripción del servicio
                </label>
                <textarea
                  required
                  name="description"
                  value={getInitialServiceToAdd.description}
                  onChange={(e) =>
                    setInitialServiceToAdd({
                      ...getInitialServiceToAdd,
                      description: e.target.value,
                    })
                  }
                  placeholder="Escribe una breve descripción del servicio."
                  className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
                ></textarea>
              </div>
            </div>
            {getAddOrUpdate === "add" && (
              <button
                type="submit"
                className="w-full mt-4 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-orange-500 duration-200 text-white"
              >
                agregar
              </button>
            )}
            {getAddOrUpdate === "update" && (
              <button
                type="submit"
                className="w-full mt-4 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-sky-500 duration-200 text-white"
              >
                update
              </button>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
