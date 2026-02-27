"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-brand-darker">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-[#050914]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-primary font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4 drop-shadow-md"
        >
          {subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1.5 w-24 bg-brand-primary mt-8 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]" 
        />
      </div>
    </section>
  );
}
