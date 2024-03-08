import { useState } from 'react'
import { BiImage, BiPlus } from 'react-icons/bi'

export default function AgregarServicio() {

	const code = {
		"hotel por noche": 1,
		"alquiler de auto": 2,
		"pasajes de colectivos": 3,
		"pasaje de avion": 4,
		"pasaje de tren": 5,
		"excursiones": 6,
		"entradas a eventos": 7
	}

	const [data,setData] = useState({
		name: "hotel por noche",
		description: "",
		service_destination: "",
		service_date: "1990-01-01",
		cost: "",
		service_code: ""
	})

	async function handleSubmit(e) {
		e.preventDefault();
		console.info(data)
		console.info(e.target.value = '')
	}

	return (
		<main className="bg-sky-100 py-10">
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
				<form onSubmit={ handleSubmit } className='flex flex-col gap-y-2 mx-auto w-full mt-5 sm:mt-0 sm:w-1/2'>
					<div className='w-full flex flex-col gap-y-1'>
						<select 
							value={data.name}
							className='w-full' 
							onChange={(e)=>{
								console.info(code[data.name])
								setData({...data, 'name': e.target.value })
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
							type='text' 
							value={data.cost}
							placeholder='Escribe el costo del servicio (solo numeros).' 
							className='w-full placeholder:text-sm placeholder:text-zinc-400'
							onChange={(e)=> setData({...data, 'cost': e.target.value })}
						/>
						<input 
							type='text' 
							value={data.service_destination}
							placeholder='Escribe el destino del servico.' 
							className='w-full placeholder:text-sm placeholder:text-zinc-400'
							onChange={(e)=> setData({...data, 'service_destination': e.target.value })}
						/>
						<input 
							className='w-full'
							type='date'
							value={data.service_date}
							onChange={(e)=> setData({...data, 'service_date': e.target.value })}

						/>
						<textarea
							value={data.description}
							onChange={(e)=> setData({...data, 'description': e.target.value })}
							placeholder='Escribe una breve descripción del servicio.' 
							className='w-full resize-none h-32 placeholder:text-sm placeholder:text-zinc-400'>
						</textarea>
					</div>
					<button 
						type='submit'
						className="w-full px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white"
						>
						agregar
					</button>
				</form>
			</div>
		</main>
	)
}
