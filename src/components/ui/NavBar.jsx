import { useContext } from 'react'
import { motion } from 'motion/react'
import { CartContext } from '../../context/CartContext'
import { IconSunFilled, IconMoonFilled, IconShoppingBag } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(CartContext)

  return (
    <nav className='fixed bg-background/80 backdrop-blur-lg grid grid-cols-3 inset-x-0 top-0 px-10 py-5 transition-colors z-50'>
      <div className='flex items-center gap-1'>
        <IconShoppingBag className='size-10' stroke={2.5} />
        <span className='text-3xl font-bold'>Shoplyx</span>
      </div>
      <ul className='flex h-full items-center justify-center gap-7 uppercase'>
        <li><Link to='/'>All</Link></li>
        <li><Link to='/electronics'>Electronics</Link></li>
        <li><Link to='/jewelry'>Jewelry</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
      </ul>
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ rotate: -90 }} onClick={toggleDarkMode} className='justify-self-end'>
        {darkMode ? <IconMoonFilled /> : <IconSunFilled />}
      </motion.button>
    </nav>
  )
}
