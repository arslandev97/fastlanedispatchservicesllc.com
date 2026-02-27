"use client";

import { PageHero } from "@/components/ui/PageHero";
import { companyDetails } from "@/lib/constants";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <PageHero 
        subtitle="Contact Us" 
        title="Have Questions? Get in touch!" 
        backgroundImage="/images/PowerOnly.webp"
      />
      <div className="bg-brand-darker min-h-screen pt-16">
        <div className="container mx-auto px-4 max-w-6xl pb-24">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details & Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 p-6 glass-dark rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-400 font-sans">{companyDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-dark rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-lg mb-1">Phone</h4>
                  <a href={`tel:${companyDetails.phone}`} className="text-brand-primary font-sans hover:underline">
                    {companyDetails.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-dark rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-lg mb-1">Email</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-brand-primary font-sans hover:underline">
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-gray-400 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-gray-400 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-400 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-gray-400 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-400 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="consent" required className="w-5 h-5 rounded border-gray-600 bg-brand-dark focus:ring-brand-primary text-brand-primary" />
                <label htmlFor="consent" className="text-sm text-gray-400">
                  I agree that my data is collected and stored.
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Get in Touch
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[500px] w-full mt-12 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=1001%20S%20Main%20St%20Ste%20600,%20Kalispell,%20MT%2059901,%20USA+(Fast%20Lane%20Dispatch%20Services%20LLC)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        ></iframe>
      </div>
    </div>
    </>
  );
}
