import PropTypes from 'prop-types'

export default function SearchForm({ handleFilters, handleSubmit, maxPrice }) {

  return (
    <form className="items-center md:items-end justify-center flex flex-col md:flex-row gap-3 lg:gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 w-2/3 md:w-auto">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Jacket..." className="px-3 py-2 rounded-md bg-secondary/30 outline-none" onChange={handleFilters} />
      </div>
      <div className="flex flex-col gap-1 w-2/3 md:w-auto">
        <label htmlFor="categories">Categorías</label>
        <select name="categories" id="categories" className="px-3 py-2.5 rounded-md bg-secondary/30 outline-none" onChange={handleFilters}>
          <option value="" className="text-black">Todas</option>
          <option value="electronics" className="text-black">Electronica</option>
          <option value="jewelery" className="text-black">Joyería</option>
          <option value="men's clothing" className="text-black">Ropa de hombre</option>
          <option value="women's clothing" className="text-black">Ropa de mujer</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 w-2/3 md:w-auto">
        <label htmlFor="price">Precio máximo ${maxPrice}</label>
        <input type="range" name="maxPrice" id="maxPrice" min={0} max={1000} step={1} defaultValue={100} className="w-full my-4 h-2 bg-secondary/30 rounded-lg appearance-none outline-none cursor-pointer accent-primary" onChange={handleFilters} />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md text-center w-2/3 md:w-auto">Buscar</button>
    </form>
  )
}

SearchForm.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired
}
