import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import TopBar from "./TopBar";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // فیلتر محصولات با تایپ کردن (Live Search)
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 5); // حداکثر ۵ نتیجه
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  // بستن با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // فوکوس روی input وقتی باز میشه
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setIsSearchOpen(false);
    setSearchQuery("");
    setResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setResults([]);
    }
  };

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
            <Link to="/category/skincare" className="header__link">
              Skincare
            </Link>
            <Link to="/category/makeup" className="header__link">
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
            {/* بخش جستجو */}
            <div className="header__search-wrapper" ref={searchRef}>
              {isSearchOpen ? (
                <form onSubmit={handleSubmit} className="header__search-inline">
                  <Search size={16} className="header__search-inline-icon" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="header__search-inline-input"
                  />
                  <button
                    type="button"
                    className="header__search-inline-close"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                      setResults([]);
                    }}
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <button
                  className="header__icon-btn"
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search size={20} />
                </button>
              )}

              {/* لیست نتایج (Live) */}
              {isSearchOpen && results.length > 0 && (
                <div className="header__search-results">
                  {results.map((p) => (
                    <button
                      key={p.id}
                      className="header__search-result-item"
                      onClick={() => handleResultClick(p.id)}
                    >
                      <img src={p.image} alt={p.name} />
                      <div>
                        <p>{p.name}</p>
                        <span>${p.price}</span>
                      </div>
                    </button>
                  ))}
                  {searchQuery.trim().length > 0 && (
                    <button
                      className="header__search-view-all"
                      onClick={handleSubmit}
                    >
                      View all results for "{searchQuery}" →
                    </button>
                  )}
                </div>
              )}
            </div>

            <button className="header__icon-btn" aria-label="Profile">
              <User size={20} />
            </button>
            <Link to="/cart" className="header__icon-btn header__cart-btn">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="header__cart-count">{cartCount}</span>
              )}
            </Link>
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
            <Link to="/category/skincare" className="header__mobile-link">
              Skincare
            </Link>
            <Link to="/category/makeup" className="header__mobile-link">
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
