import Navbar from "../Nav/Navbar";
import { useState } from "react";
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

    let data = {
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

    if (role === "vendedor") {
      data.job = job;
      data.salary = salary;
    }

    try {
      const response = await registerHandler(data);

      console.log("Código de estado:", response.statusCode);
      console.log("Datos de respuesta:", response.data);

      if (response.statusCode === 200) {
        navigate("/");
      } else {
        console.log("Error en el registro:", response.statusCode);
      }
    } catch (error) {
      console.log("Error en la petición register:", error);
    }
  }

  return (
    <>
      <section>
        <Navbar />
      </section>
      <section
        className="bg-sky-500 w-full py-20 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/0.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.9, // ajusta este valor según la opacidad deseada
        }}
      >
        <form
          className="bg-white p-10 rounded-md shadow-md max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Lastname
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                DNI
              </label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Birthdate
              </label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              >
                <option value="vendedor">Vendedor</option>
                <option value="cliente">Cliente</option>
              </select>
            </div>
            {role === "vendedor" && (
              <>
                <div className="w-full md:w-1/2 px-4">
                  <label className="uppercase text-xs text-zinc-500 font-bold">
                    Job
                  </label>
                  <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <label className="uppercase text-xs text-zinc-500 font-bold">
                    Salary
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
                  />
                </div>
              </>
            )}
            <div className="w-full px-4 mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
            <div className="w-full px-4 mt-5">
              <label className="uppercase text-xs text-zinc-500 font-bold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-auto mt-7">
            <button
              type="submit"
              className="bg-orange-500 duration-300 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"
            >
              Registrarse
            </button>
          </div>

          <div className="mt-4 text-xs text-zinc-500 text-center">
            <span>¿Ya estás registrado?</span>
            <a onClick={HandleClick} className="ml-2 font-medium text-sky-600 cursor-pointer">
              Iniciar sesión
            </a>
          </div>
        </form>
      </section>
    </>
  );
}
