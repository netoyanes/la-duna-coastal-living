import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 lg:px-20">
        <a
          href="#"
          className={`text-2xl font-serif tracking-wide transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-sand-light"
          }`}
        >
          La Duna
        </a>

        <a
          href="#contact"
          className={`text-xs tracking-widest uppercase transition-all duration-500 px-6 py-2 border ${
            scrolled
              ? "text-foreground border-foreground/20 hover:bg-foreground hover:text-background"
              : "text-sand-light border-sand-light/30 hover:bg-sand-light/10"
          }`}
        >
          Inquire
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
