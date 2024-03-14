import { Link } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";
import store from "../../../utils/store";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Main({ servicios }) {
  const navigate = useNavigate();
  const statusLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const { getUser, setUser, setServiceFilter } = store();

  // Ejemplo de cómo usar setUser para actualizar el estado de autenticación
  function handleLogin (){
    setUser({ isLoggedIn: true, username: "exampleUser" });
    navigate("/"); // Redirigir al usuario después de iniciar sesión
  };
function handleClick(code_service){
  console.log(code_service)
  //crear fetch o filtro local dependiendo el codigo de servicio recibido y redireccionar
}
  return (
    <main className="">
        {servicios?.map((servicio, index) => (
          <div key={index} className="">
            <article className="">
              <figure
                className="w-full h-80 bg-center bg-cover flex items-end group relative aspect-auto"
                style={{ backgroundImage: `url(${servicio.image})` }}
              >
                <div className="bg-gray-900/80 w-full h-full p-4 flex-col -left-full group-hover:left-0 transition-all absolute">
                  <h2 className=" text-2xl font-bold text-blue-200">
                    {servicio.name}
                  </h2>
                  <div className="h-auto flex items-center justify-center">
                    <p className="text-lg text-white">{servicio.description}</p>
                  </div>
                  <span 
                    onClick={()=>{
                      setServiceFilter(""+servicio.code)
                      navigate('/all_servicios')
                    }} 
                    className="text-3xl text-white p-2"><HiArrowRight/></span>
                </div>
              </figure>
            </article>
          </div>
        ))}
    </main>
  );
}
