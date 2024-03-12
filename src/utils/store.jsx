import { create } from 'zustand';
import { loadServiceHandler } from './services.js'
import { initialStateServicetoAdd } from './variables.js'


const store = create((set) => ({
	isLogin: null,
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