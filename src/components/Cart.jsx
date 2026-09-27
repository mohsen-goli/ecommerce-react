import CartItem from "./CartItem";

function Cart({ cart, cartTotal, onIncrease, onDecrease, onRemove }) {
  return (
    <section>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}

          <h3>Total: ${cartTotal}</h3>
        </div>
      )}
    </section>
  );
}

export default Cart;
