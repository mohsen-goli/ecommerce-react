import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import TopBar from "./TopBar";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart(); // استفاده از Custom Hook

  return (
    <>
      <TopBar />
      <header className="header">
        <div className="header__container">
          {/* لوگو */}
          <Link to="/" className="header__logo">
            ROSA
          </Link>

          {/* منوی دسکتاپ */}
          <nav className="header__nav">
            <Link to="/" className="header__link">
              Home
            </Link>
            <Link to="/shop" className="header__link">
              Shop
            </Link>
            <Link to="/skincare" className="header__link">
              Skincare
            </Link>
            <Link to="/makeup" className="header__link">
              Makeup
            </Link>
            <Link to="/about" className="header__link">
              About Us
            </Link>
            <Link to="/blog" className="header__link">
              Blog
            </Link>
          </nav>

          {/* آیکون‌ها */}
          <div className="header__actions">
            <button className="header__icon-btn" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="header__icon-btn" aria-label="Profile">
              <User size={20} />
            </button>
            <Link to="/cart" className="header__icon-btn header__cart-btn">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="header__cart-count">{cartCount}</span>
              )}
            </Link>
            {/* دکمه منوی موبایل */}
            <button
              className="header__icon-btn header__menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="header__mobile-menu">
            <Link to="/" className="header__mobile-link">
              Home
            </Link>
            <Link to="/shop" className="header__mobile-link">
              Shop
            </Link>
            <Link to="/skincare" className="header__mobile-link">
              Skincare
            </Link>
            <Link to="/makeup" className="header__mobile-link">
              Makeup
            </Link>
            <Link to="/about" className="header__mobile-link">
              About Us
            </Link>
            <Link to="/blog" className="header__mobile-link">
              Blog
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
