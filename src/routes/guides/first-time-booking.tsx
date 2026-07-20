import { createFileRoute, Link } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/guides/first-time-booking")({
  component: FirstTimeBookingPage,
  head: () => ({
    meta: [
      { title: "First-Timer's Guide to Booking Escorts in Jaipur" },
      { name: "description", content: "Nervous about your first time? Read our step-by-step guide on how to safely and securely book premium Jaipur escort services." },
    ],
  }),
});

function FirstTimeBookingPage() {
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
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">First-Timer's Guide to Booking Escorts in Jaipur</h1>
            
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
              Booking an <Link to="/">escort service in Jaipur</Link> for the first time can feel intimidating. The internet is filled with unreliable agencies, and it's natural to have concerns about privacy, safety, and legitimacy. At Payal Escort Service, we aim to make your first experience completely seamless and stress-free.
            </p>

            <h2>Step 1: Browse Our Verified Gallery</h2>
            <p>
              The first step is to view our <Link to="/book">gallery of independent call girls</Link>. Take your time to read their descriptions. Look for the "Best For" tags to find a companion that matches your specific desires—whether that's a romantic dinner date or a wild, passionate evening.
            </p>

            <h2>Step 2: Choose Between Incall and Outcall</h2>
            <p>
              Decide where you want the meeting to take place. If you have a private hotel room in a nice area (like C Scheme or Malviya Nagar), you can choose our outcall service. If you'd rather visit our highly secure and sanitized spa facility, choose our incall service located in <strong>Sindhi Camp</strong>. <Link to="/guides/incall-vs-outcall">Read our full guide on Incall vs Outcall here.</Link>
            </p>

            <h2>Step 3: Contact Us Securely</h2>
            <p>
              The easiest and most discreet way to book is via WhatsApp. Send us a message stating the companion you are interested in, the duration you want, and your location preference. We respond promptly and will confirm availability.
            </p>

            <h2>Step 4: The Advance Token</h2>
            <p>
              To filter out non-serious inquiries and ensure the safety of our girls, we require a small token advance payment to confirm the booking. The remaining balance is paid directly to the companion in cash when you meet. This protects both you and the agency.
            </p>

            <h2>Etiquette Tips for First-Timers</h2>
            <ul>
              <li><strong>Be Respectful:</strong> Treat your companion like a genuine date. A Girlfriend Experience (GFE) thrives on mutual respect and chemistry.</li>
              <li><strong>Personal Hygiene:</strong> Showering before your appointment is mandatory. A clean client is always a happy companion's favorite client.</li>
              <li><strong>Communication:</strong> Let your companion know what you like. Open communication ensures you both have a fantastic time.</li>
            </ul>
            
            <p>
              Ready for an unforgettable experience? Don't hesitate to reach out. Our team is highly experienced in guiding first-time clients through the process.
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
