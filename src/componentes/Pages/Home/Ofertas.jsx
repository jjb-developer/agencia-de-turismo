import { formatingDate } from '../../../utils/funciones_utiles.js'

export default function ofertas({servicios}) {

	return (
		<section className='flex flex-wrap gap-4 px-16 py-8'>
		{ servicios?.map((servicio)=>(
			<div key={servicio.id_servicio} className='border-2 rounded w-56 p-5 cursor-pointer hover:border-orange-500 duration-300'>
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