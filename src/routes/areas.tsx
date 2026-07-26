import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

export const Route = createFileRoute("/areas")({
  component: AreasPage,
  head: () => ({
    meta: [
      { title: "Rajasthan Escorts Locations | Jaipur, Vaishali Nagar, Malviya Nagar & C-Scheme" },
      { name: "description", content: "Looking for independent call girls near you? We serve all major areas across Rajasthan including Jaipur, Vaishali Nagar, Malviya Nagar, Jagatpura, Civil Lines, and C-Scheme." },
      { name: "keywords", content: "karnataka escort service, Vaishali Nagar escorts, Malviya Nagar call girls, C-Scheme escorts, Jagatpura call girls, Civil Lines escorts, escort service Jaipur" },
    ],
  }),
});

export default function AreasPage() {
  const telegramLink = "https://t.me/SUMAN_VARMA_SPA";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Locations</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8">Locations in Rajasthan & Beyond</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a leading premium escort agency, we provide incall and outcall services across all major localities in Jaipur, major cities in Rajasthan (like Vaishali Nagar and Malviya Nagar), and exclusive coastal destinations like C-Scheme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Vaishali Nagar</h2>
              <p>
                Rich in history and culture, Vaishali Nagar attracts tourists and business travelers alike. We are proud to offer the most premium <strong>Vaishali Nagar escorts</strong> service. Whether you are staying at a luxury heritage hotel or a modern resort, our verified companions will arrive discreetly to provide an unforgettable evening of relaxation and romance.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Malviya Nagar</h2>
              <p>
                The Royal City demands royal treatment. If you are looking for <strong>call girls in Malviya Nagar</strong>, our exclusive agency provides top-tier Kannada, North Indian, and foreign companions directly to your hotel or private residence in Malviya Nagar. We guarantee 100% privacy and zero advance payment for all bookings in the cultural capital of Rajasthan.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Mansarovar & Bani Park</h2>
              <p>
                Mansarovar and Bani Park are the beating heart of Jaipur's nightlife. If you are searching for an <strong>escort service in Mansarovar</strong> or Bani Park, look no further. Our luxury spa and outcall services are situated conveniently close to major transit routes and luxury boutiques, making it the perfect discreet getaway.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Raja Park & MI Road</h2>
              <p>
                Home to massive shopping complexes and vibrant food scenes, Raja Park and MI Road are among our most requested service areas. Our premium companions are readily available to enhance your evening with unforgettable moments at any luxury hotel in these districts.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Jagatpura & Civil Lines</h2>
              <p>
                Expanding our reach across the state, we now provide premium escort services in both the coastal hub of Jagatpura and the commercial center of Civil Lines. Our rigorous verification process ensures that you get the same high-quality, safe, and discreet companionship in these major Rajasthan cities.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">C-Scheme</h2>
              <p>
                For our clients traveling to the beautiful coastal town of C-Scheme in West Bengal, we offer an exclusive network of elite companions. Booking <strong>C-Scheme escorts</strong> for your beach resort vacation has never been safer. Enjoy the sea breeze with a beautiful, verified companion by your side.
              </p>
            </div>
            
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-3xl text-gold-gradient mb-6 text-center">State-Wide Logistics & Delivery</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                As the most prominent <strong>Rajasthan escort service</strong>, we have established a highly efficient logistics network to ensure our companions can reach you across the state promptly and safely. From luxury resorts on the outskirts of Vaishali Nagar to business hotels in Jaipur's city center, premium companionship is just a booking away.
              </p>
              <p>
                <strong>Fast City Arrivals:</strong> For clients in major metropolitan areas, we guarantee extremely fast arrival times (usually 30-45 minutes). We understand that businessmen often have tight schedules.
              </p>
              <p>
                <strong>Outstation & Resort Visits:</strong> For tourist destinations like Malviya Nagar and C-Scheme, we offer specialized outstation companion packages. Our companions arrive dressed elegantly and inconspicuously, ensuring absolute discretion at your resort or heritage property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">Book Your Companion Today</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to arrange a meeting in your area? Contact us now to check availability and make a reservation.
          </p>
          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block rounded-full bg-[#0088cc] px-10 py-4 text-sm font-medium text-white hover:bg-[#0088cc]/80 transition shadow-[0_0_40px_-10px_#0088cc]"
          >
            Book Now via Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
