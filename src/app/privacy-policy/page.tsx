import { PageHero } from "@/components/ui/PageHero";
import { companyDetails } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fast Lane Dispatch Services LLC",
  description: "Read the privacy policy for Fast Lane Dispatch Services LLC.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero 
        subtitle="Agreements" 
        title="Privacy Policy" 
        backgroundImage="/images/StraightTruck.jpg"
      />
      <div className="bg-brand-darker min-h-screen pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-sans leading-relaxed">
          <p>
            At <strong>{companyDetails.name}</strong>, accessible from{" "}
            <span className="text-brand-primary">fastlanedispatchservicesllc.com</span>, your
            privacy is one of our top priorities. This Privacy Policy document
            outlines the types of information we collect, how we use it, and how we
            protect it.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            1. Information We Collect
          </h2>
          <p>When you visit our website or use our services, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Personal Identification Information</strong> – such as name,
              phone number, email address, company name, and address.
            </li>
            <li>
              <strong>Vehicle and Business Information</strong> – including equipment
              types, routes, and carrier preferences.
            </li>
            <li>
              <strong>Usage Data</strong> – such as browser type, IP address, device
              information, and how you interact with our website.
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To provide and improve our dispatching services.</li>
            <li>To communicate with you regarding loads, routes, and support.</li>
            <li>To send emails related to updates, service changes, or promotions.</li>
            <li>To process paperwork and broker setups on your behalf.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            3. Sharing Your Information
          </h2>
          <p>
            We dot not sell, rent, or trade your personal information. We may share
            information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Trusted third-party service providers who assist with operations.</li>
            <li>Brokers, carriers, or clients when necessary to perform dispatching services.</li>
            <li>Government agencies or legal entities, when required by law.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            4. Data Security
          </h2>
          <p>
            We take reasonable and appropriate steps to protect your personal data from
            unauthorized access, alteration, or disclosure. While we strive to use
            commercially acceptable means to protect your information, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            5. Cookies and Tracking
          </h2>
          <p>
            Our website may use cookies or similar technologies to enhance your
            browsing experience. You can disable cookies through your browser
            settings, but this may affect website functionality.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            6. Your Privacy Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections or deletion of your information.</li>
            <li>Opt-out of marketing emails at any time.</li>
          </ul>
          <p className="mt-4">To exercise these rights, please contact us using the details below.</p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            7. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            8. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated "Effective Date."
          </p>

          <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">
            Contact Us
          </h2>
          <p>If you have any questions about this Privacy Policy or your personal data, please contact us:</p>
          <ul className="list-none space-y-2 mt-4 glass p-6 rounded-xl border border-white/10 w-fit">
            <li><strong>Email:</strong> <a href={`mailto:${companyDetails.email}`} className="text-brand-primary hover:underline">{companyDetails.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${companyDetails.phone}`} className="text-brand-primary hover:underline">{companyDetails.formattedPhone}</a></li>
            <li><strong>Address:</strong> {companyDetails.address}</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
