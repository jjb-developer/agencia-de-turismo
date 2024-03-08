import store from '../../../utils/store'
import { useEffect } from 'react'

export default function ServiciosOfrecidos() {

	const { getUserService, setUserService } = store()

	function userServices(){
		const user = JSON.parse(localStorage.getItem("user"))
		fetch("https://agencia-de-turismo.onrender.com/service", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				"authorization": `Bearer ${user.token}`,
			}
		})
		.then((res) => res.json())
		.then((data) => setUserService(data.results))
		.catch((error) => console.error("Error en el proceso de solicitud de servicios ofrecidos: ", error.message));
	}

	function handleSubmit(e) {
		e.preventDefault();
		
		const user = JSON.parse(localStorage.getItem("user"))

		fetch("https://agencia-de-turismo.onrender.com/service", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				"authorization": `Bearer ${user.token}`,
			}
		})
		.then((res) => res.json())
		.then((data) => setUserService(data.results))
		.catch((error) => console.error("Error en el proceso de solicitud de servicios ofrecidos: ", error.message));
	}

	useEffect(()=>{
		userServices()
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
						{ getUserService?.map((sv)=>(
							<article key={sv.id_servicio} className='w-56 h-56 bg-zinc-300 p-5'>
								<h1 className='text-sm uppercase font-bold tracking-tight'>{ sv.name }</h1>
								<p className='mt-1 text-sm'>{ sv.description }</p>
								<p className='mt-4 text-sm'>{ sv.cost }$</p>
							</article>
						)) }
					</div>
					<section className='md:ml-5 w-full h-56 md:h-[inherit] md:w-2/5 bg-sky-200 flex items-center justify-center capitalize text-2xl font-medium tracking-tight'>filtros</section>
				</div>
			</section>
		</main>
	)
}
