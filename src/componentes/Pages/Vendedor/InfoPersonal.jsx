import { useEffect } from 'react'
import { registerHandler } from '../../../utils/register.js'
import store from '../../../utils/store.jsx'

export default function infoPersonal({status}) {

	async function handleSubmit(e) {
		e.preventDefault();
	}

	const { isLogin } = store()

	function probarClient(user){
		fetch(`https://agencia-de-turismo.onrender.com/client/${user.id_usuario}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${user.token}`,
			}
		})
		.then(res => res.json())
		.then(data => data )
	}

	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white`}
						onClick={ ()=> probarClient(user2) }
						>
						show/update
					</button>
				</form>
			</div>
		</section>
	)
}
