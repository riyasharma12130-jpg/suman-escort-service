import { createFileRoute } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Bangalore Escorts Agency & Independent Call Girls" },
      { name: "description", content: "Learn more about Kavya Escort Service, the most trusted and genuine Bangalore escorts agency. We provide 100% independent call girls with real pics and no advance payment." },
      { name: "keywords", content: "about escort service Bangalore, kavya escort service history, genuine call girls in Bangalore, premium spa Bangalore, Koramangala spa" },
    ],
  }),
});

export default function AboutPage() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Kavya Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/about" className="text-primary transition">About</a>
            <a href="/areas" className="hover:text-primary transition">Areas Served</a>
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
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">About Kavya Escort Service</h1>
          <div className="flex items-center justify-center gap-4 mb-8 text-xs uppercase tracking-widest text-primary/80">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Written by Kavya (Agency Director)
            </span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover why we are recognized as the premier escort service Bangalore has to offer, delivering unforgettable experiences with genuine and verified companions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">The Most Trusted Escort Service Bangalore</h2>
              <p className="mb-4">
                For years, Kavya Escort Service has stood as the gold standard for luxury companionship and premium relaxation in the Garden City. When you are looking for an <strong>escort service Bangalore</strong>, you are not just looking for a meeting; you are seeking a meticulously curated experience that prioritizes your satisfaction, privacy, and safety.
              </p>
              <p>
                Located conveniently in the heart of the city at <strong>Koramangala</strong>, our establishment serves as a sanctuary for those looking to escape the mundane. Our deep understanding of what constitutes a truly premium service has allowed us to become the most sought-after destination for gentlemen and travelers alike who want to book call girls in Bangalore.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Commitment to Quality & Discretion</h2>
              <p className="mb-4">
                What sets our escort service in Bangalore apart is our uncompromising dedication to quality. Every profile you see is 100% genuine and verified. We maintain a rigorous selection process to ensure that our companions are not only stunningly beautiful but also intellectually engaging, elegant, and sophisticated.
              </p>
              <p className="mb-4">
                We understand that discretion is the cornerstone of our industry. Whether you choose our premium incall services at our luxurious Koramangala location or opt for an outcall service at a five-star hotel in Indiranagar or Whitefield, your privacy is our absolute highest priority. Our booking process is streamlined, confidential, and designed to provide you with peace of mind.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">A Premium Spa Experience</h2>
              <p className="mb-4">
                Beyond being a premier escort service Bangalore, we are a holistic relaxation destination. Our facilities in Koramangala are equipped to provide you with a transcendent spa experience. From the moment you step through our doors, you will be enveloped in an atmosphere of luxury and tranquility. 
              </p>
              <p>
                Our services are tailored to melt away stress and leave you rejuvenated. By combining the therapeutic benefits of a premium spa with the enchanting company of our exclusive call girls in Bangalore, we guarantee an experience that satisfies both body and mind. It is this unique synthesis of wellness and companionship that has cemented our reputation at the very top.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Strict Screening & Verification Methodology</h2>
              <p className="mb-4 text-primary font-medium">Yes, we really have met and tested the service of every single companion.</p>
              <p className="mb-4">
                What truly distinguishes our <strong>escort service Bangalore</strong> from others is our relentless commitment to quality through a stringent 4-step vetting process. We do not accept just anyone into our agency. Every model, college girl, and independent companion undergoes a thorough background check and in-person verification at our Koramangala office.
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-sm">
                <li><strong>ID & Age Verification:</strong> We ensure all companions are strictly over 18 with valid documentation.</li>
                <li><strong>Photo Matching:</strong> We take original, unedited photos of the companions in our facility. The photos you see on our site are 100% genuine and verified by us.</li>
                <li><strong>Interview & Etiquette Test:</strong> We evaluate them not only on their physical beauty but also on their emotional intelligence, conversational skills, and overall elegance.</li>
                <li><strong>Health & Hygiene Check:</strong> Regular health screenings are mandatory for all our active escorts.</li>
              </ul>
              <p className="mb-4">
                When you <strong>book call girls in Bangalore</strong> through us, you are guaranteed to meet a companion who can hold her own in any social setting—from a high-profile corporate dinner in Indiranagar to a relaxed, intimate evening in Koramangala. We ensure that our escorts are polite, articulate, and dedicated to providing a Girlfriend Experience (GFE) that feels incredibly natural and unforced.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Uncompromising Hygiene & Safety Standards</h2>
              <p className="mb-4">
                In the luxury adult entertainment and premium spa industry, health and hygiene are non-negotiable. At Kavya Escort Service, we have instituted the highest health protocols for both our clients and our companions. Our incall facility in <strong>Koramangala</strong> is sanitized daily, and fresh linens, premium toiletries, and a completely immaculate environment are guaranteed for every single booking.
              </p>
              <p className="mb-4">
                Furthermore, we prioritize the safety and well-being of our <strong>Bangalore escort girls</strong> just as much as our clients. We operate a secure, verified booking system that protects the identities of everyone involved. This mutual respect creates a stress-free environment where both you and your companion can truly relax and enjoy the moment without any underlying anxieties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">A Premium Spa Experience</h2>
              <p className="mb-4">
                Beyond being a premier escort service Bangalore, we are a holistic relaxation destination. Our facilities in Koramangala are equipped to provide you with a transcendent spa experience. From the moment you step through our doors, you will be enveloped in an atmosphere of luxury and tranquility. 
              </p>
              <p>
                Our services are tailored to melt away stress and leave you rejuvenated. By combining the therapeutic benefits of a premium spa with the enchanting company of our exclusive call girls in Bangalore, we guarantee an experience that satisfies both body and mind. It is this unique synthesis of wellness and companionship that has cemented our reputation at the very top.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Philosophy of Luxury Companionship</h2>
              <p className="mb-4">
                At Kavya Escort Service, we believe that true luxury lies in the details and the personalization of service. We reject the "one-size-fits-all" approach that plagues the industry. Instead, we take the time to understand your specific desires, preferences, and fantasies. Whether you seek a dominant, passionate encounter or a sweet, submissive romance, our diverse roster of companions can cater to your exact requirements.
              </p>
              <p>
                We view ourselves not just as a booking agency, but as facilitators of extraordinary experiences. By continuously adapting to the feedback of our elite clientele and maintaining our unwavering standards, we remain the definitive choice for anyone looking to experience the finest <strong>escort service in Bangalore</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Why Koramangala?</h2>
              <p className="mb-4">
                We chose Koramangala as our primary hub for a very strategic reason: accessibility. As the central transit and commercial nexus of Bangalore, Koramangala allows us to swiftly and efficiently serve clients arriving from all over the country and the world. 
              </p>
              <p>
                Being based in Koramangala means our incall facilities are easily reachable, and our outcall companions can navigate to any major hotel or residence in Bangalore with minimal delay. When you book with us, you are booking a service that is deeply rooted in the local infrastructure, ensuring promptness and reliability every single time.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Diverse Companionship Types</h2>
              <p className="mb-4">
                We understand that every client has unique desires. Kavya Escort Service boasts the most diverse gallery in Karnataka. We offer:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>High Profile Models:</strong> Perfect for high-end corporate events, elite parties, or when you simply want the absolute best.</li>
                <li><strong>College Girls:</strong> Ideal for clients seeking a fresh, energetic, and passionate Girlfriend Experience (GFE).</li>
                <li><strong>Russian & Foreign VIPs:</strong> For those who desire an exotic, international standard of luxury companionship right here in Bangalore.</li>
                <li><strong>Independent Housewives:</strong> Offering a mature, deeply understanding, and intensely satisfying private encounter.</li>
              </ul>
              <p className="mt-4">
                No matter your preference, every single profile on our platform is 100% verified. What you see is exactly who will arrive at your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">Experience the Best Escort Service Bangalore</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to experience genuine luxury? Our team is available 24/7 to assist you with your booking.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            Contact Us on WhatsApp
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
