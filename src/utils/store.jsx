import { create } from 'zustand';
import { loadServiceHandler } from './services.js'


const store = create((set) => ({
	isLogin: null,
	getUser: null,
	setUser: (info)=> set((state)=> ({...state, getUser: info })),
	getUserService: null,
	setUserService: (service)=> set((state)=> ({...state, getUserService: service }))
}));

export default store;