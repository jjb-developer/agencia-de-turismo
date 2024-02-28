export default function ServiciosOfrecidos({status}) {

	async function handleSubmit(e) {
		e.preventDefault();
		console.info('obtener servicios ofrecidos de vendedor en construccion')
	}

	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						>
						obtener
					</button>
				</form>
			</div>
		</section>
	)
}
