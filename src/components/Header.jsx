import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
            <AnimatePresence>
              {wishlistCount > 0 && (
                <motion.span
                  className="wishlist-count"
                  key={wishlistCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {wishlistCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <Link to="/cart" className="cart-button">
            <ShoppingBag size={18} />
            <span>Cart</span>
            <motion.span
              className="cart-count"
              key={cartCount}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.35 }}
            >
              {cartCount}
            </motion.span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
