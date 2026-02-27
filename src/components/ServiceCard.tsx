"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-dark rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-brand-primary/50 transition-colors duration-500"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="p-6 relative">
        <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 font-sans leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
