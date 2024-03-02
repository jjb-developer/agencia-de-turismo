import { url } from './variables.js'

export async function registerHandler(data) {

  return fetch(`${url}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...data, "user_state": true }),
  })
    .then((res) => res.json())
    .then((data) => data )
    .catch((error) => console.error("Error al procesar la solicitud", error))
}


