"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { companyDetails } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Truck on highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/95 via-brand-darker/80 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-sm font-sans tracking-wider text-gray-200">
              #1 rated dispatching partner
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight">
            TRUCK <br />
            <span className="text-brand-primary text-glow font-outline">
              DISPATCHING
            </span>
            <br />
            SERVICES
          </h1>

          <p className="text-lg text-gray-300 font-sans max-w-xl leading-relaxed">
            Maximize your earnings and keep your trucks moving. We negotiate top-paying
            loads and handle all the paperwork for you.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/contact-us">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-brand-darker/50 backdrop-blur-sm">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Call us 24/7</span>
              <a href={`tel:${companyDetails.phone}`} className="text-2xl font-bold font-heading text-white hover:text-brand-primary transition-colors">
                {companyDetails.formattedPhone}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content / Flairs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex relative h-full items-center justify-center"
        >
          {/* A floating glass card emphasizing a key metric */}
          <div className="glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl absolute right-0 top-1/4 translate-x-12 animate-in slide-in-from-right-10 duration-1000">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-heading font-black text-brand-primary">100+</span>
              <span className="text-white font-medium">Active Carriers</span>
            </div>
          </div>
          
          <div className="glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl absolute left-10 bottom-1/4 animate-bounce-slow">
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-heading font-black text-white">24/7</span>
              <span className="text-brand-primary font-medium">Dispatch Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
