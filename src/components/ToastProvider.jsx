import { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Check, X, Heart, ShoppingBag } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  function showSuccess(message) {
    toast.success(message, {
      duration: 2200,
      position: "bottom-right",
      style: {
        background: "#fff",
        color: "#2d2926",
        border: "1px solid #f7e6e8",
        borderRadius: "999px",
        padding: "12px 20px",
        fontSize: "14px",
        fontWeight: 500,
        boxShadow: "0 10px 30px rgba(232, 160, 168, 0.25)",
      },
      iconTheme: {
        primary: "#e8a0a8",
        secondary: "#fff",
      },
    });
  }

  function showError(message) {
    toast.error(message, {
      duration: 2200,
      position: "bottom-right",
      style: {
        background: "#fff",
        color: "#2d2926",
        border: "1px solid #f7e6e8",
        borderRadius: "999px",
        padding: "12px 20px",
        fontSize: "14px",
        fontWeight: 500,
      },
    });
  }

  function showWishlist(message) {
    toast(message, {
      duration: 2200,
      position: "bottom-right",
      icon: "❤️",
      style: {
        background: "#fff",
        color: "#2d2926",
        border: "1px solid #f7e6e8",
        borderRadius: "999px",
        padding: "12px 20px",
      },
    });
  }

  function showCart(message) {
    toast(message, {
      duration: 2200,
      position: "bottom-right",
      icon: "🛒",
      style: {
        background: "#fff",
        color: "#2d2926",
        border: "1px solid #f7e6e8",
        borderRadius: "999px",
        padding: "12px 20px",
      },
    });
  }

  return (
    <ToastContext.Provider
      value={{ showSuccess, showError, showWishlist, showCart }}
    >
      {children}

      <Toaster
        position="bottom-right"
        containerStyle={{
          zIndex: 9999,
        }}
        toastOptions={{
          duration: 2200,
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
