import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/help")({
  component: HelpPage,
  head: () => ({
    meta: [
      { title: "Help & FAQ | Suman Escort Service Booking Guide" },
      { name: "description", content: "Frequently asked questions about booking call girls. Learn about our strict Direct Cash Payment policy, incall/outcall differences, and privacy guarantees." },
    ],
  }),
});

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Support & Guide</p>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-6">Help & FAQs</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our booking process, privacy standards, and payment methods.
            </p>
          </div>

          <div className="space-y-8">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">1. How do I book an escort?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Booking with us is simple and secure. You can browse our profiles and contact our management team directly via WhatsApp or Telegram. Let us know your preferred time, location, and the type of companion you are looking for. We will provide you with verified photos of currently available companions for you to choose from.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">2. Do you require any advance payment?</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Absolutely not.</strong> We operate strictly on a Direct Cash Payment system. You never have to pay a single rupee in advance, and there are no registration fees or hidden charges. You hand the cash directly to the companion when she arrives and only after you are completely satisfied with the match.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">3. What is the difference between Incall and Outcall?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Incall:</strong> You visit our discreet, luxurious, and highly secure private apartments or spas. We provide a safe, fully equipped environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Outcall:</strong> The companion visits you at your location (such as a 5-star hotel, resort, or private residence). We guarantee prompt 30-45 minute arrivals to all major areas like Koramangala, Indiranagar, Hassan, and Mysore.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">4. Are the photos real?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yes. We guarantee 100% verified profiles. The girl you see in the photos is exactly the girl who will arrive at your door. If for any reason there is a mismatch (which does not happen with our agency), you have the right to cancel the booking immediately without paying anything.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">5. Is my privacy protected?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Discretion is the cornerstone of our business. Because we only accept Direct Cash Payment, there is no digital trail, no credit card statement, and no bank record of your transaction. We do not store your phone number or booking history after the service is completed.
              </p>
            </div>

          </div>
          
          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8">If you have experienced an issue or need specific help, you can report it directly to our management.</p>
            <a href="/report" className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-white hover:bg-primary/90 transition shadow-[0_0_20px_-5px_#ff2a75]">
              Report an Issue
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
