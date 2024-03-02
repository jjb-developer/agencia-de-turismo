import { useEffect } from 'react'
import { registerHandler } from '../../../utils/register.js'
//borrar import que no se utilicen
export default function infoPersonal({status}) {

	async function handleSubmit(e) {
		e.preventDefault();
	}

	function probarClient(){
		const user = JSON.parse(localStorage.getItem('user'))

		fetch(`https://agencia-de-turismo.onrender.com/client`, {
			headers: {
				"Authorization": `Bearer ${user.token}`,
			}
		})
		.then(res => res.json())
		.then(data => console.info(data))
	}

	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						onClick={ ()=> probarClient() }
						>
						show/update
					</button>
				</form>
			</div>
		</section>
	)
}
