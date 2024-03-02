import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import { registerHandler } from "../../utils/register.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [dni, setDni] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("cliente");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");

  const [send, setSend] = useState(false);

  const navigate = useNavigate();

  function HandleClick() {
    navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let data = null;
    if (role === "vendedor") {
      data = {
        name,
        lastname,
        address,
        dni,
        birthdate,
        country,
        phone,
        email,
        role,
        username,
        password,
        job,
        salary,
      };
    } else {
      data = {
        name,
        lastname,
        address,
        dni,
        birthdate,
        country,
        phone,
        email,
        role,
        username,
        password,
      };
    }

    try {
      const response = await registerHandler(data);
      console.log("Código de estado:", response.statusCode);
      console.log("Datos de respuesta:", response.data);

      if (response.statusCode == 200) {
        navigate("/");
      } else {
        console.log("Error en el registro:", response.statusCode);
      }
    } catch (error) {
      console.log("Error en la petición register:", error);
    }
    function crearUsuario() {
      const user = {
        name: "mario",
        lastname: "garcia",
        address: "barinas",
        dni: "14567126",
        birthdate: "1990-05-01",
        country: "venezuela",
        phone: "580345678",
        email: "mario@garcia.com",
        role: "cliente",
        user_state: true,
        username: "garma",
        password: "garma",
      };

      const vendedor = {
        name: "astrid",
        lastname: "meza",
        address: "madrid",
        dni: "34217890",
        birthdate: "1999-09-02",
        country: "españa",
        phone: "453888221",
        email: "astrid@meza.com",
        role: "vendedor",
        user_state: true,
        username: "astza",
        password: "astza",
        job: "developer web",
        salary: 5000,
      };

      fetch("https://agencia-de-turismo.onrender.com/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(vendedor),
      })
        .then((res) => res.text())
        .then((data) => console.info(data));
    }

    function probarClient() {
      fetch("https://agencia-de-turismo.onrender.com/client/7", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0OSwiaWF0IjoxNzA4OTYyNDMyLCJleHAiOjE3MDg5NjYwMzJ9.lOkVdjWuR6OnE7CFZ6UZnKVt7TYHNYFvGnJbUDQQW2g",
        },
      })
        .then((res) => res.text())
        .then((data) => console.info(data));
    }

    function probar() {
      fetch("https://agencia-de-turismo.onrender.com/private", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0OSwiaWF0IjoxNzA4OTYyNDMyLCJleHAiOjE3MDg5NjYwMzJ9.lOkVdjWuR6OnE7CFZ6UZnKVt7TYHNYFvGnJbUDQQW2g",
        },
      })
        .then((res) => res.text())
        .then((data) => console.info(data));
    }

    function login() {
      fetch("https://agencia-de-turismo.onrender.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username: "astza", password: "astza" }),
      })
        .then((res) => res.text())
        .then((data) => console.info(data));
    }

    function updateUser() {
      fetch("https://agencia-de-turismo.onrender.com/client/7", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ password: "nuevapasword" }),
      })
        .then((res) => res.text())
        .then((data) => console.info(data));
    }

    async function handleSubmit(e) {
      e.preventDefault();
      //llamo a login.js
      const res = await registerHandler(
        name,
        lastname,
        adress,
        dni,
        country,
        phone,
        email,
        role,
        username,
        password,
        salary
      );
      setSend(true);
      console.log(res);
    }

    useEffect(() => {
      if (send) {
        navigate("/");
      }
    }, [send]);

    return (
      <>
        <section className="">
          <Navbar />
        </section>
        <section className="bg-sky-500 w-full py-20 flex flex-col items-center justify-center">
          <form
            className="bg-white p-10 rounded-md shadow-md w-96"
            onSubmit={handleSubmit}
            action=""
          >
            <div className="flex flex-col">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                name
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                lastname
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                adress
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                dni
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={dni}
                onChange={(e) => {
                  setDni(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                birthdate
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="date"
                value={birthdate}
                onChange={(e) => {
                  setBirthdate(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                country
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                name=""
                id="5"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                phone
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                email
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                role
              </label>
              <select
                defaultValue={role}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 bg-zinc-100"
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="" value="vendedor">
                  vendedor
                </option>
                <option value="cliente">cliente</option>
                name="rol" id='8' value={role}
                onChange={(e) => setRol(e.target.value)}
                <option className="" value="empleado">
                  Empleado
                </option>
                <option value="cliente">Cliente</option>
              </select>
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                username
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                password
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                sueldo
              </label>
              <input
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
                type="text"
                name=""
                id="11"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center justify-center w-full h-auto mt-7">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-orange-500 duration-300 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"
              >
                Registrarse
              </button>
            </div>
            <div className="mt-4 text-xs text-zinc-500 text-center">
              <span>Ya estas registrado?</span>
              <a
                onClick={HandleClick}
                className="ml-2 font-medium text-sky-600"
              >
                Iniciar sesión
              </a>
            </div>
          </form>
        </section>
      </>
    );
  }
}
