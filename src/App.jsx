import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Nav/Navbar"
import Home from "./componentes/Pages/Home"
import Login from './componentes/Pages/Login'
import Register from './componentes/Pages/Register'
import Vendedor from './componentes/Pages/Vendedor'
import Cliente from './componentes/Pages/Cliente'
import AgregarServicio from './componentes/Pages/Vendedor/AgregarServicio'
import ServicioOfrecidos from './componentes/Pages/Vendedor/ServiciosOfrecidos'
import InfoPersonal from './componentes/Pages/Vendedor/InfoPersonal'
import Footer from './componentes/Footer/Footer'

function App() {
	return (
		<div className='w-full h-screen'>
			<Navbar/>
		   <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/vendedor" element={<Vendedor/>}/>
				<Route path="/cliente" element={<Cliente/>}/>
				<Route path="/infoPersonal" element={<InfoPersonal/>}/>
				<Route path="/serviciosOfrecidos" element={<ServicioOfrecidos/>}/>
				<Route path="/agregarServicio" element={<AgregarServicio/>}/>
		   </Routes>
			<Footer/>
		</div>
	)
}

export default App
