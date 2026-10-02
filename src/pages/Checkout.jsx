import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) return;

    // اینجا می‌تونی به API وصل کنی
    console.log("Order:", { customer: form, items: cart, total: cartTotal });

    clearCart();
    navigate("/success");
  }

  if (cart.length === 0) {
    return (
      <div className="not-found">
        <h2>سبد خریدت خالیه</h2>
        <Link to="/" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Link to="/cart" className="back-link">
        <ArrowLeft size={18} /> Back to Cart
      </Link>

      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>

          <div className="form-row">
            <label>
              Full Name
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Sara Ahmadi"
              />
            </label>
          </div>

          <div className="form-row two-cols">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="sara@example.com"
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="0912 345 6789"
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Address
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Street, building, unit..."
              />
            </label>
          </div>

          <div className="form-row two-cols">
            <label>
              City
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                placeholder="Tehran"
              />
            </label>

            <label>
              Postal Code
              <input
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                required
                placeholder="1234567890"
              />
            </label>
          </div>

          <button type="submit" className="btn-primary btn-large">
            Place Order — ${cartTotal.toFixed(2)}
          </button>
        </form>

        <aside className="checkout-summary">
          <h3>Your Order</h3>

          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p className="muted">
                  {item.quantity} × ${item.price}
                </p>
              </div>
            </div>
          ))}

          <div className="summary-row total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
