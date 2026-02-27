"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whatWeOffer } from "@/lib/constants";
import { Check } from "lucide-react";

export function WhatWeOffer() {
  return (
    <section className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <SectionTitle
            subtitle="Equipment Types"
            title="What We Offer"
          />
          <p className="text-gray-300 font-sans text-lg">
            We provide top-tier dispatching services across a wide range of
            equipment types. No matter what you drive, we keep your wheels turning.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {whatWeOffer.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="text-gray-200 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Images and Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden mt-12 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Trucks parked"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-brand-primary rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                <span className="text-4xl font-heading font-black text-black">100+</span>
                <span className="text-black font-semibold font-sans mt-2">Satisfied Clients</span>
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Truck on road"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
