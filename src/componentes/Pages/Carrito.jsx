import { useState } from 'react'
import store from '../../utils/store'

export default function carrito(){

	const { isCarrito, getServiceInCarrito, getAllService, deleteServiceInCarrito, cleanCarrito } = store()
	const [methodPayment,setMethodPayment] = useState('mercado-pago')

	async function handleSubmitPayment(){

		const user = JSON.parse(localStorage.getItem("user"))

		const data = {
			"id_servicios": getServiceInCarrito,
			"payment_method": methodPayment
		}

		try {
			const response = await fetch('https://agencia-de-turismo.onrender.com/sales', {
				method: "POST",
				headers: {
				  "content-type": "application/json",
				  "authorization": `Bearer ${user.token}`,
				},
				body: JSON.stringify(data),
			})
			if(response.ok){
				console.info(`Venta realizada exitosamente!.`)
				const dataResponse = await response.json()
				console.info(dataResponse.message)
			} else throw new Error(`No se han podido realizar la venta!.`)
		} catch (error){
			console.info(error.message)
		}
	}



	return (
	<>
	{ isCarrito && 
		<div className="fixed w-72 p-5 top-0 left-0 z-[100] min-h-screen h-fit overflow-y-scroll bg-zinc-700">
			{ getServiceInCarrito.length > 0 ? 
				( getAllService.filter(sv=>getServiceInCarrito.includes(sv.id_servicio)).map(sv=>(
					<article key={sv.id_servicio} className='mb-3 bg-zinc-50 rounded p-4 relative'>
						<h1 className='text-xl capitalize font-bold tracking-tight'>{sv.name}</h1>
						<p className='mt-3 text-sm'>{sv.service_destination} -> <span>{sv.service_date}</span></p>
						<p className='mt-3 font-bold'>{sv.cost}$</p>
						<button 
							onClick={ ()=> deleteServiceInCarrito(sv.id_servicio) }
							className='bg-rose-500 uppercase text-xs font-bold tracking-tight text-rose-950 p-0.5 px-2 rounded absolute bottom-2 right-2'>delete</button>
					</article> ))
				)
				:(<div className='text-zinc-50 font-medium py-5'>El carrito esta vacio!.</div>)
			}
			<button 
				onClick={ cleanCarrito }
				className='bg-purple-500 uppercase text-xs font-bold tracking-tight text-purple-950 p-2 px-4 my-3 rounded mx-auto'>vaciar carrito</button>
			<select 
				value={methodPayment} 
				className='mt-3 w-full'
				onChange={(e)=> setMethodPayment(e.target.value)}
				>
				<option value='mercado-pago'>mercado pago</option>
				<option value='tarjeta-de-credito'>tarjeta de crédito</option>
				<option value='zelle'>zelle</option>
				<option value='paypal'>paypal</option>
			</select>
			<button onClick={ handleSubmitPayment } className='mt-3 bg-orange-500 w-full rounded text-orange-950 py-3 font-bold uppercase text-sm'>comprar</button>
		</div> 
	}
	</>
	)
}

