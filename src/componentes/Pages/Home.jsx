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
			<Main servicios={servicios}/>
			<Footer/>
		</div>
	);

}