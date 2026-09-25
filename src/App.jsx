import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>NovaTech Digital Store</h1>
      <h2>Best digital products</h2>
      <p>Welcome to our store</p>

      <ProductCard name="Wireless Headphones" price="$129" />

      <ProductCard name="Mechanical Keyboard" price="$79" />
      <ProductCard name=" Keyboard" price="$29" />
      <ProductCard name="Mechanical " price="$7" />
      <ProductCard name="mouse" price="$790" />
      <button>Shop Now</button>
    </div>
  );
}

export default App;
