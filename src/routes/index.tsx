import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

// Using local images from the images folder
const imageList = [
  "/images/jaipur_model_1.png",
  "/images/jaipur_model_2.png",
  "/images/jaipur_model_3.png",
  "/images/jaipur_model_4.png",
  "/images/jaipur_model_5.png",
  "/images/jaipur_model_1.png",
  "/images/jaipur_model_2.png",
  "/images/jaipur_model_3.png",
  "/images/jaipur_model_4.png",
  "/images/jaipur_model_5.png",
  "/images/jaipur_model_1.png",
];

// Hero image
const heroImg = "/images/jaipur_hero.png";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Jaipur Call Girls | ₹3,000/Hr | Suman Escorts Jaipur Jaipur 24/7" },
      { name: "description", content: "Book verified call girls in jaipur from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service across Vaishali Nagar, Malviya Nagar, C-Scheme & all Jaipur areas. Cash payment, no advance." },
      { name: "keywords", content: "jaipur escort service, Jaipur Call Girls, call girls in jaipur, escort service in jaipur, Vaishali Nagar call girls, Malviya Nagar escorts, C-Scheme call girls, MI Road escorts, Mansarovar call girls, Rajasthani call girl, independent call girls Jaipur, russian escorts Jaipur, VIP call girls Jaipur, housewife escorts Jaipur, college call girls Jaipur, air hostess escorts Jaipur, hotel call girl Jaipur, call girl near me, call girl service Jaipur, cheap call girl Jaipur, cash payment call girls Jaipur, night call girl Jaipur, best escort service Jaipur, Jaipur Call Girl number, escort near me, call girl service near me, independent escort Jaipur, model escorts Jaipur, celebrity escorts Jaipur, massage service Jaipur, full night escort Jaipur, incall escort Jaipur, outcall escort Jaipur, Raja Park call girls, Bani Park call girls, Jagatpura escorts, Tonk Road call girls, Sodala escorts, Jhotwara call girls, Vidhyadhar Nagar escorts, Ajmer Road call girls, Sitapura escorts, Mahindra SEZ call girls, Delhi Bypass escorts, Gaurav Tower call girls, Sindhi Camp escorts, Jaipur escort agency, कॉल गर्ल जयपुर, जयपुर एस्कॉर्ट सर्विस, जयपुर कॉल गर्ल नंबर, कॉल गर्ल नियर मी" },
    ],
  }),
});

// Indian escort names
const escortNames = [
  "Suman Escorts Jaipur Sharma", "Ananya Patel", "Suman Escorts Jaipur Reddy", "Meera Singh", 
  "Suman Escorts Jaipur Desai", "Neha Kapoor", "Pooja Malhotra", "Sneha Joshi",
  "Divya Mehta", "Swati Verma", "Tanvi Agarwal", "Muskan Kaur",
  "Aarohi Gupta", "Ishita Roy", "Anjali Mishra",
  "Kritika Sinha", "Nandini Bose", "Yamini Patel", "Trisha Reddy"
];

// Service offerings
const services = [
  { name: "Incall Service", desc: "Discreet service at our premium location in Vaishali Nagar, Jaipur. Booking confirm with zero advance payment.", duration: "Available 24/7", price: "₹5,000", img: imageList[1] },
  { name: "Outcall Service", desc: "Service at your hotel or residence in Jaipur. Complete privacy guaranteed.", duration: "Available 24/7", price: "₹8,000", img: imageList[2] },
  { name: "VIP Service", desc: "Exclusive premium service with top escorts. Ultimate satisfaction assured.", duration: "By appointment", price: "₹15,000", img: imageList[3] },
];

