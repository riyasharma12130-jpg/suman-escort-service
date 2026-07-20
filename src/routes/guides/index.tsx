import { createFileRoute, Link } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/guides/")({
  component: GuidesPage,
  head: () => ({
    meta: [
      { title: "Helpful Guides & Articles | Payal Escort Service Jaipur" },
      { name: "description", content: "Explore our helpful guides, tips, and insights on booking the best escort services in Jaipur. Read our articles on Incall vs Outcall, safety, and more." },
    ],
  }),
});

function GuidesPage() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;

  const articles = [
    {
      title: "Incall vs Outcall Escort Services: Which is Right for You?",
      description: "A comprehensive breakdown of the differences between incall spa services in Sindhi Camp and outcall hotel visits.",
      path: "/guides/incall-vs-outcall",
      author: "Payal",
      date: "July 2026",
    },
    {
      title: "First-Timer's Guide to Booking Escorts in Jaipur",
      description: "Nervous about your first booking? Read our step-by-step guide on how to book safely and what to expect.",
      path: "/guides/first-time-booking",
      author: "Payal",
      date: "July 2026",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl tracking-wide text-gold-gradient">Payal Escort Service</Link>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/areas" className="hover:text-primary transition">Areas Served</Link>
            <Link to="/book" className="hover:text-primary transition">Book</Link>
            <Link to="/guides" className="text-primary transition">Guides</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Resources</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">Guides & Insights</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about navigating the premium escort and spa industry in Jaipur. Tips, etiquette, and booking advice.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <article key={idx} className="bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="text-primary">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="font-display text-2xl text-gold-gradient mb-3">
                    <Link to={article.path} className="hover:underline">{article.title}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{article.description}</p>
                </div>
                <Link to={article.path} className="text-sm uppercase tracking-widest text-primary hover:text-gold transition mt-auto">Read Guide →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Payal Escort Service</p>
        <p>© {new Date().getFullYear()} Payal Escort Service & Companion Services</p>
      </footer>
    </div>
  );
}
