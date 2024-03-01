import { url } from './variables.js'

// LOGIN DE USUARIO
export async function loginHandler(user,pass) {

  return fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username: user, password: pass }),
  })
    .then((res) => res.text())
    .then((data) => localStorage.setItem('user', data))
    .catch((error) => console.error("No tienes permisos. Error en username o password: ", error))
}