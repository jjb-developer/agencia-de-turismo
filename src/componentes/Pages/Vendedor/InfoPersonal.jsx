import { registerHandler } from '../../../utils/register.js'

export default function infoPersonal({status}) {

	async function handleSubmit(e) {
		e.preventDefault();
		//const res = await registerHandler(name, lastname, adress, dni, nationality, phone, email, rol, username, password, sueldo);
		console.info('obtener y actualizar info personal en construccion')
	}

	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						>
						show/update
					</button>
				</form>
			</div>
		</section>
	)
}
