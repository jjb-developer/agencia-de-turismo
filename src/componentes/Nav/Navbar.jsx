import NavButtons from "./NavButtons";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate =useNavigate();
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 shadow">
      <div onClick={()=>{navigate('/')}} className="text-xl uppercase font-bold text-sky-600 tracking-tight">
        agencia de turismo
      </div>
      <NavButtons/>
    </nav>
  );
}
