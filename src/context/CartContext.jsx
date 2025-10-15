import { createContext } from "react";
import PropTypes from "prop-types"
import useCart from '../hooks/useCart'
import useTheme from '../hooks/useTheme'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme()
  const { cart, addCart, removeCart, addMount, removeMount, verifyProductInCart } = useCart()

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, addMount, removeMount, darkMode, toggleDarkMode, verifyProductInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
