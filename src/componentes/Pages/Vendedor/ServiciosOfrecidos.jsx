export default function ServiciosOfrecidos() {

	function exampleSubmit(e){
		e.preventDefault()
		console.info('enviando formulario')
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { name, lastname, username, dni, country, birthdate, phone, email  } = getUser

		const user = JSON.parse(localStorage.getItem("user"))
		await fetch(`${import.meta.env.VITE_REACT_URL}/client`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${user.token}`,
			}
		})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((error) => console.error("Error en el proceso de solicitud de servicios ofrecidos: ", error));
	}

	return (
		<section className="bg-sky-50 py-5">
		<h3>Servicios ofrecidos</h3>
			<div className='flex flex-wrap gap-4'>
				<div className='w-64 h-80 flex flex-col  items-start pl-10 justify-center border-2 rounded-xl'>
					<h4>nombre del servicio</h4>
					<p>descripcion</p>
					<p>precio</p>
					<p>fecha</p>
				</div>
			</div>
		</section>
	)
}
