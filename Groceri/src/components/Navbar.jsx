import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      {/* left logo */}
      <div className="navbar-left">
        <img src={logo} alt="logo" />
      </div>

      {/* Right menu */}
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        <Link to="/cart" className="cart">
          🛒
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
