import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const {
    cart,
    increaseCart,
    decreaseCart,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  // اگر سبد خرید خالیه
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={64} strokeWidth={1} />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="btn btn--primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        {/* لینک بازگشت */}
        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Continue Shopping
        </Link>

        <div className="cart-page__header">
          <h1 className="cart-page__title">Your Cart</h1>
          <button className="clear-cart" onClick={clearCart}>
            <Trash2 size={16} /> Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          {/* لیست محصولات */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`} className="cart-item__image">
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="cart-item__info">
                  <Link to={`/product/${item.id}`} className="cart-item__name">
                    {item.name}
                  </Link>
                  <p className="cart-item__price">${item.price}</p>
                </div>

                <div className="cart-item__quantity">
                  <button
                    onClick={() => decreaseCart(item.id)}
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseCart(item.id)}
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <p className="cart-item__total">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* خلاصه سفارش */}
          <div className="cart-summary">
            <h3 className="cart-summary__title">Order Summary</h3>

            <div className="cart-summary__row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="cart-summary__row">
              <span>Shipping</span>
              <span className="free">Free</span>
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__row cart-summary__total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button
              className="btn btn--primary cart-summary__checkout"
              onClick={() => navigate("/checkout")}
            >
              Checkout <ShieldCheck size={18} />
            </button>

            <div className="cart-summary__trust">
              <div className="trust-item">
                <Truck size={16} />
                <span>Free Shipping</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
