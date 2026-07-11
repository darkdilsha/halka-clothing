import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  return (
    <nav>

      {/* Logo */}

      <img
        src={logo}
        alt="Halka Clothing"
        className="logo"
      />

      {/* Search */}

      <div className="search-box">
        <FiSearch />

        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* Navigation */}

      <ul>
        <li>Collections</li>
        <li>New Arrivals</li>
        <li>About</li>
      </ul>

      {/* Icons */}

      <div className="nav-right">

        <FiUser className="icon" />

        <FiHeart className="icon" />

        <FiShoppingBag className="icon" />

      </div>

    </nav>
  );
}

export default Navbar;