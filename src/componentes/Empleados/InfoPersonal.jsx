import { useState, useEffect } from 'react'
import { BiCalendar, BiImage } from 'react-icons/bi'
import { registerHandler } from '../../utils/register.js'
import useStorage from '../../utils/store'

export default function infoPersonal({status}) {

	const [name, setName] = useState("andrew");
	const [lastname, setLastname] = useState("pereira");
	const [adress, setAdress] = useState("rosario - argentina");
	const [dni, setDni] = useState("23095443");
	const [nationality, setNationality] = useState("venezolano");
	const [phone, setPhone] = useState("0426-3241175");
	const [email, setEmail] = useState("andrew@pereira.com");
	const [rol, setRol] = useState("empleado");
	const [username, setUsername] = useState("ak7");
	const [password, setPassword] = useState("12345");
	const [sueldo, setSueldo] = useState("1000000");

	const [editar,setEditar] = useState(false)
	const [send,setSend] = useState(false)
	const { info } = useStorage()

	async function handleSubmit(e) {
		e.preventDefault();
		const res = await registerHandler(name, lastname, adress, dni, nationality, phone, email, rol, username, password, sueldo);
		setSend(true)
		setEditar(false)
		//console.log(res)
	}

	return (
		<section className={`${status === 1 ? '':'hidden'} py-5`}>
			<div className='mt-6'>
				<form onSubmit={ handleSubmit } className='w-96 flex flex-col gap-y-2 mx-auto'>

					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>name</label>
		            { editar ? 
		            <input
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
		              type="text"
		              name=""
		              id="nombre"
		              value={info[0].nombre}
		              onChange={(e) => setName(e.target.value) }
		            />:<p className="text-xl capitalize py-2.5 px-2.5 border-2 border-zinc-100 focus:border-orange-500 text-zinc-900 text-[0.98rem] duration-300 w-full"
		            >
		            	{info[0].nombre}
		            </p>
		         	}
					</div>

					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>lastname</label>
		            { editar ? 
		            <input
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
		              type="text"
		              name=""
		              id="nombre"
		              value={info[0].apellido}
		              onChange={(e) => setLastname(e.target.value) }
		            />:<p className="text-xl capitalize py-2.5 px-2.5 border-2 border-zinc-100 focus:border-orange-500 text-zinc-900 text-[0.98rem] duration-300 w-full"
		            >
		            	{info[0].apellido}
		            </p>
		         	}
					</div>

					<div className='flex gap-x-5 items-center w-full'>
		            <label className='w-32 uppercase text-xs text-zinc-500 font-bold'>adress</label>
		            { editar ? 
		            <input
		              className="outline-none py-2.5 px-2.5 border-2 focus:border-orange-500 text-zinc-700 text-[0.98rem] duration-300 w-full"
		              type="text"
		              name=""
		              id="nombre"
		              value={info[0].direccion}
		              onChange={(e) => setAdress(e.target.value) }
		            />:<p className="text-xl capitalize py-2.5 px-2.5 border-2 border-zinc-100 focus:border-orange-500 text-zinc-900 text-[0.98rem] duration-300 w-full"
		            >
		            	{info[0].direccion}
		            </p>
		         	}
					</div>

					<div>
						{ editar ? 
						<button
							type="submit"
							className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 ${ editar ? 'hover:bg-green-500':'hover:bg-rose-500'}  text-white`}
							>
							actualizar
						</button>:
						<button
							className={`w-full mt-10 px-7 text-sm font-bold py-3 rounded-md uppercase bg-zinc-500 ${ editar ? 'hover:bg-green-500':'hover:bg-rose-500'}  text-white`}
							onClick={(e)=>{
								e.preventDefault()
								setEditar(true)
							} }
							>
							editar
						</button>
						}
					</div>
				</form>
			</div>
		</section>
	)
}
