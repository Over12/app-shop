import shopLight from "../../assets/shop-light.svg"
import shopDark from "../../assets/shop-dark.svg"
import sunIcon from "../../assets/sun.svg"
import moonIcon from "../../assets/moon.svg"
import PropTypes from "prop-types"

export default function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="fixed w-full flex items-center justify-between px-5 lg:px-10 py-5 bg-primary/20 backdrop-blur border-b-2 border-primary/50 z-10">
      <div className="flex items-center gap-1">
        <img src={darkMode ? shopDark : shopLight} alt="Shop Icon" className="size-11" />
        <span className="text-3xl font-bold text-primary">Shoplyx</span>
      </div>
      <button className={`relative size-11 bg-background rounded-full border-2 ${darkMode ? "border-white" : "border-yellow-400"}`} onClick={toggleDarkMode}>
        <img src={moonIcon} alt="Sun Icon" className={`absolute size-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ${darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`} />
        <img src={sunIcon} alt="Moon Icon" className={`absolute size-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ${darkMode ? '-rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} />
      </button>
    </nav>
  )
}

NavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}
