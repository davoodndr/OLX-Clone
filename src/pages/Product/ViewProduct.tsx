
import { Product } from '../../Utils/Interfaces'
import { Link, useLocation } from 'react-router'
import './viewproduct.css'
import moment from 'moment';
import { TiArrowBack } from 'react-icons/ti';

export const ViewProduct = () => {

  const location = useLocation();
  const product = location.state?.product as Product

  const title = product.title.charAt(0).toUpperCase() + product.title.slice(1);
  const category = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const detail = product.detail ? product.detail?.charAt(0).toUpperCase() + product.detail?.slice(1) : ''
  const dt = moment(product.date, moment.ISO_8601).format('MMMM, DD dddd Y');

  return (
    <div className='view-product'>
      <div className='back-btn'>
        <Link to={'/'}>
          <TiArrowBack size={30}/>
        </Link>
      </div>
      <div className="view-product-content">
        <div className="left-panel">
          <img src={product.img} alt="" />
        </div>
        <ul className="right-panel">
          <li><h2>₹{product.price}</h2></li>
          <li aria-label={'category: '}>{category}</li>
          <li aria-label={'title: '}>{title}</li>
          <li aria-label={'detail: '}>{detail}</li>
          <li aria-label={'place: '}>{product.place}, {product.state}</li>
          <li aria-label={'posted on: '}>{dt}</li>
        </ul>
      </div>
    </div>
  )
}
