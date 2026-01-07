import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif tracking-wide">La Duna</h3>
            <p className="text-sm text-background/60 mt-1">
              Pacific Coast · Mazatlán, Mexico
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 text-sm text-background/60"
          >
            <a href="#contact" className="hover:text-background transition-colors">
              Contact
            </a>
            <span className="hidden md:block">·</span>
            <p>© {new Date().getFullYear()} La Duna. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
