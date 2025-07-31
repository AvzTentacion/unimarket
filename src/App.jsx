import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import "./App.css"
import CreateListing from "./pages/CreateListing.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Profile from "./pages/Profile.jsx";
import Discover from "./pages/Discover.jsx";
import Shop from "./pages/Shop.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import ConfirmEmail from "./Auth/ConfirmEmail.jsx";
import EmailConfirmed from "./Auth/EmailConfirmed.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/list-item" element={<CreateListing/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/discover" element={<Discover/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/auth/register" element={<Register/>} />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/email-confirmed" element={<EmailConfirmed />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                </PrivateRoute>
            } />
        </Routes>
    );
}

export default App;