import useStorage from '../../utils/store.jsx'

export default function serviciosOfrecidos({status}) {

	const { oferta } = useStorage()
	return (
		<section className={`w-full ${status === 1 ? '':'hidden'}`}>
		{ oferta.map((of,i)=>
			<div key={i} className='flex'>
				<img className='w-24 h-24' src={of.imagen}/>
				<div>
					<p>destino: {of.destino}</p>				
					<p>precio: {of.precio}</p>				
					<p>fecha: {of.fecha}</p>
				</div>				
			</div>
		)}
		</section>
	)
}
