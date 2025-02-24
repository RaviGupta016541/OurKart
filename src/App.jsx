
import './App.css'
import React, { useEffect, useState,createContext } from 'react';
import Home from './components/product/Home'
import Header from './components/header/Header'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import ContactUs from './components/contactus/ContactUs '
import ViewProduct from './components/product/ViewProduct'
import Cart from './components/cart/Cart';

export const store=createContext();



function App() {

  const [cart,setCart]=useState([])
  return (
    <>
     <BrowserRouter>
     <store.Provider value={[cart,setCart]} >

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<ViewProduct/>} />
      </Routes>
     </store.Provider>
     </BrowserRouter>
     
    </>
  )
}

export default App
