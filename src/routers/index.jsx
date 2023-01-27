import {BrowserRouter,Routes,Route} from 'react-router-dom'

import '../assets/css/style.css'

import  Home from '../pages/Home/index' 
import  Add from '../pages/Add/index' 
import Product from '../pages/Product/index'

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  )
}
