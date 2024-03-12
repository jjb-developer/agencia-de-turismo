import store from '../../../utils/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { code } from '../../../utils/variables.js'
import { deleteServicioHandler } from '../../../utils/eliminarServicio.js'
import { loadServiceUser } from '../../../utils/services.js'

export default function ServiciosOfrecidos() {

	const navigate = useNavigate()
	const { getUserService, setUserService, setInitialServiceToAdd, setIdService, setAddOrUpdate } = store()

	useEffect(()=>{
		loadServiceUser(setUserService)
	},[])


	return (
		<main className="bg-sky-50 p-10 w-[90%] mx-auto">
			<h3 className='capitalize text-[1.7rem] tracking-tight font-bold text-zinc-800'>Servicios ofrecidos</h3>
			<section className='mt-5 h-12 flex items-center gap-x-2'>
				<input type='text' placeholder='Search' className='h-full w-full rounded-lg'/>
				<button className='bg-zinc-300 hover:bg-sky-500 rounded-lg h-full px-7 text-sky-950 duration-300 font-bold uppercase text-sm'>buscar</button>
			</section>
			<section className='mt-5 flex items-center gap-x-2'>
				<div className='flex flex-col gap-y-5 w-full md:flex-row'>
					<div className='w-full md:w-3/5 flex flex-wrap gap-4'>
						{ getUserService === null && (<span className='pl-10 pt-10'>loading...</span>)}
						{ getUserService?.filter(sv=>sv.service_state).map((sv)=> (<article 
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
							</article>)
						)}
					</div>
					<section className='md:ml-5 w-full h-56 md:h-[inherit] md:w-2/5 bg-sky-200 flex items-center justify-center capitalize text-2xl font-medium tracking-tight'>filtros</section>
				</div>
			</section>
		</main>
	)
}
