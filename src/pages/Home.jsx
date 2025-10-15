import data from '../mocks/products.json'
import Catalog from '../components/ui/Catalog'

export default function Home() {
  return (
    <Catalog title="All Products" products={data} />
  )
}
