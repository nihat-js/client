import './index.scss'

import Nav from '../../components/Nav/index'
import Footer from '../../components/Footer/index'

import Products from '../../components/Products/index'

export default function Index() {
  return (
    <div className='index-page' >

      <Nav /> 

      <Products/>


      <Footer />



    </div>
  )
}
