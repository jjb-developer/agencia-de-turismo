import { BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function Boton({ruta,name}) {

	const navigate = useNavigate()
	const enlace = (r)=> navigate(ruta)

  	return (
		<button onClick={ enlace } className="gap-x-2 px-3 py-2 items-center font-bold border-2 bg-[#0000003b] border-orange-600 duration-300 hover:bg-orange-300 text-orange-500 hover:text-slate-900 text-lg w-full shadow-lg rounded-md hidden sm:flex"><BiUser size='16'/>{name}</button>
  	)
} 