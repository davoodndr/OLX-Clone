
import { Route, Routes} from 'react-router'
import './App.css'
import { HomePage } from './pages/Home/HomePage'
import { Login } from './pages/Auth/Login'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { Signup } from './pages/Auth/Signup'
import { AuthProvider } from './Utils/AuthProvider'
import { AddProduct } from './pages/Product/AddProduct'
import { ViewProduct } from './pages/Product/ViewProduct'
import { Layout } from './pages/Layout'


const App: React.FC = () => {

  return (
    <>
      <AuthProvider>
        <ToastContainer theme="dark" />
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<HomePage />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/viewProduct/:id' element={<ViewProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App