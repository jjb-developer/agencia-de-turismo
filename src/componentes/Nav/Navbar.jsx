import { Link } from "react-router-dom";
import Boton from "./componentes/Boton";
import { BiUser } from 'react-icons/bi'
import store from '../../utils/store'

export default function Navbar() {

  const statusLogin = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null
  const { getUser } = store()

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
      { getUser ? (<div className='flex items-center gap-x-2'>
        <div className='flex flex-col gap-x-2'>
          <span className='text-xl tracking-tight capitalize leading-[1.4rem]'>{ getUser.name } { getUser.lastname }</span>
          <span className='text-right uppercase font-bold text-sm text-orange-500'>{ getUser.role }</span>
        </div>
        <BiUser className='text-white bg-orange-500 rounded-full w-10 h-10 p-1.5'/>
      </div>):(<div className="flex flex-wrap md:flex-nowrap mr-12 md:mr-28 md: w-40 gap-2">
        <Boton ruta="/register" name="register" />
        <Boton ruta="/login" name="login" />
      </div>) }
    </nav>
  )

}
