import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/product/Home'
import Header from './components/header/Header'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import ContactUs from './components/contactus/ContactUs '




function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
