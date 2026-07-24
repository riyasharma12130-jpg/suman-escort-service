import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from '../../components/Header';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/guides/")({
  component: GuidesPage,
  head: () => ({
    meta: [
      { title: "Helpful Guides & Articles | Kavya Escort Service Bangalore" },
      { name: "description", content: "Explore our helpful guides, tips, and insights on booking the best escort services in Bangalore. Read our articles on Incall vs Outcall, safety, and more." },
    ],
  }),
});

function GuidesPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  const articles = [
    {
      title: "Incall vs Outcall Escort Services: Which is Right for You?",
      description: "A comprehensive breakdown of the differences between incall spa services in Koramangala and outcall hotel visits.",
      path: "/guides/incall-vs-outcall",
      author: "Kavya",
      date: "July 2026",
    },
    {
      title: "First-Timer's Guide to Booking Escorts in Bangalore",
      description: "Nervous about your first booking? Read our step-by-step guide on how to book safely and what to expect.",
      path: "/guides/first-time-booking",
      author: "Kavya",
      date: "July 2026",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
            <Header />

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Resources</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">Guides & Insights</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about navigating the premium escort and spa industry in Bangalore. Tips, etiquette, and booking advice.
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

      
    </div>
  );
}
