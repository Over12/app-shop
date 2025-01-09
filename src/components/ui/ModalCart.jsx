import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import PropTypes from "prop-types"
import DeleteIcon from "../../assets/trash.svg"
import CloseIcon from "../../assets/close.svg"

export default function ModalCart({ toggleCart }) {
  const { cart, removeCart, addMount, removeMount } = useContext(CartContext)

  return (
    <div className="fixed overflow-y-auto hide-scrollbar p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/50 border-4 border-primary backdrop-blur-lg w-5/6 h-4/6 md:w-2/3 md:h-2/3 rounded-lg shadow-xl">
      <button className="absolute top-5 right-5 p-2 bg-accent hover:bg-accent/80 transition-colors rounded-full" onClick={() => toggleCart()}>
        <img src={CloseIcon} alt="Close Icon" className="size-5" />
      </button>
      <h3 className="text-center uppercase text-lg md:text-xl pb-5 font-bold">Carrito</h3>
      <div className="flex flex-col items-center justify-center gap-2">
        {
          cart.length === 0 ? (
            <p>No hay productos en el carrito aún...</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="flex gap-2 w-full">
                <span className="flex w-full text-sm md:text-base justify-between items-center p-2 bg-primary border-2 border-accent rounded-lg font-semibold">
                  <p className="line-clamp-1">{product.title}</p>
                  <p>${product.price}</p>
                </span>
                <div className="flex w-28 justify-center overflow-hidden bg-primary border-2 border-accent rounded-lg font-semibold">
                  <button className="w-1/3 text-lg md:text-2xl" onClick={() => removeMount({ id: product.id })}>-</button>
                  <p className="w-1/3 flex items-center justify-center text-base md:text-lg">{product.mount}</p>
                  <button className="w-1/3 text-lg md:text-2xl" onClick={() => addMount({ id: product.id })}>+</button>
                </div>
                <button className="p-3 bg-primary border-2 border-accent rounded-lg font-semibold" onClick={() => removeCart({ id: product.id })}>
                  <img src={DeleteIcon} alt="Eliminar producto" className="size-8" />
                </button>
              </div>
            ))
          )
        }
      </div>
    </div>  
  )
}

ModalCart.propTypes = {
  toggleCart: PropTypes.func.isRequired
}
