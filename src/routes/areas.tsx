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
      { title: "Bangalore Escorts Locations | Koramangala & Indiranagar Call Girls" },
      { name: "description", content: "Looking for independent call girls near you? We serve all major areas including Koramangala, Indiranagar, and luxury hotels across Bangalore with genuine VIP models." },
      { name: "keywords", content: "escort service Bangalore, escort service in Koramangala, escort service Indiranagar, call girls Whitefield, Bangalore escort service near me" },
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
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Kavya Escort Service</a>
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
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center">
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition mb-6 shadow-[0_0_20px_-5px_#25D366]" aria-label="WhatsApp Contact">
          <WhatsappIcon className="w-7 h-7" />
        </a>
        <p className="font-display text-lg text-gold-gradient mb-2">Kavya Escort Service Bangalore</p>
        
        <div className="max-w-6xl mx-auto px-6 mb-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left border-t border-border/50 pt-8 mt-8">
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Escort Categories</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/areas" className="hover:text-primary transition">Housewife Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">College Girls Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Airhostess Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Independent Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">VIP Call Girls Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Celebrity Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Russian Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Kannada Call Girls Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Model Escorts Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Mallu Call Girls Bangalore</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Bangalore Locations</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/areas" className="hover:text-primary transition">Koramangala Call Girls</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Indiranagar Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Whitefield Call Girls</a></li>
                <li><a href="/areas" className="hover:text-primary transition">MG Road Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Electronic City Call Girls</a></li>
                <li><a href="/areas" className="hover:text-primary transition">HSR Layout Call Girls</a></li>
                <li><a href="/areas" className="hover:text-primary transition">BTM Layout Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Marathahalli Call Girls</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Manyata Tech Park Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Hebbal Call Girls</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/" className="hover:text-primary transition">Bangalore Escort Service</a></li>
                <li><a href="/book" className="hover:text-primary transition">Call Girls in Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Escort Service in Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Call Girl Near Me</a></li>
                <li><a href="/book" className="hover:text-primary transition">Massage Service Bangalore</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Hotel Call Girl Bangalore</a></li>
                <li><a href="/guides" className="hover:text-primary transition">Guides & Articles</a></li>
                <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Other Cities</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-primary transition">Delhi Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Mumbai Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Chennai Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Hyderabad Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Pune Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Kolkata Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Goa Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Jaipur Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Chandigarh Escorts</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-4 text-xs text-muted-foreground leading-relaxed flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
           <strong>Locations Served in Bangalore:</strong> 
           <a href="/areas" className="hover:text-primary transition">Koramangala</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Indiranagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Whitefield</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Electronic City</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">MG Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">HSR Layout</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">BTM Layout</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">JP Nagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Jayanagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Marathahalli</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Hebbal</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Bellandur</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Sarjapur Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Yelahanka</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Manyata Tech Park</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Bannerghatta Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Brigade Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">UB City</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Majestic</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Shivajinagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Old Airport Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Outer Ring Road</a>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-4 text-xs text-muted-foreground leading-relaxed flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
           <strong>5-Star Hotels We Serve:</strong> 
           <span>The Leela Palace</span> <span>|</span>
           <span>ITC Gardenia</span> <span>|</span>
           <span>Taj West End</span> <span>|</span>
           <span>The Oberoi</span> <span>|</span>
           <span>JW Marriott</span> <span>|</span>
           <span>Sheraton Grand</span> <span>|</span>
           <span>Radisson Blu</span> <span>|</span>
           <span>Conrad Bangalore</span> <span>|</span>
           <span>Shangri-La</span> <span>|</span>
           <span>Ritz-Carlton</span>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-6 w-full">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed text-center">
            Call Girl In Bangalore ☛ Call Girl Near Me ☛ Call Girl Number In Bangalore ☛ Escort Service In Bangalore ☛ Call Girls In Bangalore ☛ Escort Service Bangalore ☛ Bangalore Escorts ☛ Bangalore Escort Service ☛ Call Girl Contact Number Bangalore ☛ Call Girls Near Me ☛ Bangalore Escort ☛ Low Price Call Girl in Bangalore ☛ Call Girls Bangalore ☛ Koramangala Call Girls ☛ Indiranagar Escorts ☛ Whitefield Call Girls ☛ Electronic City Call Girls ☛ MG Road Escorts ☛ HSR Layout Call Girls ☛ BTM Layout Escorts ☛ Marathahalli Call Girls ☛ JP Nagar Call Girls ☛ Jayanagar Escorts ☛ Hebbal Call Girls ☛ Bellandur Escorts ☛ Sarjapur Road Call Girls ☛ Manyata Tech Park Call Girls ☛ Kannada Call Girl ☛ Russian Call Girls Bangalore ☛ Housewife Escorts Bangalore ☛ College Call Girls Bangalore ☛ VIP Escorts Bangalore ☛ Cash Payment Call Girls Bangalore ☛ Hotel Call Girl Bangalore ☛ Independent Call Girl Bangalore ☛ Model Escorts Bangalore ☛ Celebrity Escorts Bangalore ☛ Air Hostess Escorts Bangalore ☛ Cheap Call Girl Bangalore ☛ Night Call Girl Bangalore ☛ Best Escort Service Bangalore ☛ Bangalore Call Girl Service ☛ Full Night Escort Bangalore ☛ Incall Escort Bangalore ☛ Outcall Escort Bangalore ☛ Massage Service Bangalore ☛ कॉल गर्ल बैंगलोर ☛ बैंगलोर एस्कॉर्ट सर्विस ☛ बैंगलोर कॉल गर्ल नंबर ☛ कॉल गर्ल नियर मी ☛ बैंगलोर में कॉल गर्ल ☛ सस्ती कॉल गर्ल बैंगलोर ☛ इंडिपेंडेंट कॉल गर्ल बैंगलोर ☛ रशियन कॉल गर्ल बैंगलोर ☛ हाउसवाइफ एस्कॉर्ट बैंगलोर ☛ VIP कॉल गर्ल बैंगलोर ☛ कैश पेमेंट कॉल गर्ल बैंगलोर ☛ होटल कॉल गर्ल बैंगलोर ☛ ಬೆಂಗಳೂರು ಕಾಲ್ ಗರ್ಲ್ ☛ ಬೆಂಗಳೂರು ಎಸ್ಕಾರ್ಟ್ ಸೇವೆ ☛ ಕನ್ನಡ ಕಾಲ್ ಗರ್ಲ್ ☛ ಕೊರಮಂಗಲ ಕಾಲ್ ಗರ್ಲ್ ☛ ಇಂದಿರಾನಗರ ಎಸ್ಕಾರ್ಟ್
          </p>
        </div>

        <p>© {new Date().getFullYear()} Kavya Escort Service &amp; Companion Services · All bookings by appointment</p>
      </footer>
    </div>
  );
}
