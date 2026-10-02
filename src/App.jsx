import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./components/ToastProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </main>

          <Footer />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
