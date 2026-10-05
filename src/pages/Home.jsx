import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import { ProductGridSkeleton } from "../components/Skeleton";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />

      <ScrollReveal>
        <Categories />
      </ScrollReveal>

      <section className="product-section">
        <ScrollReveal>
          <div className="section-heading">
            <p>FEATURED</p>
            <h2>Featured Products</h2>
          </div>
        </ScrollReveal>

        {isLoading ? (
          <ProductGridSkeleton count={4} />
        ) : (
          <div className="product-grid">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.08}>
                <ProductCard product={product} onAddToCart={addToCart} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
