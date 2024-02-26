import { useState, useEffect } from 'react'

export default function useFecth(url) {
	const [ofertas, setOfertas] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(()=>{
		setLoading(true)
		fetch(url)
			.then(res => res.json())
			.then(data => setOfertas(data))
			.finally(()=> setTimeout(()=>setLoading(false)),5000)
	},[])

	return { ofertas, loading }
}