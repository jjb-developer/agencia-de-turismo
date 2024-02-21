const url = "http://localhost:3001/login";
export function loginHandler(username, password) {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Error al procesar la solicitud", error));
}
