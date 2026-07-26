import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Sitemap | Suman Escorts Jaipur" },
      { name: "description", content: "Complete directory of Suman Escorts Jaipur. Find links to all our Jaipur, Hassan, Mysore, and Digha escort location pages." },
    ],
  }),
});

export default function SitemapPage() {
  const locations = [
    { id: 'vaishali-nagar-call-girls', label: 'Vaishali Nagar Call Girls' },
    { id: 'malviya-nagar-call-girls', label: 'Malviya Nagar Call Girls' },
    { id: 'c-scheme-escorts', label: 'C-Scheme Escorts' },
    { id: 'mangalore-call-girls', label: 'Mangalore Escorts' },
    { id: 'hubli-call-girls', label: 'Hubli Escorts' },
    { id: 'mansarovar-escorts', label: 'Mansarovar Escorts' },
    { id: 'raja-park-escorts', label: 'Raja Park Escorts' },
    { id: 'whitefield-call-girls', label: 'Whitefield Escorts' },
    { id: 'mg-road-escorts', label: 'MI Road Escorts' },
    { id: 'hsr-layout-call-girls', label: 'HSR Layout Call Girls' },
    { id: 'jp-nagar-call-girls', label: 'JP Nagar Call Girls' },
    { id: 'jayanagar-escorts', label: 'Jayanagar Escorts' },
    { id: 'electronic-city-escorts', label: 'Electronic City Escorts' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Directory</p>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-6">HTML Sitemap</h1>
            <p className="text-lg text-muted-foreground">
              A complete guide to our services, locations, and policies across Rajasthan and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-6 border-b border-border/50 pb-4">Main Pages</h2>
              <ul className="space-y-4">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
                <li><Link to="/escorts" className="text-muted-foreground hover:text-primary transition">Our Escorts Gallery</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition">Rates & Pricing</Link></li>
                <li><Link to="/areas" className="text-muted-foreground hover:text-primary transition">All Service Areas</Link></li>
                <li><Link to="/book" className="text-muted-foreground hover:text-primary transition">Book Now</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition">Contact Us</Link></li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-2xl text-gold-gradient mb-6 border-b border-border/50 pb-4">Guides & Legal</h2>
              <ul className="space-y-4">
                <li><Link to="/guides" className="text-muted-foreground hover:text-primary transition">Escort Guides</Link></li>
                <li><Link to="/guides/first-time-booking" className="text-muted-foreground hover:text-primary transition">First Time Booking Guide</Link></li>
                <li><Link to="/guides/incall-vs-outcall" className="text-muted-foreground hover:text-primary transition">Incall vs Outcall Guide</Link></li>
                <li><Link to="/help" className="text-muted-foreground hover:text-primary transition">Help & FAQs</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link></li>
                <li><Link to="/report" className="text-muted-foreground hover:text-primary transition">Report an Issue</Link></li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg md:col-span-2">
              <h2 className="font-display text-2xl text-gold-gradient mb-6 border-b border-border/50 pb-4">Service Locations (Rajasthan & Beyond)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((loc) => (
                  <Link 
                    key={loc.id}
                    to="/locations/$locationId" 
                    params={{ locationId: loc.id }} 
                    className="text-muted-foreground hover:text-primary transition text-sm"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
