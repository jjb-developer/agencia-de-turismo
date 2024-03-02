import Navbar from '../Nav/Navbar'
import Header from '../Header/Header'
import Main from './Home/Main'
import Footer from '../Footer/Footer'
import { servicios } from '../../utils/variables.js'


export default function Home(){

	return(
		<div className='h-screen w-auto'>
			<Navbar/>
			<Header/>
			<h1 className='text-8xl my-8 text-center font-zeyada font-bold text-orange-800'>Nuestros Servicios</h1>
			<Main servicios={servicios}/>
			<Footer/>
		</div>
	);

}