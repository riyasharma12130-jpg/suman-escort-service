import { createFileRoute, Link } from "@tanstack/react-router";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/guides/incall-vs-outcall")({
  component: IncallVsOutcallPage,
  head: () => ({
    meta: [
      { title: "Incall vs Outcall Escort Services | Bangalore Call Girls Guide" },
      { name: "description", content: "Learn the difference between incall and outcall services when booking call girls in Bangalore. Decide which premium experience is right for you." },
    ],
  }),
});

function IncallVsOutcallPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl tracking-wide text-gold-gradient">Kavya Escort Service</Link>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/guides" className="text-primary transition">Guides</Link>
            <Link to="/book" className="hover:text-primary transition">Book</Link>
          </nav>
          <a href={telegramLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/80 text-white transition shadow-[0_0_15px_-5px_#0088cc]">
            <TelegramIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <Link to="/guides" className="text-xs uppercase tracking-widest text-primary hover:underline mb-4 inline-block">← Back to Guides</Link>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">Incall vs Outcall Escort Services: Which is Right for You?</h1>
            
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
              When deciding to <Link to="/">book an escort service in Bangalore</Link>, one of the most common questions our clients ask is: <em>"Should I choose incall or outcall?"</em> Both offer exceptional experiences, but they cater to different needs and logistical preferences.
            </p>

            <h2>What is an Incall Service?</h2>
            <p>
              An <strong>incall service</strong> means that you, the client, travel to the companion's location. At Kavya Escort Service, this means visiting our premium, highly discreet spa facility centrally located in <strong>Koramangala</strong>.
            </p>
            <h3>Pros of Incall:</h3>
            <ul>
              <li><strong>Absolute Privacy:</strong> If you cannot host due to family, roommates, or uncooperative hotel staff, our facility offers a 100% private sanctuary.</li>
              <li><strong>Zero Preparation:</strong> You don't have to clean your room or worry about providing amenities. We provide fresh linens, premium toiletries, and ambient lighting.</li>
              <li><strong>Safety & Hygiene:</strong> Our Koramangala location is sanitized rigorously, ensuring the highest standards of cleanliness.</li>
            </ul>

            <h2>What is an Outcall Service?</h2>
            <p>
              An <strong>outcall service</strong> means that the <Link to="/book">Bangalore call girl</Link> travels directly to your location, whether that's a 5-star hotel in Indiranagar or a private residence in Whitefield.
            </p>
            <h3>Pros of Outcall:</h3>
            <ul>
              <li><strong>Ultimate Convenience:</strong> You never have to leave your room. You can relax, order room service, and wait for your companion to arrive.</li>
              <li><strong>Comfort of Home:</strong> Some clients feel more comfortable and relaxed in their own familiar environment.</li>
              <li><strong>Discreet Arrival:</strong> Our companions dress elegantly and arrive looking like a typical friend or date, ensuring absolute discretion in hotel lobbies.</li>
            </ul>

            <h2>How to Choose?</h2>
            <p>
              If you value convenience above all and are staying in a comfortable, private hotel room, <strong>outcall</strong> is likely your best choice. If you cannot host or want to experience our dedicated premium spa environment, you should opt for <strong>incall</strong>.
            </p>
            <p>
              Ready to make a booking? <Link to="/book">View our gallery</Link> and contact us today to set up your perfect encounter.
            </p>
          </div>
        </div>
      </article>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center mt-12">
        <a href={telegramLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/80 text-white transition mb-6 shadow-[0_0_20px_-5px_#0088cc]" aria-label="Telegram Contact">
          <TelegramIcon className="w-7 h-7" />
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
