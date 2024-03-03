import store from '../../utils/store'

export default function cliente(){
	const { getUser } = store()
	return (
		<div>
			{ getUser && (<div>
			<p>Username: <span className='capitalize text-lg'>{ getUser.username }</span></p>
			<p>Nombre: <span className='capitalize text-lg'>{ getUser.name }</span></p>
			<p>lastname: <span className='capitalize text-lg'>{ getUser.lastname }</span></p>
			<p>Birthdate: <span className='capitalize text-lg'>{ getUser.birthdate }</span></p>
			<p>DNI: <span className='capitalize text-lg'>{ getUser.dni }</span></p>
			<p>Address: <span className='capitalize text-lg'>{ getUser.address }</span></p>
			<p>Country: <span className='capitalize text-lg'>{ getUser.country }</span></p>
			<p>Email: <span className='capitalize text-lg'>{ getUser.email }</span></p>
			<p>Phone: <span className='capitalize text-lg'>{ getUser.phone }</span></p>
			</div>)}
		</div>
	)
}