import Proptypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartIcon from '../../assets/cart.svg'

export default function ButtonCart({ toggleCart }) {
  const { cart } = useContext(CartContext)

  return (
    <button className="fixed bottom-5 right-5 bg-primary border-2 border-text rounded-full p-2 md:p-3" onClick={toggleCart}>
      {cart.length > 0 && <span className="absolute -top-2 -right-1 flex items-center justify-center size-5 md:size-6 text-sm md:text-base rounded-full bg-red-500 text-white">{cart.length}</span>}
      <img src={CartIcon} alt="Carrito de compras" className='size-7 md:size-8' />
    </button>
  )
}

ButtonCart.propTypes = {
  toggleCart: Proptypes.func.isRequired
}
