import useProducts from "../../hooks/useProducts"
import SearchForm from "../common/SearchForm"
import ProductsContainer from "./ProductsContainer"

export default function ProductSection() {
  const { products, loading, filters, handleFilters, setFilteredProducts, filteredProducts } = useProducts()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const someProducts = products.filter(product => {
      const matchesName = product.title.toLowerCase().includes(filters.name.toLowerCase())
      const matchesCategory = filters.categories === "" ? true : product.category === filters.categories
      const matchesPrice = product.price <= filters.maxPrice

      return matchesName && matchesCategory && matchesPrice
    })

    setFilteredProducts(someProducts)
  }

  return (
    <section className="p-5 lg:p-10">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-5 lg:pb-10">Explora nuestros productos que ofrecemos</h1>
      <SearchForm handleFilters={handleFilters} handleSubmit={handleSubmit} maxPrice={filters.maxPrice} />
      <ProductsContainer data={filteredProducts} />
      {loading && <p className="text-center">Cargando...</p>}
    </section>
  )
}
