const url = "http://localhost:3001/login";
import useStorage from '../utils/store.jsx'

export function loginHandler(username, password) {

  const { getInfo, get } = useStorage()
  getInfo(username,password)
  //const local = `http://localhost:3001/vendedores?username=${username}&?password=${password}`;
/*
  return fetch(`${local}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    //body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => update(data))
    .catch((error) => console.error("Error al procesar la solicitud", error)); */
}
