import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import { loginHandler } from "../../utils/login.js";
import { useNavigate } from "react-router-dom";
import useStorage from '../../utils/store'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData,setUserData]=useState(null);
  const { getInfo } = useStorage()
  
  const navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    getInfo(username,password)
    //llamo a login.js
    //const res = await loginHandler(username, password);
    //setUserData(res)
    //console.log(res)
    navigate('/empleados')
  }

  function HandleClick(){
    navigate("/register");
  }

  useEffect(()=>{
    if(userData){
        navigate('/')
    }
  },[userData])

  return (
    <>
      <section className="absolute left-0 top-0 right-0 bg-gray-50">
        <Navbar />
      </section>
      <section className="bg-sky-500 w-full h-screen flex flex-col items-center justify-center">
        <form
          className="bg-white p-10 rounded-md shadow-md w-80"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="flex flex-col gap-y-1">
            <label className='uppercase text-xs text-zinc-500 font-bold'>Username</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
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
          <div className="flex flex-col mt-5 gap-y-1">
            <label className='uppercase text-xs text-zinc-500 font-bold'>Password</label>
            <input
              className="outline-none py-2.5 px-2.5 border-b-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300"
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
              className="bg-orange-500 duration-300 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="mt-4 text-xs text-zinc-500 text-center">
            <span>No estas registrado?</span>
            <button onClick={ HandleClick } className='ml-2 font-medium text-sky-600'>Registrarse</button>
          </div>
        </form>
      </section>
    </>
  );
}
