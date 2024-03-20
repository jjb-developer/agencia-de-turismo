import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import Boton from "./componentes/Boton";
import store from "../../utils/store";
import Carrito from "../Pages/Carrito";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  function handleLoginOut() {
    navigate("/");
    setUser(null);
    setUserService(null);
    localStorage.removeItem("user");
  }

  function renderMenu() {
    return (
      <div
        className={`${
          activeMenu === false
            ? "hidden"
            : `absolute border-2 border-orange-600 mt-2 -translate-x-1/3 rounded-lg shadow-lg ${
                getUser.role === "vendedor"
                  ? "bg-[rgba(244,193,156,0.5)] w-64"
                  : "bg-[rgba(244,193,156,0.5)] w-40 translate-x-0"
              }`
        }`}
      >
        {getUser.role === "vendedor" ? (
          <>
            <button
              onClick={() => {
                navigate("/infoPersonal");
                setActiveMenu(false);
              }}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-600 hover:text-white duration-300 px-3 w-full block"
            >
              Información
            </button>
            <button
              onClick={() => {
                navigate("/serviciosOfrecidos");
                setActiveMenu(false);
              }}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-700 hover:text-white duration-300 px-3 w-full block"
            >
              Servicios Ofrecidos
            </button>
            <button 
                  onClick={()=> {
                    navigate('/reporte')
                    setActiveMenu(false)
                  }} 
                  className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-700 hover:text-white duration-300 px-3 w-full block">
                  Reporte
                </button>
            <button
              onClick={() => {
                navigate("/agregarServicio");
                setActiveMenu(false);
              }}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-800 hover:text-white duration-300 px-3 w-full block"
            >
              Agregar Servicio
            </button>
            <button
              onClick={handleLoginOut}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-900 hover:text-white duration-300 px-3 w-full block"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                navigate("/infoPersonal");
                setActiveMenu(false);
              }}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-600 hover:text-white duration-300 px-3 w-full block"
            >
              Información
            </button>
            <button 
            onClick={ showCarrito }
            className="py-4 flex items-center justify-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-900 hover:text-white duration-300 px-3 w-full">
              <BiCart className="mr-2" />
              Carrito
            </button>
            <button
              onClick={handleLoginOut}
              className="py-4 text-center font-roboto text-slate-700 font-bold text-lg uppercase hover:bg-orange-700 hover:text-white duration-300 px-3 w-full block"
            >
              Logout
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <Carrito/>
      <nav
        style={{ backdropFilter: "blur(3px)" }}
        className={`w-full flex flex-wrap flex-row-reverse md:flex-row justify-between items-center px-10 py-2 absolute left-0 z-40 top-0 transition-all`}
      >
        <div>
          <span
            className={`${textColor} text-3xl flex md:text-6xl mb-5 xl:mb-2 mr-4 md:mr-auto capitalize font-bold tracking-tight`}
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            <Link to="/" className="cursor-pointer">
              Horizontes Viajeros
            </Link>
          </span>
        </div>
        {getUser ? (
          <div className="relative">
            <div className="flex items-center mt-3 md:mt-auto">
              <div className="flex flex-col mr-2">
                <span
                  className={`text-xl capitalize text-slate-900 bg-[#ffffff74] rounded-xl px-1 font-bold ${textUserColor}`}
                >
                  {getUser.name} {getUser.lastname}
                </span>
                <span className="text-right uppercase font-bold text-sm text-orange-500">
                  {getUser.role}
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                {(getUser.role === "vendedor" || getUser.role === "cliente") && (
                  <BiUser className="text-white bg-orange-500 rounded-full w-10 h-10 p-1.5" />
                )}
              </div>
            </div>
            {renderMenu()}
          </div>
        ) : (
          <div className="flex  lg:flex-row gap-2 ">
            <Boton ruta="/register" name="Register" />
            <Boton ruta="/login" name="Login" />
          </div>
        )}
      </nav>
    </>
  );
}
