import { create } from 'zustand';
import { loadServiceHandler } from './fetching.js'
import { url, urlDev, tokenV, tokenC, urlJsonServer } from './variables.js'

const store = create((set) => ({
	getService: null,
	getSales: null,
	setService: async ()=> {
		const data = await loadServiceHandler(urlJsonServer)
		set((state) => ({ ...state, getService: data }))
	}
}));

export default store;