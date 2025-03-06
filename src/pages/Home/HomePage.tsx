
import { useContext, useEffect, useMemo, useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './homepage.css'
import { fetchProducts } from '../../Firebase'
import { Product } from '../../Utils/Interfaces'
import banner from '../../assets/banner.webp'
import { SubNav } from '../../components/Subnav/Subnav'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Utils/AuthProvider'


export const HomePage = () => {

  const context = useContext(AuthContext);
  
  if(!context){
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { searchQuery } = context;

  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>();
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const getProducts = async () => {
      const list = await fetchProducts();
      setProducts(list)
    }

    getProducts();
  },[]);


  const handleSelectCategory = (category:string) => {
    setSelectedCategory(category);
  }

  const handleProductClick = (product:Product) => {
    navigate(`/viewProduct/${product.id}`,{state: {product}})
  }

  // filter and search
  const filterProducts = useMemo(() => {
    return products?.filter(item => {
      const matchedSearches = item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
                              || item.detail?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchedCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchedSearches && matchedCategory
    })
  },[searchQuery, selectedCategory, products]);

  // adjusting subnav position
  

  return (
    <>
      <SubNav setCategory={handleSelectCategory} />
      <div className="content-wrapper" >
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <span className='product-list-title'>Fresh recommendations</span>
        {
          filterProducts ? (
            filterProducts.length ? <div className="card-container">
              { filterProducts?.map(item => 
                <ProductCard product={item} key={item.id} onClick={handleProductClick} /> 
              )}
            </div>
          : <div className='empty-list'>No products found</div>
          ) : (
            <div className="empty-list">Loading......</div>
          )
        }
      </div>
    </>
  )
}
