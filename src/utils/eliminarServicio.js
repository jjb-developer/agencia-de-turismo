import { loadServiceUser } from './services.js'

export async function deleteServicioHandler(id,set_service){

  const user = JSON.parse(localStorage.getItem("user"))

  fetch(`https://agencia-de-turismo.onrender.com/service/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${user.token}`,
    }
  })
  .then((res) => {
    if(res.ok){
      loadServiceUser(set_service)
      return res.json()
    } else throw new Error('Error al tratar de eliminar servicio.');
  })
  .then((data)=> console.info(data.message))
  .catch((error) => console.error(error.message));
}