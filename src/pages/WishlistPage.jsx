import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ToastProvider";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showSuccess } = useToast();

  function handleAddToCart(product) {
    addToCart({ ...product, quantity: 1 });
    showSuccess(`${product.name} added to cart`);
  }

  function handleRemove(product) {
    removeFromWishlist(product.id);
    showSuccess(`${product.name} removed from wishlist`);
  }

  if (wishlist.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <Heart size={64} strokeWidth={1} />
        <h2>Your wishlist is empty</h2>
        <p>Save your favorite products for later.</p>
        <Link to="/" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="section-heading">
        <p>SAVED ITEMS</p>
        <h2>My Wishlist ({wishlist.length})</h2>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-card">
            <Link to={`/product/${product.id}`}>
              <div className="wishlist-card-image">
                <img src={product.image} alt={product.name} />
              </div>
            </Link>

            <div className="wishlist-card-info">
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <strong>${product.price}</strong>

              <div className="wishlist-card-actions">
                <button
                  className="btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingBag size={14} /> Add to Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(product)}
                  aria-label="Remove"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
