import React, { Fragment, useState } from 'react'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Navbar from './components/navbar/Navbar' 
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
const App = () => {
const [showLogin, setshowLogin]=useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
    <Navbar setshowLogin={setshowLogin}/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/placeorder' element={<PlaceOrder/>}/>
    </Routes>
 </div>
 <Footer/>
    </>
  )
}

export default App

