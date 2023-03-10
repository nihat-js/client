import {Link } from 'react-router-dom';
import './index.scss'


export default function Index(props) {
  const { _id, name, category, description, price } = props.data
  return (
    <div className="products-box">
      <h3 className="title">  {name} </h3>
      <h3 className="category"> {category} </h3>
      <h3 className="description"> {description} </h3>
      <h3 className="description"> {price} </h3>
      <div className="actions">
        <Link className='more' to={"/product/" + _id}>  See more </Link>
        <button className='delete' onClick={() => props.deleteById(_id)}> Delete </button>
      </div>
    </div>
  )
}
