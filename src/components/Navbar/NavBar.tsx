
import './navbar.css'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router';
import React, { useContext, useEffect } from 'react';
import { auth } from '../../Firebase';
import { AuthContext } from '../../Utils/AuthProvider';
import { onAuthStateChanged } from 'firebase/auth';

interface NavBarProps{
  search?:string;
  setQuery?: (value:string) => void
}

export const NavBar:React.FC<NavBarProps> = ({search, setQuery}) => {

  const context = useContext(AuthContext);
  if(!context){
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged, setLogState }  = context;
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        setLogState('logged')
      }
    })
  },[])

  const handleAuthState = () => {
    if(isLogged){
      setLogState('log out')
    }else{
      navigate('/login')
    }
  }

  return (
    <>
    <div className='navbar'>
      <Link to={'/'} className='logo'>
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      </Link>
      <div className='nav-inputs'>
        <div className='locations'>
          <span className='search-location'>
            <IoSearch size={20} />
          </span>
          <input type="text" placeholder='Location....' />
          <span className='language-btn location-expand'>
            <IoIosArrowDown size={30} />
          </span>
        </div>
        <div className='search'>
          <input type="text" placeholder='Search......' value={search} onChange={e => setQuery?.(e.target.value)} />
          <span className='search-icon'>
            <IoSearch size={25} />
          </span>
        </div>
      </div>
      <div className='nav-actions'>
        <a href='' className='language-btn'>
          <span>english</span>
          <IoIosArrowDown size={30} />
        </a>
        <div className='login-btn' onClick={handleAuthState}>
          <div>{isLogged ? "Logout" : "Login"}</div>
          <div></div>
        </div>
        <Link to={isLogged ? '/addProduct' : '/login'} className='sell-btn'>
          <svg width="104" height="48" viewBox="0 0 1603 768" className="sell-view-box"><g><path  className="path_1" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path><path className="path_2" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path><path className="path_3" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path><path className="path_4" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path></g>
          </svg>
          <div className="sell"><span className="_3vzlb"><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-lquEm" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path></svg></span><span>Sell</span></div>
        </Link>
      </div>
    </div>
    </>
  )
}
