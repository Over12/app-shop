import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'motion/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { IconX, IconShoppingBag, IconMinus, IconPlus } from '@tabler/icons-react'

export default function CartView({ toggleCart }) {
  const { cart, clearCart, removeCart, addMount, removeMount } = useContext(CartContext)

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 bg-black/30 backdrop-blur-lg z-50'>
      <div onClick={toggleCart} className='hidden sm:absolute sm:size-full' />
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className='absolute inset-y-0 right-0 bg-background w-full sm:w-2/5 max-h-screen z-auto flex flex-col'>
        <div className='flex items-center justify-between px-5 py-10 sm:p-10 flex-shrink-0'>
          <h2 className='text-xl font-bold'>Your Cart</h2>
          <button onClick={toggleCart}>
            <IconX className='size-7' />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className='flex-1 flex flex-col items-center justify-center gap-2'>
            <IconShoppingBag className='size-20' />
            <p className='text-lg'>Your cart is empty</p>
          </div>
        ) : (
          <div className='flex flex-col size-full px-5 sm:px-10 overflow-hidden'>
            <motion.div className='flex-1 flex flex-col gap-2 overflow-y-auto hide-scrollbar'>
              <AnimatePresence mode='popLayout'>
                {cart.map(item => (
                  <motion.div layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} key={item.id} className='flex gap-2 group'>
                    <div className='aspect-square bg-primary/20 size-24 rounded-md'>
                      <img src={item.image} alt={`Image of ${item.title}`} className='object-contain size-full p-3' />
                    </div>
                    <div>
                      <p className='text-sm text-pretty line-clamp-2'>{item.title}</p>
                      <span className='text-sm opacity-70'>${item.price.toFixed(2)}</span>
                      <div className='flex items-center gap-2 mt-1'>
                        <button onClick={() => removeMount({ id: item.id })} className='bg-primary/20 border border-primary/50 rounded-full p-1'>
                          <IconMinus className='size-4' />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addMount({ id: item.id })} className='bg-primary/20 border border-primary/50 rounded-full p-1'>
                          <IconPlus className='size-4' />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeCart({ id: item.id })} className='ml-auto self-start'>
                      <IconX className='size-5 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className='flex-shrink-0 flex flex-col gap-2 pt-4 pb-10'>
              <p className='flex justify-between text-lg mt-2'>
                <span>Total:</span>
                <AnimatePresence mode='wait'>
                  <motion.span layout key='total'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</motion.span>
                </AnimatePresence>
              </p>
              <button className='bg-primary px-3 py-2 rounded-md font-semibold'>Complete purchase</button>
              <button onClick={clearCart} className='bg-secondary px-3 py-2 rounded-md font-semibold'>Empty cart</button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.section>
  )
}

CartView.propTypes = {
  toggleCart: PropTypes.func.isRequired
}
