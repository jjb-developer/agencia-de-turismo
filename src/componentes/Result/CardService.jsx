export default function CardService({image,nombre,descripcion,fecha,precio}){
	return (
		<div className='w-64 border-2 rounded cursor-pointer'>
			<figure className='w-full h-64 bg-zinc-200 rounded-lg overflow-hidden'>
				<img className='w-full h-full object-cover object-center' src={image}></img>
			</figure>
			<div className='flex flex-col mt-4'>
				<h1 className='font-bold'>{ nombre }</h1>
				<p className='text-sm text-zinc-500'>{ descripcion }</p>
				<span className='text-sm text-zinc-500'>{ fecha }</span>
				<span className='font-bold mt-2'>$ { precio }</span>
			</div>
		</div>
	)
}