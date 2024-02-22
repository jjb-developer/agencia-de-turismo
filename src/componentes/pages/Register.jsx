import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import { registerHandler } from "../../utils/register.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [dni, setDni] = useState("");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sueldo, setSueldo] = useState("");
  const [send,setSend]=useState(false);

  const navigate=useNavigate();

  function HandleClick(){
    navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //llamo a login.js
    const res = await registerHandler(name, lastname, adress, dni, date, nationality, phone, email, rol, username, password, sueldo);
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
              id="0"
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
              id="0"
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
              id="0"
              value={dni}
              onChange={(e) => {
                setDni(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>date</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="date"
              name=""
              id="0"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>nationality</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="0"
              value={nationality}
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
              id="0"
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
              id="0"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>rol</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="0"
              value={rol}
              onChange={(e) => {
                setRol(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className='uppercase text-xs text-zinc-500 font-bold'>username</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
              type="text"
              name=""
              id="0"
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
              type="text"
              name=""
              id="0"
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
              id="0"
              value={sueldo}
              onChange={(e) => {
                setSueldo(e.target.value);
              }}
            />
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
            <span>Ya estas registrado?</span>
            <button onClick={ HandleClick } className='ml-2 font-medium text-sky-600'>Iniciar sesión</button>
          </div>
        </form>
      </section>
    </>
  );
}
