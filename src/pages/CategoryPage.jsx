import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { ProductGridSkeleton } from "../components/Skeleton";
import "./CategoryPage.css";

function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, [category]);

  let products = getProductsByCategory(category);

  // مرتب‌سازی محصولات
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const titles = {
    skincare: "Skincare",
    makeup: "Makeup",
    "body-care": "Body Care",
    fragrance: "Fragrance",
  };

  const title = titles[category] || category;

  return (
    <div className="category-page">
      <div className="container">
        {/* لینک بازگشت */}
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* هدر صفحه */}
        <div className="category-header">
          <div>
            <p className="category-header__subtitle">CATEGORY</p>
            <h1 className="category-header__title">{title}</h1>
            <p className="category-header__count">
              {sortedProducts.length} products
            </p>
          </div>

          {/* مرتب‌سازی */}
          <div className="category-sort">
            <SlidersHorizontal size={16} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="category-sort__select"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* گرید محصولات */}
        {isLoading ? (
          <ProductGridSkeleton count={4} />
        ) : sortedProducts.length === 0 ? (
          <div className="not-found">
            <p>No products found in this category.</p>
            <Link to="/" className="btn btn--primary">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {sortedProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
