// OBTENER TODOS LOS SERVICIOS OFRECIDOS
export async function loadServiceHandler() {
  return fetch("https://agencia-de-turismo.onrender.com")
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) =>
      console.error("Error al obtener data de servicios: ", error)
    );
}

// OBTENER TODOS LOS SERVICIOS OFRECIDOS DE UN VENDEDOR
export async function loadServiceUser(setUserService) {
	const user = JSON.parse(localStorage.getItem("user"))
	await fetch("https://agencia-de-turismo.onrender.com/service", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			"authorization": `Bearer ${user.token}`,
		}
	})
	.then((res) => {
		if(res.ok){
			return res.json()
		} else throw new Error ("No se han podido cargados los servicios de este vendedor!.")
	})
	.then((data) => setUserService(data.results))
	.catch((error) => console.error(error.message));
}
