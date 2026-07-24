import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title: "Why Choose Us | Bangalore's #1 Trusted Escort Agency" },
      { name: "description", content: "Discover why we are the top choice for escort services in Bangalore. 100% verified profiles, zero advance payment, and strict privacy." },
    ],
  }),
});

function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <Header />

      <main className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">TRUST & QUALITY</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Why Kavya Escort is Bangalore's #1 Choice</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We operate on three core principles: Verification, Discretion, and Transparency.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-3xl">🛡️</span>
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-3">100% Verified Profiles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every companion is verified with real photos and identity confirmation. Zero fake profiles, zero bait-and-switch. What you see on our gallery is exactly who will arrive at your door.
              </p>
            </div>
          </div>

          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-3xl">🤫</span>
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-3">Your Privacy is Our Priority</h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand the importance of discretion. We do not store your data, we keep no records of your visits, and we do not require any advance payment before meeting. Your secret is safe with us.
              </p>
            </div>
          </div>

          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-3xl">⏱️</span>
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-3">Fast & Reliable Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our companions are strategically located across Bangalore for fast delivery to your hotel, home, or office. We guarantee arrival within 30-45 minutes for outcall bookings in major areas like Koramangala and Indiranagar.
              </p>
            </div>
          </div>

          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-3xl">💰</span>
            </div>
            <div>
              <h2 className="font-display text-2xl text-white mb-3">Transparent Fixed Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Starting from ₹3,000/hr with absolutely no hidden fees. No registration charges, no advance deposit required, and no last-minute price hikes. You pay exactly what is quoted.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
