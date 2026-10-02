import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found 😢</h2>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    addToCart({ ...product, quantity });
    navigate("/cart");
  }

  return (
    <div className="product-detail-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <p className="product-category">{product.category.toUpperCase()}</p>

          <h1>{product.name}</h1>

          <div className="product-rating">
            <Star size={16} fill="#E8A0A8" stroke="#E8A0A8" />
            <span>{product.rating}</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </div>

          <p className="product-price">${product.price}</p>

          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <div className="quantity-selector">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                aria-label="Decrease"
              >
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase"
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="btn-primary btn-large" onClick={handleAddToCart}>
              <ShoppingBag size={18} /> Add to Cart
            </button>
          </div>

          {product.inStock ? (
            <p className="in-stock">✓ In Stock</p>
          ) : (
            <p className="out-stock">✗ Out of Stock</p>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="section-heading">
            <p>YOU MAY ALSO LIKE</p>
            <h2>Related Products</h2>
          </div>

          <div className="product-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
