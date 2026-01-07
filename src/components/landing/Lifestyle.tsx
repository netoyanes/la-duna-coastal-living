import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import lifestyleImage from "@/assets/lifestyle-beach.jpg";
import cabinImage from "@/assets/cabin-dusk.jpg";

const Lifestyle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-micro text-muted-foreground mb-6">Daily Life</p>
          <h2 className="text-headline text-foreground font-serif max-w-3xl mx-auto">
            Days shaped by tides, not schedules.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={lifestyleImage}
              alt="Walking barefoot on the beach at sunrise"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Cabin Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={cabinImage}
              alt="Eco cabin at dusk with warm interior light"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Lifestyle Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="container-narrow text-center"
        >
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Morning</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Wake with the first light. Walk barefoot to the water's edge. 
                Surf the morning swell or cast a line from shore. Coffee on the terrace 
                as pelicans glide overhead.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Afternoon</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Long lunches under palm shade. Hammock hours. Reading in silence 
                broken only by waves. A walk through the dunes to check on the turtle nests.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-foreground mb-3">Evening</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Watch the sun dissolve into the Pacific. Dinner with neighbors 
                or solitude by lamplight. Stars you forgot existed. Sleep that comes easily.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifestyle;
