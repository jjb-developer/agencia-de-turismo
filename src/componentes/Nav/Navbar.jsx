import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import Boton from "./componentes/Boton";
import store from "../../utils/store";

export default function Navbar() {

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false)

  const statusLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const { setUserService, getUser, setUser } = store();

  // Función para manejar el login out.
  function handleLoginOut() {
    navigate("/");
    setUser(null);
    setUserService(null);
    localStorage.removeItem("user");
  }

  return (
    <nav className="w-full border-b-2 flex flex-wrap  xl:flex-nowrap items-center justify-between px-10 pb-12 pt-16">
      <span
        className="text-4xl flex md:text-6xl mb-5 xl:mb-2 capitalize font-indie font-bold text-orange-500 tracking-tight"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Link to="/" className="cursor-pointer">
          agencia de turismo
        </Link>
      </span>
      {getUser ? (
        // Si el usuario está autenticado
        <div className="flex items-center gap-x-2 relative">
          <div className="flex flex-col gap-x-2">
            <span className="text-xl tracking-tight capitalize leading-[1.4rem]">
              {getUser.name} {getUser.lastname}
            </span>
            <span className="text-right uppercase font-bold text-sm text-orange-500">
              {getUser.role}
            </span>
          </div>
          <div 
            className='cursor-pointer'
            onClick={ ()=> setActiveMenu(!activeMenu)}>
            { getUser.role === "vendedor" && (<BiUser 
              className="text-white bg-orange-500 rounded-full w-10 h-10 p-1.5"
              />)}
            </div>
          
            { getUser.role === "vendedor" && (
            <div className={`flex-col bg-zinc-200 absolute top-12 right-0 z-50 ${ activeMenu === false ? 'hidden':'flex'}`}>
              <button 
                onClick={()=> {
                  navigate('/infoPersonal')
                  setActiveMenu(false)
                }} 
                className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-48 text-right">
                Infomación
              </button>
              <button 
                onClick={()=> {
                  navigate('/serviciosOfrecidos')
                  setActiveMenu(false)
                }} 
                className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-48 text-right">
                Servicios Ofrecidos
              </button>
              <button 
                onClick={()=> {
                  navigate('/agregarServicio')
                  setActiveMenu(false)
                }} 
                className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-48 text-right">
                Agregar Servicio
              </button>
              <button
                onClick={ handleLoginOut }
                className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-48 text-right"
              >
                Login Out
              </button>
            </div>
            )}
          {getUser.role === "cliente" && (
            <div className="flex flex-wrap text-center justify-center">
              <button
                onClick={handleLoginOut}
                className="bg-rose-500 max-sm:mb-2 text-rose-50 font-bold text-sm uppercase ml-4 rounded-lg py-1.5 px-4 hover:text-rose-600 hover:bg-rose-50 hover:border-2 hover:border-rose-500"
              >
                Logout
              </button>
              <button className="bg-blue-500 max-sm:mb-2 text-blue-50 font-bold mx-6 text-sm rounded-lg uppercase py-1.5 px-4 flex items-center gap-x-1 hover:text-blue-600 hover:bg-blue-50 hover:border-2 hover:border-blue-500">
                <BiCart />
                Carrito
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap md:flex-nowrap mr-12 md:mr-28 md:w-40 gap-2">
          <Boton ruta="/register" name="register" />
          <Boton ruta="/login" name="login" />
        </div>
      )}
    </nav>
  );
}
