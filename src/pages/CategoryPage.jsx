import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const products = getProductsByCategory(category);

  const titles = {
    skincare: "Skincare",
    makeup: "Makeup",
    "body-care": "Body Care",
  };

  const title = titles[category] || category;

  return (
    <div className="category-page">
      <div className="section-heading">
        <p>CATEGORY</p>
        <h2>{title}</h2>
      </div>

      {products.length === 0 ? (
        <div className="not-found">
          <p>No products found in this category.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
