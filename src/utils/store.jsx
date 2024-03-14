import { create } from 'zustand';
import { loadServiceHandler } from './services.js'
import { initialStateServicetoAdd } from './variables.js'


const store = create((set) => ({
	isLogin: null,
	getServiceInCarrito: [],
	addServiceInCarrito: (id)=> set((state)=>({...state, getServiceInCarrito: [...state.getServiceInCarrito, id]})),
	deleteServiceInCarrito: (id_servicio)=> set((state)=>({...state, getServiceInCarrito: [...state.getServiceInCarrito.filter( id => id !== id_servicio)]})),
	cleanCarrito: ()=> set((state)=>({...state, getServiceInCarrito: []})),
	isCarrito: false,
	showCarrito: ()=> set((state)=> ({...state, isCarrito: !state.isCarrito })),
	getServiceFilter: '0',
	setServiceFilter: (code) => set((state)=>({...state, getServiceFilter: code})),
	getAllService: null,
	setAllService: (data)=> set((state)=>({...state, getAllService: data })),
	getUser: null,
	setUser: (info)=> set((state)=> ({...state, getUser: info })),
	getUserService: null,
	setUserService: (service)=> set((state)=> ({...state, getUserService: service })),
	getInitialServiceToAdd: initialStateServicetoAdd,
	setInitialServiceToAdd: (service)=> set((state) => ({...state, getInitialServiceToAdd: service })),
	getIdService: null,
	setIdService: (id)=> set((state)=>({...state, getIdService: id})),
	getAddOrUpdate: null,
	setAddOrUpdate: (option)=> set((state)=>({...state, getAddOrUpdate: option }))
}));

export default store;