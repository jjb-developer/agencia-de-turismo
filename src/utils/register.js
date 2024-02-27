const url = "http://localhost:3001/register";

export function registerHandler(name, lastname, adress, dni, nationality, phone, email, rol, username, password, sueldo) {

  const day = new Date()
  const fecha_registro = [day.getDate(),day.getMonth(),day.getFullYear()].join('-')
  console.info('Esto es lo que se enviara al backend')
  console.info(JSON.stringify({ name, lastname, adress, dni, fecha_registro, nationality, phone, email, rol, "baja": false, username, password, "cargo": "vendedor", sueldo }))

  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, lastname, adress, dni, fecha_registro, nationality, phone, email, rol, baja: false, username, password, cargo: "vendedor", sueldo }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Error al procesar la solicitud", error));
}


