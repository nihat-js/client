import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import axios from 'axios'
export default function Index() {
  let params = useParams()
  const URL = "http://localhost:4000/products"

  async function getById() {
    console.log(URL + "/" + params.id);
    let response = await axios.get(URL + "/" + params.id)
    if (response.status >= 200 || response.status < 300) {
      console.log(response.data)
      setProduct(response.data)
    }
  }

  useEffect(() => {
    getById()
  }, [])

  const [product, setProduct] = useState({})


  return (
    <section className="product">
      <div className="container">
        {product.name || ''}
        {product.description || ''}
        {product.category || ""}
        {product.price || ""}
      </div>
    </section>
  )
}
