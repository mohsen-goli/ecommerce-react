import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();

  const results = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="category-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <div className="section-heading">
        <p>SEARCH RESULTS</p>
        <h2>
          {query ? `"${query}"` : "Search"} — {results.length} found
        </h2>
      </div>

      {results.length === 0 ? (
        <div className="not-found">
          <SearchIcon size={64} strokeWidth={1} color="#E8A0A8" />
          <h2>No products found</h2>
          <p>Try searching for something else.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
