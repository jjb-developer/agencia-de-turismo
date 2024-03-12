export async function updateServiceHandle(data,user){
	try {
		const response = await fetch('https://agencia-de-turismo.onrender.com/service', {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				"authorization": `Bearer ${user.token}`,
			},
			body: JSON.stringify(data),
		})
		if(response.ok){
			console.info(`El servicio ha sido actualizado exitosamente!.`)
			return response.ok
		} else throw new Error(`No se han podido actualizar el servicio!.`)
	} catch (error){
		console.info(error.message)
	}
}
