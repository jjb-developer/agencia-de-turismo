import store from '../../../utils/store'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { code } from '../../../utils/variables.js'
import Navbar from '../../Nav/Navbar'
import { deleteServicioHandler } from '../../../utils/eliminarServicio.js'
import { loadServiceUser } from '../../../utils/services.js'

export default function ServiciosOfrecidos() {
	const navigate = useNavigate()
	const { getUserService, setUserService, setInitialServiceToAdd, setIdService, setAddOrUpdate } = store()

	useEffect(()=>{
		
		loadServiceUser(setUserService)
	},[])


	return (
		<>
		<Navbar/>
		<main className="bg-zinc-200 p-10 mx-auto pt-48">
			<h3 className='mb-7 text-2xl font-medium tracking-tight capitalize max-w-[600px] mx-auto'>Servicios ofrecidos</h3>
			<section className='mt-5 h-12 flex items-center gap-x-2 max-w-[600px] mx-auto'>
				<input type='text' placeholder='Search' className='h-full w-full rounded-lg'/>
				<button className='bg-zinc-300 hover:bg-sky-500 rounded-lg h-full px-7 text-sky-950 duration-300 font-bold uppercase text-sm'>buscar</button>
			</section>
			<section className='mt-5 flex items-center gap-x-2'>
				<div className='flex flex-col gap-y-5 w-full md:flex-row'>
					<div className='max-w-3xl mx-auto flex flex-col gap-y-2'>
						{ getUserService === null && (<span className='pl-10 pt-10'>loading...</span>)}
						{ getUserService?.filter(sv=>sv.service_state).map((sv)=> ( <div 
								key={sv.id_servicio}
								className="p-7 bg-white cursor-pointer relative">
								<div className='flex items-center justify-between'>
									<h4 className='text-[20px] font-light text-[#333] leading-[1.3rem] capitalize'>{sv.name}</h4>
									<button 
										onClick={()=>{
											setIdService(sv.id_servicio)
											setAddOrUpdate("update")
											setInitialServiceToAdd({
												name: sv.name,
												description: sv.description,
												service_destination: sv.service_destination,
												service_date: sv.service_date,
												cost: sv.cost,
												service_code: code[sv.name]
											})
											navigate('/agregarServicio')

										}} 
										className='bg-zinc-200 hover:bg-green-500 text-zinc-500 duration-200 hover:text-green-900 font-bold text-[0.65rem] py-1.5 rounded w-16 text-center uppercase'>
										editar
									</button>
								</div>
								<span className="leading-[2.75rem] font-normal text-[24px] text-[#333]">US$ {sv.cost}</span>
								<p className='text-orange-500 leading-[1.4rem] text-[14px] font-medium uppercase'>{sv.service_destination}</p>
								<p className='capitalize text-zinc-400 text-sm'>{sv.service_date}</p>
								<div className='flex justify-between items-end flex-wrap'>
									<p className='mt-3 capitalize text-zinc-500 text-sm max-w-[60%]'>{sv.description}</p>
									<button 
										onClick={ ()=> deleteServicioHandler(sv.id_servicio,setUserService) } 
										className='bg-zinc-200 hover:bg-red-500 text-zinc-500 duration-200 hover:text-red-900 font-bold w-20 text-center text-[0.65rem] py-1.5 rounded w-16 uppercase'
									>
										borrar
									</button>
								</div>
							</div>)
						)}
					</div>
				</div>
			</section>
		</main>
		</>
	)
}
{/*
							<article 
								key={sv.id_servicio} className='w-56 h-56 bg-zinc-300 p-5 cursor-pointer'>
								<h1 className='text-sm uppercase font-bold tracking-tight'>{ sv.name }</h1>
								<p className='mt-1 text-sm'>{ sv.description }</p>
								<p className='mt-4 text-sm'>{ sv.cost }$</p>
								<div className='mt-10 flex gap-x-2 justify-center'>
									<button 
										onClick={()=>{
											setIdService(sv.id_servicio)
											setAddOrUpdate("update")
											setInitialServiceToAdd({
												name: sv.name,
												description: sv.description,
												service_destination: sv.service_destination,
												service_date: sv.service_date,
												cost: sv.cost,
												service_code: code[sv.name]
											})
											navigate('/agregarServicio')

										}} 
										className='bg-green-500 text-green-900 font-bold text-[0.65rem] py-1.5 rounded px-5 uppercase'>editar</button>
									<button 
										onClick={ ()=> deleteServicioHandler(sv.id_servicio,setUserService) } 
										className='bg-red-500 text-red-900 font-bold text-[0.65rem] py-1.5 rounded px-5 uppercase'>eliminar</button>
								</div>
							</article>
*/}