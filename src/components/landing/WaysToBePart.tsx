import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const options = [
  {
    title: "Premium Lots",
    description:
      "Select your footprint in the dunes. Build according to our sustainable guidelines, with full architectural support.",
    label: "Full Ownership",
  },
  {
    title: "Finished Cabins",
    description:
      "Move-in ready eco-residences designed in harmony with the landscape. Turnkey coastal living.",
    label: "Full Ownership",
  },
  {
    title: "Fractional Use",
    description:
      "Share ownership with a small group. Enjoy dedicated weeks throughout the year without the full commitment.",
    label: "Shared Ownership",
  },
  {
    title: "Boutique Hospitality",
    description:
      "A limited number of nights available for those who want to experience La Duna before committing.",
    label: "Coming Soon",
  },
];

const WaysToBePart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-warm">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-micro text-muted-foreground mb-6">Become Part of La Duna</p>
          <h2 className="text-headline text-foreground font-serif max-w-3xl mx-auto">
            Different paths to the same shore.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-12 border border-border"
            >
              <span className="text-xs tracking-widest uppercase text-accent mb-4 block">
                {option.label}
              </span>
              <h3 className="text-2xl font-serif text-foreground mb-4">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToBePart;
