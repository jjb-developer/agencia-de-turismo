import { useState, useEffect } from 'react'
import { BiUser } from 'react-icons/bi'
import InfoPersonal from '../Empleados/InfoPersonal'
import ServiciosOfrecidos from '../Empleados/ServiciosOfrecidos'
import AgregarServicio from '../Empleados/AgregarServicio'
import useStorage from '../../utils/store.jsx'

export default function empleados() {

	const [vista,setVista] = useState([0,0,1])
	const { info } = useStorage()
	const { getOfertasServicios } = useStorage()
	//const user = JSON.stringify(info)

	//console.info('render Empleados.jsx')
	return (
		<div>
			<nav className="w-full h-20 flex items-center justify-between px-10 shadow">
				<div className="text-xl uppercase font-bold text-sky-600 tracking-tight">
					<span>agencia de turismo</span>
				</div>
				<div className='flex items-center gap-x-2'>
					<div>
						<p className='text-xl leading-[1.5rem] capitalize text-zinc-700 font-medium'>{info[0].nombre} {info[0].apellido}</p>
						<p className='text-right text-orange-500 text-xs uppercase font-bold tracking-tight'>{info[0].rol}</p>
					</div>
					<div className='bg-orange-500 p-1.5 rounded-full'>
						<BiUser size='24' className='text-white '/>
					</div>
				</div>
			</nav>
			<main className='flex flex-col gap-y-5 p-10'>
				<h3 className='text-2xl uppercase font-bold tracking-tight mb-7'>empleados</h3>
				<section className='flex justify-center'>
					<button 
						className={`${ vista[0] === 1 ? 'bg-orange-600 border-orange-600 text-white':''} px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-l-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
						onClick={()=> setVista([1,0,0])}
						>
						info personal
					</button>
					<button 
						className={`${ vista[1] === 1 ? 'bg-orange-600 border-orange-600 text-white':''} px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-l-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
						onClick={()=> {
							setVista([0,1,0])
							getOfertasServicios(info[0].id_vendedor)
						}}
						>
						servicios ofrecidos
					</button>
					<button 
						className={`${ vista[2] === 1 ? 'bg-orange-600 border-orange-600 text-white':''} px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-x-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
						onClick={()=> setVista([0,0,1])}
						>
						agregar servicio
					</button>
				</section>
				<section className=''>
					<InfoPersonal status={vista[0]}/>
					<ServiciosOfrecidos status={vista[1]}/>
					<AgregarServicio status={vista[2]}/>
				</section>
			</main>
		</div>
	)
}
