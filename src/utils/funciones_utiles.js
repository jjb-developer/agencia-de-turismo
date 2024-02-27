import { meses } from './variables.js'

export const formatingDate = (f)=>{
	const date = f.split('-')
	return `${date[0]}, ${date[1]} ${meses[date[2]]}`
}