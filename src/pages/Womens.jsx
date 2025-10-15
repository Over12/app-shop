import data from '../mocks/products.json'
import Catalog from '../components/ui/Catalog'

export default function Womens() {
  const womens = data.filter(product => product.category === "women's clothing")

  return (
    <Catalog title="Women's Clothing" products={womens} />
  )
};
