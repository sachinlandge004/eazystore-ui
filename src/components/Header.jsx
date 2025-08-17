import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"} className="nav-link">
          <FontAwesomeIcon icon={faTag} className="fa-icon" />
          <span className="logo">Eazy Stickers</span>
        </Link>

        <nav className="nav">
          <ul>
            <li>
              <NavLink to={"/"} className='nav-link'>
                Home
              </NavLink>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="nav-link">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
