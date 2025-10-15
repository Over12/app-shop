import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'motion/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { IconX, IconShoppingBag, IconMinus, IconPlus } from '@tabler/icons-react'

export default function CartView({ toggleCart }) {
  const { cart, addMount, removeMount } = useContext(CartContext)

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 bg-black/30 backdrop-blur-lg z-50'>
      <div onClick={toggleCart} className='absolute size-full' />
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className='absolute inset-y-0 right-0 bg-background w-2/5 z-auto flex flex-col overflow-auto'>
        <div className='flex items-center justify-between p-10 flex-shrink-0'>
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
          <div className='flex flex-col size-full px-10'>
            <motion.div layout className='h-4/5 flex flex-col gap-2 overflow-y-auto'>
              <AnimatePresence mode='wait'>
                {cart.map(item => (
                  <motion.div key={item.id} className='flex gap-2'>
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className='bg-green-500 h-1/5'>

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
