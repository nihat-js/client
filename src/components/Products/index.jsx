import { useEffect, useState } from 'react'
import axios from 'axios'
import Box from './Box/index'
import './index.scss'


export default function Index() {

  async function deleteById(id) {
    setIsLoading(true)
    let response = await axios.delete(URL + "/" + id)
    get()
  }

  async function get() {
    let response = await axios.get(URL)
     setIsLoading(false)
     setData(response.data)
  }

  useEffect(() => {
    get()
  }, [])

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue,setSearchValue] = useState("")

  
  const URL = "http://localhost:4000/products"

  return (
    <section className="products">
      <div className="container">
        <div className="filter">
          <div className="search">
            <input type="text" placeholder='Search Product name ' value={searchValue} onChange={(e)=> setSearchValue(e.target.value) } />
          </div>
          <div className="sort">
            <button> Sort By Id  </button>
          </div>
        </div>
        {isLoading ? <div className='spinner'> <span>  </span>  </div> : <div className='row'> {data.map((item, index) => <Box deleteById={deleteById} data={item} key={index} />)} </div>}


      </div>
    </section>
  )
}
