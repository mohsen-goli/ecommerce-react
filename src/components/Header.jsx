import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo">
          ROSA
        </Link>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/category/skincare">Skincare</Link>
          <Link to="/category/makeup">Makeup</Link>
        </nav>

        <Link to="/cart" className="cart-button">
          <ShoppingBag size={18} />
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
