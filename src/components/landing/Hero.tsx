import { motion } from "framer-motion";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="La Duna - Pacific Coast at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-micro text-sand-light/90 mb-6"
        >
          Pacific Coast · Mazatlán, Mexico
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-display text-sand-light mb-8 font-serif"
        >
          A private off-grid coastal park on the Pacific.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-subheadline text-sand-light/85 mb-12 max-w-3xl mx-auto"
        >
          Low-density living, conscious design, and a deep connection with the ocean — just far enough from the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          <p className="text-sm text-sand-light/70 italic font-serif">
            Not a subdivision. Not a resort.
            <br />
            A new way of inhabiting the coast.
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block mt-12 px-8 py-4 border border-sand-light/40 text-sand-light text-sm tracking-widest uppercase hover:bg-sand-light/10 transition-all duration-500"
        >
          Request Private Information
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-sand-light/0 via-sand-light/50 to-sand-light/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
