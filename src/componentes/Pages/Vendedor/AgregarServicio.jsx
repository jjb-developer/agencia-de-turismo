import { BiImage, BiPlus } from 'react-icons/bi'
import { code, initialStateServicetoAdd } from '../../../utils/variables.js'
import store from '../../../utils/store'
import Navbar from '../../Nav/Navbar'
import { useNavigate } from 'react-router-dom'
import { updateServiceHandle } from '../../../utils/actualizarServicio.js'
import { addServiceHandle } from '../../../utils/agregarServicio.js'
import {loadServiceHandler} from '../../../utils/services.js'

export default function AgregarServicio() {

	const navigate = useNavigate()
	const { getInitialServiceToAdd, setUserService, setInitialServiceToAdd, getAddOrUpdate, getIdService,setAllService } = store()


	async function handleSubmit(e) {
			e.preventDefault();

			const user = JSON.parse(localStorage.getItem('user'))
			
			const data = getAddOrUpdate === "add" ? 
			getInitialServiceToAdd: {...getInitialServiceToAdd, id_service: getIdService }

			if(getAddOrUpdate === "update"){
				const response = await updateServiceHandle(data,user)
				if(response){
					setInitialServiceToAdd(initialStateServicetoAdd)
					setUserService(null)
					navigate('/serviciosOfrecidos')
				}
			}

			if(getAddOrUpdate === "add"){
				const response = await addServiceHandle(data,user)
				if(response){
					setInitialServiceToAdd(initialStateServicetoAdd)
					setUserService(null)
					
					const resultAllService=await loadServiceHandler();
					//hacer peticion a all service y guardar la respuesta como estado en...
					if(resultAllService){
						
						setAllService(resultAllService);
					}
					
				}
			}
	}


	return (
		<>
		<Navbar/>
		<main className="bg-sky-100 py-10 pt-48">
			<div className='flex gap-x-2 justify-between w-[90%] mx-auto'>
				<div className='flex gap-x-2'>
					<button className='bg-sky-600 text-white font-bold text-sm uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg'>
						<span>cargar</span>
						<span>servicio</span>
					</button>
					<button className='bg-sky-600 text-white font-bold text-sm uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg'>
						<span>modificar</span>
						<span>servicio</span>
					</button>
					<button className='bg-sky-600 text-white font-bold text-sm uppercase flex flex-col items-center justify-center w-32 h-14 rounded-lg'>
						<span>borrar</span>
						<span>servicio</span>
					</button>
				</div>
				<button className='bg-sky-600 text-white font-bold text-sm uppercase flex justify-center items-center w-32 h-14 rounded-lg'>
					reporte
				</button>
			</div>
			<div className='mt-10 w-[90%] flex flex-col sm:flex-row gap-x-5 justify-between mx-auto'>
				<div className='w-full sm:w-1/2'>
					<figure className='w-full h-56 bg-zinc-300 rounded-lg flex items-center justify-center'>
						<BiImage size='56' className='text-zinc-500'/>
					</figure>
					<div className='mt-5 flex items-center gap-x-4'>
						<button className='flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase'>
							<BiPlus size='32'/>
						</button>
						<button className='flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase'>
							<BiPlus size='32'/>
						</button>
						<button className='flex items-center justify-center w-20 h-12 bg-zinc-500 hover:bg-sky-500 duration-300 rounded-lg text-white font-bold uppercase'>
							<BiPlus size='32'/>
						</button>
					</div>
				</div>
				<form 
					onSubmit={ handleSubmit } 
					className='flex flex-col gap-y-2 mx-auto w-full mt-5 sm:mt-0 sm:w-1/2'>
					<div className='w-full flex flex-col gap-y-1'>
						<select 
							name='name'
							value={getInitialServiceToAdd.name}
							className='w-full p-1' 
							onChange={(e)=>{
								setInitialServiceToAdd({...getInitialServiceToAdd, 'name': e.target.value, 'service_code': code[e.target.value] })
							}}
						>
							<option value="hotel por noche">hotel por noche</option>
							<option value="alquiler de auto">alquiler de auto</option>
							<option value="pasajes de colectivos">pasajes de colectivos</option>
							<option value="pasaje de avion">pasaje de avión</option>
							<option value="pasaje de tren">pasaje de tren</option>
							<option value="excursiones">excursiones</option>
							<option value="entradas a eventos">entradas a eventos</option>
						</select>
						<input 
							required
							name='cost'
							type='text' 
							pattern="^[0-9]+$"
							title="Por favor solo caracteres numeros. Gracias"
							value={getInitialServiceToAdd.cost}
							placeholder='Escribe el costo del servicio (solo numeros).' 
							className='w-full placeholder:text-sm placeholder:text-zinc-400 invalid:text-rose-500'
							onChange={(e)=> setInitialServiceToAdd({...getInitialServiceToAdd, 'cost': e.target.value })}
						/>
						<input 
							required
							name='service_destination'
							type='text'
							pattern="^[A-Za-z0-9\s]{3,20}$"
							title="Por favor ingrese mínimo 3 ó máximo 20 carácteres. Gracias"
							value={getInitialServiceToAdd.service_destination}
							placeholder='Escribe el destino del servico.' 
							className='w-full placeholder:text-sm placeholder:text-zinc-400'
							onChange={(e)=> setInitialServiceToAdd({...getInitialServiceToAdd, 'service_destination': e.target.value })}
						/>
						<input 
							name='service_date'
							className='w-full'
							type='date'
							value={getInitialServiceToAdd.service_date}
							onChange={(e)=> setInitialServiceToAdd({...getInitialServiceToAdd, 'service_date': e.target.value })}

						/>
						<textarea 
							required
							name='description'
							value={getInitialServiceToAdd.description}
							onChange={(e)=> setInitialServiceToAdd({...getInitialServiceToAdd, 'description': e.target.value })}
							placeholder='Escribe una breve descripción del servicio.' 
							className='w-full resize-none h-32 placeholder:text-sm placeholder:text-zinc-400'>
						</textarea>
					</div>
					{ getAddOrUpdate === "add" && <button 
						type='submit'
						className="w-full px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-green-500 text-white"
						>
						agregar
					</button> }
					{ getAddOrUpdate === "update" && <button 
						type='submit'
						className="w-full px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-sky-500 text-white"
						>
						update
					</button> }
				</form>
			</div>
		</main>
		</>
	)
}
