import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book VIP Jaipur Escorts | Direct Cash Payment Call Girls" },
      { name: "description", content: "Book genuine Jaipur call girls & VIP escorts safely. 24/7 booking available for hotel outcalls and incalls with complete privacy and Direct Cash Payment." },
      { name: "keywords", content: "book escort service Jaipur, Suman Escorts Jaipur booking, call girl booking Jaipur, escort service booking in Mansarovar" },
    ],
  }),
});

export default function BookPage() {
  const telegramHandle = "@SUMAN_VARMA_SPA";
  const telegramLink = "https://t.me/SUMAN_VARMA_SPA";

  return (
    <div className="min-h-screen bg-background text-foreground">

            <Header />

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Booking</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">Book Your Jaipur Escort</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Quick Booking</h2>
              <p className="text-muted-foreground mb-6">
                For immediate booking, contact us directly via Telegram. Our team is available 24/7 to assist you with discreet, professional service.
              </p>
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block w-full text-center rounded-full bg-[#0088cc] px-8 py-4 text-sm font-medium text-white hover:bg-[#0088cc]/80 transition shadow-[0_0_40px_-10px_#0088cc]"
              >
                Telegram: {telegramHandle}
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Booking Process</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">1.</span>
                  <span>Contact us via Telegram with your requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">2.</span>
                  <span>Confirm your booking with zero advance payment</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">3.</span>
                  <span>Receive escort details and meeting location</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">4.</span>
                  <span>Enjoy premium service with complete privacy</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-gold-gradient">Service Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-border rounded-lg">
                <h3 className="font-display text-xl mb-2">Incall</h3>
                <p className="text-muted-foreground text-sm mb-3">Service at our premium location</p>
                <p className="font-display text-2xl text-primary">₹5,000</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h3 className="font-display text-xl mb-2">Outcall</h3>
                <p className="text-muted-foreground text-sm mb-3">Service at your location</p>
                <p className="font-display text-2xl text-primary">₹8,000</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h3 className="font-display text-xl mb-2">VIP Service</h3>
                <p className="text-muted-foreground text-sm mb-3">Premium exclusive service</p>
                <p className="font-display text-2xl text-primary">₹15,000</p>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-gold-gradient">Important Booking Guidelines</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                As the leading <strong>escort service Jaipur</strong>, we maintain strict guidelines to ensure the safety and satisfaction of both our clients and our companions. Please read these terms carefully before proceeding with your booking.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Age Verification:</strong> You must be at least 18 years of old to use our services. Valid ID may be required upon request.</li>
                <li><strong>Zero Advance Payment:</strong> We have a strict no-advance policy. The full balance is paid directly to the companion upon arrival in cash.</li>
                <li><strong>Respect and Decency:</strong> We have a zero-tolerance policy for abuse, harassment, or non-consensual behavior. Our companions are professionals and expect to be treated with utmost respect. Any violation of this will result in immediate termination of the service without refund.</li>
                <li><strong>Substance Policy:</strong> The use of illegal narcotics during the service is strictly prohibited. Intoxicated clients may be refused service at the discretion of the companion.</li>
                <li><strong>Privacy:</strong> We guarantee 100% discretion. In return, we expect our clients to respect the privacy of our companions. No unauthorized photography or recording is permitted under any circumstances.</li>
              </ul>
              <p className="mt-4">
                By contacting us to <strong>book call girls in Jaipur</strong>, you automatically agree to abide by these guidelines. We are committed to providing a safe, luxurious, and unforgettable experience for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}