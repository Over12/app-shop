import { createContext, useState } from "react";
import PropTypes from "prop-types"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addCart = ({ product }) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id)

      if (existingProduct) {
        return prevCart
      }

      return [...prevCart, {...product, mount: 1}]
    })
  }

  const removeCart = ({ id }) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  const addMount = ({ id }) => {
    setCart(prevCart => prevCart.map(product => {
      if (product.id === id) {
        return {...product, mount: product.mount + 1}
      }

      return product
    }))
  }

  const removeMount = ({ id }) => {
    setCart(prevCart => prevCart.map(product => {
      if (product.id === id && product.mount > 1) {
        return {...product, mount: product.mount - 1}
      }

      return product
    }))
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, addMount, removeMount }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
