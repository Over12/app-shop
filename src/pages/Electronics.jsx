import { useState, useEffect } from 'react'
import Catalog from '../components/ui/Catalog'
import { getProducts } from '../services/dataProducts'
import LoadingSection from '../components/ui/LoadingSection'

export default function Electronics() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data.filter(product => product.category === 'electronics'))
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
        <Catalog title="Electronics" products={products} />
      )}
    </>
  )
}
