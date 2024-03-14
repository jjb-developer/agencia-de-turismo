export const meses =
 	{
      "01": "enero",
      "02": "febrero",
      "03": "marzo",
      "04": "abril",
      "05": "mayo",
      "06": "junio",
      "07": "julio",
      "08": "agosto",
      "09": "septiembre",
      "10": "octubre",
      "11": "noviembre",
      "12": "diciembre"
  }

export const code = {
    "hotel por noche": 1,
    "alquiler de auto": 2,
    "pasajes de colectivos": 3,
    "pasaje de avion": 4,
    "pasaje de tren": 5,
    "excursiones": 6,
    "entradas a eventos": 7
  }


export const initialStateServicetoAdd = {
    "name": "hotel por noche",
    "description": "",
    "service_destination": "",
    "service_date": new Date().toISOString().split('T')[0],
    "cost": "",
    "service_code": 1
}


export const servicios = [
  {
    "code": 1,
    "image": "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"hotel por noche"',
    "description": "Experimenta el lujo y la comodidad en nuestro hotel, donde cada noche se convierte en una experiencia inolvidable de descanso y hospitalidad."
  },
  {
    "code": 2,
    "image": "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"alquiler de auto"',
    "description": "Vive la libertad de explorar a tu propio ritmo con nuestro servicio de alquiler de autos, donde cada viaje se convierte en una oportunidad para descubrir nuevos destinos."
  },
  {
    "code": 3,
    "image": "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"pasaje de colectivo"',
    "description": "Viaja con comodidad y seguridad en nuestros servicios de pasaje en colectivo, donde cada trayecto se transforma en un recorrido placentero y sin preocupaciones."
  },
  {
    "code": 4,
    "image": "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"pasaje de avión"',
    "description": "Descubre la libertad de volar con nuestro servicio de pasaje aéreo, donde cada viaje es una aventura que te acerca a tus destinos soñados."
  },
  {
    "code": 5,
    "image": "https://images.pexels.com/photos/15536055/pexels-photo-15536055/free-photo-of-edificios-entrenar-tren-vehiculo.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"pasaje de tren"',
    "description": "Embárcate en una travesía única con nuestro servicio de pasaje en tren, donde cada viaje es una experiencia pintoresca y llena de encanto que te conecta con destinos fascinantes."
  },
  {
    "code": 6,
    "image": "https://images.pexels.com/photos/15710357/pexels-photo-15710357/free-photo-of-paisaje-montanas-cielo-hombre.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"excursiones"',
    "description": "Sumérgete en la emoción y la exploración con nuestras excursiones, donde cada paso te lleva a descubrir nuevos horizontes y experiencias inolvidables."
  },
  {
    "code": 7,
    "image": "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name": '"entrada a eventos"',
    "description": "Sumérgete en la emoción y la diversión con nuestro servicio de entrada a eventos, donde cada acceso te brinda la oportunidad de disfrutar momentos inolvidables llenos de entretenimiento y cultura."
  },
  {
    "code": 8,
    "image":"https://th.bing.com/th/id/OIP.CeJBTq8DXvXKZgDQWawqHwHaEK?rs=1&pid=ImgDetMain",
    "name": '"paquetes"',
    "description": "¡Descubre nuestras ofertas exclusivas y elige el paquete perfecto para tus vacaciones! Desde emocionantes combos de pasaje de avión y hotel hasta opciones adicionales para personalizar tu experiencia."
  }
]