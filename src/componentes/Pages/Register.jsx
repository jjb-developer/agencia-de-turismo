import { useState } from "react";
import { registerHandler } from "../../utils/register.js";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from 'react-icons/bi'
import Navbar from '../Nav/Navbar.jsx'
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
      className="bg-sky-500 w-full h-full py-20 pt-40 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/0.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.9, // Ajusta este valor según la opacidad deseada
      }}
    >
      <Navbar/>
      <form
        className="mt-20 bg-white p-10 rounded shadow-md max-w-[640px] mx-auto"
        onSubmit={ handleSubmit }
      >
        <div className="flex flex-wrap gap-x-2">

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Name
            </label>
            <input
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              placeholder="Escribe tu nombre..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Lastname
            </label>
            <input
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              placeholder="Escribe tu apellido..."
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              address
            </label>
            <input
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              placeholder="Escribe tu dirección..."
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              DNI
            </label>
            <input
              required
              pattern="^[0-9]{8,9}$"
              placeholder="Ejemplo: 12345678..."
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres numericos (min 8, max 9).</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Birthdate
            </label>
            <input
              required
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            />
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Country
            </label>
            <input
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              placeholder="Escribe tu país..."
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Phone
            </label>
            <input
              required
              pattern="^[0-9]{8,}$"
              placeholder="Escribe tu numero telefonico..."
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres numericos (min 8).</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Email
            </label>
            <input
              required
              pattern="^[a-z][a-z0-9]{3,}@[a-z]+\.com$"
              placeholder="Escribe tu correo electrónico..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Debe empezar minimo con 3 carácteres, contener un @ y terminar en .com.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
            >
              <option value="vendedor">Vendedor</option>
              <option value="cliente">Cliente</option>
            </select>
          </div>

          {role === "vendedor" && (
            <>
	          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
	            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
	              Job
	            </label>
	            <input
	              required
	              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
	              placeholder="Escribe tu ocupación..."
	              type="text"
	              value={job}
	              onChange={(e) => setJob(e.target.value)}
	              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
	            />
	            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
	          </div>

	          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
	            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
	              Salary
	            </label>
	            <input
	              required
	              pattern="^[0-9]{8,}$"
	              placeholder="Escribe tu salario..."
	              type="text"
	              value={salary}
	              onChange={(e) => setSalary(e.target.value)}
	              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
	            />
	            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres numericos (min 1, max 12).</span>
	          </div>
            </>
          )}

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Username
            </label>
            <input
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              placeholder="Escribe tu username..."
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfabeticos.</span>
          </div>

          <div className="w-full flex flex-col h-[100px] md:w-[49.2%] px-2">
            <label className="uppercase my-1.5 text-xs text-zinc-800 font-bold">
              Password
            </label>
            <input
              required
              pattern="^[0-9A-Za-z]{8,}$"
              placeholder="Escribe tu password..."
              type={ viewPass ? "text":"password" }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-none py-2.5 px-2.5 rounded-lg ring-1 ring-zinc-400 focus:ring-green-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400 peer focus:invalid:ring-rose-500 valid:ring-2 valid:ring-green-500"
            />
            <span className='text-[0.85rem] mt-1 font-medium text-rose-500 opacity-0 hidden peer-focus-visible:opacity-100 peer-invalid:block duration-300'>Solo caracteres alfanumericos (min 8).</span>
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
            className="bg-orange-500 duration-300 hover:bg-orange-600 text-orange-950 font-bold w-full py-3 rounded-lg uppercase"
          >
            Registrarse
          </button>
        </div>

        <div className="mt-4 text-sm text-zinc-900 text-center">
          <span>¿Ya estás registrado?</span>
          <a onClick={HandleClick} className="ml-4  hover:text-sky-500 font-bold duration-300 text-orange-500 cursor-pointer tracking-wide">
            Iniciar sesión
          </a>
        </div>
      </form>
    </section>
  )
}
