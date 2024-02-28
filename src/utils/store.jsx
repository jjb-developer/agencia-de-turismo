import { create } from 'zustand';
import { loadServiceHandler } from './fetching.js'
import { url } from './variables.js'


const store = create((set) => ({
	getInfo: null,
	setInfoPersonal: ()=> console.info('get informacion personal'),
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