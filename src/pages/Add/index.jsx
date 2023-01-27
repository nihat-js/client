import './index.scss'

import Nav from './../../components/Nav/index'
import Footer from './../../components/Footer/index'
import AddForm from '../../components/AddForm/index'



export default function Index() {
  return (
    <div className="add-page">

    <Nav/>

    <AddForm/>

    <Footer/>

    </div>
  )
}
