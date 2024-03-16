import { useState } from 'react'
import store from '../../utils/store'
import { BiUser, BiCart, BiSolidHotel } from "react-icons/bi";
import { ImAirplane, ImCart } from "react-icons/im";
import { FaCarAlt, FaBusAlt, FaTrain } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdEvent } from "react-icons/md";


export default function carrito(){

	const styleIcon = "bg-sky-500 w-14 h-14 rounded-md p-2.5 text-white"

	const icon = {
		1: <BiSolidHotel className={styleIcon}/>,
		4: <ImAirplane className={styleIcon}/>,
		2: <FaCarAlt className={styleIcon}/>,
		5: <FaTrain className={styleIcon}/>,
		3: <FaBusAlt className={styleIcon}/>,
		6: <GiJourney className={styleIcon}/>,
		7: <MdEvent className={styleIcon}/>
	}


	const { isCarrito, showCarrito, getServiceInCarrito, getAllService, deleteServiceInCarrito, cleanCarrito, getTotalCar, setTotalCar } = store()

	const [methodPayment,setMethodPayment] = useState('mercado-pago')

	const [total,setTotal] = useState(0)


	async function handleSubmitPayment(){
		console.log(getServiceInCarrito)
		if(getServiceInCarrito.length > 0){
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
		}else{
			console.log('carrito vacio')
		}
		
	}


	return (
	<>
	{ isCarrito && 
		<div className="fixed w-full top-0 left-0 right-0  z-[100] min-h-screen h-full bg-zinc-800 overflow-y-scroll flex justify-center py-16 mb-16">
			<div className='w-96'>
				<div className='flex justify-between items-center mb-10'>
					<h3 className='font-bold text-2xl tracking-tight text-white text-2xl'>Carrito De Compras</h3>
					<button onClick={ showCarrito } className='font-bold text-2xl flex items-center justify-center text-white bg-rose-500 w-7 h-7 rounded-full'><span className='-translate-y-0.5'>x</span>
					</button>
				</div>
				<div className='flex flex-col items-center'>
				{ getServiceInCarrito.length > 0 ? 
					( getAllService.filter(sv=>getServiceInCarrito.includes(sv.id_servicio)).map(sv=>(
						<article key={sv.id_servicio} className='mb-3 bg-zinc-50 w-full px-5 rounded py-3 relative flex items-center justify-center'>
							<div className='flex items-center w-[70%]'>
								<span className='w-14'>{ icon[sv.service_code] }</span>
								<div className='ml-4'>
									<h4 className='text-[1.05rem] capitalize font-bold tracking-tight'>{sv.name}</h4>
									<p className='text-sm font-bold uppercase text-zinc-400'>{sv.service_destination}</p>
									<p className='text-xs font-medium tracking-tight uppercase text-zinc-400'>{sv.service_date}</p>
								</div>
							</div>
							<div className='w-[30%] flex flex-col items-end'>
								<span className='font-bold text-xl tracking-tight py-0.5'>{sv.cost}$</span>
								<button 
									onClick={()=>{
										deleteServiceInCarrito(sv.id_servicio)
										setTotalCar(-(sv.cost))
									}}
									className='bg-rose-500 uppercase text-xs font-bold tracking-tight text-rose-950 p-0.5 px-2 rounded'>delete</button>
							</div>
						</article> ))
					)
					:(<div className='text-zinc-50 font-medium py-5'>El carrito esta vacio!.</div>)
				} </div>
				<div className='flex justify-between items-center'>
					<button 
						onClick={ ()=>{
							cleanCarrito()
							setTotalCar(-(getTotalCar))
						}}
						className='bg-purple-500 uppercase text-xs font-bold tracking-tight text-purple-950 p-2 px-4 my-3 rounded'
					>
					vaciar carrito
					</button>
					<span className='text-2xl font-bold text-zinc-50'>{ getTotalCar }$</span>
				</div>
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
				<button onClick={ handleSubmitPayment } className='mt-3 mb-16 bg-orange-500 w-full rounded text-orange-950 py-3 font-bold uppercase text-sm'>comprar</button>
			</div>
		</div> 
	}
	</>
	)
}

