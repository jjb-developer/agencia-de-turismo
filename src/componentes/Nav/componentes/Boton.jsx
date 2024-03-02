import { BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function Boton({ruta,name}) {

	const navigate = useNavigate()
	const enlace = (r)=> navigate(ruta)

  	return (
		<button onClick={ enlace } className="flex gap-x-2 px-7 items-center font-bold bg-orange-800 duration-300 hover:bg-orange-600 text-white hover:text-slate-900 text-md  font-playfair w-full shadow-lg shadow-slate-700 py-3 rounded-md uppercase"><BiUser size='18'/>{name}</button>
  	)
} 