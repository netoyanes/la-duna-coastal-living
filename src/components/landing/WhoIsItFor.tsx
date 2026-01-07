import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const forThose = [
  "Who value quiet over activity",
  "Who understand that less is more",
  "Who want to leave something better for the next generation",
  "Who feel at home near the ocean",
  "Who seek community built on shared values",
];

const notFor = [
  "Those looking for maximum ROI",
  "Those who need constant entertainment",
  "Those uncomfortable with simplicity",
  "Those who prioritize luxury over authenticity",
];

const WhoIsItFor = () => {
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
          <p className="text-micro text-muted-foreground mb-6">Alignment</p>
          <h2 className="text-headline text-foreground font-serif max-w-3xl mx-auto">
            La Duna is not for everyone. And that's intentional.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 container-narrow mx-auto">
          {/* For Those */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-serif text-foreground mb-8">La Duna is for those...</h3>
            <ul className="space-y-4">
              {forThose.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" strokeWidth={2} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif text-foreground mb-8">La Duna is not for...</h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" strokeWidth={2} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
