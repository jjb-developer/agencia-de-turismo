export default function serviciosOfrecidos({status}) {
	return (
		<section className={`w-full ${status === 1 ? '':'hidden'}`}>Servicios Ofrecidos</section>
	)
}
