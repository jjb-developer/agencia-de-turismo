import { create } from 'zustand';
import { loadServiceHandler } from './services.js'


const store = create((set) => ({
	isLogin: null,
	getService: null,
	setService: async ()=> {
		const data = await loadServiceHandler(url)
		set((state) => ({ ...state, getService: data }))
	},
	getSales: null,
	setSales: null,
	getCondicion: 'todos',
	setCondicion: (condicion)=> set((state)=> ({...state, getCondicion: condicion })),
	getUser: null,
	setUser: (info)=> set((state)=> ({...state, getUser: info }))
}));

export default store;