import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import SearchBar from "./SearchBar";

function Header() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

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

        <div className="header-actions">
          <SearchBar />

          <Link
            to="/wishlist"
            className="wishlist-button"
            aria-label="Wishlist"
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="wishlist-count">{wishlistCount}</span>
            )}
          </Link>

          <Link to="/cart" className="cart-button">
            <ShoppingBag size={18} />
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
