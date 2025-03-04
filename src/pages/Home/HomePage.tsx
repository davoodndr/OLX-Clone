
import { useEffect, useMemo, useState } from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './homepage.css'
import { fetchProducts } from '../../Firebase'
import { Product } from '../../Utils/Interfaces'
import banner from '../../assets/banner.webp'
import { Footer } from '../../components/Footer/Footer'
import { SubNav } from '../../components/Subnav/Subnav'
import { useNavigate } from 'react-router'


export const HomePage = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const getProducts = async () => {
      const list = await fetchProducts();
      setProducts(list)
    }

    getProducts();
  },[]);

  const handleSearch = (value:string) => {
    setQuery(value);
  }

  const handleSelectCategory = (category:string) => {
    setSelectedCategory(category);
  }

  const handleProductClick = (product:Product) => {
    navigate(`/viewProduct/${product.id}`,{state: {product}})
  }

  const filterProducts = useMemo(() => {
    return products?.filter(item => {
      const matchedSearches = item.title.toLowerCase().includes(query.toLowerCase()) 
                              || item.detail?.toLowerCase().includes(query.toLowerCase());
      const matchedCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchedSearches && matchedCategory
    })
  },[query, selectedCategory, products]);

  return (
    <div className='home'>
      <NavBar search={query} setQuery={handleSearch}/>
      <SubNav setCategory={handleSelectCategory}/>
      <div className="content-wrapper">
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
      <Footer />
    </div>
  )
}
