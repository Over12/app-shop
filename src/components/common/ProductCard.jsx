import PropTypes from 'prop-types'
import { IconShoppingCartPlus, IconShoppingCartX } from '@tabler/icons-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { AnimatePresence, motion } from 'motion/react'

export default function ProductCard({ product }) {
  const { addCart, removeCart, verifyProductInCart } = useContext(CartContext)
  const isInCart = verifyProductInCart({ id: product.id })

  return (
    <div className='border border-primary/30 rounded-b-xl w-40 sm:w-80 group'>
      <div className='bg-primary/20 aspect-square overflow-hidden'>
        <img src={product.image} alt={`Image of ${product.title}`} className='object-contain size-full p-5 sm:p-10 group-hover:scale-105 transition-transform duration-700 ease-in-out' />
      </div>
      <div className='p-2 sm:p-5 h-36 sm:h-48 space-y-2 sm:space-y-3'>
        <span className='uppercase tracking-wider text-xs opacity-70'>{product.category}</span>
        <p className='leading-snug text-sm sm:text-base text-pretty line-clamp-2 min-h-10 sm:min-h-11'>{product.title}</p>
        <div className='flex justify-between items-center'>
          <span className='text-base sm:text-xl'>${product.price.toFixed(2)}</span>
          <button onClick={() => { isInCart ? removeCart({ id: product.id }) : addCart({ product }) }} className='font-semibold w-14 sm:w-28 space-x-2 border-2 border-primary/30 px-3 py-1 rounded-lg'>
            <AnimatePresence mode='wait'>
              {isInCart ? (
                <motion.div key='remove' initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                  <IconShoppingCartX className='inline-block size-5 mr-0.5' />
                  <span className='hidden sm:inline-block'>Remove</span>
                </motion.div>
              ) : (
                <motion.div key='add' initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                  <IconShoppingCartPlus className='inline-block size-5 mr-0.5' />
                  <span className='hidden sm:inline-block'>Add</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  }).isRequired,
}
