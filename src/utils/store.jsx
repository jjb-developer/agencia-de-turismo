import { create } from 'zustand';
import { loadServiceHandler } from './services.js'
import { loginHandler } from './login.js'
import { url } from './variables.js'


const store = create((set) => ({
	isLogin: false,
	play: ()=> {
		set((state)=> ({...state, isLogin: true}))
	},
	login: async ()=> {
		const data = await loginHandler(url)
		set((state) => ({ ...state, isLogin: data }))
	},
	getService: null,
	setService: async ()=> {
		const data = await loadServiceHandler(url)
		set((state) => ({ ...state, getService: data }))
	},
	getSales: null,
	setSales: null,
	getCondicion: 'todos',
	setCondicion: (condicion)=> set((state)=> ({...state, getCondicion: condicion }))
}));

export default store;