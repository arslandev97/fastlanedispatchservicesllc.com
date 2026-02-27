"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function HomeContact() {
  return (
    <section className="bg-[#0b1021] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <div>
            <span className="text-white tracking-widest text-sm font-sans uppercase mb-4 block font-semibold">
              CONTACT US
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight">
              Have Questions?<br />Get in touch!
            </h2>
          </div>

          <form className="flex flex-col gap-8 mt-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  id="home-firstName"
                  className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-white focus:ring-0 focus:border-brand-primary transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="home-firstName"
                  className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brand-primary"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="home-lastName"
                  className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-white focus:ring-0 focus:border-brand-primary transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="home-lastName"
                  className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brand-primary"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="relative">
                <input
                  type="email"
                  id="home-email"
                  className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-white focus:ring-0 focus:border-brand-primary transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="home-email"
                  className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brand-primary"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="home-phone"
                  className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-white focus:ring-0 focus:border-brand-primary transition-colors peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="home-phone"
                  className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brand-primary"
                >
                  Phone
                </label>
              </div>
            </div>

            <div className="relative mt-4">
              <textarea
                id="home-message"
                rows={1}
                className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-white focus:ring-0 focus:border-brand-primary transition-colors peer resize-none"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="home-message"
                className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-brand-primary"
              >
                Message
              </label>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <button
                type="submit"
                className="bg-[#ffb703] hover:bg-[#eab308] text-black font-bold uppercase tracking-wide py-4 px-8 w-fit flex items-center gap-2 transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
                Get in Touch
              </button>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="home-consent"
                  required
                  className="w-5 h-5 rounded border-gray-600 bg-transparent focus:ring-brand-primary text-brand-primary"
                />
                <label htmlFor="home-consent" className="text-[15px] text-gray-300 flex gap-1">
                  I agree that my data is <a href="/privacy-policy" className="underline hover:text-white transition-colors">collected and stored</a>.
                </label>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
