// LOGIN DE USUARIO
export function loginHandler(url) {

  const vendedor = {
    "username":"username",
    "password":"1234"
  }

  return fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username: "cristobal", password: "cristobal" }),
  })
    .then((res) => res.text())
    .then((data) => data.results )
    .catch((error) => console.error("No tienes permisos. Error en username o password: ", error))
}