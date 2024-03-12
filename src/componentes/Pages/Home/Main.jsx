import { Link } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";
import store from "../../../utils/store";
import { useNavigate } from "react-router-dom";

export default function Main({ servicios }) {
  const navigate = useNavigate();
  const statusLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const { getUser, setUser } = store();

  // Ejemplo de cómo usar setUser para actualizar el estado de autenticación
  const handleLogin = () => {
    setUser({ isLoggedIn: true, username: "exampleUser" });
    navigate("/"); // Redirigir al usuario después de iniciar sesión
  };

  return (
    <main className="">
      <div className="">
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
                  <div className="h-full flex items-center">
                  <p className="text-lg text-white">
                    {servicio.description}
                  </p>
                  </div>
                </div>
              </figure>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