// Escort profiles
const escorts = [
  { name: "Suman Escorts Jaipur Sharma", age: 24, location: "Jaipur", price: "₹5,000", img: imageList[1], desc: "Premium independent call girl in Jaipur. Elegant, sophisticated, and available for discreet incall and outcall services in Malviya Nagar and Vaishali Nagar.", bestFor: "Luxury Experiences" },
  { name: "Isha (Airhostess)", age: 23, location: "Jaipur", price: "₹8,000", img: imageList[9], desc: "Beautiful airhostess escort. Known for a sweet, attentive Girlfriend Experience and late-night hotel visits.", bestFor: "Girlfriend Experience" },
  { name: "Anika (Celebrity)", age: 22, location: "Jaipur", price: "₹12,000", img: imageList[10], desc: "High-profile celebrity model for rich clients. Highly exclusive and discreet VIP outcall companionship.", bestFor: "VIP Clients" },
  { name: "Priyanka (Housewife)", age: 28, location: "Jaipur", price: "₹6,000", img: imageList[2], desc: "Mature and incredibly sensual Bhabhi escort. Perfect for those seeking deep connection and passionate satisfaction.", bestFor: "Sensual Connections" },
  { name: "Suman (Independent)", age: 26, location: "Jaipur", price: "₹7,000", img: imageList[3], desc: "Beautiful and highly experienced high-profile escort. Ensures complete satisfaction with Girlfriend Experience (GFE) in Jaipur.", bestFor: "Experienced GFE" },
  { name: "Meera Singh", age: 23, location: "Jaipur", price: "₹5,500", img: imageList[4], desc: "Sweet, caring, and soft-spoken. Available for both short meetings and full-night romantic companionship in Jaipur.", bestFor: "Romantic Nights" },
  { name: "Suman Escorts Jaipur Desai", age: 25, location: "Jaipur", price: "₹6,500", img: imageList[5], desc: "Stunning beauty with excellent communication skills. The ideal dinner and date companion for elite gentlemen.", bestFor: "Dinner Dates" },
  { name: "Vanu (Russian)", age: 21, location: "Jaipur", price: "₹10,000", img: imageList[6], desc: "Exotic VIP Russian escort in Jaipur. Young, energetic, and provides an international standard of luxury companionship.", bestFor: "Exotic Luxury" },
  { name: "Pooja Malhotra", age: 27, location: "Jaipur", price: "₹7,500", img: imageList[7], desc: "Mature, understanding, and incredibly sensual. Provides ultimate relaxation and professional behavior for high-profile clients.", bestFor: "Stress Relief" },
  { name: "Sneha Joshi", age: 22, location: "Jaipur", price: "₹5,000", img: imageList[8], desc: "Friendly, approachable, and fun-loving. Ensures a very comfortable and respectful experience for first-time callers.", bestFor: "First-Timers" },
];

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export default function Landing() {
  const telegramHandle = "@SUMAN_VARMA_SPA";
  const telegramLink = "https://t.me/SUMAN_VARMA_SPA";
  
  const rituals = [
    { time: "60", unit: "MIN", label: "Quick Service", price: "₹4,000" },
    { time: "90", unit: "MIN", label: "Standard Service", price: "₹6,000" },
    { time: "120", unit: "MIN", label: "Extended Service", price: "₹10,000" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            <Header />

      <section className="relative flex min-h-screen items-center justify-center">
        <img src={heroImg} alt="Premium escort service in jaipur" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">𝗛𝗔𝗦𝗦𝗔𝗡 • 𝗠𝗬𝗦𝗢𝗥𝗘 • 𝗗𝗜𝗚𝗛𝗔</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]">
            Jaipur Escorts <span className="italic text-gold-gradient">&</span>
            <br />
            Premium Call Girls
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Looking for independent <strong>escort girls in Jaipur</strong>? We offer 100% verified, premium discreet companion services with real photos. Available 24/7.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/book" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/80 transition shadow-[0_0_40px_-10px_var(--color-primary)]">Book Your Escort</a>
            <a href="#escorts" className="rounded-full border border-border px-8 py-3.5 text-sm text-foreground hover:border-primary transition">View Escorts</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</div>
      </section>


      <section className="py-24 bg-card/20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Browse by Categories</h2>
            <p className="text-muted-foreground">Find your perfect companion by exploring our curated categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "Elite Housewives", desc: "Sophisticated, mature companions" },
              { title: "College Beauties", desc: "Youthful, vibrant companions" },
              { title: "VIP Elite", desc: "Premium luxury companions" },
              { title: "International Models", desc: "Global elite companions" },
              { title: "Celebrity Escorts", desc: "High-profile companionship" },
              { title: "Russian Models", desc: "Exotic European beauty" },
              { title: "Air Hostess", desc: "Professional & elegant" },
              { title: "Party Girls", desc: "Fun & energetic companions" },
              { title: "Professional Models", desc: "Top tier modeling professionals" },
              { title: "Business Women", desc: "Corporate & professional" },
              { title: "Travel Companions", desc: "Worldwide travel partners" },
              { title: "Massage Therapists", desc: "Relaxation & wellness experts" }
            ].map((cat, i) => (
              <a href="/escorts" key={i} className="group block bg-card border border-border/50 p-5 rounded-xl hover:border-primary transition cursor-pointer">
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition">{cat.title}</h3>
                <p className="text-xs text-muted-foreground">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20 border-b border-border">
        <div className="mx-auto max-w-5xl px-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-4 text-center">Welcome to Suman Escorts Jaipur Jaipur: Your #1 jaipur escort service</h2>
          
          <div className="flex items-center justify-center gap-4 mb-10 text-xs uppercase tracking-widest text-primary/80 border-b border-border/50 pb-4 max-w-2xl mx-auto">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              By Suman (Agency Director)
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
              <li><strong>Top-rated Escort Agency</strong> based in Vaishali Nagar, Jaipur with 24/7 availability.</li>
              <li>100% <strong>verified</strong> and independent companions for both Incall (our spa) and Outcall (hotel visits).</li>
              <li>Focus on absolute <strong>discretion</strong>, hygiene, and a premium "Girlfriend Experience" (GFE).</li>
              <li>Affordable rates starting at ₹5,000 for standard services up to VIP levels.</li>
            </ul>
          </div>

          <div className="space-y-6 text-sm md:text-base">
            <p>
              When you are seeking the absolute pinnacle of luxury companionship, you need the most reliable and genuine <strong>escort service Jaipur</strong> has to offer. At Suman Escorts Jaipur Jaipur, located in the prestigious heart of Vaishali Nagar, we pride ourselves on delivering an unparalleled experience that transcends the ordinary. Whether you are a business traveler unwinding after a long conference, a tourist looking to add a spark to your vacation, or a local gentleman seeking a discreet and beautiful companion, our agency is your ultimate destination to <strong>book call girls in jaipur</strong>.
            </p>
            <p>
              Our establishment is not just an agency; it is a sanctuary of premium relaxation. We understand that our elite clients demand perfection, which is why every single profile in our gallery represents a stunning, educated, and verified companion. Unlike other services, we do not use fake photos or misleading descriptions. When you search for the best <strong>Jaipur escort girls</strong>, you expect transparency, hygiene, and absolute discretion—and that is exactly what we guarantee. From our luxurious incall facilities in Vaishali Nagar to our swift and discreet outcall services across Malviya Nagar, C-Scheme, and Mansarovar, we have meticulously designed every aspect of our service to ensure your complete satisfaction.
            </p>
            <p>
              What truly sets us apart as the top-ranking <strong>escort service Jaipur</strong> is our holistic approach. We combine the therapeutic, stress-relieving benefits of a high-end spa with the thrilling, intimate companionship of Jaipur's most beautiful women. Our VIP companions are trained to be the perfect dates, whether you need an elegant partner for a corporate dinner, an adventurous guide for exploring the Garden City, or a passionate lover for a private evening behind closed doors. Booking with Suman Escorts Jaipur Jaipur is not just a transaction; it is an investment in an unforgettable memory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-12">Understanding Our Premium Services: Incall vs Outcall</h2>
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground">
            <div className="bg-card border border-border p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl text-gold-gradient mb-4">Luxurious Incall Services in Vaishali Nagar</h3>
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                Our incall service is the epitome of convenience and luxury. Situated centrally in Vaishali Nagar, our private spa facility is designed to offer maximum comfort and absolute privacy. When you choose to visit us, you are stepping into a safe, hygienic, and highly discreet environment. The rooms are equipped with premium amenities, ambient lighting, and immaculate hygiene standards, ensuring that your time with our beautiful <strong>call girls in jaipur</strong> is utterly flawless.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Choosing our incall option means you do not have to worry about the logistics of hosting. You simply arrive at our secure Vaishali Nagar location, complete the secure payment process, and immediately begin your session of premium spa relaxation and intimate companionship. It is the perfect choice for those who demand immediate service without the hassle of preparing their own space.
              </p>
            </div>
            <div className="bg-card border border-border p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl text-gold-gradient mb-4">Discreet Outcall Services Across Jaipur</h3>
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                For those who prefer the comfort of their own surroundings, our <strong>escort service Jaipur</strong> offers a highly reliable outcall option. Whether you are staying in a 5-star hotel in Malviya Nagar, a luxury resort in Mahindra SEZ, or a private residence in C-Scheme or Mansarovar, our companions will travel directly to your doorstep. We prioritize your privacy above all else; our escorts arrive in unmarked vehicles and conduct themselves with the utmost professionalism.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our outcall booking process is highly streamlined. Once you verify your location and complete the quick booking confirmation, your chosen companion is immediately dispatched. We understand the value of your time, which is why we guarantee prompt arrivals and transparent communication throughout the process. Experience the luxury of Suman Escorts Jaipur Jaipur without ever leaving your room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-12">8 Reasons to Choose Suman Escorts Jaipur Jaipur</h2>
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
              <p className="text-sm">We cover all major areas including C-Scheme, Mansarovar, Tonk Road, Malviya Nagar, Jagatpura, and Gaurav Tower.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">4. Attractive & Professional Companions</h3>
              <p className="text-sm">Choose from a diverse gallery of Russian Escorts, VIP Escorts, College Girls, and High Profile Models.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold-gradient mb-2">5. Quick Booking Support</h3>
              <p className="text-sm">Easy, instant booking through Telegram with immediate response support from our dedicated team.</p>
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
            <h2 className="font-display text-4xl md:text-5xl font-light">Meet Our Premium Escorts in Vaishali Nagar, Jaipur</h2>
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
            <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-6">Explore Top Categories of Jaipur escorts</h2>
            <p className="mb-4">
              This time you can enjoy quality time with a girl according to your exact requirements. We have a complete checklist of the top categories of <strong>jaipur escort services</strong> to ensure you find the perfect match.
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
                <p className="text-sm">Rich clients from affluent backgrounds need amazing girls with VIP culture. We have a special category of <strong>VIP call girls in jaipur</strong>. These model escorts have beautiful, well-maintained figures and provide a premium, Girlfriend Experience (GFE).</p>
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
                <h3 className="font-display text-xl text-primary mb-3">Foreplay and Roleplay call girls in jaipur</h3>
                <p>Foreplay is the essential part of intimacy. However, it gets much more exciting with roleplay. Roleplay gives you the liberty to be anyone to the lady. You can act as a doctor, plumber, or delivery boy. Our skilled independent Jaipur Call Girls will cooperate fully with your fantasies.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg shadow-lg">
                <h3 className="font-display text-xl text-primary mb-3">Erotic B2B Massage From Independent Jaipur Call Girls</h3>
                <p>The city of nightlife hardly gets you what you want without stress. To relax deeply, we bring you the premium massage Jaipur Call Girl Service. Booking this service gives you a combination of therapeutic B2B massage and intense, beautiful companionship for a highly affordable price.</p>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg shadow-lg mt-12 text-center">
              <h2 className="font-display text-2xl text-gold-gradient mb-4">100% Direct Cash Payment Service</h2>
              <p className="max-w-3xl mx-auto">
                We highly encourage our clients to choose the <strong>Cash Payment</strong> option. We are the premier Jaipur Call Girls Agency offering direct cash payment service to give you the ultimate freedom and privacy. No credit card statements, no digital trails—just pure, untracked entertainment. Simply book your Independent Call Girl in Jaipur, wait for her arrival at your hotel or residence, and pay directly in cash before the service begins. It is safe, discreet, and reliable.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl md:text-5xl font-light text-gold-gradient mb-6">How to Book call girls in jaipur?</h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Open Google on your smartphone and search for our services.</li>
              <li>Visit our official Suman Escorts Jaipur Jaipur website.</li>
              <li>Explore our massive gallery and choose girls and services according to your taste.</li>
              <li>Use the Telegram and Calling options mentioned on our site.</li>
              <li>Finalize the profile, confirm your booking without any advance token, and share your hotel/room details.</li>
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
              <h3 className="font-display text-xl mb-2 text-gold-gradient">What kind of services can I expect from jaipur escort service?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">A client is always thinking of hiring an escort who is powerful and beautiful. You can expect a wide range of services including Girlfriend Experience (GFE), full body massage, dinner dates, long drives, and passionate companionship tailored to your desires.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Can I get a full body massage from escort service Jaipur?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, many of our escorts are trained to give full body massages. It is highly recommended to book a full-night service or extended duration to ensure you have enough time to enjoy both a relaxing massage and intimate companionship.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">How do I book an escort service in jaipur with you?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Booking is extremely simple and discreet. Just contact us via Telegram at @SUMAN_VARMA_SPA. Browse our gallery, select your preferred companion, provide your location (for outcall) or choose to visit us in Vaishali Nagar (for incall). Once you share your location, your booking is locked in—with absolutely no advance payment required.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Are the photos of the call girls in jaipur 100% genuine?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Absolutely. We pride ourselves on complete transparency. The photos you see are of the exact companions you will meet. We do not use fake internet pictures or heavily manipulated images. What you see is precisely what you get.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Is the service safe and discreet?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Your privacy is our number one priority. All client data is strictly confidential and permanently deleted after the service. Our companions are trained professionals who understand the importance of discretion, especially for our high-profile and VIP clients.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Which areas in Jaipur do you serve?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our primary incall spa is located in Vaishali Nagar. For outcall services, we cover the entirety of Jaipur, including Malviya Nagar, C-Scheme, Mansarovar, MI Road, Raja Park, Tonk Road, and all major luxury hotels and resorts across the Garden City.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-display text-xl mb-2 text-gold-gradient">Do call girls in jaipur are Available for the Outcall?</h3>
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
              <p className="text-sm text-muted-foreground leading-relaxed">Yes, we accept cash payment methods (Direct Cash Payment). You just have to hand it over to the companion immediately before the service begins for complete privacy and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground leading-relaxed space-y-4">
          <h2 className="font-display text-2xl text-gold-gradient mb-4">The Ultimate Guide to jaipur escort services</h2>
          <p>
            Finding a reliable <strong>escort service Jaipur</strong> can often feel overwhelming due to the sheer number of unreliable agencies operating online. However, by choosing Suman Escorts Jaipur Jaipur, you are opting for the most verified, trusted, and premium agency in the state of Rajasthan. Our expansive network of high-class independent escorts, college girls, models, and air hostesses ensures that regardless of your specific tastes or fantasies, we have the perfect companion waiting for you. When men search to <strong>book call girls in jaipur</strong>, they are looking for more than just physical intimacy; they seek emotional connection, intellectual stimulation, and a truly girlfriend-like experience (GFE). We rigorously train our companions to provide exactly this, elevating your encounter from a mere transaction to a memorable, deeply satisfying relationship.
          </p>
          <p>
            Our strategic location in <strong>Vaishali Nagar</strong> gives us a massive logistical advantage. It allows us to manage our incall facilities with unparalleled efficiency while simultaneously dispatching our outcall companions to any corner of the city within minutes. Whether you are craving a soothing full-body massage to relieve tension or desire a wild, passionate night to remember, our versatile companions are ready to fulfill your every whim. Do not settle for subpar services when the best <strong>Jaipur escort girls</strong> are just a Telegram message away. We guarantee 100% satisfaction, uncompromising hygiene, and a level of luxury that has made us the undisputed leaders in the Jaipur adult entertainment and spa industry.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">PRICING</p>
            <h2 className="font-display text-3xl md:text-5xl font-light">Jaipur Call Girls Rate List</h2>
            <p className="text-muted-foreground mt-4">Transparent pricing for all categories. Direct Cash Payment available.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-primary/10 text-primary">
                  <th className="text-left p-4 font-display text-base">Girl Category</th>
                  <th className="text-center p-4 font-display text-base">Short Time (1-2 hrs)</th>
                  <th className="text-center p-4 font-display text-base">Full Night</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Indian Call Girl</td>
                  <td className="p-4 text-center">₹5,000</td>
                  <td className="p-4 text-center">₹12,000</td>
                </tr>
                <tr className="border-t border-border bg-card/50">
                  <td className="p-4 font-medium text-foreground">Housewife / Bhabhi Escorts</td>
                  <td className="p-4 text-center">₹6,000</td>
                  <td className="p-4 text-center">₹15,000</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Young College Call Girl</td>
                  <td className="p-4 text-center">₹7,000</td>
                  <td className="p-4 text-center">₹18,000</td>
                </tr>
                <tr className="border-t border-border bg-card/50">
                  <td className="p-4 font-medium text-foreground">Celebrity / Model Escorts</td>
                  <td className="p-4 text-center">₹12,000</td>
                  <td className="p-4 text-center">₹25,000</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Russian Call Girls</td>
                  <td className="p-4 text-center">₹15,000</td>
                  <td className="p-4 text-center">₹30,000</td>
                </tr>
                <tr className="border-t border-border bg-card/50">
                  <td className="p-4 font-medium text-foreground">Air Hostess Escorts</td>
                  <td className="p-4 text-center">₹10,000</td>
                  <td className="p-4 text-center">₹22,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">* Prices may vary based on duration, specific companion, and services. Cash Payment is always accepted.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-6 text-center">जयपुर कॉल गर्ल्स सर्विस - सबसे भरोसेमंद एस्कॉर्ट एजेंसी</h2>
          <p>
            जयपुर की सबसे प्रीमियम और भरोसेमंद <strong>कॉल गर्ल्स सर्विस</strong> में आपका स्वागत है। कावया एस्कॉर्ट सर्विस जयपुर की सबसे पुरानी और विश्वसनीय एजेंसी है। हम आपको 100% असली और वेरिफाइड <strong>इंडिपेंडेंट कॉल गर्ल्स</strong> प्रदान करते हैं। हमारी सभी लड़कियां खूबसूरत, शिक्षित और प्रोफेशनल हैं। चाहे आप IT बिजनेस ट्रिप पर हों या अकेलापन महसूस कर रहे हों, हमारी <strong>जयपुर कॉल गर्ल्स</strong> आपकी हर फैंटेसी को पूरा करने के लिए हमेशा तैयार हैं।
          </p>
          <p>
            हमारे पास Indian Call Girls, Rajasthani Call Girls, Russian Call Girls, College Girls, Desi Bhabhi, Housewife Escorts और कई तरह की कॉल गर्ल्स मौजूद हैं। ये ना सिर्फ आपके मूड को खुशहाल बनाएंगी, बल्कि हर समय आपको संतुष्टि और प्लेजर देने के लिए तैयार रहेंगी। बुकिंग बेहद आसान है – बस हमारे Telegram हैंडल <strong>@SUMAN_VARMA_SPA</strong> पर कॉल या मैसेज करें।
          </p>
          <h3 className="font-display text-2xl text-primary mt-8">जयपुर में कॉल गर्ल्स बुक करने के फायदे</h3>
          <p>
            जब आप हमारी <strong>जयपुर एस्कॉर्ट सर्विस</strong> से कॉल गर्ल्स बुक करते हैं, तो आपको कई शानदार फायदे मिलते हैं। जैसे - प्री-बुकिंग, सर्विस से पहले लड़की से मिलने का विकल्प, डिनर डेट, कॉफी डेट, होटल विजिट, और फुल नाइट सर्विस। हम 100% <strong>कैश पेमेंट</strong> स्वीकार करते हैं। कोई एडवांस पेमेंट नहीं, कोई ऑनलाइन ट्रांजैक्शन नहीं – बस कैश दें और सर्विस का आनंद लें।
          </p>
          <p>
            हमारी सभी एस्कॉर्ट्स का नियमित स्वास्थ्य परीक्षण होता है, जिससे आपको 100% सुरक्षित और बेहतरीन अनुभव मिलता है। हमारे पास राजस्थानी, बंगाली, नेपाली, पंजाबी, रूसी और भारतीय सुंदरियों की एक शानदार रेंज उपलब्ध है। <strong>वैशाली नगर, मालवीय नगर, सी-स्कीम, एमआई रोड, मानसरोवर, राजा पार्क, बनी पार्क, जगतपुरा</strong> और जयपुर के सभी प्रमुख इलाकों में हमारी सर्विस उपलब्ध है।
          </p>
          <h3 className="font-display text-2xl text-primary mt-8">24/7 उपलब्ध - अभी बुक करें!</h3>
          <p>
            अगर आप <strong>जयपुर में कॉल गर्ल्स</strong> की तलाश में हैं, तो अब आपकी खोज खत्म हुई। हमारी हाई-क्लास कॉल गर्ल्स जयपुर की सबसे टॉप और सेलेक्टेड लड़कियां हैं। बुकिंग के सिर्फ 30 मिनट में आपके पास पहुंच जाती हैं। इनकॉल और आउटकॉल दोनों सेवाएं उपलब्ध हैं। तो बिना किसी झिझक के अभी कॉल करें: <strong>+91 99285 61640</strong>
          </p>
        </div>
      </section>



      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">VERIFIED REVIEWS</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-primary">
                {"★★★★★".split("").map((star, i) => <span key={i} className="text-primary text-xl">{star}</span>)}
              </div>
              <span className="text-white font-bold ml-2">4.9/5</span>
              <span className="text-muted-foreground ml-2">847 verified reviews</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                initial: "R", bg: "bg-pink-600",
                name: "Rahul M.", date: "July 2026 - Vaishali Nagar",
                text: "Booked Priya for an evening through Suman Escorts Jaipur Jaipur and the experience was top notch. Very professional, discreet, and punctual. Profile photos were 100% real. Will book again through Suman Escorts Jaipur Escort!",
                package: "Incall Service - Vaishali Nagar, Jaipur"
              },
              {
                initial: "A", bg: "bg-emerald-500",
                name: "Arjun K.", date: "July 2026 - Malviya Nagar",
                text: "Called Suman Escorts Jaipur at 11 PM, booking confirmed in 10 minutes. Ananya was fantastic — charming, educated. Best escort service in jaipur, no question. 5 stars for Suman!",
                package: "Outcall - Hotel Stay, Malviya Nagar"
              },
              {
                initial: "V", bg: "bg-amber-500",
                name: "Vikram S.", date: "June 2026 - C-Scheme",
                text: "Natasha for corporate event — stunning, spoke perfect English, handled everything perfectly. Suman Escorts Jaipur VIP service is unmatched for Jaipur Call Girls. Highly recommended!",
                package: "VIP Corporate Package - C-Scheme"
              },
              {
                initial: "S", bg: "bg-blue-500",
                name: "Suresh T.", date: "June 2026 - MI Road",
                text: "Using Suman Escorts Jaipur Jaipur 2 years now. Always reliable, always discreet. Full night ₹12,000 totally worth it. Best independent call girl service in Jaipur!",
                package: "Full Night Package - MI Road"
              },
              {
                initial: "M", bg: "bg-purple-500",
                name: "Manish B.", date: "May 2026 - Mansarovar",
                text: "WhatsApp response instant on Suman's number. Meera punctual, gorgeous, very comfortable. Total privacy maintained throughout. Suman Escorts Jaipur is the most trustworthy escort agency in Jaipur!",
                package: "2-Hour Package - Mansarovar"
              },
              {
                initial: "D", bg: "bg-pink-500",
                name: "Dev R.", date: "May 2026 - Raja Park",
                text: "First time using any escort service. Suman Escorts Jaipur Call Girls made it smooth, professional, safe. Riya exceeded all expectations. Real photos, real experience. 10/10!",
                package: "GFE Package - Raja Park"
              },
              {
                initial: "N", bg: "bg-teal-500",
                name: "Naveen P.", date: "April 2026 - Bani Park",
                text: "I was looking for Rajasthani call girls in jaipur and Suman Escorts Jaipur Jaipur provided exactly what I asked for. The lady was very cooperative and beautiful. Thank you Suman!",
                package: "Incall Service - Bani Park"
              },
              {
                initial: "K", bg: "bg-orange-500",
                name: "Karthik Y.", date: "April 2026 - Jagatpura",
                text: "Outstanding outcall service by Suman Escorts Jaipur. She arrived at my 5-star hotel in Jagatpura within 45 minutes. Super discreet and exactly like the photos.",
                package: "Outcall - 5-Star Hotel, Jagatpura"
              },
              {
                initial: "P", bg: "bg-indigo-500",
                name: "Prateek J.", date: "March 2026 - Jhotwara",
                text: "Tried Suman Escorts Jaipur Jaipur for a weekend getaway. The Russian model was breathtaking. The agency is very transparent with their pricing, no hidden charges at all.",
                package: "Weekend Package - Jhotwara"
              },
              {
                initial: "G", bg: "bg-rose-500",
                name: "Gaurav L.", date: "March 2026 - Sodala",
                text: "If you need premium VIP call girls in jaipur, just text Suman Escorts Jaipur on Telegram. Zero advance payment and 100% genuine girls. Best experience I've had in the city.",
                package: "VIP Elite Package - Sodala"
              }
            ].map((review, i) => (
              <div key={i} className="bg-card/40 border border-border/50 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.bg}`}>
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{review.name}</h4>
                        <p className="text-[10px] text-muted-foreground">Verified Client - {review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-primary text-sm">★★★★★</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">"{review.text}"</p>
                </div>
                <div className="text-[10px] text-muted-foreground/60 border-t border-border/30 pt-3">
                  {review.package}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Ready to Book</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">Book The Best Escort Service Jaipur Now</h2>
          <p className="text-muted-foreground mb-10">Discreet booking available 24/7. Call or Telegram us directly.</p>
          <div className="flex flex-col items-center gap-4">
            <a href={telegramLink} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#0088cc] px-10 py-4 text-sm font-medium text-white hover:bg-[#0088cc]/80 transition shadow-[0_0_60px_-10px_#25D366]">
              Telegram: {telegramHandle}
            </a>
            <a href="/book" className="inline-block rounded-full border border-primary/40 px-10 py-4 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition">
              View Booking Options
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}