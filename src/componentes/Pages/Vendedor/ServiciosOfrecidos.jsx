export default function ServiciosOfrecidos() {

	function exampleSubmit(e){
		e.preventDefault()
		const { name, lastname, username, dni, country, birthdate, phone, email  } = getUser
		console.info({name, lastname, username, dni, country, birthdate, phone, email})
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { name, lastname, username, dni, country, birthdate, phone, email  } = getUser

		const user = JSON.parse(localStorage.getItem("user"))
		await fetch(`${import.meta.env.VITE_REACT_URL}/client`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${user.token}`,
			},
			body: JSON.stringify({name, lastname, username, dni, country, birthdate, phone, email}),
		})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((error) => console.error("Error al procesar solicitud de venta: ", error));
	}

	return (
		<section className="bg-sky-100 py-5">
		<h3>Servicios ofrecidos</h3>
			<div className='mt-6'>
				<form onSubmit={ exampleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					<button type='submit'
						className={`hidden w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						>
						obtener
					</button>
				</form>
			</div>
		</section>
	)
}
