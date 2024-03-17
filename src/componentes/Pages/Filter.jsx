// Este componente no esta siendo usando en la APP, pero sera usado para refactorizar el filter de servicios.
import { useState } from 'react'
import store from '../../utils/store'

export default function filtros({servicios}){

	const { setServiceFilter } = store()
	const [services,setServices] = useState(servicios)

	function filterForCost(signo,key,comparador){
		const sv = servicios.filter(sv=>{
			if(signo === '>'){
				return sv[key] > comparador
			} else if(signo === '<='){
				return sv[key] <= comparador
			} else if(signo === 'd'){
				return sv[key].split('-')[1] === comparador
			} else {
				return sv[key] === comparador
			}
		})
		setServiceFilter(sv)
	}

	return <p>componente filter.jsx</p>
}