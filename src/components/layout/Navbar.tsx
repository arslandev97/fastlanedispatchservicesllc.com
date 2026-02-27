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
          scrolled ? "glass border-b border-white/10 shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover:scale-105 transition-transform">
              <span className="font-heading font-extrabold text-black text-xl">FL</span>
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-widest uppercase">
              Fast <span className="text-brand-primary">Lane</span>
            </span>
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
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full glass-dark border-b border-white/10 shadow-2xl py-6 px-4 flex flex-col gap-6 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "block font-heading text-lg font-medium transition-colors hover:text-brand-primary",
                    pathname === link.href ? "text-brand-primary" : "text-gray-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-primary" />
              {companyDetails.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-primary" />
              {companyDetails.formattedPhone}
            </span>
          </div>
          <Button asChild className="w-full">
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
