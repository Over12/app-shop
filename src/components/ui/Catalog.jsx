import ProductCard from '../common/ProductCard'
import PropTypes from 'prop-types'

export default function Catalog({ title, products }) {
  return (
    <section className='p-10'>
      <h2 className='font-kaisei text-4xl text-center'>{title}</h2>
      <div className='mt-10 flex flex-wrap justify-center gap-5'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

Catalog.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
}
