import { useState } from "react";
import ProductCard from "./components/ProductCard";

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
    <div className="app">
      <h1>LUNEA</h1>

      <h2>Beauty & Skincare Store</h2>

      <p>Discover products made for your everyday beauty routine.</p>

      <p>🛒 Cart: {cartCount}</p>

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

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>

              <p>Price: ${product.price}</p>

              <p>Quantity: {product.quantity}</p>

              <button onClick={() => handleDecreaseCart(product.id)}>-</button>

              <button onClick={() => handleIncreaseCart(product.id)}>+</button>

              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${cartTotal}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
