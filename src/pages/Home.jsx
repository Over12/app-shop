import Catalog from '../components/ui/Catalog'
import LoadingSection from '../components/ui/LoadingSection'
import { useState, useEffect } from 'react'
import { getProducts } from '../services/dataProducts'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <LoadingSection />
      ) : (
        <Catalog title="All Products" products={products} />
      )}
    </>
  )
}
