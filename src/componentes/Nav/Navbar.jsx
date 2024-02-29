import { Link } from "react-router-dom"
import Boton from './componentes/Boton'

export default function Navbar() {

	return (
		<nav className="w-full h-20 flex items-center justify-between px-10 shadow">
			<span className="text-xl uppercase font-bold text-sky-600 tracking-tight">
				<Link to='/' className='cursor-pointer'>agencia de turismo</Link>
			</span>
			<div className='flex gap-2'>
				<Boton ruta='/register' name='register'/>
				<Boton ruta='/login' name='login'/>
			</div>
		</nav>
	);

}
