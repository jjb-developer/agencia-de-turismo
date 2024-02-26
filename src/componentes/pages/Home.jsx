import useFetch from '../../utils/useFetch'
import { BiLoaderAlt } from 'react-icons/bi'
import Navbar from '../Nav/Navbar'
import { servicios, meses } from '../../utils/variables.js'


export default function Home(){

	const { ofertas, loading } = useFetch("https://agencia-de-turismo.onrender.com/")

	return(
		<div className='h-screen w-full'>
			<Navbar/>
			<main className='p-5'>
				<ul className='flex flex-col gap-y-4'>
				{ loading && 
					<li className='text-zinc-500 w-full h-screen flex flex-col gap-y-4 items-center justify-center font-medium'>
						<BiLoaderAlt className='text-4xl animate-spin font-bold'/>
						<span className='text-xl'>loading...</span>
					</li>
				}
				{ <Home.ofertas ofertas={ofertas}/> }
				</ul>
			</main>
		</div>
	);
}


function Ofertas({ofertas}) {

	const fecha = (f)=>{
		const date = f.split('-')
		return `${date[0]}, ${date[1]} ${meses[date[2]]}`
	}

	return (
		<ul className='flex flex-wrap gap-4'>
		{ ofertas?.map((oferta,i)=>(
			<li key={i} className='border-2 w-72 p-5 cursor-pointer hover:border-orange-500 duration-300'>
				<figure>
					<img src={oferta.imagen}/>
				</figure>
				<div>
					<p className='uppercase text-sm text-[1.35rem] font-bold tracking-tight text-sky-600'>{servicios[oferta.servicios]}</p>
					<p className='uppercase text-sm font-medium'>destino<span className='ml-3 text-2xl font-bold tracking-tight capitalize text-orange-600'>{oferta.destino}</span></p>
					<p className='uppercase text-sm font-medium'>precio: <span className='ml-3 text-2xl font-medium tracking-tight capitalize'>{oferta.precio}$</span></p>
					<p className='uppercase text-sm font-bold'>{fecha(oferta.fecha)}</p>
				</div>
			</li>
		))}
		</ul>
	)
}

Home.ofertas = Ofertas