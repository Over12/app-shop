import data from '../mocks/products.json'
import Catalog from '../components/ui/Catalog'

export default function Mens() {
  const mens = data.filter(product => product.category === "men's clothing")

  return (
    <Catalog title="Men's Clothing" products={mens} />
  )
};
