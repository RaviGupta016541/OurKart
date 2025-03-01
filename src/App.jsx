
import './App.css'
import React, { useEffect, useState,createContext } from 'react';
import Home from './components/product/Home'
import Header from './components/header/Header'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import ContactUs from './components/contactus/ContactUs '
import ViewProduct from './components/product/ViewProduct'
import Cart from './components/cart/Cart';
import AdminDashboard from './components/admin/AdminDashboard';
import Login from './components/user/Login';
import UserProfile from './components/user/UserProfile';
import AllProducts from './components/admin/AllProducts';
import AllUsers from './components/admin/AllUsers';
import SingleProduct from './components/admin/SingleProduct';
import SingleUser from './components/admin/SingleUser';
import Sales from './components/admin/sales';

export const store=createContext();
//export const storeUser=createContext();



function App() {

  const [cart,setCart]=useState([])
  const [user,setUser]=useState([])
  return (
    <>
     <BrowserRouter>
     <store.Provider value={{ cart, setCart, user, setUser }} >

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<ViewProduct/>} />
        <Route path='/userProfile/:id' element={<UserProfile/>} />
        <Route path='/admin' element={<AdminDashboard/>} >
          <Route path='allProducts' element={<AllProducts/>} />
          <Route path='' element={<Sales/>} />
          <Route path='allUsers' element={<AllUsers/>} />
          <Route path='singleProduct/:id' element={<SingleProduct/>} />
          <Route path='singleUser/:id' element={<SingleUser/>} />
        </Route>
        <Route path='/login' element={<Login/>} />

      </Routes>
     </store.Provider>
     </BrowserRouter>
     
    </>
  )
}

export default App
