import { useState } from "react";

function ProductCard({ id, name, price, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  function handleIncrease() {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  function handleDecrease() {
    setQuantity((currentQuantity) => {
      if (currentQuantity === 1) {
        return 1;
      }

      return currentQuantity - 1;
    });
  }

  function handleAddToCart() {
    onAddToCart({
      id,
      name,
      price,
      quantity,
    });

    setIsAdded(true);
  }

  return (
    <div className="product-card">
      <div className="product-image">Beauty Product</div>

      <div className="product-info">
        <h3>{name}</h3>

        <p>Beauty & skincare product</p>

        <strong>${price}</strong>

        <p>Quantity: {quantity}</p>

        <button onClick={handleDecrease}>-</button>

        <button onClick={handleIncrease}>+</button>

        <button onClick={handleAddToCart}>
          {isAdded ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
