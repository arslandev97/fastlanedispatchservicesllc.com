"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { companyDetails } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function Welcome() {
  const points = [
    "No Forced Dispatch",
    "Complete Paperwork Handling",
    "Top Paying Loads",
    "Dedicated Support Team",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-darker">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Images/visuals */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden glass p-4"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Dispatch Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
            
            {/* Overlay Status Badge */}
            <div className="absolute bottom-6 left-6 glass-dark px-6 py-4 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="font-heading font-black text-black text-xl">10+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold leading-tight">Years of</span>
                <span className="text-brand-primary font-bold leading-tight">Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <SectionTitle
            subtitle="About Us"
            title={`Welcome to ${companyDetails.name}`}
          />
          
          <div className="flex flex-col gap-6 text-gray-300 font-sans leading-relaxed text-lg">
            <p>
              At <strong>{companyDetails.name}</strong>, we are committed to supporting
              the backbone of America — our truck drivers. Our experienced
              dispatchers work around the clock to ensure you get access to top-paying
              loads while minimizing downtime and paperwork.
            </p>
            <p>
              We understand the challenges of life on the road, which is why we provide a
              personalized dispatching experience tailored to your equipment, preferred
              routes, and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-brand-primary/30 transition-colors"
              >
                <CheckCircle2 className="text-brand-primary w-6 h-6 shrink-0" />
                <span className="text-gray-200 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
