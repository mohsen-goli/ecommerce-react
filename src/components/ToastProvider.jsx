import { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Check, X, Heart, ShoppingBag } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  function showSuccess(message) {
    toast.custom(
      (t) => (
        <div className={`rosa-toast ${t.visible ? "show" : "hide"}`}>
          <span className="rosa-toast-icon success">
            <Check size={16} strokeWidth={3} />
          </span>
          <span className="rosa-toast-message">{message}</span>
        </div>
      ),
      { duration: 2200, position: "bottom-right" },
    );
  }

  function showError(message) {
    toast.custom(
      (t) => (
        <div className={`rosa-toast ${t.visible ? "show" : "hide"}`}>
          <span className="rosa-toast-icon error">
            <X size={16} strokeWidth={3} />
          </span>
          <span className="rosa-toast-message">{message}</span>
        </div>
      ),
      { duration: 2200, position: "bottom-right" },
    );
  }

  function showWishlist(message) {
    toast.custom(
      (t) => (
        <div className={`rosa-toast ${t.visible ? "show" : "hide"}`}>
          <span className="rosa-toast-icon wishlist">
            <Heart size={16} fill="currentColor" />
          </span>
          <span className="rosa-toast-message">{message}</span>
        </div>
      ),
      { duration: 2200, position: "bottom-right" },
    );
  }

  function showCart(message) {
    toast.custom(
      (t) => (
        <div className={`rosa-toast ${t.visible ? "show" : "hide"}`}>
          <span className="rosa-toast-icon cart">
            <ShoppingBag size={16} />
          </span>
          <span className="rosa-toast-message">{message}</span>
        </div>
      ),
      { duration: 2200, position: "bottom-right" },
    );
  }

  return (
    <ToastContext.Provider
      value={{ showSuccess, showError, showWishlist, showCart }}
    >
      {children}

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2200,
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
          },
        }}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast باید داخل ToastProvider استفاده بشه");
  }
  return context;
}
