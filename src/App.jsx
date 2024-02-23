import { Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home.jsx"
import Empleados from './componentes/pages/Empleados.jsx'
import Register from './componentes/pages/Register.jsx'
import Login from './componentes/pages/Login.jsx'
function App() {
  return (<div className='w-full h-screen'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/empleados" element={<Empleados/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>)
}

export default App
