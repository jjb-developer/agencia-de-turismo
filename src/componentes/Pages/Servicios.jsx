import Navbar from '../Nav/Navbar'
import store from '../../utils/store'
import { useEffect, useState } from 'react'
import { BiHeart, BiCartAdd } from 'react-icons/bi'

export default function servicios(){
	const[user,setUser]=useState(null);
	const { getAllService, setServiceFilter, getServiceFilter, getServiceInCarrito, addServiceInCarrito,getUser, setTotalCar } = store()

	const [btnAddOrDelete,setBtnAddOrDelete] = useState('add')

	useEffect(()=>{
		const user = JSON.parse(localStorage.getItem('user'))
		if(user){setUser(getUser);
		}
		
	},[]);
	return (
	<>
		<Navbar/>
		<main className='pt-48 bg-zinc-200 px-5 sm:px-10 lg:px-20'>
			<h1 className='mb-7 text-2xl font-medium tracking-tight capitalize'>servicios</h1>
			<div className='min-h-screen flex'>
				<div className='hidden sm:block sm:w-56'>
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
							<li 
								onClick={()=>setServiceFilter(1)} 
								className='text-[14px] cursor-pointer font-light'>Hotel por noche <span className='text-zinc-500 ml-1'>(25)</span></li>
							<li 
								onClick={()=>setServiceFilter(2)} 
								className='text-[14px] cursor-pointer font-light'>alquiler de auto <span className='text-zinc-500 ml-1'>(61)</span></li>
							<li 
								onClick={()=>setServiceFilter(3)} 
								className='text-[14px] cursor-pointer font-light'>pasaje de colectivo <span className='text-zinc-500 ml-1'>(32)</span></li>
							<li 
								onClick={()=>setServiceFilter(4)} 
								className='text-[14px] cursor-pointer font-light'>pasaje en avión <span className='text-zinc-500 ml-1'>(47)</span></li>
							<li 
								onClick={()=>setServiceFilter(5)} 
								className='text-[14px] cursor-pointer font-light'>pasaje en tren <span className='text-zinc-500 ml-1'>(103)</span></li>
							<li 
								onClick={()=>setServiceFilter(6)} 
								className='text-[14px] cursor-pointer font-light'>excursiones <span className='text-zinc-500 ml-1'>(49)</span></li>
							<li 
								onClick={()=>setServiceFilter(7)} 
								className='text-[14px] cursor-pointer font-light'>entrada a eventos <span className='text-zinc-500 ml-1'>(18)</span></li>
							<li 
								onClick={()=>setServiceFilter(0)} 
								className='text-[14px] cursor-pointer font-light'>todos</li>
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
				<section className='flex flex-col gap-y-2 max-w-2xl w-full mb-20'>
				{ getAllService?.filter((sv)=>""+sv.service_code === ""+getServiceFilter || ""+getServiceFilter === ""+0).map((sv)=>(
						<div 
							key={sv.id_servicio}
							className="p-7 bg-white cursor-pointer relative">
							<div className='flex items-center justify-between'>
								<h4 className='text-[20px] font-light text-[#333] leading-[1.3rem] capitalize'>{sv.name}</h4>
								<BiHeart size='24' className='text-zinc-400 hover:text-rose-500 duration-200'/>
							</div>
							<span className="leading-[2.75rem] font-normal text-[24px] text-[#333]">US$ {sv.cost}</span>
							<p className='text-orange-500 leading-[1.4rem] text-[14px] font-medium uppercase'>{sv.service_destination}</p>
							<p className='capitalize text-zinc-400 text-sm'>{sv.service_date}</p>
							<div className='flex justify-between items-end flex-wrap'>
								<p className='mt-3 capitalize text-zinc-500 text-sm max-w-[60%]'>{sv.description}</p>
								{user && user.role=='cliente' &&
								<button 
								onClick={ ()=>{
									if(getServiceInCarrito.includes(sv.id_servicio)) console.info('El servicios ya esta agregado!.')
									else {
										addServiceInCarrito(sv.id_servicio)
										setTotalCar(sv.cost)
									}
								}}
								className={`bg-sky-500 hover:bg-lime-500 duration-200 uppercase text-xs font-bold tracking-tight text-green-950 w-[65px] h-7 rounded flex items-center justify-center`}><span><BiCartAdd size='18' className='mr-1'/></span>{ btnAddOrDelete }
								</button>}
							</div>
						</div>
					))
				}
				</section>
			</div>
		</main>
	</>
	)

}