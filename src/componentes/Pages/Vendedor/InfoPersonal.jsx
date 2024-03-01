import { useEffect } from 'react'
import { registerHandler } from '../../../utils/register.js'
import store from '../../../utils/store.jsx'

export default function infoPersonal({status}) {

	async function handleSubmit(e) {
		e.preventDefault();
		//const res = await registerHandler(name, lastname, adress, dni, nationality, phone, email, rol, username, password, sueldo);
		console.info('obtener y actualizar info personal en construccion')
	}
/*
	const user = { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo1MiwiaWF0IjoxNzA5MjIzNzU3LCJleHAiOjE3MDkyMjczNTd9.eSEGspbVvAqyMmlCRATUtWMLKUkDM2QXz7YVDIKlNBk", "id_usuario": 52}

	const user2 = {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo1MiwiaWF0IjoxNzA5MjI0MzIxLCJleHAiOjE3MDkyMjc5MjF9.fhjQDTOqKddYnBhpx1P9SRbY9Sne0u8UoUM4fTJCFM8","id_usuario":52}
*/

	const { isLogin } = store()

	function probarClient(user){
		fetch(`https://agencia-de-turismo.onrender.com/client/${user.id_usuario}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${user.token}`,
			}
		}).then(res => res.text()).then(data => console.info(data))
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
					{ isLogin && <p>`${JSON.stringify(isLogin)}`</p>}
					{ !isLogin && <p>Loading...</p>}
				</form>
			</div>
		</section>
	)
}
