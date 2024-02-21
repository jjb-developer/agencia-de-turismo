import { data } from '../../assets/data.js'
import CardService from './CardService'

export default function Info() {
  return (
    <div className='flex flex-wrap gap-4 px-10'>
    {
    	data.servicios.map((s,i)=> <CardService key={i} image={`./${i}.webp`} nombre={s.nombre} descripcion={s.descripcion_breve} fecha={s.fecha_servicio} precio={s.costo_servicio}/>)
    }
    </div>
  )
}
