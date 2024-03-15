import Navbar from '../Nav/Navbar'
import store from '../../utils/store'
import { useEffect, useState } from 'react'

export default function servicios(){
	const[user,setUser]=useState(null);
	const { getAllService, setServiceFilter, getServiceFilter, getServiceInCarrito, addServiceInCarrito,getUser } = store()

	useEffect(()=>{
		const user = JSON.parse(localStorage.getItem('user'))
		if(user){setUser(getUser.role);
		}
		
	},[]);
	return (
	<>
		<Navbar/>
		<main className='pt-48 min-h-screen'>

			<h1 className='mb-10 text-3xl font-bold tracking-tight capitalize'>servicios</h1>

			<div>
				<select 
					value={getServiceFilter} 
					onChange={(e)=> setServiceFilter(e.target.value)}>
					<option value='0'>todos</option>
					<option value='1'>hotel por noche</option>
					<option value='5'>viaje en tren</option>
					<option value='4'>pasaje en avión</option>
					<option value='2'>alquiler de auto</option>
					<option value='3'>Pasajes de colectivo</option>
					<option value='6'>excursiones</option>
					<option value='7'>entradas a evento</option>
				</select>
			</div>
			<section className='flex flex-wrap gap-4'>
			{ getAllService?.filter((sv)=>""+sv.service_code === ""+getServiceFilter || ""+getServiceFilter === ""+0).map((sv)=>(
					<div 
						key={sv.id_servicio}
						className="p-5 bg-zinc-200 w-56 cursor-pointer relative">
						<p>{sv.name}</p>
						<p>{sv.service_destination}</p>
						<p>{sv.description}</p>
						<p className="font-bold">{sv.cost}$</p>
						<p>{sv.service_date}</p>
						{user=='cliente' &&
						<button 
						onClick={ ()=>{
							if(getServiceInCarrito.includes(sv.id_servicio)) console.info('El servicios ya esta agregado!.')
							else addServiceInCarrito(sv.id_servicio)
						}}
						className='bg-green-500 uppercase text-xs font-bold tracking-tight text-green-950 p-0.5 px-2 rounded absolute bottom-2 right-2'>add a car
					</button>}
						
					</div>
				))
			}
			</section>
		</main>
	</>
	)

}