import { createFileRoute } from "@tanstack/react-router";

// Using local images from the images folder
const imageList = [
  "/images/WhatsApp Image 2026-07-19 at 11.23.26 AM.jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.26 AM (1).jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.27 AM.jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.27 AM (1).jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.28 AM (1).jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.28 AM.jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.29 AM.jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.31 AM (1).jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.31 AM.jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.32 AM (1).jpeg",
  "/images/WhatsApp Image 2026-07-19 at 11.23.32 AM.jpeg",
];

// Hero image
const heroImg = imageList[0];

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Jaipur Escort Service | Premium Jaipur Call Girls Nearby Me | Payal" },
      { name: "description", content: "Looking for Jaipur escort girls nearby me? Visit Payal Jaipur Escort Service for 100% independent call girls, real pics, and VIP premium spa services 24/7." },
      { name: "keywords", content: "jaipur escort service, jaipur call girls, jaipur escort girls nearby me, independent call girls jaipur, premium escort service jaipur, real pics escort jaipur" },
    ],
  }),
});

// Indian escort names
const escortNames = [
  "Ppayal Sharma", "Ananya Patel", "Kavya Reddy", "Meera Singh", 
  "Payal Desai", "Neha Kapoor", "Pooja Malhotra", "Sneha Joshi",
  "Divya Mehta", "Swati Verma", "Tanvi Agarwal", "Muskan Kaur",
  "Aarohi Gupta", "Ishita Roy", "Anjali Mishra",
  "Kritika Sinha", "Nandini Bose", "Yamini Patel", "Trisha Reddy"
];

// Service offerings
const services = [
  { name: "Incall Service", desc: "Discreet service at our premium location in Sindhi Camp, Jaipur. Booking confirm with advance payment.", duration: "Available 24/7", price: "₹5,000", img: imageList[1] },
  { name: "Outcall Service", desc: "Service at your hotel or residence in Jaipur. Complete privacy guaranteed.", duration: "Available 24/7", price: "₹8,000", img: imageList[2] },
  { name: "VIP Service", desc: "Exclusive premium service with top escorts. Ultimate satisfaction assured.", duration: "By appointment", price: "₹15,000", img: imageList[3] },
];

