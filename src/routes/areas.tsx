import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/areas")({
  component: AreasPage,
  head: () => ({
    meta: [
      { title: "Bangalore Escorts Locations | Koramangala & Indiranagar Call Girls" },
      { name: "description", content: "Looking for independent call girls near you? We serve all major areas including Koramangala, Indiranagar, and luxury hotels across Bangalore with genuine VIP models." },
      { name: "keywords", content: "escort service Bangalore, escort service in Koramangala, escort service Indiranagar, call girls Whitefield, Bangalore escort service near me" },
    ],
  }),
});

export default function AreasPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">
            <Header />

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Locations</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8">Areas We Serve in Bangalore</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the leading escort service Bangalore, we provide premium incall and outcall services across all major localities in the Garden City, ensuring prompt and discreet arrival.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Koramangala</h2>
              <p>
                Koramangala is not only the central transportation hub of the city but also the proud home of our primary incall facility. If you are searching for an <strong>escort service in Koramangala</strong>, look no further. Our luxury spa is situated conveniently close to the bus stand and major transit routes, making it the perfect discreet getaway for travelers and locals alike. Booking call girls in Bangalore is easiest when you are near our Koramangala headquarters.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Indiranagar</h2>
              <p>
                Known for its upscale cafes, high-end boutiques, and premium residential areas, Indiranagar is a frequent destination for our exclusive outcall services. When you demand the absolute best escort service Bangalore can provide directly to your luxury apartment or boutique hotel in Indiranagar, our VIP companions are just a phone call away. Discretion and elegance are guaranteed in this posh locality.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Whitefield</h2>
              <p>
                Home to massive shopping complexes like World Trade Park and a bustling nightlife, Whitefield is one of our most requested service areas. Whether you are staying at a prominent hotel near Outer Ring Road or residing in the upscale sectors of Whitefield, our premium spa and companion services are readily available to enhance your evening with unforgettable moments.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">MG Road</h2>
              <p>
                MG Road is famous for its vibrant food scene and lively atmosphere. After a long day of exploring or business meetings, you might want to unwind. Our premium kavya escort service services extend seamlessly into MG Road. We provide swift outcall services to all major accommodations in and around the MG Road area, ensuring you get the relaxation you deserve without any hassle.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">HSR Layout</h2>
              <p>
                HSR Layout is synonymous with heritage hotels and colonial-era architecture. Many of our elite clients who visit Bangalore for leisure choose to stay in this historically rich neighborhood. We offer our bespoke outcall <strong>escort service in Bangalore</strong> directly to these heritage properties. When you want to experience the royal treatment in the royal city, our sophisticated call girls are the perfect addition to your HSR Layout itinerary.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">JP Nagar</h2>
              <p>
                As one of the largest residential colonies in Asia, JP Nagar is a key service area for Kavya Escort Service. We understand that residents and visitors in this expansive area demand prompt and discreet service. Our extensive network allows us to provide rapid outcall <strong>Bangalore escort girls</strong> to any sector of JP Nagar, ensuring your privacy is completely safeguarded in residential settings.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Bannerghatta Road</h2>
              <p>
                Bannerghatta Road is a major arterial route lined with top-tier corporate hotels and business centers. For business travelers attending conferences or corporate events here, finding a moment of relaxation is crucial. We specialize in providing highly professional and articulate companions to luxury hotels along Bannerghatta Road, guaranteeing an evening of stress-free, premium companionship.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Manyata Tech Park & UB City</h2>
              <p>
                The areas surrounding Manyata Tech Park Fort and UB City boast some of the most luxurious and secluded resorts in Karnataka. Our VIP clients often request outcall services to these majestic locations. We coordinate seamlessly to ensure our elite companions arrive discreetly at these distant, high-end resorts, providing an unparalleled romantic and luxurious experience against the backdrop of Bangalore's heritage.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Outer Ring Road</h2>
              <p>
                Jawaharlal Nehru Marg is home to 5-star properties, universities, and massive commercial hubs. Whether you are staying at a luxury hotel near the World Trade Park or a boutique property along the marg, our <strong>escort service Bangalore</strong> is perfectly positioned to serve you. We guarantee fast, discreet, and verified outcall services across the entire Outer Ring Road stretch.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg md:col-span-2">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Electronic City & Beyond</h2>
              <p className="mb-4">
                The sprawling, wealthy suburbs of Electronic City demand a certain standard of luxury, and we are proud to deliver exactly that. Our outcall escort service Bangalore covers Electronic City, JP Nagar, HSR Layout, and Jayanagar comprehensively. We understand that our elite clients reside in these areas, which is why we ensure our VIP companions arrive quickly and discreetly in unmarked vehicles.
              </p>
              <p>
                No matter where you are located in the city—whether you are near the historic Hawa Mahal, staying near the airport, or relaxing in the outskirts—Kavya Escort Service is dedicated to reaching you. We are truly the most extensive and reliable escort service Bangalore has to offer.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-3xl text-gold-gradient mb-6 text-center">Available in All Bangalore Locations: Logistics & Delivery</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                As the most prominent <strong>escort service Bangalore</strong> has to offer, Kavya Escort Service has established a highly efficient logistics network to ensure our companions can reach you anywhere in the city promptly and safely. Whether you are staying at a luxury resort on the outskirts or a business hotel in the city center, our premium call girls are just a booking away.
              </p>
              <p>
                <strong>Central Business Districts:</strong> For clients in areas like Indiranagar, Brigade Road, and Jayanagar, we guarantee extremely fast arrival times. These areas are the hubs of corporate travel, and we understand that businessmen often have tight schedules. Our VIP escorts can arrive at your hotel within 30-45 minutes of booking confirmation.
              </p>
              <p>
                <strong>Residential Hubs:</strong> We provide discreet outcall services to massive residential colonies like JP Nagar, Electronic City, and Whitefield. We understand the paramount importance of privacy when visiting residential addresses. Our companions arrive dressed elegantly and inconspicuously, ensuring absolute discretion for your peace of mind.
              </p>
              <p>
                <strong>Tourist & Heritage Zones:</strong> For tourists staying near Manyata Tech Park, UB City, or the old walled city, our <strong>Bangalore escort girls</strong> offer the perfect companionship for sightseeing by day and passionate romance by night. We coordinate carefully with clients in these areas to navigate traffic and ensure timely arrivals to heritage properties and luxury resorts.
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
