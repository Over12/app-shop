import data from '../mocks/products.json'
import Catalog from '../components/ui/Catalog'

export default function Electronics() {
  const electronics = data.filter(product => product.category === 'electronics')

  return (
    <Catalog title="Electronics" products={electronics} />
  )
}
