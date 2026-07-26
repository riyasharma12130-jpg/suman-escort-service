import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Suman Escort Service" },
      { name: "description", content: "Read our strict privacy policy. We guarantee 100% confidentiality, no data retention, and untraceable Direct Cash Payments for all escort bookings." },
    ],
  }),
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            
            <p className="text-lg leading-relaxed mb-8">
              At Suman Escort Service, we understand that discretion and confidentiality are the most important factors for our clients. This Privacy Policy outlines our strict data handling practices and our commitment to ensuring that your interactions with our agency remain completely private and untraceable.
            </p>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">1. Zero Data Retention Policy</h2>
            <p className="mb-6 leading-relaxed">
              We operate under a strict "Zero Data Retention" policy. When you contact us via WhatsApp, Telegram, or phone call to arrange a booking, the communication is temporarily used solely for the purpose of dispatching a companion to your location. Once the service is completed, all communication logs, chat histories, and contact numbers are permanently deleted from our primary dispatch devices.
            </p>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">2. Payment Privacy & Direct Cash</h2>
            <p className="mb-6 leading-relaxed">
              We do not use online payment gateways, credit card processing, or digital wallets for our services. By exclusively utilizing a <strong>Direct Cash Payment</strong> system, we guarantee that there will be absolutely no digital paper trail, bank statement entries, or electronic records of your transaction. You simply hand the cash to the companion, ensuring total anonymity.
            </p>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">3. Information We Do Not Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We do not ask for or store your real name (aliases are encouraged).</li>
              <li>We do not collect credit card or banking information.</li>
              <li>We do not use tracking cookies to build marketing profiles of our visitors.</li>
              <li>We do not require account registration or email sign-ups to view our galleries.</li>
            </ul>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">4. Hotel & Outcall Discretion</h2>
            <p className="mb-6 leading-relaxed">
              When providing outcall services to hotels, resorts, or private residences in areas like Hassan, Mysore, Digha, or Jaipur, our companions are trained to arrive discreetly. They do not carry branded agency material and conduct themselves as regular guests or acquaintances, ensuring that hotel staff or neighbors are unaware of the nature of the visit.
            </p>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">5. Confidentiality of Companions</h2>
            <p className="mb-6 leading-relaxed">
              Just as we protect your privacy, we rigorously protect the privacy of our independent companions. Client requests to photograph, record, or illegally document our companions are strictly prohibited. Any violation of this policy will result in immediate termination of the service without refund and permanent blacklisting from our agency.
            </p>

            <h2 className="font-display text-2xl text-white mt-12 mb-6">6. Changes to this Policy</h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time to reflect changes in our operational procedures or legal requirements. Any modifications will be effective immediately upon posting on this website.
            </p>
            
          </div>
        </div>
      </main>
    </div>
  );
}
