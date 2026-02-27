import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Fast Lane Dispatch Services LLC",
  description: "Explore our comprehensive truck dispatching services including Dry Van, Step Deck, Reefer, Flatbed, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        subtitle="What we do" 
        title="Our Dispatch Services" 
        backgroundImage="/images/DedicatedLanes.jpg"
      />
      <div className="bg-brand-darker min-h-screen pt-16 pb-24">
        <div className="container mx-auto px-4">
          {/* Intro Text */}
          <div className="mb-16 text-center max-w-2xl mx-auto flex flex-col items-center">
            <p className="text-gray-300 font-sans leading-relaxed text-lg">
              We provide specialized dispatching solutions tailored to your specific
              equipment type. Our goal is to maximize your earnings and keep you moving
              with top-paying loads.
            </p>
          </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
