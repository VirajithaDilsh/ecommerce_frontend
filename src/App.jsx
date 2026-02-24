import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Order from './pages/Orders.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from "./components/SearchBar.jsx";



function App() {
    return (
        <div className={'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '}>
            <Navbar/>
            <SearchBar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/collection'} element={<Collection/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/orders'} element={<Order/>}/>
                <Route path={'/products'} element={<Products/>}/>
                <Route path={'/place-order'} element={<PlaceOrder/>}/>
                <Route path={'/cart'} element={<Cart/>}/>

            </Routes>
            <Footer/>
        </div>

    );
}

export default App;