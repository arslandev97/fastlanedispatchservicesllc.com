import Link from "next/link";
import { companyDetails, navLinks, services } from "@/lib/constants";
import { MapPin, Phone, Mail, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#010309] border-t border-white/5 pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shrink-0">
                <span className="font-heading font-extrabold text-black text-xl">FL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white uppercase tracking-widest leading-none">
                  Fast <span className="text-brand-primary">Lane</span>
                </span>
                <span className="text-[10px] text-brand-primary tracking-[0.2em] uppercase font-bold mt-1">
                  Dispatch Services LLC
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Your trusted partner in reliable and efficient truck dispatching services. We help you stay on the road, maximize earnings, and reduce stress.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full glass-dark border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full glass-dark border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full glass-dark border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass-dark border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Two-Column Middle Section on Mobile */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-heading font-bold text-lg">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-brand-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Setup */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-heading font-bold text-lg">Our Services</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link href="/services" className="hover:text-brand-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Office */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-heading font-bold text-lg">Office</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{companyDetails.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{companyDetails.email}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{companyDetails.formattedPhone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyrights © {new Date().getFullYear()}. Fast Lane Dispatch Services LLC. All Rights Reserved.
          </p>
          <a
            href="#"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
