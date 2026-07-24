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
      { title: "Book VIP Bangalore Escorts | Cash On Delivery Call Girls" },
      { name: "description", content: "Book genuine Bangalore call girls & VIP escorts safely. 24/7 booking available for hotel outcalls and incalls with complete privacy and Cash on Delivery (COD)." },
      { name: "keywords", content: "book escort service Bangalore, kavya escort service booking, call girl booking Bangalore, escort service booking in Koramangala" },
    ],
  }),
});

export default function BookPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">

            <Header />

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Booking</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">Book Your Bangalore Escort</h1>
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
                As the leading <strong>escort service Bangalore</strong>, we maintain strict guidelines to ensure the safety and satisfaction of both our clients and our companions. Please read these terms carefully before proceeding with your booking.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Age Verification:</strong> You must be at least 18 years of old to use our services. Valid ID may be required upon request.</li>
                <li><strong>Zero Advance Payment:</strong> We have a strict no-advance policy. The full balance is paid directly to the companion upon arrival in cash.</li>
                <li><strong>Respect and Decency:</strong> We have a zero-tolerance policy for abuse, harassment, or non-consensual behavior. Our companions are professionals and expect to be treated with utmost respect. Any violation of this will result in immediate termination of the service without refund.</li>
                <li><strong>Substance Policy:</strong> The use of illegal narcotics during the service is strictly prohibited. Intoxicated clients may be refused service at the discretion of the companion.</li>
                <li><strong>Privacy:</strong> We guarantee 100% discretion. In return, we expect our clients to respect the privacy of our companions. No unauthorized photography or recording is permitted under any circumstances.</li>
              </ul>
              <p className="mt-4">
                By contacting us to <strong>book call girls in Bangalore</strong>, you automatically agree to abide by these guidelines. We are committed to providing a safe, luxurious, and unforgettable experience for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center">
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