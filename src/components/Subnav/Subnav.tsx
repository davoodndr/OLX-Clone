import React, { useState } from 'react';
import './subnav.css'
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

interface SubNavProps{
  setCategory: (category:string) => void;
}

export const SubNav: React.FC<SubNavProps> =({setCategory}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="subnav">
      <ul className='wide-menu'>
        <li onClick={() => setCategory('')}>ALL CATEGORIES</li>
        <li onClick={() => setCategory('car')}>Cars</li>
        <li onClick={() => setCategory('motorcycle')}>Motorcycle</li>
        <li onClick={() => setCategory('mobile phone')}>Mobile Phones</li>
        <li onClick={() => setCategory('house')}>For Sale: Houses & Apartments</li>
        <li onClick={() => setCategory('commercial')}>Commercial & Other Vehicles</li>
        <li onClick={() => setCategory('apartment')}>For Rent: Houses & Apartments</li>
      </ul>
      <div className="menu">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenuAlt2 size={30} />
        </div>
        
        <ul className={`tall-menu ${isOpen ? 'open' : ''}`}>
          <li onClick={() => setCategory('')}>ALL CATEGORIES</li>
          <li onClick={() => setCategory('car')}>Cars</li>
          <li onClick={() => setCategory('motorcycle')}>Motorcycle</li>
          <li onClick={() => setCategory('mobile phone')}>Mobile Phones</li>
          <li onClick={() => setCategory('house')}>For Sale: Houses & Apartments</li>
          <li onClick={() => setCategory('commercial')}>Commercial & Other Vehicles</li>
          <li onClick={() => setCategory('apartment')}>For Rent: Houses & Apartments</li>
        </ul>
      </div>
    </div>
  )
}