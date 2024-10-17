import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contactUs/Contact';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import DashboardMenu from './dashboardPages/DashboardMenu';
import Dashboard from './dashboardPages/dashboard';
import AddProduct from './dashboardPages/AddProduct';
import ViewProducts from './dashboardPages/ViewProducts';
import Analytics from './dashboardPages/analytics';
import ProductPage from './components/productPages/ProductPage';
import OrderList from './dashboardPages/orderList';
import './App.css'
import AddToCart from './components/cart/AddToCart';

function App() {
  return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="product/:id?" element={<ProductPage />} />
    <Route path="/addToCart" element={<AddToCart />} />
    {/* Dashboard Parent Route */}
    <Route path="/dashboard" element={<DashboardMenu />}>
      {/* <Route path="dashboardHome" element={<Dashboard />} /> */}
      <Route path="addProduct/:id?" element={<AddProduct />} />
      <Route path="viewProducts" element={<ViewProducts />} />
      <Route path="orderList" element={<OrderList/>} />
      <Route path="analytics" element={<Analytics />} />
    </Route>
  </Routes>
  )
}

export default App;
