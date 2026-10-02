import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  function handleAdd(e) {
    e.preventDefault();
    onAddToCart({ ...product, quantity: 1 });
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
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
