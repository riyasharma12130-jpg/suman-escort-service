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
      { title: "Escort Service Jaipur | Premium Spa & Call Girls in Sindhi Camp" },
      { name: "description", content: "Looking for the best escort service Jaipur? Visit Jaipur Relax Spa in Sindhi Camp for exclusive and premium relaxation services. Top-rated companion services available 24/7. Call +91 74148 38654." },
      { name: "keywords", content: "escort service Jaipur, escort service in Sindhi Camp, book call girls in Jaipur, call girls in Jaipur, Jaipur escort girls, Jaipur relax spa, premium spa Jaipur" },
    ],
  }),
});

// Indian escort names
const escortNames = [
  "Priya Sharma", "Ananya Patel", "Kavya Reddy", "Meera Singh", 
  "Riya Desai", "Neha Kapoor", "Pooja Malhotra", "Sneha Joshi",
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
  { name: "Priya Sharma", age: 24, location: "Jaipur", price: "₹5,000", img: imageList[1], desc: "Elegant and sophisticated, available for incall and outcall services." },
  { name: "Ananya Patel", age: 22, location: "Jaipur", price: "₹6,000", img: imageList[2], desc: "Charming and friendly, perfect companion for your evening." },
  { name: "Kavya Reddy", age: 26, location: "Jaipur", price: "₹7,000", img: imageList[3], desc: "Beautiful and experienced, ensures complete satisfaction." },
  { name: "Meera Singh", age: 23, location: "Jaipur", price: "₹5,500", img: imageList[4], desc: "Sweet and caring, available for both short and long durations." },
  { name: "Riya Desai", age: 25, location: "Jaipur", price: "₹6,500", img: imageList[5], desc: "Stunning beauty with excellent communication skills." },
  { name: "Neha Kapoor", age: 21, location: "Jaipur", price: "₹4,500", img: imageList[6], desc: "Young and energetic, perfect for a memorable experience." },
  { name: "Pooja Malhotra", age: 27, location: "Jaipur", price: "₹7,500", img: imageList[7], desc: "Mature and understanding, provides ultimate relaxation." },
  { name: "Sneha Joshi", age: 22, location: "Jaipur", price: "₹5,000", img: imageList[8], desc: "Friendly and approachable, ensures a comfortable experience." },
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
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Jaipur Relax Spa</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#escorts" className="hover:text-primary transition">Escorts</a>
            <a href="/about" className="hover:text-primary transition">About</a>
            <a href="/areas" className="hover:text-primary transition">Areas</a>
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
            Best Escort Service <span className="italic text-gold-gradient">in Jaipur</span>
            <br />
            Premium Spa & Companions
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Looking for the best escort service Jaipur? Verified, premium spa and discreet companion service in Sindhi Camp. Available 24/7.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/book" className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]">Book Your Escort</a>
            <a href="#escorts" className="rounded-full border border-border px-8 py-3.5 text-sm text-foreground hover:border-primary transition">View Escorts</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</div>
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
                <div className="aspect-[3/4] overflow-hidden">
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
        <p className="font-display text-lg text-gold-gradient mb-2">Jaipur Relax Spa</p>
        <p>© {new Date().getFullYear()} Jaipur Relax Spa & Companion Services · All bookings by appointment</p>
      </footer>
    </div>
  );
}