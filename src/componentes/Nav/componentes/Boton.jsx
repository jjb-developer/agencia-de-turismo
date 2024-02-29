import { BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

export default function Boton({ruta,name}) {

	const navigate = useNavigate()
	const enlace = (r)=> navigate(ruta)

  	return (
		<button onClick={ enlace } className="flex gap-x-2 px-7 items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"><BiUser size='18'/>{name}</button>
  	)
}