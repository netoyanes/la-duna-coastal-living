import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-micro text-muted-foreground mb-6">Begin the Conversation</p>
          <h2 className="text-headline text-foreground font-serif mb-8">
            If this resonates, we'd like to hear from you.
          </h2>
          <p className="text-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            We don't sell to everyone. We prefer meaningful conversations with people who 
            share our vision. Leave your details and we'll be in touch with more information.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-foreground mb-2">
              What draws you to La Duna? <span className="text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell us a bit about yourself and what you're looking for..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Request Private Information
          </button>

          <p className="text-xs text-muted-foreground text-center pt-4">
            Your information will never be shared. We respond personally to every inquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
