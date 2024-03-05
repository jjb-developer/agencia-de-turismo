export default function AgregarServicio() {

	async function handleSubmit(e) {
		e.preventDefault();
		console.info('agregar servicios en construccion')
	}

	return (
		<section className="bg-orange-100 py-5">
		<h3>agregar servicio</h3>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
						<button type='submit'
							className={`hidden w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
							>
							agregar
						</button>
				</form>
			</div>
		</section>
	)
}
