import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, Clock } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-ocean-deep text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map / Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-micro text-ocean-light mb-6">Location</p>
            <h2 className="text-headline font-serif mb-8">
              Remote, yet accessible.
            </h2>
            <div className="divider-horizontal bg-ocean-light/30 mb-8" />
            <p className="text-lg text-ocean-light/90 leading-relaxed mb-8">
              La Duna sits on the Pacific coast, 16 kilometers north of Mazatlán — 
              close enough to reach easily, far enough to leave the world behind.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-ocean-light mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium mb-1">Pacific Coast, Sinaloa</p>
                  <p className="text-sm text-ocean-light/70">16 km north of Mazatlán</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Plane className="w-5 h-5 text-ocean-light mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium mb-1">Mazatlán International Airport</p>
                  <p className="text-sm text-ocean-light/70">Direct flights from major US & Canadian cities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-ocean-light mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium mb-1">25 minutes from the airport</p>
                  <p className="text-sm text-ocean-light/70">Easy access, private road to the property</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coordinates / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-ocean/20 border border-ocean-light/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl lg:text-8xl font-serif text-ocean-light/20 mb-4">
                  23.4°N
                </p>
                <p className="text-6xl lg:text-8xl font-serif text-ocean-light/20">
                  106.5°W
                </p>
                <p className="text-micro text-ocean-light/50 mt-8">
                  Pacific Standard Time
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
