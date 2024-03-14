// Importa los JSONs de cada servicio
import { alquilerAuto } from "./alquilerAuto.js";
import { entradaEventos } from "./entradaEventos.js";
import { excursiones } from "./excursiones.js";
import { hotelPorNoche } from "./hotelPorNoche.js";
import { pasajeAvion } from "./pasajeAvion.js";
import { pasajeColectivo } from "./pasajeColectivo.js";
import { pasajeTren } from "./pasajeTren.js";

// Crea un nuevo array para almacenar todos los servicios
let service = [];

// Agrega los servicios de cada JSON al array de servicios
service.push(...alquilerAuto.alquilerAuto);
service.push(...entradaEventos.entradaEventos);
service.push(...excursiones.excursiones);
service.push(...hotelPorNoche.hotelPorNoche);
service.push(...pasajeAvion.pasajeAvion);
service.push(...pasajeColectivo.pasajeColectivo);
service.push(...pasajeTren.pasajeTren);

// Exporta el array de servicios
export { service };
