const url = "https://agencia-de-turismo.onrender.com/login";

export async function loginHandler(username, password) {
  
  return fetch(url,{
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username:'sebas',password:'sebas'}),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error al procesar la solicitud", error));
}
