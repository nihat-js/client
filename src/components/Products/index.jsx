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
  const [searchValue, setSearchValue] = useState("")
  const [sortByPrice, setSortByPrice] = useState(0)

  const [isPriceMenuActive, setIsPriceMenuActive] = useState(false)


  function handleSortByPrice(value) {
    if (value == 1 || sortByPrice != 1) {
      setData([...data.sort((a, b) => b.price - a.price)])
      setSortByPrice(1)
    } else if (value == -1 || sortByPrice != -1) {
      setData([...data.sort((a, b) => a.price - b.price)])
      setSortByPrice(-1)
    }
    setIsPriceMenuActive(false)
  }



const URL = "http://localhost:4000/products"

return (
  <section className="products">
    <div className="container">
      <div className="filter">
        <div className="search">
          <input type="text" placeholder='Search Product name ' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="sort">
          <h2 className="title" onClick={() => setIsPriceMenuActive(!isPriceMenuActive)} > Price  </h2>
          <div className={`content ${!isPriceMenuActive && 'd-none'} `}>
            <h4 className= {`item   ${sortByPrice == 1 && 'active'} `} onClick={() => handleSortByPrice(1)} >  High to Low  </h4>
            <h4 className={`item ${sortByPrice == -1 && 'active'}`} onClick={() => handleSortByPrice(-1)} >  Low to High  </h4>
        </div>
      </div>
    </div>
    {isLoading ? <div className='spinner'> <span>  </span>  </div> :

      <div className='row'>
        {data.filter(x => x.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item, index) => <Box deleteById={deleteById} data={item} key={index} />)}
      </div>
    }


  </div>
    </section >
  )
}
