import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from '../../components/Header';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/guides/first-time-booking")({
  component: FirstTimeBookingPage,
  head: () => ({
    meta: [
      { title: "First-Timer's Guide to Booking Escorts in Bangalore" },
      { name: "description", content: "Nervous about your first time? Read our step-by-step guide on how to safely and securely book premium Bangalore escort services." },
    ],
  }),
});

function FirstTimeBookingPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">
            <Header />

      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <Link to="/guides" className="text-xs uppercase tracking-widest text-primary hover:underline mb-4 inline-block">← Back to Guides</Link>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">First-Timer's Guide to Booking Escorts in Bangalore</h1>
            
            <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-primary/80 border-b border-border/50 pb-6">
              <span className="flex items-center gap-2">
                Written by Kavya (Agency Director)
              </span>
              <span>|</span>
              <span>
                Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-display prose-a:text-primary max-w-none">
            <p>
              Booking an <Link to="/">escort service in Bangalore</Link> for the first time can feel intimidating. The internet is filled with unreliable agencies, and it's natural to have concerns about privacy, safety, and legitimacy. At Kavya Escort Service, we aim to make your first experience completely seamless and stress-free.
            </p>

            <h2>Step 1: Browse Our Verified Gallery</h2>
            <p>
              The first step is to view our <Link to="/book">gallery of independent call girls</Link>. Take your time to read their descriptions. Look for the "Best For" tags to find a companion that matches your specific desires—whether that's a romantic dinner date or a wild, passionate evening.
            </p>

            <h2>Step 2: Choose Between Incall and Outcall</h2>
            <p>
              Decide where you want the meeting to take place. If you have a private hotel room in a nice area (like Indiranagar or Whitefield), you can choose our outcall service. If you'd rather visit our highly secure and sanitized spa facility, choose our incall service located in <strong>Koramangala</strong>. <Link to="/guides/incall-vs-outcall">Read our full guide on Incall vs Outcall here.</Link>
            </p>

            <h2>Step 3: Contact Us Securely</h2>
            <p>
              The easiest and most discreet way to book is via Telegram. Send us a message stating the companion you are interested in, the duration you want, and your location preference. We respond promptly and will confirm availability.
            </p>

            <h2>Step 4: Booking Confirmation</h2>
            <p>
              Unlike scam agencies, we do not require any advance token. You simply verify your location, and you pay directly in cash when you meet the companion. This protects both you and the agency.
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

      
    </div>
  );
}
