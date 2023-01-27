import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <h3 className="brand"> <Link to='/'> Torlab   </Link> </h3>
          <div className="links">
            <ul>
              <li> <Link to='/add'> Add </Link> </li>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/'> About </Link> </li>
              <li> <Link to='/'> Contact </Link> </li>
              <li> <Link to='/'> Services </Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
