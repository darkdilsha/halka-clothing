import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import { useState } from "react";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* ---------- TOP ROW ---------- */}

      <div className="navbar-top">

        <img
          src={logo}
          alt="Halka Clothing"
          className="logo"
        />

        {/* Desktop Search */}

        <div className="search-box desktop-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        {/* Desktop Links */}

        <ul className="nav-links">
          <li>Collections</li>
          <li>New Arrivals</li>
          <li>Contact</li>
        </ul>

        {/* Desktop Icons */}

        <div className="nav-icons">
          <FiUser className="icon" />
          <FiHeart className="icon" />
          <FiShoppingBag className="icon" />
        </div>

        {/* Mobile Menu Button */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* ---------- MOBILE SEARCH ---------- */}

      <div className="search-box mobile-search">
        <FiSearch />
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* ---------- MOBILE MENU ---------- */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <a href="#">Collections</a>

        <a href="#">New Arrivals</a>

        <a href="#">Contact</a>

        <hr />

        <a href="#">My Account</a>

        <a href="#">Wishlist</a>

        <a href="#">Cart</a>

      </div>

    </nav>
  );
}

export default Navbar;