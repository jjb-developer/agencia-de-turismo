import { useState } from "react";
import { registerHandler } from "../../utils/register.js";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from 'react-icons/bi'

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [dni, setDni] = useState("");
  const [birthdate, setBirthdate] = useState("1990-01-01");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("cliente");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [viewPass, setViewPass] = useState(false);

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
      console.log("Error en la petición register:", error.message);
    }
  }


  return (
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
        className="bg-white p-10 rounded shadow-md max-w-xl mx-auto"
        onSubmit={ handleSubmit }
      >
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Name
            </label>
            <input
              required
              pattern="^[a-z]{3,20}$"
              placeholder="Minimo 3, Maximo 20 caracteres alfabeticos"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Lastname
            </label>
            <input
              required
              pattern="^[a-z]{3,20}$"
              placeholder="Minimo 3, Maximo 20 caracteres alfabeticos"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Address
            </label>
            <input
              required
              pattern="^[A-Za-z]{3,20}$"
              placeholder="Minimo 3, Maximo 20 caracteres alfabeticos"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              DNI
            </label>
            <input
              required
              pattern="^[0-9]{8,9}$"
              placeholder="Minimo 8, Maximo 9 caracteres numericos."
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Birthdate
            </label>
            <input
              required
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Country
            </label>
            <input
              required
              pattern="^[a-z]{3,20}$"
              placeholder="Minimo 3, Maximo 20 caracteres alfabeticos"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Phone
            </label>
            <input
              required
              pattern="^[0-9]{8,}$"
              placeholder="12345678..."
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Email
            </label>
            <input
              required
              pattern="^[a-z][a-z0-9]{4,16}@[a-z]{4,10}\.com$"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            >
              <option value="vendedor">Vendedor</option>
              <option value="cliente">Cliente</option>
            </select>
          </div>
          {role === "vendedor" && (
            <>
              <div className="w-full md:w-1/2 px-4 mt-3">
                <label className="uppercase text-xs text-zinc-800 font-bold">
                  Job
                </label>
                <input
                  required
                  pattern="^[a-z]{3,20}$"
                  placeholder="Minimo 3, Maximo 20 caracteres alfabeticos"
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mt-3">
                <label className="uppercase text-xs text-zinc-800 font-bold">
                  Salary
                </label>
                <input
                  required
                  pattern="^[0-9]{1,12}$"
                  placeholder="Minimo 1, Maximo 12 caracteres numericos"
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
                />
              </div>
            </>
          )}
          <div className="w-full px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Username
            </label>
            <input
              required
              pattern="^[A-Za-z][A-Za-z0-9]{4,20}$"
              placeholder="Minimo 5, Maximo 20 caracteres alfanumericos"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>
          <div className="relative w-full px-4 mt-3">
            <label className="uppercase text-xs text-zinc-800 font-bold">
              Password
            </label>
            <input
              required
              pattern="^[0-9A-Za-z]{8,}$"
              placeholder="Minimo 8 caracteres alfanumericos"
              type={ viewPass ? "text":"password" }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none py-2.5 px-2.5 border-b-2 rounded-xl focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
            { viewPass ? 
              (<BiHide size='20' className='absolute top-9 right-7 cursor-pointer text-zinc-700' onClick={()=> setViewPass(false)}/>)
              :
              (<BiShow size='20' className='absolute top-9 right-7 cursor-pointer text-zinc-700' onClick={()=> setViewPass(true)}/>)
            }
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-auto mt-7">
          <button
            type="submit"
            className="bg-orange-800 duration-300 hover:bg-orange-600 text-white hover:text-slate-900 text-md font-playfair font-bold w-full py-3 rounded-md uppercase"
          >
            Registrarse
          </button>
        </div>

        <div className="mt-4 text-xs text-zinc-900 font-bold text-center">
          <span>¿Ya estás registrado?</span>
          <a onClick={HandleClick} className="ml-2 font-roboto text-lg font-semibold hover:font-bold hover:text-orange-600 duration-1000 text-sky-700 cursor-pointer">
            Iniciar sesión
          </a>
        </div>
      </form>
    </section>
  )
}
