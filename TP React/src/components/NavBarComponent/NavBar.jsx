import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import About from '../../views/AboutView/About';
import Home from '../../views/HomeView/Home';
import FormationList from '../../views/FormationList/FormationList';
import './NavBar.css';
import Formulaire from '../../views/FormulaireView/Formulaire';

const NavBar = ({ cart, updateCart }) => {
    return (
        <div>
            <BrowserRouter>
                <div id="navbar">
                    <button className="button">
                        <Link to="/">Home</Link>
                    </button>
                    <button className="button">
                        <Link to="/coursList">Formation List</Link>
                    </button>
                    <button className="button">
                        <Link to="/form">Contact</Link>
                    </button>
                    <button className="button">
                        <Link to="/about">About</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/coursList' element={<FormationList cart={cart} updateCart={updateCart}/>}></Route>
                    <Route path='/form' element={<Formulaire/>}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/*' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default NavBar;