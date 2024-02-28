import { Routes, Route } from "react-router-dom";
import Home from "./componentes/Pages/Home"
import Vendedor from './componentes/Pages/Vendedor'
import Register from './componentes/Pages/Register'
import Login from './componentes/Pages/Login'

function App() {
	return (
		<div className='w-full h-screen'>
		   <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/vendedor" element={<Vendedor/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/login" element={<Login/>}/>
		   </Routes>
		</div>
	)
}

export default App
