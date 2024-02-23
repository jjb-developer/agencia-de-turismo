export default Button({name}) {
	return (
		<button
			className="px-7 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-3 rounded-md uppercase"
			onClick={()=> console.info('Agregando Servicio') }>
			{name}
		</button>
	)
}