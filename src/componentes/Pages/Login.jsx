import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "./../../utils/store";
import { url } from "../../utils/variables.js";

export default function Login() {
  const { login } = store();
  //const { setUser } = store()
  //utilize estados por comodida cambialo a zustand
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
//ARREGLADO sacalo en una funcion aparte
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await login(username, username);
//user ahora es un objeto con 2 propiedades {statusCode,responseData}
      const user = JSON.parse(localStorage.getItem("user"));

      //cuando te logueas si estas dado de baja responde con 403
      //si estas dado de alta podes buscar la info y redireccionar

      if (user.statusCode != 403) {
        
        try {
        
          fetch(`${url}/user`, {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${user.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setUser(data.results));
        } catch (error) {
          console.log(error.message)
        }
    }
  }catch (error) {
    console.log("Error en la petición login:", error.message);
  }
}

  function registerHandleClick() {
    navigate("/register");
  }
//redireccionamiento
  useEffect(() => {
    if (user !== null) {
      console.log(user.user_state);
      if (user.role == "cliente" && user.user_state != "false") {
        navigate("/");
      } else if (user.role == "vendedor" && user.user_state != "false") {
        navigate("/vendedor");
      }
    }
  }, [user]);

  return (
    <main
      className="bg-sky-500 w-full h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/13.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.9, // ajusta este valor según la opacidad deseada
      }}
    >
      <form
        className="bg-white p-10 rounded-md shadow-xl shadow-black w-80"
        onSubmit={handleSubmit}
        action=""
      >
        <div className="flex flex-col gap-y-2">
          <label className="uppercase text-xs text-zinc-800 font-bold">
            Username
          </label>
          <input
            className="outline-none py-2.5 px-2.5 border-none rounded focus:ring-orange-500 text-zinc-700 text-[0.98rem] duration-300"
            type="text"
            name=""
            id="0"
            placeholder="Escribe tu Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col mt-7 gap-y-2">
          <label className="uppercase text-xs text-zinc-800 font-bold">
            Password
          </label>
          <input
            className="outline-none py-2.5 px-2.5 border-none rounded focus:ring-orange-500 text-zinc-700 text-[0.98rem] duration-300"
            type="password"
            name=""
            id="1"
            placeholder="Escribe tu Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-center w-full h-auto mt-7">
          <button
            type="submit"
            className=" bg-orange-800 duration-300 hover:bg-orange-600 text-white hover:text-slate-900 text-md  font-playfair font-bold w-full shadow-lg shadow-slate-700 py-3 rounded-md uppercase"
          >
            Iniciar sesión
          </button>
        </div>
        <div className="mt-4 text-xs text-zinc-900 font-bold text-center">
          <span>No estas registrado?</span>
          <a
            onClick={registerHandleClick}
            className="ml-2 font-roboto text-lg font-semibold hover:font-bold hover:text-orange-600 duration-1000 text-sky-700 cursor-pointer"
          >
            Registrarse
          </a>
        </div>
      </form>
    </main>
  );
}
