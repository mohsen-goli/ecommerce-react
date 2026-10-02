import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ToastProvider";

function CartPage() {
  const { cart, cartTotal, increaseCart, decreaseCart, removeFromCart } =
    useCart();
  const { showSuccess } = useToast();
  const navigate = useNavigate();

  function handleRemove(id, name) {
    removeFromCart(id);
    showSuccess(`${name} removed from cart`);
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <ShoppingBag size={64} strokeWidth={1} />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Continue Shopping
      </Link>

      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-row">
              <img
                src={item.image}
                alt={item.name}
                className="cart-row-image"
              />

              <div className="cart-row-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>

              <div className="quantity-selector small">
                <button onClick={() => decreaseCart(item.id)}>
                  <Minus size={14} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseCart(item.id)}>
                  <Plus size={14} />
                </button>
              </div>

              <p className="cart-row-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id, item.name)}
                aria-label="Remove"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button
            className="btn-primary btn-large"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;
