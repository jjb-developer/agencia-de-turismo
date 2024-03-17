import { useState } from 'react'
import store from '../../utils/store'
import { BiUser, BiCart, BiSolidHotel, BiTrash, BiSolidXCircle } from "react-icons/bi";
import { ImAirplane, ImCart } from "react-icons/im";
import { FaCarAlt, FaBusAlt, FaTrain } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdEvent } from "react-icons/md";


export default function carrito(){

	const styleIcon = "text-sky-500 w-7 h-7"

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
		<div className="fixed w-full top-0 left-0 right-0  z-[100] min-h-screen h-full bg-zinc-800 bg-opacity-80 overflow-y-scroll flex justify-center py-16 mb-16">
			<div className='w-96 h-fit bg-zinc-50 p-5 pb-10'>
				<div className='flex justify-between items-center mb-3 pb-5 border-b-2'>
					<div className='flex items-center gap-x-2'>
						<h3 className='font-bold text-xl tracking-tight text-orange-500 text-2xl'>Carrito De Compras</h3>
						<button 
							onClick={()=>{
								cleanCarrito()
								setTotalCar(-(getTotalCar))
							}}
							className='bg-zinc-300 duration-200 hover:bg-rose-500 uppercase text-[0.7rem] font-bold tracking-tight text-zinc-500 hover:text-white py-0.5 w-[50px] rounded'>vaciar
						</button>
					</div>
					<BiSolidXCircle 
						onClick={ showCarrito } 
						className='font-bold text-2xl flex items-center justify-center text-white cursor-pointer bg-rose-500 w-7 h-7 rounded-full'
					/>
				</div>
				<div className='flex flex-col items-center'>
				{ getServiceInCarrito.length > 0 ? 
					( getAllService.filter(sv=>getServiceInCarrito.includes(sv.id_servicio)).map(sv=>(
						<article key={sv.id_servicio} className='mb-3 bg-zinc-50 w-full rounded p-4 relative border-b-2'>
							<div>
								<div>
									<div className='flex items-start justify-between'>
										<div className='flex gap-x-3 items-start'>
											<div>
												<h4 className='text-[20px] font-light text-[#333] leading-[1.3rem] capitalize'>{sv.name}</h4>
													<div className='flex gap-x-2 items-center'>
														<p className='text-orange-500 leading-[1.4rem] text-[14px] font-medium uppercase'>{sv.service_destination}</p>
														<p className='capitalize text-zinc-400 text-sm'>{sv.service_date}</p>
														
													</div>
											</div>
										</div>
										<div className='flex flex-col gap-y-1 items-end'>
											<span className='leading-[1.1rem] font-normal text-[20px] text-[#333]'>{sv.cost}$</span>
											<button 
												onClick={()=>{
													deleteServiceInCarrito(sv.id_servicio)
													setTotalCar(-(sv.cost))
												}}
												className='bg-zinc-300 duration-200 hover:bg-rose-500 uppercase text-[0.7rem] font-bold tracking-tight text-zinc-500 hover:text-white py-0.5 w-[50px] rounded'>delete
											</button>
										</div>
									</div>
								</div>
							</div>
						</article> ))
					)
					:(<div className='text-zinc-400 font-medium text-left py-5 text-lg flex gap-x-2 items-center'><BiCart size='32'/>El carrito esta vacio!.</div>)
				} </div>
				<div className='flex justify-between items-center p-4'>
					<p className='text-sm uppercase'>Total a pagar</p>
					<span className='text-2xl font-bold text-zinc-800'>{ getTotalCar }$</span>
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
				<button onClick={ handleSubmitPayment } className='mt-3 bg-orange-500 w-full rounded text-orange-950 py-3 font-bold uppercase text-sm'>comprar</button>
			</div>
		</div> 
	}
	</>
	)
}

