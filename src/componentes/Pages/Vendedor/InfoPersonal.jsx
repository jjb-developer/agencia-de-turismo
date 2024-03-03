import store from '../../../utils/store'

export default function infoPersonal() {
	const { getUser } = store()

	async function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className={`py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					{ getUser && (<div>
					<p>Nombre: <span className='capitalize text-lg'>{ getUser.name }</span></p>
					<p>lastname: <span className='capitalize text-lg'>{ getUser.lastname }</span></p>
					<p>DNI: <span className='capitalize text-lg'>{ getUser.dni }</span></p>
					<p>Email: <span className='capitalize text-lg'>{ getUser.email }</span></p>
					<p>Phone: <span className='capitalize text-lg'>{ getUser.phone }</span></p>
					<p>Birthdate: <span className='capitalize text-lg'>{ getUser.birthdate }</span></p>
					<p>Country: <span className='capitalize text-lg'>{ getUser.country }</span></p>
					</div>)}
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						onClick={ handleSubmit }
						>
						edit/update
					</button>
				</form>
			</div>
		</section>
	)
}
