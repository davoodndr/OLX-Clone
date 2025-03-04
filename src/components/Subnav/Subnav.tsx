import React from 'react';
import './subnav.css'
import { IoIosArrowDown } from "react-icons/io";

interface SubNavProps{
  setCategory: (category:string) => void;
}

export const SubNav: React.FC<SubNavProps> = ({setCategory}) => {
  return (
    <div className="subnav">
      <ul>
        <li onClick={() => setCategory('')}>
          <span>ALL CATEGORIES</span>
          <IoIosArrowDown size={20} /> 
        </li>
        <li onClick={() => setCategory('car')}>Cars</li>
        <li onClick={() => setCategory('motorcycle')}>Motorcycle</li>
        <li onClick={() => setCategory('mobile phone')}>Mobile Phones</li>
        <li onClick={() => setCategory('house')}>For Sale: Houses & Apartments</li>
        <li onClick={() => setCategory('commercial')}>Commercial & Other Vehicles</li>
        <li onClick={() => setCategory('apartment')}>For Rent: Houses & Apartments</li>
      </ul>
    </div>
  )
}