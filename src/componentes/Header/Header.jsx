export default function Header(){

	const bg = {
		'1': 'url(https://images.pexels.com/photos/15537287/pexels-photo-15537287/free-photo-of-carretera-montanas-arboles-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
		'2': 'url(https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
	}
	const fondo = {
		"backgroundImage": bg['1']
	}
	return (
		<header style={fondo} className='bg-center bg-cover relative flex items-center justify-center w-full bg-[#ddd] h-80'>
			<h2 className='absolute bottom-7 left-10 text-8xl font-medium tracking-tighter text-white capitalize'>desert</h2>
		</header>
	)
}