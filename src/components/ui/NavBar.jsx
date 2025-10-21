import { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CartContext } from '../../context/CartContext'
import { IconSunFilled, IconMoonFilled, IconShoppingBag, IconMenuDeep } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='fixed bg-background/80 backdrop-blur-lg grid grid-cols-2 sm:grid-cols-3 inset-x-0 top-0 px-5 sm:px-10 py-5 transition-colors z-50'>
        <div className='flex items-center gap-1'>
          <IconShoppingBag className='size-9 sm:size-10' stroke={2} />
          <span className='text-2xl sm:text-3xl font-bold'>Shoplyx</span>
        </div>
        <button onClick={toggleMenu} className='sm:hidden justify-self-end'>
          <IconMenuDeep className='size-9' />
        </button>
        <ul className='hidden sm:flex h-full items-center justify-center gap-7 uppercase'>
          <li><Link to='/'>All</Link></li>
          <li><Link to='/electronics'>Electronics</Link></li>
          <li><Link to='/jewelry'>Jewelry</Link></li>
          <li><Link to='/men'>Men</Link></li>
          <li><Link to='/women'>Women</Link></li>
        </ul>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ rotate: -90 }} onClick={toggleDarkMode} className='hidden sm:block justify-self-end'>
          {darkMode ? <IconMoonFilled /> : <IconSunFilled />}
        </motion.button>
      </nav>
      <AnimatePresence mode='wait'>
        {isOpen && <MobileMenu toggleMenu={toggleMenu} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      </AnimatePresence>
    </>
  )
}

function MobileMenu({ toggleMenu, darkMode, toggleDarkMode }) {
  return (
    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} className='sm:hidden fixed flex items-center justify-center inset-0 bg-background z-40 transition-colors'>
      <ul className='flex flex-col items-center justify-center gap-5 text-center text-xl uppercase'>
        <li onClick={toggleMenu}><Link to='/'>All</Link></li>
        <li onClick={toggleMenu}><Link to='/electronics'>Electronics</Link></li>
        <li onClick={toggleMenu}><Link to='/jewelry'>Jewelry</Link></li>
        <li onClick={toggleMenu}><Link to='/men'>Men</Link></li>
        <li onClick={toggleMenu}><Link to='/women'>Women</Link></li>
      </ul>
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ rotate: -90 }} onClick={toggleDarkMode} className='absolute bottom-8 right-8'>
        {darkMode ? <IconMoonFilled className='size-8'/> : <IconSunFilled className='size-8'/>}
      </motion.button>
    </motion.div>
  )
}

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
}