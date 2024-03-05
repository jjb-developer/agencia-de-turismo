import store from '../../../utils/store'
import { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'

export default function infoPersonal() {
	const { getUser } = store()
	const { setUser } = store()
	const [edit,setEdit] = useState(false)
	const [updateUser,setUpdateUser] = useState({...getUser})


	function exampleSubmit(e){
		e.preventDefault()
		const { name, lastname, username, dni, country, birthdate, phone, email  } = updateUser
		console.info({name, lastname, username, dni, country, birthdate, phone, email})
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const { name, lastname, username, dni, country, birthdate, phone, email  } = updateUser

		const user = JSON.parse(localStorage.getItem("user"))
		fetch(`${import.meta.env.VITE_REACT_URL}/seller`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${user.token}`,
			},
			body: JSON.stringify({name, lastname, username, dni, country, birthdate, phone, email}),
		})
		.then((res) => {
			if(res.status === 200) setUser({...getUser, name, lastname, username, dni, country, birthdate, phone, email })
			return res.json()
		})
		.then((data) => console.log(data.message))
		.catch((error) => console.error("Error al procesar solicitud de venta: ", error));
		setEdit(!edit)
	}

	return (
		<section className="py-5 bg-zinc-100 relative">
			<h3>Informacion de vendedor</h3>
			<div className='mt-6 flex flex-col justify-center'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>name</label>
						{
							edit ? 
							(<input type='text' placeholder='name' value={updateUser.name} onChange={ (e)=> setUpdateUser({...updateUser, name: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.name}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>lastname</label>
						{
							edit ? 
							(<input type='text' placeholder='lastname' value={updateUser.lastname} onChange={ (e)=> setUpdateUser({...updateUser, lastname: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.lastname}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>birthdate</label>
						{
							edit ? 
							(<input type='text' placeholder='birthdate' value={updateUser.birthdate} onChange={ (e)=> setUpdateUser({...updateUser, birthdate: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.birthdate}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>country</label>
						{
							edit ? 
							(<input type='text' placeholder='country' value={updateUser.country} onChange={ (e)=> setUpdateUser({...updateUser, country: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.country}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>dni</label>
						{
							edit ? 
							(<input type='text' placeholder='dni' value={updateUser.dni} onChange={ (e)=> setUpdateUser({...updateUser, dni: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.dni}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>email</label>
						{
							edit ? 
							(<input type='text' placeholder='email' value={updateUser.email} onChange={ (e)=> setUpdateUser({...updateUser, email: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.email}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>phone</label>
						{
							edit ? 
							(<input type='text' placeholder='phone' value={updateUser.phone} onChange={ (e)=> setUpdateUser({...updateUser, phone: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.phone}</label>)
						}
					</div>

					<div className='flex items-center gap-x-4'>
						<label className='label_title'>username</label>
						{
							edit ? 
							(<input type='text' placeholder='username' value={updateUser.username} onChange={ (e)=> setUpdateUser({...updateUser, username: e.target.value })}/>)
							:
							(<label className='label_info'>{updateUser.username}</label>)
						}
					</div>
					<button type='submit'
						className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white ${edit ? '':'hidden'}`}
						>
						update
					</button>
				</form>
				<button onClick={()=> setEdit(!edit)} className={`w-96 mx-auto mt-10 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 hover:bg-rose-500 text-white ${edit ? 'hidden':''}`}><BiEditAlt size='20' className='text-white mx-auto'/></button>
			</div>
		</section>
	)
}
