import { useEffect } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import Navbar from '../Nav/Navbar'
import { formatingDate } from '../../utils/funciones_utiles.js'
import store from '../../utils/store'


export default function Home(){

	const { getService } = store()
	const { setService } = store()

	useEffect(()=>{
		if(getService === null) setTimeout(()=>{ setService() },2000)
	},[])


	return(
		<div className='h-screen w-full'>
			<Navbar/>
			<main className='p-5'>
				{ getService ? 
					(<Home.ofertas servicios={getService}/>):
					(<BiLoaderAlt className='animate-spin' size='32'/>)
				}
			</main>
		</div>
	);
}


function ofertas({servicios}) {

	return (
		<section className='flex flex-wrap gap-4'>
		{ servicios?.map((servicio,i)=>(
			<div key={i} className='border-2 rounded w-56 p-5 cursor-pointer hover:border-orange-500 duration-300'>
				<figure>
					<img src="" alt="imagen de servicio"/>
				</figure>
				<div>
					<h3>{servicio.name}</h3>
					<h4>{servicio.description}</h4>
					<p>{servicio.service_destination}</p>
					<p>{servicio.cost}$</p>
					<p>{formatingDate(servicio.service_date)}</p>
				</div>
			</div>
		))}
		</section>
	)
}


Home.ofertas = ofertas


/*

	//const [ofertas, setOfertas] = useState([])
	//const [loading, setLoading] = useState(true)
	//const url_servicios = "https://agencia-de-turismo.onrender.com/"
	//const url_user_47 = "https://agencia-de-turismo.onrender.com/user/47"
	//const url_post = "https://agencia-de-turismo.onrender.com/user"



	{ loading && 
		<li className='text-zinc-500 w-full h-screen flex flex-col gap-y-4 items-center justify-center font-medium'>
			<BiLoaderAlt className='text-4xl animate-spin font-bold'/>
			<span className='text-xl'>loading...</span>
		</li>
	}
	{ <Home.ofertas ofertas={ofertas}/> }

*/