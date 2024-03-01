const url = "http://localhost:3001/agregar_servicio";

export async function agregarServicioHandler(image, servicio, descripcion, destino, fecha, costo) {

  const uuid = Date().replaceAll(':','').split(' ').splice(0,5).join('').toLowerCase()

  console.info('Esto es lo que se enviara al backend')
  console.info(JSON.stringify({ uuid, image, servicio, descripcion, destino, fecha, costo }))

  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ uuid, image, servicio, descripcion, destino, fecha, costo }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Error al Agregar Servicio: ", error));
}
