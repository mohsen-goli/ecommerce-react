import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-text">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn--primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/shop" className="btn btn--outline">
              <Search size={18} /> Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
