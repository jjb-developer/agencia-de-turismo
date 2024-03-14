import { BiImage, BiPlus } from "react-icons/bi";
import { code, initialStateServicetoAdd } from "../../../utils/variables.js";
import store from "../../../utils/store";
import Navbar from "../../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import { updateServiceHandle } from "../../../utils/actualizarServicio.js";
import { addServiceHandle } from "../../../utils/agregarServicio.js";

export default function AgregarServicio() {
  const navigate = useNavigate();
  const {
    getInitialServiceToAdd,
    setUserService,
    setInitialServiceToAdd,
    getAddOrUpdate,
    getIdService,
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
      }
    }
  }

  return (
    <>
      <Navbar />
      <main
        className="bg-sky-100 py-10 pb-96"
        style={{
          backgroundImage: "url('/agregarServicio.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.9, //Ajusta este valor según la opacidad deseada
        }}
      >
        <div className="flex gap-x-2 justify-between w-[90%] mx-auto mt-48">
          <div className="flex gap-x-2">
            <button className="hover:bg-green-500 hover:text-black bg-[#030a077b] border-2 border-green-400 text-green-200 font-bold text-md uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg">
              <span>cargar</span>
              <span>servicio</span>
            </button>
            <button className="hover:bg-orange-500 hover:text-black bg-[#030a077b] border-2 border-orange-400 text-orange-200 font-bold text-md uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg">
              <span>modificar</span>
              <span>servicio</span>
            </button>
            <button className="hover:bg-blue-500 hover:text-black bg-[#030a077b] border-2 border-blue-400 text-blue-200 font-bold text-md uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg">
              <span>borrar</span>
              <span>servicio</span>
            </button>
          </div>
          <button className="bg-emerald-500 text-black hover:bg-[#030a077b] border-2 hover:border-emerald-400 hover:text-emerald-200 font-bold text-md uppercase flex justify-center items-center w-32 h-14 rounded-lg">
            reporte
          </button>
        </div>
        <div className="mt-10 w-[90%] flex flex-col sm:flex-row gap-x-5 justify-between mx-auto">
          <div className="w-full sm:w-1/2">
            <figure className="w-full h-56 bg-zinc-300 rounded-lg flex items-center justify-center">
              <BiImage size="56" className="text-zinc-500" />
            </figure>
            <div className="mt-5 flex items-center gap-x-4">
              <button className="flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase">
                <BiPlus size="32" />
              </button>
              <button className="flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase">
                <BiPlus size="32" />
              </button>
              <button className="flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase">
                <BiPlus size="32" />
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-2 mx-auto w-full mt-5 sm:mt-0 sm:w-1/2"
          >
            <div className="w-full flex flex-col gap-y-1">
              <select
                name="name"
                value={getInitialServiceToAdd.name}
                className="w-full p-1 rounded-lg hover:bg-green-100 hover:text-black bg-[#f3f6f57b] border-2 border-green-400 font-bold text-md capitalize"
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
              <input
                required
                name="cost"
                type="text"
                pattern="^[0-9]+$"
                title="Por favor solo caracteres numeros. Gracias"
                value={getInitialServiceToAdd.cost}
                placeholder="Escribe el costo del servicio (solo numeros)."
                className="w-full rounded-lg placeholder:text-sm placeholder:text-black invalid:text-red-500 hover:bg-green-100 hover:text-black bg-[#f2f7f57b] border-2 border-green-400 text-green-200 font-bold text-md"
                onChange={(e) =>
                  setInitialServiceToAdd({
                    ...getInitialServiceToAdd,
                    cost: e.target.value,
                  })
                }
              />
              <input
                required
                name="service_destination"
                type="text"
                pattern="^[A-Za-z0-9\s]{3,20}$"
                title="Por favor ingrese mínimo 3 ó máximo 20 carácteres. Gracias"
                value={getInitialServiceToAdd.service_destination}
                placeholder="Escribe el destino del servico."
                className="w-full rounded-lg placeholder:text-sm placeholder:text-black hover:bg-green-100 hover:text-black bg-[#f3f5f47b] border-2 border-green-400 text-green-200 font-bold text-md"
                onChange={(e) =>
                  setInitialServiceToAdd({
                    ...getInitialServiceToAdd,
                    service_destination: e.target.value,
                  })
                }
              />
              <input
                name="service_date"
                className="w-full rounded-lg placeholder:text-sm placeholder:text-black hover:bg-green-100 hover:text-black bg-[#f8fbfa7b] border-2 border-green-400 font-bold text-md"
                type="date"
                value={getInitialServiceToAdd.service_date}
                onChange={(e) =>
                  setInitialServiceToAdd({
                    ...getInitialServiceToAdd,
                    service_date: e.target.value,
                  })
                }
              />
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
                className="w-full resize-none h-32 rounded-lg placeholder:text-sm placeholder:text-black hover:bg-green-100 hover:text-black bg-[#f5faf87b] border-2 border-green-400 text-green-200 font-bold text-md"
              ></textarea>
            </div>
            {getAddOrUpdate === "add" && (
              <button
                type="submit"
                className="w-full px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-orange-100 text-white"
              >
                agregar
              </button>
            )}
            {getAddOrUpdate === "update" && (
              <button
                type="submit"
                className="w-full px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-orange-300 text-white"
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
