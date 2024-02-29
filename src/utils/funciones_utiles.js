import { meses } from './variables.js'

export const formatingDate = (f)=>{
	const date = f.split('-')
	return `${date[0]}, ${date[2]} ${meses[date[1]]}`
}

export const filterData = (data,filtro)=> data.filter(v=> v.name === filtro || filtro === 'todos')