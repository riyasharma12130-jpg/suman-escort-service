import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

export const Route = createFileRoute("/escorts")({
  component: EscortsPage,
  head: () => ({
    meta: [
      { title: "Our Escorts | Verified Call Girls in Bangalore" },
      { name: "description", content: "Browse our complete directory of 100% verified Bangalore call girls. From VIP models to college girls, find your perfect companion." },
    ],
  }),
});

function EscortsPage() {
  const telegramLink = "https://t.me/Sonal_0101";

  // Re-using the escorts list concept
  const categories = [
    "All", "VIP Models", "College Girls", "Russian", "Kannada", "Housewives"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-16">
      <Header />

      <main className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Our Verified Escorts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete directory of verified companions. We offer 100% genuine profiles with real photos and guaranteed service quality.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full border ${i === 0 ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-foreground hover:border-primary'} transition text-sm`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Placeholder Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { id: 1, name: "Priya", age: 22, area: "Koramangala", price: "₹5,000", image: "/images/photo_2026-07-23_21-16-06.jpg" },
            { id: 2, name: "Ananya", age: 24, area: "Indiranagar", price: "₹6,000", image: "/images/photo_2026-07-23_22-48-34.jpg" },
            { id: 3, name: "Meera", age: 21, area: "Whitefield", price: "₹5,500", image: "/images/photo_2026-07-23_23-02-06.jpg" },
            { id: 4, name: "Riya", age: 23, area: "MG Road", price: "₹7,000", image: "/images/photo_2026-07-23_23-02-09.jpg" },
            { id: 5, name: "Neha", age: 25, area: "HSR Layout", price: "₹5,000", image: "/images/photo_2026-07-23_23-02-10.jpg" },
            { id: 6, name: "Sonal", age: 22, area: "BTM Layout", price: "₹4,500", image: "/images/photo_2026-07-19_09-01-00.jpg" },
            { id: 7, name: "Kiara", age: 20, area: "JP Nagar", price: "₹8,000", image: "/images/photo_2026-07-21_11-46-32.jpg" },
            { id: 8, name: "Aisha", age: 24, area: "Electronic City", price: "₹6,500", image: "/images/photo_2026-07-21_23-06-59.jpg" },
          ].map((item) => (
             <article key={item.id} className="group relative overflow-hidden rounded-lg bg-card/40 border border-border/50">
               <div className="aspect-[3/4] bg-muted/20 relative flex items-center justify-center overflow-hidden">
                 <img src={item.image} alt={item.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded font-bold z-10">VERIFIED</div>
               </div>
               <div className="p-5">
                 <h3 className="font-display text-xl mb-1 text-white">{item.name}</h3>
                 <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                   <span>{item.age} years</span>
                   <span>{item.area}</span>
                 </div>
                 <div className="flex items-center justify-between border-t border-border/30 pt-3">
                   <span className="font-display text-lg text-primary">{item.price}</span>
                   <a href={telegramLink} className="text-xs uppercase tracking-widest text-white hover:text-primary transition bg-white/5 px-3 py-1 rounded">Book</a>
                 </div>
               </div>
             </article>
          ))}
        </div>
      </main>
    </div>
  );
}
