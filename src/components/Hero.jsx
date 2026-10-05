import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-eyebrow" variants={item}>
          BEAUTY • SKINCARE • SELF CARE
        </motion.p>

        <motion.h1 variants={item}>
          Beauty that
          <span> feels like you.</span>
        </motion.h1>

        <motion.p className="hero-description" variants={item}>
          Discover skincare and beauty essentials made for your everyday
          routine.
        </motion.p>

        <motion.div variants={item}>
          <Link to="/category/skincare" className="btn-primary btn-large">
            Shop Collection
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.92, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/Images/hero/luna-hero.jpg" alt="ROSA Beauty" />
      </motion.div>
    </section>
  );
}

export default Hero;
