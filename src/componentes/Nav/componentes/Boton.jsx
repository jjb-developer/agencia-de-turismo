import { BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function Boton({ruta,name}) {

	const navigate = useNavigate()
	const enlace = (r)=> navigate(ruta)

  	return (
		<button onClick={ enlace } className="gap-x-2 px-2 py-1 items-center font-bold bg-blue-600 duration-300 hover:bg-blue-500 text-white text-md  w-full shadow-lg rounded-md hidden sm:flex"><BiUser size='16'/>{name}</button>
  	)
} 