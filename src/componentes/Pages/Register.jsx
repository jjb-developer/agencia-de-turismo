import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import { registerHandler } from "../../utils/register.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [dni, setDni] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");

  const [send,setSend]=useState(false);

  const navigate=useNavigate();

  function HandleClick(){
    navigate("/login");
  }

  function crearUsuario(){
    const user = {
      "name":"mario",
      "lastname":"garcia",
      "address":"barinas",
      "dni":"14567126",
      "birthdate":"1990-05-01",
      "country":"venezuela",
      "phone":"580345678",
      "email":"mario@garcia.com",
      "role":"cliente",
      "user_state":true,
      "username":"garma",
      "password":"garma"
    }

    const vendedor = {
      "name":"astrid",
      "lastname":"meza",
      "address":"madrid",
      "dni":"34217890",
      "birthdate":"1999-09-02",
      "country":"españa",
      "phone":"453888221",
      "email":"astrid@meza.com",
      "role":"vendedor",
      "user_state":true,
      "username":"astza",
      "password":"astza",
      "job":"developer web",
      "salary": 5000
    }


    fetch('https://agencia-de-turismo.onrender.com/user', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(vendedor)
      })
        .then(res => res.text())
        .then(data => console.info(data))
  }


  function probarClient(){
    fetch('https://agencia-de-turismo.onrender.com/client/7', {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0OSwiaWF0IjoxNzA4OTYyNDMyLCJleHAiOjE3MDg5NjYwMzJ9.lOkVdjWuR6OnE7CFZ6UZnKVt7TYHNYFvGnJbUDQQW2g",
      }
    }).then(res => res.text()).then(data => console.info(data))
  }


  function probar(){
    fetch('https://agencia-de-turismo.onrender.com/private', {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0OSwiaWF0IjoxNzA4OTYyNDMyLCJleHAiOjE3MDg5NjYwMzJ9.lOkVdjWuR6OnE7CFZ6UZnKVt7TYHNYFvGnJbUDQQW2g",
      }
    }).then(res => res.text()).then(data => console.info(data))
  }

  function login(){
    fetch('https://agencia-de-turismo.onrender.com/login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ "username":"astza","password":"astza" })
    }).then(res => res.text()).then(data => console.info(data))
  }

  function updateUser(){
    fetch('https://agencia-de-turismo.onrender.com/client/7', {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ "password":"nuevapasword" })
    }).then(res => res.text()).then(data => console.info(data))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //llamo a login.js
    const res = await registerHandler(name, lastname, adress, dni, country, phone, email, role, username, password, salary);
    setSend(true)
    console.log(res)
  }

  useEffect(()=>{
    if(send){
        navigate('/')
    }
  },[send])

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
            <label className='uppercase text-xs text-zinc-500 font-bold'>name</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="0"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>lastname</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="1"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>adress</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="2"
              value={adress}
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>dni</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="3"
              value={dni}
              onChange={(e) => {
                setDni(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>nationality</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="5"
              value={country}
              onChange={(e) => {
                setNationality(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>phone</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="6"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>email</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="email"
              name=""
              id="7"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>rol</label>
            <select
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 bg-zinc-100"
              name="rol"
              id='8'
              value={role}
              onChange={(e)=> setRol(e.target.value)}>
              <option className="" value="empleado">Empleado</option>
              <option value="cliente">Cliente</option>
            </select>
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>username</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="9"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>password</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="password"
              name=""
              id="10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>sueldo</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="11"
              value={salary}
              onChange={(e) => {
                setSueldo(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-center w-full h-auto mt-7">
            <button
              onClick={ ()=> crearUsuario() }
              type="submit"
              className="bg-orange-500 duration-300 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"
            >
              Registrarse
            </button>
          </div>
          <div className="mt-4 text-xs text-zinc-500 text-center">
            <span>Ya estas registrado?</span>
            <button onClick={()=> login()} className='ml-2 font-medium text-sky-600'>Iniciar sesión</button>
          </div>
        </form>
      </section>
    </>
  );
}
