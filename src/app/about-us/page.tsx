import { SectionTitle } from "@/components/ui/SectionTitle";
import { companyDetails, whyChooseUs } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Fast Lane Dispatch Services LLC",
  description: "Learn about Fast Lane Dispatch Services LLC, your trusted partner in truck dispatching. Discover who we are and why carriers choose us.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-darker min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-16">
          
          {/* Intro Section */}
          <section className="flex flex-col items-center text-center gap-6">
            <SectionTitle
              subtitle="Our Story"
              title="About Us"
              center
            />
            <p className="text-xl text-gray-300 font-sans leading-relaxed mt-4">
              Welcome to <strong>{companyDetails.name}</strong> – your trusted
              partner in reliable and efficient truck dispatching services. We
              specialize in providing high-quality dispatch solutions for carriers and
              owner-operators across the United States.
            </p>
          </section>

          {/* Who We Are */}
          <section className="glass p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
            <h3 className="text-3xl font-heading font-bold text-white mb-6 relative z-10">Who We Are</h3>
            <div className="flex flex-col gap-6 text-gray-300 font-sans leading-relaxed relative z-10">
              <p>
                Based in <strong>Kalispell, MT</strong>, {companyDetails.name} is
                committed to supporting the backbone of America — our truck drivers. Our
                experienced dispatchers work around the clock to ensure you get access
                to top-paying loads while minimizing downtime and paperwork.
              </p>
              <p>
                We understand the challenges of life on the road, which is why we
                provide a personalized dispatching experience tailored to your
                equipment, preferred routes, and schedule.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h3 className="text-3xl font-heading font-bold text-white mb-8 text-center">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="glass-dark p-6 rounded-xl border border-white/5 hover:border-brand-primary/30 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-400 font-sans text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
