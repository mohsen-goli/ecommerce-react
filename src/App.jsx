import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 29,
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 35,
    },
    {
      id: 3,
      name: "Matte Lipstick",
      price: 18,
    },
    {
      id: 4,
      name: "Daily Moisturizer",
      price: 24,
    },
  ];

  function handleAddToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }

          return item;
        });
      }

      return [...currentCart, product];
    });
  }

  function handleIncreaseCart(productId) {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  }

  function handleDecreaseCart(productId) {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }

        return item;
      });
    });
  }

  function handleRemoveFromCart(productId) {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== productId);
    });
  }

  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <>
      <Header cartCount={cartCount} />

      <Hero />

      <Categories />

      <div className="app">
        <h1>LUNEA</h1>

        <h2>Beauty & Skincare Store</h2>

        <p>Discover products made for your everyday beauty routine.</p>

        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Cart
          cart={cart}
          cartTotal={cartTotal}
          onIncrease={handleIncreaseCart}
          onDecrease={handleDecreaseCart}
          onRemove={handleRemoveFromCart}
        />
      </div>
    </>
  );
}

export default App;
