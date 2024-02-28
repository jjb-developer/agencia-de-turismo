import { useEffect } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import Navbar from '../Nav/Navbar'
import Filter from '../Filter/Filter'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Ofertas from './Home/Ofertas'
import store from '../../utils/store'
import { filterData } from '../../utils/funciones_utiles.js'


export default function Home(){

	const { getService } = store()
	const { setService } = store()
	const { getCondicion } = store()

	useEffect(()=>{
		if(getService === null) setService()
	},[])

	return(
		<div className='h-screen w-full'>
			<Navbar/>
			<Header/>
			<main>
				<Filter/>
				{ getService ? 
					(<Ofertas servicios={filterData(getService,getCondicion)}/>):
					(<BiLoaderAlt className='animate-spin' size='32'/>)
				}
			</main>
			<Footer/>
		</div>
	);
}