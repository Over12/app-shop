import PropTypes from 'prop-types'
import ProductCard from '../common/ProductCard'

export default function ProductsContainer({ data }) {

  return (
    <section className='mt-8 lg:mt-10 flex items-center justify-center'>
      <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10'>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

ProductsContainer.propTypes = {
  data: PropTypes.array.isRequired
}
