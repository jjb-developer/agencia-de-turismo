import { BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function Boton({ruta,name}) {

	const navigate = useNavigate()
	const enlace = (r)=> navigate(ruta)

  	return (
		<button onClick={ enlace } className="flex items-center text-2xl font-medium hover:text-orange-500 tracking-tight text-zinc-50 duration-300 sm:text-base sm:hover:text-white sm:gap-x-2 sm:px-5 sm:py-2 sm:font-bold sm:bg-blue-600 sm:hover:bg-blue-500 sm:text-white sm:text-md sm:shadow-lg sm:rounded-lg "><BiUser size='18'className='hidden sm:block'/>{name}</button>
  	)
} 