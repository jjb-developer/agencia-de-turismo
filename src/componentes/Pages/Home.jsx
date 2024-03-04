import Header from '../Header/Header'
import Main from './Home/Main'
import { servicios } from '../../utils/variables.js'


export default function Home(){

	return(
		<div className='overflow-hidden'>
			<Header/>
			<h1 className='text-5xl md:text-7xl my-16 text-center font-zeyada font-bold text-orange-800'>Nuestros Servicios</h1>
			<Main servicios={servicios}/>
		</div>
	);

}