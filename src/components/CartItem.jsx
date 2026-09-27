function CartItem({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <h3>{product.name}</h3>

      <p>Price: ${product.price}</p>

      <p>Quantity: {product.quantity}</p>

      <button onClick={() => onDecrease(product.id)}>-</button>

      <button onClick={() => onIncrease(product.id)}>+</button>

      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
