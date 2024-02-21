import { Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/Home.jsx"
import Register from './componentes/pages/Register.jsx'
import Login from './componentes/pages/Login.jsx'
function App() {
  return (<div className='w-full h-screen'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>)
}

export default App
