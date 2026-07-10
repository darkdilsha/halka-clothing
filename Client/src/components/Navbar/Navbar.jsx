import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <nav>

      <img src={logo} alt="Halka Clothing" className="logo" />

      <ul>
        <li>Home</li>
        <li>Collections</li>
        <li>New In</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products..."
          />
        </div>

        

        <FiShoppingBag className="icon" />

      </div>

    </nav>
  );
}

export default Navbar;