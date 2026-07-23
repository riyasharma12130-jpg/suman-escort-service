import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locations/$locationId")({
  component: LocationPage,
  head: ({ params }) => {
    // Format locationId from "koramangala-call-girls" to "Koramangala Call Girls"
    const formattedLocation = params.locationId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    return {
      meta: [
        { title: `${formattedLocation} | Premium Escort Service from ₹3,000/hr` },
        { name: "description", content: `Book verified ${formattedLocation} from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service. Cash payment, no advance.` },
        { name: "keywords", content: `${formattedLocation}, ${formattedLocation.toLowerCase()} bangalore, escort service in ${formattedLocation.split(' ')[0]}, call girls near ${formattedLocation.split(' ')[0]}` },
      ],
    };
  },
});

function LocationPage() {
  const { locationId } = Route.useParams();
  const telegramLink = "https://t.me/Sonal_0101";
  
  // Format locationId for display
  const formattedLocation = locationId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const shortName = locationId.split('-')[0].charAt(0).toUpperCase() + locationId.split('-')[0].slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Kavya Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground font-medium tracking-wider">
            <a href="/" className="hover:text-primary transition">HOME</a>
            <a href="/escorts" className="hover:text-primary transition">ESCORTS</a>
            <a href="/why-us" className="hover:text-primary transition">WHY US</a>
            <a href="/pricing" className="hover:text-primary transition">PRICING</a>
            <a href="/about" className="hover:text-primary transition">ABOUT</a>
            <a href="/contact" className="hover:text-primary transition">CONTACT</a>
            <a href="/areas" className="text-primary transition">LOCATIONS</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/book" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/80 transition shadow-[0_0_15px_-5px_var(--color-primary)]">Book Now</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">LOCATION SERVICE</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">{formattedLocation}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover premium companionship in {shortName}. Our verified call girls are available 24/7 for discreet incall and outcall services in this area.
          </p>
          <div className="mt-8">
            <a href={telegramLink} className="inline-block rounded-full bg-primary px-10 py-4 text-sm font-medium text-white hover:bg-primary/80 transition shadow-[0_0_40px_-10px_var(--color-primary)]">
              Book in {shortName} Now
            </a>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl">
            <h2 className="font-display text-3xl text-white mb-4">Escort Service in {shortName}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Looking for genuine {formattedLocation.toLowerCase()}? We are the most trusted escort service agency covering {shortName} and surrounding areas. Whether you're searching for a VIP call girl, a local Kannada companion, or an exotic Russian escort, we have 100+ verified profiles available right now.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our {shortName} escort service operates 24 hours a day, 7 days a week. We offer fast 30-minute delivery to all major 5-star hotels, resorts, and residential complexes in the area. Your privacy is our priority—no data stored, no records kept, and no advance payment required.
            </p>
          </div>

          <div className="bg-card/40 border border-border/50 p-8 rounded-2xl">
            <h2 className="font-display text-3xl text-white mb-4">Why Choose Our {shortName} Call Girls?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> <div><strong>100% Verified Profiles:</strong> Real photos, confirmed identity, and regular re-verification.</div></li>
              <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> <div><strong>No Advance Payment:</strong> Pay only after the companion arrives and you're satisfied with the match.</div></li>
              <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> <div><strong>Fast Outcall Delivery:</strong> Our companions are strategically located in {shortName} for quick 30-45 minute arrivals.</div></li>
              <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> <div><strong>Transparent Pricing:</strong> Starting from ₹3,000/hr with absolutely no hidden fees or registration charges.</div></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
