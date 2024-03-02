import { BiUser, BiSearch } from "react-icons/bi";
import store from '../../utils/store'

export default function Search(){

	const { setCondicion } = store()

	function handleChangeFilter(e){
		return setCondicion(e.target.value)
	}

	return (
		<section className='w-full pt-10 px-16 flex items-center gap-x-5'>
			<div className='flex flex-col'>
				<label className='uppercase text-xs mb-2'>servicios
				</label>
				<select id='servicio' defaultValue='todos' onChange={ handleChangeFilter } className='w-64'>
					<option value='hotel por noche'>hotel por noche
					</option>
					<option value='alquiler de auto'>alquiler de auto
					</option>
					<option value='pasaje de colectivo'>pasaje de colectivo
					</option>
					<option value='alquiler de avion'>pasaje de avion
					</option>
					<option value='alquiler de tren'>pasaje de tren
					</option>
					<option value='excursiones'>excursiones</option>
					<option value='entrada a eventos'>entrada a eventos
					</option>
					<option value='todos'>todos
					</option>
				</select>
			</div>
		</section>
	)
}