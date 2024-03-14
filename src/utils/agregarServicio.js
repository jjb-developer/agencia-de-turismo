export async function addServiceHandle(data,user){
  try {
    const response = await fetch('https://agencia-de-turismo.onrender.com/service', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
    if(response.ok){
      console.info(`El servicio ha sido creado exitosamente!.`)
      return response.ok
    } else throw new Error(`No se han podido crear el servicio!.`)
  } catch (error){
    console.info(error.message)
  }
}