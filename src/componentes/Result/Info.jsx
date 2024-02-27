import { data } from "../../assets/data.js";
import CardService from "./CardService";

export default function Info() {
  return (
    <div className="flex flex-wrap gap-6 px-10 justify-center items-center ease-out duration-1000">
      {
        //ARREGLAR. no poner nunca como key los id de los bucles
        data.servicios.map((s, i) => (
          <CardService
            key={i}
            image={`../../../${i}.webp`}
            nombre={s.nombre}
            descripcion={s.descripcion_breve}
            fecha={s.fecha_servicio}
            precio={s.costo_servicio}
          />
        ))
      }
    </div>
  );
}
