import '../Auth/login.css'
import './addProduct.css'
import "react-datepicker/dist/react-datepicker.css";
import { NavBar } from "../../components/Navbar/NavBar"
import OlxLogo from "../../assets/OlxLogo"
import placeholder from '../../assets/palce_holder.png'
import React, { FormEvent, useState } from 'react'
import { uploadImage } from '../../Utils/Cloudinery'
import { Product } from '../../Utils/Interfaces'
import { addProduct } from '../../Firebase'
import { useNavigate } from 'react-router'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import { toast } from 'react-toastify';
import { Spinner } from '../../components/Spinner';


export const AddProduct = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail] = useState('');
  const [place, setPlace] = useState('');
  const [state, setState] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DDTHH:mm:ssZ'));
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e: Date | null) => {
    setDate(moment(e).format('YYYY-MM-DDTHH:mm:ssZ'))
  }

  //Adding Image
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file); 
      setImagePreview(previewUrl); 
    }
  };

  //form submit handle
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    setLoading(true)

    try {

      if(price.length && title.length && category && detail.length && place.length && state.length && date.length && image !== null){
        let imageUrl = "";
        if (image) imageUrl = await uploadImage(image);

        const newProduct: Product = {
          price: parseFloat(price),
          title: title,
          category: category,
          detail: detail,
          place: place,
          state: state,
          date: date,
          img: imageUrl
        }

        //addproduct function calling
        await addProduct(newProduct);

        setLoading(false);

        navigate("/");
        
      }else{
        toast.error("Please fill all feilds")
        setLoading(false);
      }

    } catch (error:any) {
      console.log(error);
      setLoading(false)
    }
  };

  
  
  return (
    <>
      <Spinner loading={loading} />
      <NavBar />
      <div className="signupContainer">
        <div className="signupForm add-product-container">
          <div className="add-product-wrapper">
            <div className="logoContainer">
              <OlxLogo />
            </div>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div className="formGroup">
                <label htmlFor="title">Titile</label>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text"
                  id="title"
                  placeholder="Enter a title"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="category">Category</label>
                <select className='category-selector' value={category} onChange={e => setCategory(e.target.value)}>
                  <option value="">Select a category</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="mobile phone">Mobile Phone</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="formGroup">
                <label htmlFor="price">Price</label>
                <input value={price} onChange={e => setPrice(e.target.value)} type="number"
                  id="price"
                  placeholder="Enter the price"
                />
              </div>
              
              <div className="formGroup">
                <label htmlFor="detail">Detail</label>
                <input value={detail}
                  onChange={e => setDetail(e.target.value)} type="text"
                  id="detail"
                  placeholder="Enter the detail"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="date">Date</label>
                <DatePicker className='date-picker' selected={new Date(date)} onChange={handleDateChange} id="date" dateFormat="dd-MM-yyyy" />
              </div>

              <button type="submit" className="signupBtn">
                Add Product
              </button>
            </form>
          </div>

          <div className='preview-info'>

            <div className="formGroup">
              <label htmlFor="place">Place</label>
              <input value={place}
                onChange={e => setPlace(e.target.value)} type="text"
                id="place"
                placeholder="Enter the place"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="state">State</label>
              <input value={state}
                onChange={e => setState(e.target.value)} type="text"
                id="state"
                placeholder="Enter the state"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="image">Choose Image</label>
              <input type="file" id="image" accept="image/*" onChange={handleImage} />
            </div>
            <div className="image-preview">
              <img src={imagePreview ? imagePreview : placeholder} alt="Preview" className="imagePreview" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
