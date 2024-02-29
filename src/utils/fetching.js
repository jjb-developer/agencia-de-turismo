// OBTENER TODOS LOS SERVICIOS OFRECIDOS
export function loadServiceHandler(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results )
    .catch((error)=>console.error('Error al obtener data de servicios: ', error))
}



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



// SOLICITUD DE VENTA DE PAQUETE TURISTICO
// SOLO ROL -> Cliente
export function createSalesHandler() {
  fetch(`${url}/sales`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${tokenC}`,
    },
    body: JSON.stringify({
      id_servicios: [4, 5],
      payment_method: "mastercard",
    }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error al procesar solicitud de venta: ", error));
}



// OBTENER DE VENTAS DE VENDEDOR
export function getSalesHandler(){
  fetch(`${url}/sales`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenV}`,
      }
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error al procesar la solicitud de informacion de ventas: ", error));
}



// CREAAR UN NUEVO SERVICIO
// SOLO ROL -> Empleado
export function createServiceHandler() {
  fetch(`${url}/service`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${tokenV}`,
    },
    body: JSON.stringify({
      name: "pasaje de colectivo",
      description: "viaja en bondi con aire acondicionado",
      service_destination: "caba",
      service_date: "2024-11-04",
      cost: "1",
      service_code: 4,
    }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error al procesar la solicitud de creacion de nueva oferta de servico: ", error));
}