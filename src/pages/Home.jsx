import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Hero />
      <Categories />

      <section className="product-section">
        <div className="section-heading">
          <p>FEATURED</p>
          <h2>Featured Products</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
