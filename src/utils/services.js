// OBTENER TODOS LOS SERVICIOS OFRECIDOS
export function loadServiceHandler(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results )
    .catch((error)=>console.error('Error al obtener data de servicios: ', error))
}
