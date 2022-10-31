import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import CartPage from '../pages/CartPage/CartPage';


const Routers = () => {
  return (
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<SignupPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default Routers