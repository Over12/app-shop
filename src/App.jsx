import { useState } from "react"
import NavBar from "./components/ui/NavBar"
import Hero from "./components/ui/Hero"
import ProductSection from "./components/ui/ProductSection"
import ButtonCart from "./components/common/ButtonCart"
import ModalCart from "./components/ui/ModalCart"

function App() {
  const [darkMode, setDarkMode] = useState(matchMedia("(prefers-color-scheme: dark)").matches)
  const [showCart, setShowCart] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col h-full w-full bg-background text-text transition-colors duration-300`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <ProductSection />
      {showCart && <ModalCart toggleCart={toggleCart} />}
      <ButtonCart toggleCart={toggleCart} />
    </div>
  )
}

export default App
