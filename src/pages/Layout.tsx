import { useContext, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../components/Navbar/NavBar'
import { Footer } from '../components/Footer/Footer'
import './layout.css'
import { AuthContext } from '../Utils/AuthProvider'
import { Spinner } from '../components/Spinner'

export const Layout = () => {

  const context = useContext(AuthContext);
  
  if(!context){
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { loading } = context;

  const [navBottom, setNavBottom] = useState(0);
  
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateElementTop = () => {
      const navRect = navRef.current?.getBoundingClientRect();
      const bottom = navRect?.bottom || 0
      setNavBottom(bottom);
      
    }

    updateElementTop();

    window.addEventListener('resize',updateElementTop);

    return () => {
      window.removeEventListener('resize', updateElementTop);
    }

  },[navBottom])

  return (
    <div className='layout'>
      <Spinner loading={loading} />
      <NavBar ref={navRef} />
      <div className="container" style={{top: `${navBottom}px`}}>

        <Outlet />

        <Footer  />
      </div>
    </div>
  )
}
