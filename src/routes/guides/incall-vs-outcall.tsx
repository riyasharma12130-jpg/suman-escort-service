import { createFileRoute, Link } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/guides/incall-vs-outcall")({
  component: IncallVsOutcallPage,
  head: () => ({
    meta: [
      { title: "Incall vs Outcall Escort Services | Jaipur Call Girls Guide" },
      { name: "description", content: "Learn the difference between incall and outcall services when booking call girls in Jaipur. Decide which premium experience is right for you." },
    ],
  }),
});

function IncallVsOutcallPage() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl tracking-wide text-gold-gradient">Payal Escort Service</Link>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/guides" className="text-primary transition">Guides</Link>
            <Link to="/book" className="hover:text-primary transition">Book</Link>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <Link to="/guides" className="text-xs uppercase tracking-widest text-primary hover:underline mb-4 inline-block">← Back to Guides</Link>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">Incall vs Outcall Escort Services: Which is Right for You?</h1>
            
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-primary/80 border-b border-border/50 pb-6">
              <span className="flex items-center gap-2">
                Written by Payal (Agency Director)
              </span>
              <span>|</span>
              <span>
                Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-display prose-a:text-primary max-w-none">
            <p>
              When deciding to <Link to="/">book an escort service in Jaipur</Link>, one of the most common questions our clients ask is: <em>"Should I choose incall or outcall?"</em> Both offer exceptional experiences, but they cater to different needs and logistical preferences.
            </p>

            <h2>What is an Incall Service?</h2>
            <p>
              An <strong>incall service</strong> means that you, the client, travel to the companion's location. At Payal Escort Service, this means visiting our premium, highly discreet spa facility centrally located in <strong>Sindhi Camp</strong>.
            </p>
            <h3>Pros of Incall:</h3>
            <ul>
              <li><strong>Absolute Privacy:</strong> If you cannot host due to family, roommates, or uncooperative hotel staff, our facility offers a 100% private sanctuary.</li>
              <li><strong>Zero Preparation:</strong> You don't have to clean your room or worry about providing amenities. We provide fresh linens, premium toiletries, and ambient lighting.</li>
              <li><strong>Safety & Hygiene:</strong> Our Sindhi Camp location is sanitized rigorously, ensuring the highest standards of cleanliness.</li>
            </ul>

            <h2>What is an Outcall Service?</h2>
            <p>
              An <strong>outcall service</strong> means that the <Link to="/book">Jaipur call girl</Link> travels directly to your location, whether that's a 5-star hotel in C Scheme or a private residence in Malviya Nagar.
            </p>
            <h3>Pros of Outcall:</h3>
            <ul>
              <li><strong>Ultimate Convenience:</strong> You never have to leave your room. You can relax, order room service, and wait for your companion to arrive.</li>
              <li><strong>Comfort of Home:</strong> Some clients feel more comfortable and relaxed in their own familiar environment.</li>
              <li><strong>Discreet Arrival:</strong> Our companions dress elegantly and arrive looking like a typical friend or date, ensuring absolute discretion in hotel lobbies.</li>
            </ul>

            <h2>How to Choose?</h2>
            <p>
              If you value convenience above all and are staying in a comfortable, private hotel room, <strong>outcall</strong> is likely your best choice. If you cannot host or want to experience our dedicated premium spa environment, you should opt for <strong>incall</strong>.
            </p>
            <p>
              Ready to make a booking? <Link to="/book">View our gallery</Link> and contact us today to set up your perfect encounter.
            </p>
          </div>
        </div>
      </article>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Payal Escort Service</p>
        <p>© {new Date().getFullYear()} Payal Escort Service & Companion Services</p>
      </footer>
    </div>
  );
}
