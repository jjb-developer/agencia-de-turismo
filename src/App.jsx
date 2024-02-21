import Navbar from './componentes/Nav/Navbar'
import SectionSearch from './componentes/Search/Section'
import Info from './componentes/Result/Info'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <SectionSearch/>
      <main>
        <Info/>
      </main>
    </div>
  )
}

export default App
