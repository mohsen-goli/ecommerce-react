import { Link } from "react-router-dom";
import { Mail, Phone, AtSign } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">ROSA</h3>
          <p>Timeless beauty for your everyday glow.</p>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/category/skincare">Skincare</Link>
          <Link to="/category/makeup">Makeup</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <Mail size={14} /> hello@rosa.com
          </p>
          <p>
            <Phone size={14} /> +98 21 1234 5678
          </p>
          <p>
            <AtSign size={14} /> @rosa.beauty
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ROSA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
