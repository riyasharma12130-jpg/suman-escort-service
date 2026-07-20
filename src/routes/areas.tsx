import { createFileRoute } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/areas")({
  component: AreasPage,
  head: () => ({
    meta: [
      { title: "Areas Served | Escort Service Jaipur in Sindhi Camp, C Scheme & More" },
      { name: "description", content: "Looking for an escort service Jaipur near you? We serve Sindhi Camp, C Scheme, Malviya Nagar, Raja Park, and all major areas in Jaipur. Outcall & Incall available." },
      { name: "keywords", content: "escort service Jaipur, escort service in Sindhi Camp, escort service C Scheme, call girls Malviya Nagar, Jaipur escort service near me" },
    ],
  }),
});

export default function AreasPage() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Riya Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/about" className="hover:text-primary transition">About</a>
            <a href="/areas" className="text-primary transition">Areas Served</a>
            <a href="/book" className="hover:text-primary transition">Book</a>
            <a href="/contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]" aria-label="WhatsApp Contact">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Locations</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8">Areas We Serve in Jaipur</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the leading escort service Jaipur, we provide premium incall and outcall services across all major localities in the Pink City, ensuring prompt and discreet arrival.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Sindhi Camp</h2>
              <p>
                Sindhi Camp is not only the central transportation hub of the city but also the proud home of our primary incall facility. If you are searching for an <strong>escort service in Sindhi Camp</strong>, look no further. Our luxury spa is situated conveniently close to the bus stand and major transit routes, making it the perfect discreet getaway for travelers and locals alike. Booking call girls in Jaipur is easiest when you are near our Sindhi Camp headquarters.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">C Scheme</h2>
              <p>
                Known for its upscale cafes, high-end boutiques, and premium residential areas, C Scheme is a frequent destination for our exclusive outcall services. When you demand the absolute best escort service Jaipur can provide directly to your luxury apartment or boutique hotel in C Scheme, our VIP companions are just a phone call away. Discretion and elegance are guaranteed in this posh locality.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Malviya Nagar</h2>
              <p>
                Home to massive shopping complexes like World Trade Park and a bustling nightlife, Malviya Nagar is one of our most requested service areas. Whether you are staying at a prominent hotel near JLN Marg or residing in the upscale sectors of Malviya Nagar, our premium spa and companion services are readily available to enhance your evening with unforgettable moments.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Raja Park</h2>
              <p>
                Raja Park is famous for its vibrant food scene and lively atmosphere. After a long day of exploring or business meetings, you might want to unwind. Our premium riya escort service services extend seamlessly into Raja Park. We provide swift outcall services to all major accommodations in and around the Raja Park area, ensuring you get the relaxation you deserve without any hassle.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Bani Park</h2>
              <p>
                Bani Park is synonymous with heritage hotels and colonial-era architecture. Many of our elite clients who visit Jaipur for leisure choose to stay in this historically rich neighborhood. We offer our bespoke outcall <strong>escort service in Jaipur</strong> directly to these heritage properties. When you want to experience the royal treatment in the royal city, our sophisticated call girls are the perfect addition to your Bani Park itinerary.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Mansarovar</h2>
              <p>
                As one of the largest residential colonies in Asia, Mansarovar is a key service area for Riya Escort Service. We understand that residents and visitors in this expansive area demand prompt and discreet service. Our extensive network allows us to provide rapid outcall <strong>Jaipur escort girls</strong> to any sector of Mansarovar, ensuring your privacy is completely safeguarded in residential settings.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Tonk Road</h2>
              <p>
                Tonk Road is a major arterial route lined with top-tier corporate hotels and business centers. For business travelers attending conferences or corporate events here, finding a moment of relaxation is crucial. We specialize in providing highly professional and articulate companions to luxury hotels along Tonk Road, guaranteeing an evening of stress-free, premium companionship.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Amer & Jal Mahal</h2>
              <p>
                The areas surrounding Amer Fort and Jal Mahal boast some of the most luxurious and secluded resorts in Rajasthan. Our VIP clients often request outcall services to these majestic locations. We coordinate seamlessly to ensure our elite companions arrive discreetly at these distant, high-end resorts, providing an unparalleled romantic and luxurious experience against the backdrop of Jaipur's heritage.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">JLN Marg</h2>
              <p>
                Jawaharlal Nehru Marg is home to 5-star properties, universities, and massive commercial hubs. Whether you are staying at a luxury hotel near the World Trade Park or a boutique property along the marg, our <strong>escort service Jaipur</strong> is perfectly positioned to serve you. We guarantee fast, discreet, and verified outcall services across the entire JLN Marg stretch.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg md:col-span-2">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Vaishali Nagar & Beyond</h2>
              <p className="mb-4">
                The sprawling, wealthy suburbs of Vaishali Nagar demand a certain standard of luxury, and we are proud to deliver exactly that. Our outcall escort service Jaipur covers Vaishali Nagar, Mansarovar, Bani Park, and Civil Lines comprehensively. We understand that our elite clients reside in these areas, which is why we ensure our VIP companions arrive quickly and discreetly in unmarked vehicles.
              </p>
              <p>
                No matter where you are located in the city—whether you are near the historic Hawa Mahal, staying near the airport, or relaxing in the outskirts—Riya Escort Service is dedicated to reaching you. We are truly the most extensive and reliable escort service Jaipur has to offer.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-3xl text-gold-gradient mb-6 text-center">Available in All Jaipur Locations: Logistics & Delivery</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                As the most prominent <strong>escort service Jaipur</strong> has to offer, Riya Escort Service has established a highly efficient logistics network to ensure our companions can reach you anywhere in the city promptly and safely. Whether you are staying at a luxury resort on the outskirts or a business hotel in the city center, our premium call girls are just a booking away.
              </p>
              <p>
                <strong>Central Business Districts:</strong> For clients in areas like C-Scheme, MI Road, and Civil Lines, we guarantee extremely fast arrival times. These areas are the hubs of corporate travel, and we understand that businessmen often have tight schedules. Our VIP escorts can arrive at your hotel within 30-45 minutes of booking confirmation.
              </p>
              <p>
                <strong>Residential Hubs:</strong> We provide discreet outcall services to massive residential colonies like Mansarovar, Vaishali Nagar, and Malviya Nagar. We understand the paramount importance of privacy when visiting residential addresses. Our companions arrive dressed elegantly and inconspicuously, ensuring absolute discretion for your peace of mind.
              </p>
              <p>
                <strong>Tourist & Heritage Zones:</strong> For tourists staying near Amer, Jal Mahal, or the old walled city, our <strong>Jaipur escort girls</strong> offer the perfect companionship for sightseeing by day and passionate romance by night. We coordinate carefully with clients in these areas to navigate traffic and ensure timely arrivals to heritage properties and luxury resorts.
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
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Riya Escort Service</p>
        <div className="max-w-3xl mx-auto px-6 mb-4 text-[10px] text-muted-foreground/50 leading-relaxed">
           <strong>Locations Served in Jaipur:</strong> Sindhi Camp | C-Scheme | Malviya Nagar | Vaishali Nagar | Raja Park | Bani Park | Mansarovar | Tonk Road | Amer | Jal Mahal | JLN Marg | MI Road | Civil Lines | Jagatpura | Vidyadhar Nagar | Bapu Nagar | Jhotwara | Pratap Nagar
        </div>
        <p>© {new Date().getFullYear()} Riya Escort Service & Companion Services · All bookings by appointment</p>
      </footer>
    </div>
  );
}
