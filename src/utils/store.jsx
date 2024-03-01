import { create } from 'zustand';
import { loadServiceHandler } from './services.js'
import { loginHandler } from './login.js'


const store = create((set) => ({
	isLogin: null,
	login: async (username,password)=> {
		const data = await loginHandler(username,password)
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