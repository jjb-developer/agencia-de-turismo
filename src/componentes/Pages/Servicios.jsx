import Navbar from '../Nav/Navbar'
import store from '../../utils/store'
import { useEffect, useState } from 'react'

export default function servicios(){
	const[user,setUser]=useState(null);
	const { getAllService, setServiceFilter, getServiceFilter, getServiceInCarrito, addServiceInCarrito,getUser, setTotalCar } = store()

	useEffect(()=>{
		const user = JSON.parse(localStorage.getItem('user'))
		if(user){setUser(getUser);
		}
		
	},[]);
	return (
	<>
		<Navbar/>
		<main className='pt-48 bg-zinc-200 px-10 '>
			<h1 className='mb-7 text-2xl font-medium tracking-tight capitalize'>servicios</h1>
			<div className='min-h-screen flex'>
				<div className='w-1/4'>
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

					<div className='mt-10'>
						<h4 className='text-[15px] uppercase font-medium mb-2'>Categoria</h4>
						<ul className='flex flex-col gap-y-1'>
							<li className='text-[14px] cursor-pointer font-light'>Hotel por noche <span className='text-zinc-500 ml-1'>(25)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>pasaje en tren <span className='text-zinc-500 ml-1'>(103)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>pasaje en avión <span className='text-zinc-500 ml-1'>(47)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>alquiler de auto <span className='text-zinc-500 ml-1'>(61)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>pasaje de colectivo <span className='text-zinc-500 ml-1'>(32)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>excursiones <span className='text-zinc-500 ml-1'>(49)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>entrada a eventos <span className='text-zinc-500 ml-1'>(18)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>todos</li>
						</ul>
					</div>

					<div className='mt-10'>
						<h4 className='text-[15px] uppercase font-medium mb-2'>Precio</h4>
						<ul className='flex flex-col gap-y-1'>
							<li className='text-[14px] cursor-pointer font-light'>menos de 100$ <span className='text-zinc-500 ml-1'>(25)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>menos de 250$ <span className='text-zinc-500 ml-1'>(103)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>menos de 500$ <span className='text-zinc-500 ml-1'>(47)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>mayores a 500$ <span className='text-zinc-500 ml-1'>(61)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>mayores a 1000$ <span className='text-zinc-500 ml-1'>(32)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>todos</li>
						</ul>
					</div>

					<div className='mt-10'>
						<h4 className='text-[15px] uppercase font-medium mb-2'>Fecha</h4>
						<ul className='flex flex-col gap-y-1'>
							<li className='text-[14px] cursor-pointer font-light'>Enero <span className='text-zinc-500 ml-1'>(25)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Febrero <span className='text-zinc-500 ml-1'>(103)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Marzo <span className='text-zinc-500 ml-1'>(47)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Abril <span className='text-zinc-500 ml-1'>(61)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Mayo <span className='text-zinc-500 ml-1'>(32)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Junio <span className='text-zinc-500 ml-1'>(49)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Julio <span className='text-zinc-500 ml-1'>(18)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Agosto <span className='text-zinc-500 ml-1'>(28)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Septiembre <span className='text-zinc-500 ml-1'>(12)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Octubre <span className='text-zinc-500 ml-1'>(44)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Noviembre <span className='text-zinc-500 ml-1'>(24)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Diciembre <span className='text-zinc-500 ml-1'>(52)</span></li>
						</ul>
					</div>

					<div className='mt-10'>
						<h4 className='text-[15px] uppercase font-medium mb-2'>Pais</h4>
						<ul className='flex flex-col gap-y-1'>
							<li className='text-[14px] cursor-pointer font-light'>Italia <span className='text-zinc-500 ml-1'>(25)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>España <span className='text-zinc-500 ml-1'>(103)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Francia <span className='text-zinc-500 ml-1'>(47)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Argentina <span className='text-zinc-500 ml-1'>(61)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Uruguay <span className='text-zinc-500 ml-1'>(32)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Japon <span className='text-zinc-500 ml-1'>(49)</span></li>
							<li className='text-[14px] cursor-pointer font-light'>Rusia <span className='text-zinc-500 ml-1'>(18)</span></li>
						</ul>
					</div>

				</div>
				<section className='flex flex-col gap-y-2 w-3/4 mb-20'>
				{ getAllService?.filter((sv)=>""+sv.service_code === ""+getServiceFilter || ""+getServiceFilter === ""+0).map((sv)=>(
						<div 
							key={sv.id_servicio}
							className="p-7 bg-white cursor-pointer relative">
							<p className='text-[20px] font-light text-[#333] leading-[1.3rem] capitalize'>{sv.name}</p>
							<span className="leading-[2.75rem] font-normal text-[24px] text-[#333]">US$ {sv.cost}</span>
							<p className='text-orange-500 leading-[1.4rem] text-[14px] font-medium uppercase'>{sv.service_destination}</p>
							<p className='capitalize text-zinc-400 text-sm'>{sv.service_date}</p>
							<p className='mt-3 capitalize text-zinc-500'>{sv.description}</p>
							{user && user.role=='cliente' &&
							<button 
							onClick={ ()=>{
								if(getServiceInCarrito.includes(sv.id_servicio)) console.info('El servicios ya esta agregado!.')
								else {
									addServiceInCarrito(sv.id_servicio)
									setTotalCar(sv.cost)
								}
							}}
							className='bg-green-500 uppercase text-xs font-bold tracking-tight text-green-950 p-1.5 px-3 rounded absolute bottom-2 right-2'>add a car
						</button>}
							
						</div>
					))
				}
				</section>
			</div>
		</main>
	</>
	)

}