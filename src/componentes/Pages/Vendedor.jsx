import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoPersonal from './Vendedor/InfoPersonal'
import ServiciosOfrecidos from './Vendedor/ServiciosOfrecidos'
import AgregarServicio from './Vendedor/AgregarServicio'
import { url } from '../../utils/variables.js'

export default function vendedor() {

	const navigate = useNavigate()

	return (
		<main className='flex flex-col gap-y-5 p-10'>
			<h3 className='text-2xl uppercase font-bold tracking-tight mb-7'>Vendedor</h3>
			<section className='flex justify-center'>
				<button 
					className={`px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-l-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
					onClick={()=> navigate('/infoPersonal')}
					>
					info personal
				</button>
				<button 
					className={`px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-l-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
					onClick={()=> navigate('/serviciosOfrecidos')}
					>
					servicios ofrecidos
				</button>
				<button 
					className={`px-5 hover:bg-orange-600 hover:text-white hover:border-orange-600 duration-300 border-y-2 border-x-2 text-xs font-bold py-3 rounded-t-xl uppercase`}
					onClick={()=> navigate('/agregarServicio')}
					>
					agregar servicio
				</button>
			</section>
		</main>
	)
}
