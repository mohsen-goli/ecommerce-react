import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { ProductGridSkeleton } from "../components/Skeleton";

function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, [category]);

  const products = getProductsByCategory(category);

  const titles = {
    skincare: "Skincare",
    makeup: "Makeup",
    "body-care": "Body Care",
  };

  const title = titles[category] || category;

  return (
    <div className="category-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <div className="section-heading">
        <p>CATEGORY</p>
        <h2>{title}</h2>
      </div>

      {isLoading ? (
        <ProductGridSkeleton count={4} />
      ) : products.length === 0 ? (
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
