
import React, { useEffect, useState } from 'react';
import imagePlaceHolder from '../../assets/palce_holder.png'
import { Product } from '../../Utils/Interfaces';
import './productcard.css'
import { IoMdHeartEmpty } from "react-icons/io";
import moment from 'moment';

interface ProductCardProps{
  product: Product;
  onClick: (product:Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  
  const title = product.title.charAt(0).toUpperCase() + product.title.slice(1)
  const detail = product.detail ? product.detail?.charAt(0).toUpperCase() + product.detail?.slice(1) : ''
  const dt = moment(product.date, moment.ISO_8601).format('MMM DD');

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true)
  },[isVisible])

  return (
    <div className={`product-card ${isVisible ? 'appear' : ''} `} onClick={() => onClick(product)}>
      <div className="heart-symbol">
        <IoMdHeartEmpty size={25}/>
      </div>
      <div className='product-wrapper'>
        <div className='product-img'>
          <img src={product.img ? product.img : imagePlaceHolder} alt="" />
        </div>
        <div className='info'>
          <h2 className='price'>₹{product.price}</h2>
          <p className='product-title'>{title}</p>
          <p className='product-detail'>{detail}</p>
          <p className='product-place'>
            <span>{product.place}, {product.state}</span>
            <span>{dt}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
