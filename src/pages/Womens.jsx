import Catalog from '../components/ui/Catalog'
import LoadingSection from '../components/ui/LoadingSection'
import { useState, useEffect } from 'react'
import { getProducts } from '../services/dataProducts'

export default function Womens() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data.filter(product => product.category === "women's clothing"))
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
        <Catalog title="Women&apos;s Clothing" products={products} />
      )}
    </>
  )
}
