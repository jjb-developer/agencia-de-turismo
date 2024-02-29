export default function main({servicios}) {

	return (
		<main className='flex flex-wrap gap-4 px-16 py-8'>
		{ servicios?.map((servicio)=>(
			<article key={servicio.code} className='border-2 rounded w-56 p-5 cursor-pointer hover:border-orange-500 duration-300'>
				<figure>
					<img src={servicio.image} alt="imagen del servicio"/>
				</figure>
				<div>
					<h3>{servicio.name}</h3>
					<p>{servicio.description}</p>
				</div>
			</article>
		))}
		</main>
	)
}