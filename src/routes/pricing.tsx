import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing & Plans | Bangalore Call Girls from ₹3,000/hr" },
      { name: "description", content: "Transparent pricing for Bangalore escort services. Basic Bliss, Extended Pleasure, and All-Night Fantasy plans starting from ₹3,000/hr. No hidden costs." },
    ],
  }),
});

function PricingPage() {
  const telegramLink = "https://t.me/Sonal_0101";
  
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Kavya Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground font-medium tracking-wider">
            <a href="/" className="hover:text-primary transition">HOME</a>
            <a href="/escorts" className="hover:text-primary transition">ESCORTS</a>
            <a href="/why-us" className="hover:text-primary transition">WHY US</a>
            <a href="/pricing" className="text-primary transition">PRICING</a>
            <a href="/about" className="hover:text-primary transition">ABOUT</a>
            <a href="/contact" className="hover:text-primary transition">CONTACT</a>
            <a href="/areas" className="hover:text-primary transition">LOCATIONS</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/book" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/80 transition shadow-[0_0_15px_-5px_var(--color-primary)]">Book Now</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">OUR PLANS</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan that suits your needs and budget. All plans include premium companionship with verified professionals. No advance payment required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col">
            <h3 className="font-display text-3xl text-white mb-2">Basic Bliss</h3>
            <p className="text-sm text-muted-foreground mb-6">Perfect for a quick escape</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">₹3,000</span>
              <span className="text-muted-foreground text-sm">/ hr</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Single Shot</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> 1 Hour Quality Time</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Intimate Conversation</li>
              <li className="flex items-center text-sm text-foreground opacity-50"><span className="text-muted-foreground mr-2">✗</span> Long Drive</li>
            </ul>
            <a href={telegramLink} className="w-full text-center rounded-full bg-primary/20 text-primary border border-primary/30 py-3 hover:bg-primary hover:text-white transition font-bold">Book Now</a>
          </div>

          {/* Plan 2 */}
          <div className="bg-primary/10 border border-primary/50 p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_-15px_var(--color-primary)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-display text-3xl text-white mb-2">Extended Pleasure</h3>
            <p className="text-sm text-muted-foreground mb-6">More time for deeper connections</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">₹5,000</span>
              <span className="text-muted-foreground text-sm">/ 2 hrs</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Double Shot</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> 2 Hours Quality Time</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Intimate Conversation</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> All Premium Services</li>
            </ul>
            <a href={telegramLink} className="w-full text-center rounded-full bg-primary text-white py-3 hover:bg-primary/80 transition font-bold">Book Now</a>
          </div>

          {/* Plan 3 */}
          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl flex flex-col">
            <h3 className="font-display text-3xl text-white mb-2">All-Night Fantasy</h3>
            <p className="text-sm text-muted-foreground mb-6">Unrestricted joy until dawn</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">₹12,000</span>
              <span className="text-muted-foreground text-sm">/ Night</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Unlimited Shots</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Full Night (8+ Hours)</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Girlfriend Experience</li>
              <li className="flex items-center text-sm text-foreground"><span className="text-primary mr-2">✓</span> Long Drive & Dinner</li>
            </ul>
            <a href={telegramLink} className="w-full text-center rounded-full bg-primary/20 text-primary border border-primary/30 py-3 hover:bg-primary hover:text-white transition font-bold">Book Now</a>
          </div>
        </div>
      </main>
    </div>
  );
}
