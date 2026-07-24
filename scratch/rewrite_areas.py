import os

content = """import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

export const Route = createFileRoute("/areas")({
  component: AreasPage,
  head: () => ({
    meta: [
      { title: "Karnataka Escorts Locations | Bangalore, Hassan, Mysore & Digha" },
      { name: "description", content: "Looking for independent call girls near you? We serve all major areas across Karnataka including Bangalore, Hassan, Mysore, Mangalore, Hubli, and Digha." },
      { name: "keywords", content: "karnataka escort service, hassan escorts, mysore call girls, digha escorts, mangalore call girls, hubli escorts, escort service Bangalore" },
    ],
  }),
});

export default function AreasPage() {
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Locations</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8">Locations in Karnataka & Beyond</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a leading premium escort agency, we provide incall and outcall services across all major localities in Bangalore, major cities in Karnataka (like Hassan and Mysore), and exclusive coastal destinations like Digha.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Hassan</h2>
              <p>
                Rich in history and culture, Hassan attracts tourists and business travelers alike. We are proud to offer the most premium <strong>Hassan escorts</strong> service. Whether you are staying at a luxury heritage hotel or a modern resort, our verified companions will arrive discreetly to provide an unforgettable evening of relaxation and romance.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Mysore</h2>
              <p>
                The Royal City demands royal treatment. If you are looking for <strong>call girls in Mysore</strong>, our exclusive agency provides top-tier Kannada, North Indian, and foreign companions directly to your hotel or private residence in Mysore. We guarantee 100% privacy and zero advance payment for all bookings in the cultural capital of Karnataka.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Koramangala & Indiranagar</h2>
              <p>
                Koramangala and Indiranagar are the beating heart of Bangalore's nightlife. If you are searching for an <strong>escort service in Koramangala</strong> or Indiranagar, look no further. Our luxury spa and outcall services are situated conveniently close to major transit routes and luxury boutiques, making it the perfect discreet getaway.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Whitefield & MG Road</h2>
              <p>
                Home to massive shopping complexes and vibrant food scenes, Whitefield and MG Road are among our most requested service areas. Our premium companions are readily available to enhance your evening with unforgettable moments at any luxury hotel in these districts.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Mangalore & Hubli</h2>
              <p>
                Expanding our reach across the state, we now provide premium escort services in both the coastal hub of Mangalore and the commercial center of Hubli. Our rigorous verification process ensures that you get the same high-quality, safe, and discreet companionship in these major Karnataka cities.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Digha</h2>
              <p>
                For our clients traveling to the beautiful coastal town of Digha in West Bengal, we offer an exclusive network of elite companions. Booking <strong>Digha escorts</strong> for your beach resort vacation has never been safer. Enjoy the sea breeze with a beautiful, verified companion by your side.
              </p>
            </div>
            
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-3xl text-gold-gradient mb-6 text-center">State-Wide Logistics & Delivery</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                As the most prominent <strong>Karnataka escort service</strong>, we have established a highly efficient logistics network to ensure our companions can reach you across the state promptly and safely. From luxury resorts on the outskirts of Hassan to business hotels in Bangalore's city center, premium companionship is just a booking away.
              </p>
              <p>
                <strong>Fast City Arrivals:</strong> For clients in major metropolitan areas, we guarantee extremely fast arrival times (usually 30-45 minutes). We understand that businessmen often have tight schedules.
              </p>
              <p>
                <strong>Outstation & Resort Visits:</strong> For tourist destinations like Mysore and Digha, we offer specialized outstation companion packages. Our companions arrive dressed elegantly and inconspicuously, ensuring absolute discretion at your resort or heritage property.
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
"""

with open('src/routes/areas.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated areas.tsx")
