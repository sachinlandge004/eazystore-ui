import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <FontAwesomeIcon icon={faTag} className="fa-icon" />
          <span className="logo">Eazy Stickers</span>
        </a>

        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
