import { useState } from 'react'

import Navbar from '../Nav/Navbar'
import InfoPersonal from '../Empleados/InfoPersonal'
import ServiciosOfrecidos from '../Empleados/ServiciosOfrecidos'
import AgregarServicio from '../Empleados/AgregarServicio'

export default function empleados() {

	const [vista,setVista] = useState([0,0,1])

	return (

		<div>
			<Navbar/>
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
						onClick={()=> setVista([0,1,0])}
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
