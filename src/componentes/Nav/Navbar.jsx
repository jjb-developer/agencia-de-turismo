import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart, BiMenu, BiXCircle } from "react-icons/bi";

import Boton from "./componentes/Boton";
import store from "../../utils/store";
import Carrito from '../Pages/Carrito'

export default function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menu, setMenu] = useState(false);


  const statusLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const { setUserService, getUser, setUser, setAddOrUpdate, showCarrito } = store();

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackground = scrollY > 0 ? "bg-gray-50" : "";
  const textColor = scrollY > 0 ? "text-orange-500" : "text-orange-500"; //text-gray-200
  const textUserColor = scrollY > 0 ? "text-gray-600" : "text-gray-50";



  // Función para manejar el login out.
  function handleLoginOut() {
    navigate("/");
    setUser(null);
    setUserService(null);
    localStorage.removeItem("user");
  }

  return (
    <>
    <Carrito/>
    <nav
      style={{ backdropFilter: "blur(3px)" }}
      className={`w-full flex justify-between px-10 py-4 absolute left-0 z-40 top-0${
        {
          /*navBackground*/
        }
      } transition-all`}
    >
      <div className="w-full flex justify-between items-center">
        <span
          className={`${textColor} text-4xl flex md:text-6xl mb-5 xl:mb-2 capitalize font-bold tracking-tight"`}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }} //textShadow: scrollY > 0 ? "2px 2px 4px rgba(0, 0, 0, 0.8)" : "2px 2px 4px rgba(200, 200, 200, 0.8)"
        >
          <Link to="/" className="cursor-pointer">
            agencia de turismo
          </Link>
        </span>

        {getUser ? (
          // Si el usuario está autenticado
          <div className="flex items-center relative bg-lime-200">
            <div className="flex flex-col ">
              <span className={`text-xl ${textUserColor} `}>
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
            
              { getUser.role === "vendedor" && activeMenu && (
              <div className={`${ activeMenu === false ? 'hidden':'flex'} bg-gray-800 bg-opacity-90 text-zinc-50 flex-col fixed top-0 left-0 right-0 w-full h-screen pt-20 sm:absolute sm:w-72 sm:h-fit sm:pt-0 sm:-left-32 sm:top-16 lg:top-16 sm:right-0 `}>
                <button 
                  onClick={()=> {
                    navigate('/infoPersonal')
                    setActiveMenu(false)
                  }} 
                  className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-full">
                  Infomación
                </button>
                <button 
                  onClick={()=> {
                    navigate('/serviciosOfrecidos')
                    setActiveMenu(false)
                  }} 
                  className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-full">
                  Servicios Ofrecidos
                </button>
                <button 
                  onClick={()=> {
                    navigate('/reporte')
                    setActiveMenu(false)
                  }} 
                  className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-full">
                  Reporte
                </button>
                <button 
                  onClick={()=> {
                    setAddOrUpdate("add")
                    navigate('/agregarServicio')
                    setActiveMenu(false)
                  }} 
                  className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-full">
                  Agregar Servicio
                </button>
                <button
                  onClick={ handleLoginOut }
                  className="py-2 hover:bg-orange-500 hover:text-white duration-300 px-3 w-full"
                >
                  Login Out
                </button>
              </div>
              )}
            {getUser.role === "cliente" && (
              <div className="flex flex-wrap text-center justify-center">
                <BiUser 
                  onClick={ ()=> setActiveMenu(!activeMenu)}
                  className="cursor-pointer text-white bg-orange-500 rounded-full w-10 h-10 p-1.5"
                />
                <button
                  onClick={ handleLoginOut }
                  className={`${activeMenu ? 'block':'hidden'} absolute top-14 right-0 bg-zinc-800 h-10 bg-opacity-50 w-full`}
                >
                  Logout
                </button>
                <button
                  onClick={ showCarrito }
                  className="bg-blue-500  text-blue-50 font-bold text-sm rounded-lg uppercase py-1.5 px-4 flex items-center gap-x-1 hover:text-blue-600 hover:bg-blue-50 hover:border-2 hover:border-blue-500">
                  <BiCart />
                  Cart
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className='flex'>
              <div className={`${menu ? 'bg-zinc-800 bg-opacity-80 fixed top-0 left-0 duration-300 w-full h-screen flex flex-col items-center justify-center gap-y-4':'hidden sm:flex sm:flex-row sm:gap-x-2'} `}>
                <Boton ruta="/register" name="Register" />
                <Boton ruta="/login" name="Login" />
                <BiXCircle onClick={()=>setMenu(false)} size='32' className="absolute top-4 right-4 p-0.5 cursor-pointer text-white sm:hidden"/>
              </div>
              <BiMenu onClick={()=>setMenu(true)} size='32' className="p-0.5 cursor-pointer sm:hidden"/>
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  );
}
