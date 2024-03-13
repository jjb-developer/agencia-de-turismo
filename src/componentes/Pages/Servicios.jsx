import Navbar from '../Nav/Navbar'
import store from '../../utils/store'
import { useState } from 'react'

export default function servicios(){

	const { getAllService, setServiceFilter, getServiceFilter, getServiceInCarrito, addServiceInCarrito } = store()

	return (
	<>
		<Navbar/>
		<main className='mt-48'>

			<h1 className='mb-10 text-3xl font-bold tracking-tight capitalize'>servicios</h1>

			<div>
				<select 
					value={getServiceFilter} 
					onChange={(e)=> setServiceFilter(e.target.value)}>
					<option value='todos'>todos</option>
					<option value='hotel por noche'>hotel por noche</option>
					<option value='viaje en tren'>viaje en tren</option>
					<option value='pasaje en avión'>pasaje en avión</option>
					<option value='alquiler de auto'>alquiler de auto</option>
				</select>
			</div>
			<section className='flex flex-wrap gap-4'>
			{ getAllService?.filter((sv)=>sv.name === getServiceFilter || getServiceFilter === "todos").map((sv)=>(
					<div 
						key={sv.id_servicio}
						className="p-5 bg-zinc-200 w-56 cursor-pointer relative">
						<p>{sv.name}</p>
						<p>{sv.service_destination}</p>
						<p>{sv.description}</p>
						<p className="font-bold">{sv.cost}$</p>
						<p>{sv.service_date}</p>
						<button 
							onClick={ ()=>{
								if(getServiceInCarrito.includes(sv.id_servicio)) console.info('El servicios ya esta agregado!.')
								else addServiceInCarrito(sv.id_servicio)
							}}
							className='bg-green-500 uppercase text-xs font-bold tracking-tight text-green-950 p-0.5 px-2 rounded absolute bottom-2 right-2'>add a car
						</button>
					</div>
				))
			}
			</section>
		</main>
	</>
	)

}