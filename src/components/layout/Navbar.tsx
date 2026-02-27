"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { companyDetails, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-brand-darker border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-primary" />
              {companyDetails.email}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4 text-brand-primary" />
            <span className="font-semibold text-white">{companyDetails.formattedPhone}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled && !isOpen ? "glass border-b border-white/10 shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover:scale-105 transition-transform shrink-0">
              <span className="font-heading font-extrabold text-black text-xl">FL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-widest uppercase leading-none">
                Fast <span className="text-brand-primary">Lane</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-brand-primary tracking-[0.2em] uppercase font-bold mt-1">
                Dispatch Services LLC
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-sans text-sm font-medium transition-colors hover:text-brand-primary",
                      pathname === link.href ? "text-brand-primary text-glow" : "text-gray-300"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/contact-us">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-50 hover:text-brand-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 -z-10 glass-dark border-b border-white/10 flex flex-col pt-28 pb-8 px-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <Link
                    href={link.href}
                    className={cn(
                      "block font-heading text-3xl font-bold tracking-wide transition-all hover:text-brand-primary hover:scale-105",
                      pathname === link.href ? "text-brand-primary glow-text" : "text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-6 pt-8 border-t border-white/10 mt-auto animate-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="flex flex-col items-center gap-4 text-gray-300 text-base">
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                {companyDetails.email}
              </span>
              <span className="flex items-center gap-3 font-medium text-white">
                <Phone className="w-5 h-5 text-brand-primary" />
                {companyDetails.formattedPhone}
              </span>
            </div>
            <Button asChild className="w-full py-6 text-lg font-bold shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all">
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
