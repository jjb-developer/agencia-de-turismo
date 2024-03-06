import { useNavigate } from 'react-router-dom'
import InfoPersonal from './Vendedor/InfoPersonal'
import ServiciosOfrecidos from './Vendedor/ServiciosOfrecidos'
import AgregarServicio from './Vendedor/AgregarServicio'

export default function vendedor() {

	const navigate = useNavigate()

	return (
		<main className='flex flex-col gap-y-5 p-10'>
			<h3 className='text-2xl uppercase font-bold tracking-tight mb-7'>Vendedor</h3>
			<InfoPersonal/>
			<ServiciosOfrecidos/>
			<AgregarServicio/>
		</main>
	)
}
