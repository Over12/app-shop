import { useState } from 'react'

export default function useCart() {
  const [cart, setCart] = useState([])

  const addCart = ({ product }) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id)

      if (existingProduct) {
        return prevCart
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeCart = ({ id }) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const addMount = ({ id }) => {
    setCart(prevCart => prevCart.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
  }

  const removeMount = ({ id }) => {
    setCart(prevCart => prevCart.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product).filter(product => product.quantity > 0))
  }

  const verifyProductInCart = ({ id }) => {
    return cart.some(product => product.id === id)
  }

  return { cart, addCart, removeCart, clearCart, addMount, removeMount, verifyProductInCart }
}