// Escort profiles
const escorts = [
  { name: "Ppayal Sharma", age: 24, location: "Jaipur", price: "₹5,000", img: imageList[1], desc: "Premium independent call girl in Jaipur. Elegant, sophisticated, and available for discreet incall and outcall services in C Scheme and Sindhi Camp.", bestFor: "Luxury Experiences" },
  { name: "Isha (Airhostess)", age: 23, location: "Jaipur", price: "₹8,000", img: imageList[9], desc: "Beautiful airhostess escort. Known for a sweet, attentive Girlfriend Experience and late-night hotel visits.", bestFor: "Girlfriend Experience" },
  { name: "Anika (Celebrity)", age: 22, location: "Jaipur", price: "₹12,000", img: imageList[10], desc: "High-profile celebrity model for rich clients. Highly exclusive and discreet VIP outcall companionship.", bestFor: "VIP Clients" },
  { name: "Ppayalnka (Housewife)", age: 28, location: "Jaipur", price: "₹6,000", img: imageList[2], desc: "Mature and incredibly sensual Bhabhi escort. Perfect for those seeking deep connection and passionate satisfaction.", bestFor: "Sensual Connections" },
  { name: "Kavya (Independent)", age: 26, location: "Jaipur", price: "₹7,000", img: imageList[3], desc: "Beautiful and highly experienced high-profile escort. Ensures complete satisfaction with Girlfriend Experience (GFE) in Jaipur.", bestFor: "Experienced GFE" },
  { name: "Meera Singh", age: 23, location: "Jaipur", price: "₹5,500", img: imageList[4], desc: "Sweet, caring, and soft-spoken. Available for both short meetings and full-night romantic companionship in Jaipur.", bestFor: "Romantic Nights" },
  { name: "Payal Desai", age: 25, location: "Jaipur", price: "₹6,500", img: imageList[5], desc: "Stunning beauty with excellent communication skills. The ideal dinner and date companion for elite gentlemen.", bestFor: "Dinner Dates" },
  { name: "Vanu (Russian)", age: 21, location: "Jaipur", price: "₹10,000", img: imageList[6], desc: "Exotic VIP Russian escort in Jaipur. Young, energetic, and provides an international standard of luxury companionship.", bestFor: "Exotic Luxury" },
  { name: "Pooja Malhotra", age: 27, location: "Jaipur", price: "₹7,500", img: imageList[7], desc: "Mature, understanding, and incredibly sensual. Provides ultimate relaxation and professional behavior for high-profile clients.", bestFor: "Stress Relief" },
  { name: "Sneha Joshi", age: 22, location: "Jaipur", price: "₹5,000", img: imageList[8], desc: "Friendly, approachable, and fun-loving. Ensures a very comfortable and respectful experience for first-time callers.", bestFor: "First-Timers" },
];

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Landing() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;
  
  const rituals = [
    { time: "60", unit: "MIN", label: "Quick Service", price: "₹4,000" },
    { time: "90", unit: "MIN", label: "Standard Service", price: "₹6,000" },
    { time: "120", unit: "MIN", label: "Extended Service", price: "₹10,000" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Payal Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#escorts" className="hover:text-primary transition">Escorts</a>
            <a href="/about" className="hover:text-primary transition">About</a>
            <a href="/areas" className="hover:text-primary transition">Areas</a>
            <a href="/guides" className="hover:text-primary transition">Guides</a>
            <a href="#rituals" className="hover:text-primary transition">Pricing</a>
            <a href="/contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]" aria-label="WhatsApp Contact">
              <WhatsappIcon className="w-5 h-5" />
            </a>
            <a href="/book" className="rounded-full border border-primary/40 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition">Book Now</a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center">
        <img src={heroImg} alt="Premium escort service in Jaipur" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">𝗝𝗔𝗜𝗣𝗨𝗥 • 𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗘</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]">
            Jaipur Escort Service <span className="italic text-gold-gradient">&</span>
            <br />
            Premium Jaipur Call Girls
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Looking for independent <strong>Jaipur escort girls nearby me</strong>? We offer 100% verified, premium spa and discreet companion services with real photos. Available 24/7.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/book" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]">Book Your Escort</a>
            <a href="#escorts" className="rounded-full border border-border px-8 py-3.5 text-sm text-foreground hover:border-primary transition">View Escorts</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</div>
      </section>

      <section className="py-16 bg-card/20 border-b border-border">
        <div className="mx-auto max-w-5xl px-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-4 text-center">Welcome to Payal Escort Service: Your #1 Jaipur Escort Service</h2>
          
          <div className="flex items-center justify-center gap-4 mb-10 text-xs uppercase tracking-widest text-primary/80 border-b border-border/50 pb-4 max-w-2xl mx-auto">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              By Payal (Agency Director)
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-10">
            <h3 className="font-display text-xl text-primary mb-3">TL;DR (Too Long; Didn't Read)</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Top-rated Escort Agency</strong> based in Sindhi Camp, Jaipur with 24/7 availability.</li>
              <li>100% <strong>verified</strong> and independent companions for both Incall (our spa) and Outcall (hotel visits).</li>
              <li>Focus on absolute <strong>discretion</strong>, hygiene, and a premium "Girlfriend Experience" (GFE).</li>
              <li>Affordable rates starting at ₹5,000 for standard services up to VIP levels.</li>
            </ul>
          </div>

          <div className="space-y-6 text-sm md:text-base">
            <p>
              When you are seeking the absolute pinnacle of luxury companionship, you need the most reliable and genuine <strong>escort service Jaipur</strong> has to offer. At Payal Escort Service, located in the prestigious heart of Sindhi Camp, we pride ourselves on delivering an unparalleled experience that transcends the ordinary. Whether you are a business traveler unwinding after a long conference, a tourist looking to add a spark to your vacation, or a local gentleman seeking a discreet and beautiful companion, our agency is your ultimate destination to <strong>book call girls in Jaipur</strong>.
            </p>
            <p>
              Our establishment is not just an agency; it is a sanctuary of premium relaxation. We understand that our elite clients demand perfection, which is why every single profile in our gallery represents a stunning, educated, and verified companion. Unlike other services, we do not use fake photos or misleading descriptions. When you search for the best <strong>Jaipur escort girls</strong>, you expect transparency, hygiene, and absolute discretion—and that is exactly what we guarantee. From our luxurious incall facilities in Sindhi Camp to our swift and discreet outcall services across C Scheme, Malviya Nagar, and Vaishali Nagar, we have meticulously designed every aspect of our service to ensure your complete satisfaction.
            </p>
            <p>
              What truly sets us apart as the top-ranking <strong>escort service Jaipur</strong> is our holistic approach. We combine the therapeutic, stress-relieving benefits of a high-end spa with the thrilling, intimate companionship of Jaipur's most beautiful women. Our VIP companions are trained to be the perfect dates, whether you need an elegant partner for a corporate dinner, an adventurous guide for exploring the Pink City, or a passionate lover for a private evening behind closed doors. Booking with Payal Escort Service is not just a transaction; it is an investment in an unforgettable memory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-12">Understanding Our Premium Services: Incall vs Outcall</h2>
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground">
            <div className="bg-card border border-border p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl text-gold-gradient mb-4">Luxurious Incall Services in Sindhi Camp</h3>
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                Our incall service is the epitome of convenience and luxury. Situated centrally in Sindhi Camp, our private spa facility is designed to offer maximum comfort and absolute privacy. When you choose to visit us, you are stepping into a safe, hygienic, and highly discreet environment. The rooms are equipped with premium amenities, ambient lighting, and immaculate hygiene standards, ensuring that your time with our beautiful <strong>call girls in Jaipur</strong> is utterly flawless.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Choosing our incall option means you do not have to worry about the logistics of hosting. You simply arrive at our secure Sindhi Camp location, complete the secure payment process, and immediately begin your session of premium spa relaxation and intimate companionship. It is the perfect choice for those who demand immediate service without the hassle of preparing their own space.
              </p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl text-gold-gradient mb-4">Discreet Outcall Services Across Jaipur</h3>
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                For those who prefer the comfort of their own surroundings, our <strong>escort service Jaipur</strong> offers a highly reliable outcall option. Whether you are staying in a 5-star hotel in C Scheme, a luxury resort in Amer, or a private residence in Malviya Nagar or Vaishali Nagar, our companions will travel directly to your doorstep. We prioritize your privacy above all else; our escorts arrive in unmarked vehicles and conduct themselves with the utmost professionalism.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our outcall booking process is highly streamlined. Once you verify your location and complete the advance booking confirmation, your chosen companion is immediately dispatched. We understand the value of your time, which is why we guarantee prompt arrivals and transparent communication throughout the process. Experience the luxury of Payal Escort Service without ever leaving your room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-12">8 Reasons to Choose Payal Escort Service</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">1. Verified Independent Call Girls</h3>
              <p className="text-sm">We offer genuine and verified independent escorts in Jaipur for a safe and premium experience. No fake profiles, ever.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">2. 100% Privacy & Confidential Service</h3>
              <p className="text-sm">Your personal details and booking information remain completely private and secure. We delete all chat histories post-service.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">3. Available in All Jaipur Locations</h3>
              <p className="text-sm">We cover all major areas including Malviya Nagar, Vaishali Nagar, Mansarovar, C-Scheme, Jagatpura, and MI Road.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">4. Attractive & Professional Companions</h3>
              <p className="text-sm">Choose from a diverse gallery of Russian Escorts, VIP Escorts, College Girls, and High Profile Models.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">5. Quick Booking Support</h3>
              <p className="text-sm">Easy, instant booking through WhatsApp with immediate response support from our dedicated team.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">6. Affordable to Luxury Packages</h3>
              <p className="text-sm">From budget-friendly companionship to premium VIP experiences, we cater to all budgets without compromising quality.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">7. 24/7 Service Availability</h3>
              <p className="text-sm">Day and night booking available across Jaipur. Whether it's a late-night hotel visit or a midday spa session, we are ready.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">8. Friendly & Respectful Experience</h3>
              <p className="text-sm">Professional behavior with a focus on providing comfortable, Girlfriend Experience (GFE) companionship.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-8">Premium Services Include</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
            <span className="px-4 py-2 border border-primary/30 rounded-full">Luxury Companion Services</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">Night Companion Bookings</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">Full Night Experiences</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">Hotel Companion Services</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">VIP Lifestyle Companionship</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">Corporate Event Dates</span>
            <span className="px-4 py-2 border border-primary/30 rounded-full">Girlfriend Experience (GFE)</span>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-radial-glow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            The Most Trusted Escort Service Jaipur
          </h2>
          <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Services</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">Premium Services</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">Discreet, professional, and satisfying experiences with our verified escorts.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group relative overflow-hidden rounded-lg bg-card border border-border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    <span className="text-sm text-primary">{s.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-display text-xl text-gold-gradient">{s.price}</span>
                    <a href="/book" className="text-xs uppercase tracking-widest text-primary hover:text-gold transition">Book Now →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="escorts" className="py-24 border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Escorts</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Meet Our Premium Escorts in Sindhi Camp, Jaipur</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {escorts.map((e, i) => (
              <article key={i} className="group relative overflow-hidden rounded-lg bg-card border border-border">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-gold-gradient border border-primary/30 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full">
                    Best for: {e.bestFor}
                  </div>
                  <img src={e.img} alt={e.name} loading="lazy" width={600} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl mb-1">{e.name}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{e.age} years</span>
                    <span>{e.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <span className="font-display text-lg text-gold-gradient">{e.price}</span>
                    <a href="/book" className="text-xs uppercase tracking-widest text-primary hover:text-gold transition">Book →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rituals" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Service Rates</h2>
          </div>
          <div className="space-y-1">
            {rituals.map((r, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-6 py-6 border-b border-border/60 hover:border-primary/50 transition">
                <span className="font-display text-3xl md:text-4xl text-gold-gradient w-20 md:w-28 shrink-0">
                  {r.time}<span className="text-sm text-muted-foreground ml-1">{r.unit}</span>
                </span>
                <span className="min-w-0 text-base md:text-xl truncate">{r.label}</span>
                <span className="font-display text-2xl md:text-3xl text-primary shrink-0">{r.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20">
        <div className="mx-auto max-w-5xl px-6 text-muted-foreground leading-relaxed space-y-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-6">What is Escort Service Jaipur?</h2>
            <p className="mb-4">
              Now, you can kick-start and build a new relationship with a <strong>Jaipur escort</strong> who is good at everything. The hottest experiences are possible with a cute and sexy partner complementing your energy. A companion must always be passionate and energetic because, without these features, a relationship can't reach a stable mode. For this reason, the real meaning of <strong>escort service Jaipur</strong> reflects ultimate pampering and wild-level intimacy with a professional partner. These services are extremely durable, luxurious, and designed for ultimate satisfaction.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-6">Explore Top Categories of Jaipur Escorts</h2>
            <p className="mb-4">
              This time you can enjoy quality time with a girl according to your exact requirements. We have a complete checklist of the top categories of <strong>Jaipur escort services</strong> to ensure you find the perfect match.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-2">Build a New Fascination – Russian Escorts</h3>
                <p className="text-sm">Fascination can be more than your imagination. It's time to hunt the real wild desires with <strong>Russian escorts in Jaipur</strong>. These girls are bold in every single move. When your primary focus is high-energy, you need to book Russian call girls because they are full of stamina for wild and mature actions.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-2">Cuties & Naughty – Young College Girls</h3>
                <p className="text-sm">The next category is vibrant: young <strong>college girls escorts in Jaipur</strong>. They are mind-blowing with high-energy goals. They are superb at performing actions with sweetness and ensuring satisfying hookups.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-2">Maturity is High-End – Sexy Bhabhi & Housewives</h3>
                <p className="text-sm">Believe in fantasy because a mature Bhabhi can accomplish all your goals at once. <strong>Desi Indian Bhabhi Escorts</strong> in Jaipur are mind-blowing for better performance and mood. If you need a mature woman for intense connection, housewife escorts are the perfect choice.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-2">Only For Rich Clients – VIP & Model Escorts</h3>
                <p className="text-sm">Rich clients from affluent backgrounds need amazing girls with VIP culture. We have a special category of <strong>VIP call girls in Jaipur</strong>. These model escorts have beautiful, well-maintained figures and provide a premium, Girlfriend Experience (GFE).</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-sm md:text-base text-muted-foreground leading-relaxed space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-10">A Combine Package of Lust and Relaxation By Sexy Jaipur Call Girl Service</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-3">Hotel Night With Russian Call Girl Near Me</h3>
                <p>We encourage our clients to get physical service at the hotel. Comfort, privacy, and a luxurious feel can be delivered easily. We have special arrangements for VIP Russian Jaipur Call Girl Service. Enjoy a passionate hotel night with international standard companionship.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-3">Foreplay and Roleplay Call Girls in Jaipur</h3>
                <p>Foreplay is the essential part of intimacy. However, it gets much more exciting with roleplay. Roleplay gives you the liberty to be anyone to the lady. You can act as a doctor, plumber, or delivery boy. Our skilled independent Jaipur Call Girls will cooperate fully with your fantasies.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-3">Erotic B2B Massage From Independent Jaipur Call Girls</h3>
                <p>The city of nightlife hardly gets you what you want without stress. To relax deeply, we bring you the premium massage Jaipur Call Girl Service. Booking this service gives you a combination of therapeutic B2B massage and intense, beautiful companionship for a highly affordable price.</p>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg shadow-lg mt-12 text-center">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">100% Cash Payment & Cash on Delivery Service</h2>
              <p className="max-w-3xl mx-auto">
                We highly encourage our clients to choose the <strong>Cash Payment</strong> option. We are the premier Jaipur Call Girls Agency offering Cash on Delivery service to give you the ultimate freedom and privacy. No credit card statements, no digital trails—just pure, untracked entertainment. Simply book your Independent Call Girl in Jaipur, wait for her arrival at your hotel or residence, and pay directly in cash before the service begins. It is safe, discreet, and reliable.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-6">How to Book Call Girls in Jaipur?</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Open Google on your smartphone and search for our services.</li>
              <li>Visit our official Payal Escort Service website.</li>
              <li>Explore our massive gallery and choose girls and services according to your taste.</li>
              <li>Use the WhatsApp and Calling options mentioned on our site.</li>
              <li>Finalize the profile, confirm with a token advance, and share your hotel/room details.</li>
              <li>Enjoy maximum satisfaction!</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4">Everything you need to know before booking your companion.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">What kind of services can I expect from Jaipur escort service?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">A client is always thinking of hiring an escort who is powerful and beautiful. You can expect a wide range of services including Girlfriend Experience (GFE), full body massage, dinner dates, long drives, and passionate companionship tailored to your desires.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Can I get a full body massage from escort service Jaipur?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, many of our escorts are trained to give full body massages. It is highly recommended to book a full-night service or extended duration to ensure you have enough time to enjoy both a relaxing massage and intimate companionship.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">How do I book an escort service in Jaipur with you?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Booking is extremely simple and discreet. Just contact us via WhatsApp at +91 74148 38654. Browse our gallery, select your preferred companion, provide your location (for outcall) or choose to visit us in Sindhi Camp (for incall). After a small advance payment to confirm your genuine intent, your booking is locked in.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Are the photos of the call girls in Jaipur 100% genuine?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Absolutely. We pride ourselves on complete transparency. The photos you see are of the exact companions you will meet. We do not use fake internet pictures or heavily manipulated images. What you see is precisely what you get.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Is the service safe and discreet?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Your privacy is our number one priority. All client data is strictly confidential and permanently deleted after the service. Our companions are trained professionals who understand the importance of discretion, especially for our high-profile and VIP clients.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Which areas in Jaipur do you serve?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our primary incall spa is located in Sindhi Camp. For outcall services, we cover the entirety of Jaipur, including C Scheme, Malviya Nagar, Vaishali Nagar, Raja Park, Bani Park, Mansarovar, and all major luxury hotels and resorts across the Pink City.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Do Call Girls in Jaipur are Available for the Outcall?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, as we have mentioned, we provide premium companions for discreet outcall services across all major areas of Jaipur.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Do you provide call girls Near hotels?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, we have special arrangements for 4-star and 5-star hotels like The Roseate, Rambagh Palace, and others. Our call girls arrive discreetly directly to your room.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Does Same Day Booking and Service Available?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, same day booking and immediate service are always available 24x7.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Can I Request For Personalized Jaipur Call Girls Near Me?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, we offer highly personalized services including roleplay, B2B massage, and Girlfriend Experience tailored to your exact fantasies.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Do You Accept the Cash Payment Method?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, we accept cash payment methods (Cash on Delivery). You just have to hand it over to the companion immediately before the service begins for complete privacy and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground leading-relaxed space-y-4">
          <h2 className="font-display text-2xl text-gold-gradient mb-4">The Ultimate Guide to Jaipur Escort Services</h2>
          <p>
            Finding a reliable <strong>escort service Jaipur</strong> can often feel overwhelming due to the sheer number of unreliable agencies operating online. However, by choosing Payal Escort Service, you are opting for the most verified, trusted, and premium agency in the state of Rajasthan. Our expansive network of high-class independent escorts, college girls, models, and air hostesses ensures that regardless of your specific tastes or fantasies, we have the perfect companion waiting for you. When men search to <strong>book call girls in Jaipur</strong>, they are looking for more than just physical intimacy; they seek emotional connection, intellectual stimulation, and a truly girlfriend-like experience (GFE). We rigorously train our companions to provide exactly this, elevating your encounter from a mere transaction to a memorable, deeply satisfying relationship.
          </p>
          <p>
            Our strategic location in <strong>Sindhi Camp</strong> gives us a massive logistical advantage. It allows us to manage our incall facilities with unparalleled efficiency while simultaneously dispatching our outcall companions to any corner of the city within minutes. Whether you are craving a soothing full-body massage to relieve tension or desire a wild, passionate night to remember, our versatile companions are ready to fulfill your every whim. Do not settle for subpar services when the best <strong>Jaipur escort girls</strong> are just a WhatsApp message away. We guarantee 100% satisfaction, uncompromising hygiene, and a level of luxury that has made us the undisputed leaders in the Jaipur adult entertainment and spa industry.
          </p>
        </div>
      </section>

      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Ready to Book</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">Book The Best Escort Service Jaipur Now</h2>
          <p className="text-muted-foreground mb-10">Discreet booking available 24/7. Call or WhatsApp us directly.</p>
          <div className="flex flex-col items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_60px_-10px_#25D366]">
              WhatsApp: {whatsappNumber}
            </a>
            <a href="/book" className="inline-block rounded-full border border-primary/40 px-10 py-4 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition">
              View Booking Options
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground relative flex flex-col items-center">
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition mb-6 shadow-[0_0_20px_-5px_#25D366]" aria-label="WhatsApp Contact">
          <WhatsappIcon className="w-7 h-7" />
        </a>
        <p className="font-display text-lg text-gold-gradient mb-2">Payal Escort Service</p>
        
        <div className="max-w-5xl mx-auto px-6 mb-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-border/50 pt-8 mt-8">
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Categories</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/areas" className="hover:text-primary transition">Housewife Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">College Girls Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Airhostess Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Independent Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">VIP Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Celebrity Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Busty Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Cheap Escorts Girls</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/book" className="hover:text-primary transition">Call Girls in Jaipur</a></li>
                <li><a href="/" className="hover:text-primary transition">Jaipur Escorts service</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Jaipur Russian Escorts</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Jaipur Punjabi Escorts</a></li>
                <li><a href="/guides" className="hover:text-primary transition">SEO Guides & Articles</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Indian Escorts</a></li>
                <li><a href="/book" className="hover:text-primary transition">Massage in Jaipur</a></li>
                <li><a href="/areas" className="hover:text-primary transition">Asian Escorts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-display text-lg mb-4">Other Escorts City</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-primary transition">Delhi Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Bangalore Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Mumbai Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Udaipur Escorts</a></li>
                <li><a href="#" className="hover:text-primary transition">Alwar Escorts</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mb-4 text-xs text-muted-foreground leading-relaxed flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
           <strong>Locations Served in Jaipur:</strong> 
           <a href="/areas" className="hover:text-primary transition">Sindhi Camp</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">C-Scheme</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Malviya Nagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Vaishali Nagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Raja Park</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Bani Park</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Mansarovar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Tonk Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Amer</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Jal Mahal</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">JLN Marg</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">MI Road</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Civil Lines</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Jagatpura</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Vidyadhar Nagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Bapu Nagar</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Jhotwara</a> <span>|</span>
           <a href="/areas" className="hover:text-primary transition">Pratap Nagar</a>
        </div>
        <p>© {new Date().getFullYear()} Payal Escort Service & Companion Services · All bookings by appointment</p>
      </footer>
    </div>
  );
}