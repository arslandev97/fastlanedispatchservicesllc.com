"use client";

import { motion } from "framer-motion";

export function LogoStrip() {
  const partners = [
    { name: "UPS", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UPS_logo_2014.svg/200px-UPS_logo_2014.svg.png" },
    { name: "FedEx", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/200px-FedEx_Express.svg.png" },
    { name: "DAT", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/DAT_Solutions_logo.png/200px-DAT_Solutions_logo.png" }, // Example logos
    { name: "FMCSA", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Department_of_Transportation.svg/200px-Department_of_Transportation.svg.png" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Using a simple fallback text if image fails or isn't perfect */}
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 md:h-16 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50/ffffff/000000?text=${partner.name}`;
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
