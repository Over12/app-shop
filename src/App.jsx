import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import BagButton from './components/common/BagButton'
import NavBar from './components/ui/NavBar'
import Hero from './components/ui/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Electronics from './pages/Electronics'
import Jewelry from './pages/Jewelry'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

function App() {
  const { cart ,darkMode } = useContext(CartContext)

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark' : 'light'} bg-background text-text transition-colors`}>
        <NavBar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/jewelry' element={<Jewelry />} />
          <Route path='/men' element={<Mens />} />
          <Route path='/women' element={<Womens />} />
        </Routes>
        <BagButton itemCount={cart.length} />
      </div>
    </BrowserRouter>
  )
}

export default App
