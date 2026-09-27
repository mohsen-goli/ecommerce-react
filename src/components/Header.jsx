function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="logo">
          LUNEA
        </a>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#skincare">Skincare</a>
          <a href="#makeup">Makeup</a>
        </nav>

        <button className="cart-button">
          🛒 Cart
          <span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
