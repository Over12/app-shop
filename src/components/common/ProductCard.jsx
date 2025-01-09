import PropTypes from 'prop-types'
import StarIcon from '../../assets/star.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addCart } = useContext(CartContext)

  return (
    <div className='max-h-[500px] bg-primary/50 border-2 border-primary overflow-hidden rounded-lg flex flex-col justify-between'>
      <div className='text-pretty relative'>
        <span className='absolute left-1 top-1 text-xs md:text-sm rounded-xl px-2 py-0.5 opacity-90 text-white bg-black'>{product.category}</span>
        <img src={product.image} alt={product.title} className='h-60 mx-auto bg-white w-full object-contain p-1' />
      </div>
      <h2 className='font-bold px-2'>{product.title}</h2>
      <div className='px-2 max-h-24 overflow-y-auto hide-scrollbar text-sm lg:text-base'>
        <p>{product.description}</p>
      </div>
      <div className='px-2 pt-2 flex justify-between items-center'>
        <span className='font-bold text-lg lg:text-xl'>${product.price}</span>
        <span className='flex items-center gap-1'>
          <img src={StarIcon} alt="Star Icon" className='size-5' />
          <p>{product.rating.rate} <span className='text-sm opacity-80'>({product.rating.count})</span></p>
        </span>
      </div>
      <button className='bg-secondary m-3 px-3 py-2 rounded-lg hover:bg-secondary/80 transition-colors' onClick={() => addCart({ product })}>Agregar al carrito</button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  })
}
