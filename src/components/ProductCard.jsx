import { Link } from "react-router-dom";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { useToast } from "./ToastProvider";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product, onAddToCart }) {
  const { showSuccess, showWishlist } = useToast();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  function handleAdd(e) {
    e.preventDefault();
    onAddToCart({ ...product, quantity: 1 });
    showSuccess(`${product.name} added to cart`);
  }

  function handleWishlist(e) {
    e.preventDefault();

    const wasIn = inWishlist;
    toggleWishlist(product);

    if (wasIn) {
      showWishlist(`${product.name} removed from wishlist`);
    } else {
      showWishlist(`${product.name} added to wishlist`);
    }
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <button
          className={`wishlist-toggle ${inWishlist ? "active" : ""}`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
        >
          <Heart
            size={18}
            fill={inWishlist ? "#e8a0a8" : "transparent"}
            stroke={inWishlist ? "#e8a0a8" : "#8a7c7e"}
          />
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="product-rating small">
          <Star size={13} fill="#E8A0A8" stroke="#E8A0A8" />
          <span>{product.rating}</span>
        </div>

        <strong>${product.price}</strong>

        <button className="add-to-cart-button" onClick={handleAdd}>
          <ShoppingBag size={15} /> Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
