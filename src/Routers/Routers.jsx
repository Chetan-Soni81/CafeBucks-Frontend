import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CartPage from '../pages/CartPage/CartPage';
import BuyPage from '../pages/BuyPage/BuyPage';
import AdminLoginPage from '../pages/AdminLoginPage/AdminLoginPage';
import AdminCategoriesPage from '../pages/AdminCategoriesPage/AdminCategoriesPage';
import AdminProductPage from '../pages/AdminProductPage/AdminProductPage';
import AdminDashboardPage from '../pages/AdminDashboard/AdminDashboardPage';


const Routers = () => {
  return (
    <Routes>
      <Route path='' element={<Navigate to='/home' />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignupPage />} />
      <Route path='/product'>
        <Route path="" element={<CatalogPage />} />
        <Route path=":id" element={<BuyPage />} />
      </Route>
      <Route path='/cart' element={<CartPage />} />
      <Route path='admin'>
        <Route path='' element={<AdminLoginPage />} />
        <Route path='dashboard' element={<AdminDashboardPage />}>
          <Route path='home' element={''}/>
          <Route path='category' element={<AdminCategoriesPage />} />
          <Route path='product' element={<AdminProductPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Routers