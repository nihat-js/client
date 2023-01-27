import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import Product from '../../components/Product'


export default function Index() {
  return (
    <div className='product-page'>
      <Nav />
      <section className="back">
        <div className="container">
          <h3> <Link to='/'>    &#60;&#60; Back </Link>    </h3>
        </div>
      </section>
      <Product />
      <Footer />
    </div>
  )
}
