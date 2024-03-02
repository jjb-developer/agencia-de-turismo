import { Link } from "react-router-dom";
import Boton from "./componentes/Boton";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 md: my-6">
      <span
        className="text-3xl md:text-6xl capitalize font-indie font-bold text-orange-500 tracking-tight"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Link to="/" className="cursor-pointer">
         agencia de turismo
        </Link>
      </span>
      <div className="flex flex-wrap md:flex-nowrap mr-12 md:mr-28 md: w-40 gap-2">
        <Boton ruta="/register" name="register" />
        <Boton ruta="/login" name="login" />
      </div>
    </nav>
  );
}
