import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";

export default function Navbar() {
    const {totalItems} = useCart();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Riano's Syles</NavLink>
                    {/* links to different pages on the site */}
                    <div className="collapse navbar-collapse" id="navbar-links">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0"> 
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            {/* top right-side buttons for cart(maybe login/register)*/}
                            <button className="btn">
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1"></i>Cart ({totalItems})</NavLink>
                            </button> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
