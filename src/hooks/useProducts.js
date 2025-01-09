import { useState, useEffect } from "react"
import { getProducts } from "../services/dataProducts"
// import data from "../mocks/products.json"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    name: "",
    categories: "",
    maxPrice: 100
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleFilters = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: name === "maxPrice" ? Number(value) : value
    })
  }

  return { products, loading, filters, handleFilters, setFilteredProducts, filteredProducts }
}