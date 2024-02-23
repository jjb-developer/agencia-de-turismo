import { useState } from 'react'
import { agregarServicioHandler } from '../../utils/agregarServicio.js'
import { BiCalendar, BiImage } from 'react-icons/bi'

export default function agregarServicio({status}) {

	const [imagen, setImagen] = useState('')
	const [servicio, setServicio] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [destino, setDestino] = useState('')
	const [fecha, setFecha] = useState('')
	const [costo, setCosto] = useState('')

	async function handleSubmit(e){
		e.preventDefault()
		const res = await agregarServicioHandler(imagen, servicio, descripcion, destino, fecha, costo)
		
		setImagen('')
		setServicio('')
		setDescripcion('')
		setDestino('')
		setFecha('')
		setCosto('')
	}


	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={handleSubmit} className='w-96 flex flex-col gap-y-2 mx-auto'>
					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>imagen del servicio</label>
		            <label htmlFor='file' className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-400 text-[0.98rem] duration-300 w-full h-40 cursor-pointer flex flex-col items-center justify-center"><BiImage size='40'/>Cargar Imagen</label>
		            <input
		              className="hidden"
		              type="file"
		              name="file"
		              id="file"
		              value={imagen}
		              onChange={(e)=>setImagen(e.target.value)}
		            />
					</div>
					<div className='flex gap-x-5 items-center w-full'>
						<label className='w-32 uppercase text-xs text-zinc-500 font-bold'>tipo de servicio</label>
		            <select
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 bg-zinc-100 w-full"
		              name="servicio"
		              id="servicio"
		              value={servicio}
		              onChange={(e)=>setServicio(e.target.value)}
		              >
		              <option className="" value="hotel_por_noche(s)">hotel por noche(s)</option>
		              <option value="alquiler_de_auto">alquiler de auto</option>
		              <option value="pasaje_de_colectivo">pasaje de colectivo</option>
		              <option value="pasaje_de_avion">pasaje de avión</option>
		              <option value="pasaje_de_tren">pasaje de tren</option>
		              <option value="excursiones">excursiones</option>
		            </select>
					</div>
					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>descripcion del servicio</label>
		            <textarea
		              className="h-40 outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full resize-none"
		              type="text"
		              name="descripcion"
		              id="descripcion"
		              value={descripcion}
		              onChange={(e)=>setDescripcion(e.target.value)}
		            />
					</div>
					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>destino</label>
		            <input
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
		              type="text"
		              name="destino"
		              id="destino"
		              value={destino}
		              onChange={(e)=>setDestino(e.target.value)}
		            />
					</div>
					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>fecha</label>
		            <label htmlFor='calendario' className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-400 text-[0.98rem] duration-300 w-full cursor-pointer flex gap-x-2 items-center"><BiCalendar size='24'/> Calendario</label>
		            <input
		              className="hidden"
		              type="date"
		              name="fecha"
		              id="fecha"
		              value={fecha}
		              onChange={(e)=>setFecha(e.target.value)}
		            />
					</div>
					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>costo del servicio</label>
		            <input
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
		              type="text"
		              name="costo"
		              id="costo"
		              value={costo}
		              onChange={(e)=>setCosto(e.target.value)}
		            />
					</div>
					<div>
						<button
							className="w-full mt-10 px-7 bg-sky-700 hover:bg-sky-600 text-white text-sm font-bold py-3 rounded-md uppercase"
							onClick={()=> console.info('Agregando Servicio') }>
							agregar
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
