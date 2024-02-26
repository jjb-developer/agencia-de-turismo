import { create } from 'zustand';

const stateInitial =  [
	{
		"id_cliente": 1,
		"nombre": "Juan",
		"apellido": "Perez",
		"direccion": "Calle Principal 123",
		"dni": "12345678A",
		"fecha_nacimiento": "1990-05-15",
		"nacionalidad": "Español",
		"telefono": "+34 123 456 789",
		"email": "juan.perez@example.com",
		"cargo": "Desarrollador",
		"sueldo": 30000,
		"username": "jp",
		"password": "jp"
	}
]

const useStorage = create((set) => ({
	info: [
		{
			"nombre": "nombre",
			"apellido": "apellido",
			"direccion": "dirección"
		}
	],
	oferta: [
		{
			"id_oferta": 0,
			"id_vendedor": 0,
			"servicios": 0,
			"fecha": "2024-31-5",
			"destino": "suiza",
			"imagen": "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg",
			"precio": 100
		}
	],
	allOfertas: [
		{
			"id_oferta": 1,
			"id_vendedor": 1,
			"servicios": 3,
			"fecha": "2024-31-5",
			"destino": "suiza",
			"imagen": "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg",
			"precio": 750
		}
	],
	getInfo: async (username,password)=>{
		const res = await fetch(`http://localhost:3001/vendedores/?username=${username}&?password=${password}`)
		const res_info = await res.json()
		set(state=>({
			...state,
			info: res_info
		}))
	},
	getOfertasServicios: async (id)=>{
		const res = await fetch(`http://localhost:3001/oferta_de_servicios/?id_vendedor=${id}`)
		const res_oferta = await res.json()
		set(state=>({
			...state,
			oferta: res_oferta
		}))
	},
	getOSAll: async ()=>{
		const res = await fetch(`http://localhost:3001/oferta_de_servicios`)
		const res_allOfertas = await res.json()
		set(state=>({
			...state,
			allOfertas: res_allOfertas
		}))
	}
}));

export default useStorage;