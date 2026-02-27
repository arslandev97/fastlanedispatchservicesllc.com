"use client";

import { motion } from "framer-motion";

export function LogoStrip() {
  const partners = [
    { name: "FedEx", src: "/images/fedex.jpg" },
    { name: "JB Hunt", src: "/images/jbhunt.jpg" },
    { name: "Old Dominion", src: "/images/olddomination.png" },
    { name: "UPS", src: "/images/ups.jpg" },
    { name: "XPO", src: "/images/xpo.jpg" },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-brand-darker border-y border-white/5 overflow-hidden relative">
      {/* Gradient Masks for smooth fading on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-darker to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-darker to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-0">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-33.33333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="flex flex-nowrap items-center w-max py-4"
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-[160px] md:w-[200px] h-[80px] md:h-[100px] shrink-0 mx-4 md:mx-6 bg-white rounded-2xl p-4 shadow-sm opacity-60 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50/ffffff/000000?text=${partner.name}`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
