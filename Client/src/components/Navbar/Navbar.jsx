import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import { useState } from "react";

import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>

      <img
        src={logo}
        alt="Halka Clothing"
        className="logo"
      />

      <div className="search-box">

        <FiSearch />

        <input
          type="text"
          placeholder="Search products..."
        />

      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>Collections</li>

        <li>New Arrivals</li>

        <li>Contact</li>

      </ul>

      <div className="nav-right">

        <FiUser className="icon" />

        <FiShoppingBag className="icon" />

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

      </div>

    </nav>

  );
}

export default Navbar;