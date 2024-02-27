import { Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home"
import Empleados from './componentes/pages/Empleados'
import Register from './componentes/pages/Register'
import Login from './componentes/pages/Login'

function App() {
	return (
		<div className='w-full h-screen'>
		   <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/empleados" element={<Empleados/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/login" element={<Login/>}/>
		   </Routes>
		</div>
	)
}

export default App
