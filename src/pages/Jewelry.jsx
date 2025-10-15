import data from '../mocks/products.json'
import Catalog from '../components/ui/Catalog'

export default function Jewelry() {
  const jewelry = data.filter(product => product.category === 'jewelery')

  return (
    <Catalog title="Jewelry" products={jewelry} />
  )
}
