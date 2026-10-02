import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">BEAUTY • SKINCARE • SELF CARE</p>

        <h1>
          Beauty that
          <span> feels like you.</span>
        </h1>

        <p className="hero-description">
          Discover skincare and beauty essentials made for your everyday
          routine.
        </p>

        <Link to="/category/skincare" className="btn-primary btn-large">
          Shop Collection
        </Link>
      </div>

      <div className="hero-image">
        <img src="/Images/hero/luna-hero.jpg" alt="ROSA Beauty" />
      </div>
    </section>
  );
}

export default Hero;