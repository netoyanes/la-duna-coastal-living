import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Users, TreePine, Waves } from "lucide-react";

const pillars = [
  {
    icon: Sun,
    title: "Sustainability",
    description:
      "Solar energy, biodigesters, rainwater collection, and building techniques that leave no trace. Living in harmony with the land is not an aspiration — it's the foundation.",
  },
  {
    icon: Users,
    title: "Low Density",
    description:
      "Only 20 units spread across the dunes, connected by pedestrian paths. No streets, no vehicles beyond the entrance. Just sand beneath your feet.",
  },
  {
    icon: TreePine,
    title: "Community",
    description:
      "Members, not guests. Neighbors who share values, not just an address. A place where solitude and belonging coexist.",
  },
  {
    icon: Waves,
    title: "Conservation",
    description:
      "Protected dunes, native vegetation, and a turtle sanctuary. We are stewards of this coastline — its beauty is not ours to exploit.",
  },
];

const Pillars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-micro text-muted-foreground mb-6">Our Principles</p>
          <h2 className="text-headline text-foreground font-serif max-w-3xl mx-auto">
            Four pillars that guide everything we build and protect.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-6">
                <pillar.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">{pillar.title}</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
