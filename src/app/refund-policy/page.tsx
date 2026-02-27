import { PageHero } from "@/components/ui/PageHero";
import { companyDetails } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Fast Lane Dispatch Services LLC",
  description: "Read the refund policy for Fast Lane Dispatch Services LLC.",
};

export default function RefundPolicy() {
  return (
    <>
      <PageHero 
        subtitle="Agreements" 
        title="Refund Policy" 
        backgroundImage="/images/BoxTruck.png"
      />
      <div className="bg-brand-darker min-h-screen pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-sans leading-relaxed">
          <p>
            At <strong>{companyDetails.name}</strong>, we strive to deliver top-quality
            dispatching services to all of our clients. We are committed to ensuring
            your satisfaction. However, due to the nature of our services, we have
            established the following refund policy:
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            1. Service-Based Model
          </h2>
          <p>
            {companyDetails.name} operates on a <strong>service-based business model</strong>.
            Fees are charged for the time, effort, and administrative support involved
            in securing loads, handling paperwork, and managing communication between
            carriers and brokers.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            2. No Refunds After Service Delivery
          </h2>
          <p>
            Once our dispatching services have been performed — including, but not
            limited to, load booking, broker communication, paperwork processing, or
            any form of consultation — <strong>no refunds will be issued</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            3. Eligibility for Refunds
          </h2>
          <p>Refunds may only be considered in the following exceptional cases:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Duplicate charges due to billing error.</li>
            <li>
              Payment made for services not rendered (e.g., if no dispatch or load
              booking was performed and no paperwork was initiated).
            </li>
          </ul>
          <p className="mt-4">
            If you believe you were billed in error, please contact us within{" "}
            <strong>7 days of the transaction date</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            4. How to Request a Refund
          </h2>
          <p>To request a refund or raise a billing concern, please contact us at:</p>
          <ul className="list-none space-y-2 mt-4 glass p-6 rounded-xl border border-white/10 w-fit">
            <li><strong>Email:</strong> <a href={`mailto:${companyDetails.email}`} className="text-brand-primary hover:underline">{companyDetails.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${companyDetails.phone}`} className="text-brand-primary hover:underline">{companyDetails.formattedPhone}</a></li>
            <li><strong>Address:</strong> {companyDetails.address}</li>
          </ul>
          <p className="mt-6">
            Please include your name, company name, contact information, date of
            transaction, and reason for the request. Our team will review your case
            and respond within 3–5 business days.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            5. Chargebacks
          </h2>
          <p>
            If you initiate a chargeback or dispute without contacting us first to
            resolve the issue, we reserve the right to suspend or terminate our
            services immediately.
          </p>

          <p className="mt-10 pt-10 border-t border-white/10 text-gray-400">
            Thank you for choosing <strong>{companyDetails.name}</strong>. We
            appreciate your business and are here to support your success on the road.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
