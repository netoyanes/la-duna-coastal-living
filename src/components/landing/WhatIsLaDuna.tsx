import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import dunesImage from "@/assets/dunes-aerial.jpg";

const WhatIsLaDuna = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-micro text-muted-foreground mb-6">What is La Duna</p>
            <h2 className="text-headline text-foreground mb-8 font-serif">
              A coastal eco-park built for those who seek less.
            </h2>
            <div className="divider-accent mb-8" />
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                La Duna is a private community nestled among the dunes of the Pacific coast, 
                just 16 kilometers north of Mazatlán. Here, only twenty families will share 
                access to over half a kilometer of pristine shoreline.
              </p>
              <p>
                This is not real estate designed for profit. It's a way of life designed 
                for preservation — of nature, of quiet, of meaningful connection to the land 
                and sea. Every structure is off-grid. Every path is meant for walking. 
                Every decision is made with the next generation in mind.
              </p>
              <p className="text-foreground font-serif italic">
                We are not building a development. We are protecting a place.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={dunesImage}
                alt="Aerial view of La Duna coastal dunes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLaDuna;
