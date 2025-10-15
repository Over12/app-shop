import { IconShoppingCartFilled } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'motion/react'
import PropTypes from 'prop-types'
import CartView from '../ui/CartView'
import { useState } from 'react'

export default function BagButton({ itemCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <div className='fixed bottom-7 right-7'>
        <button onClick={toggleCart} className='p-3 rounded-full bg-primary/50 border-2 border-primary hover:scale-110 transition-transform'>
          <IconShoppingCartFilled />
        </button>
        <AnimatePresence mode='wait'>
          {itemCount > 0 &&
            <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: 'spring', stiffness: 300 }} className='absolute flex items-center justify-center text-sm font-semibold -top-2 -right-2 size-7 rounded-full bg-accent'>{itemCount}</motion.span>
          }
        </AnimatePresence>
      </div>
      <AnimatePresence mode='wait'>
        {isCartOpen && <CartView toggleCart={toggleCart} />}
      </AnimatePresence>
    </>
  )
};

BagButton.propTypes = {
  itemCount: PropTypes.number
}
