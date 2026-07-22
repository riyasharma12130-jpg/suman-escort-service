import { createFileRoute } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book VIP Jaipur Escorts | Cash On Delivery Call Girls" },
      { name: "description", content: "Book genuine Jaipur call girls & VIP escorts safely. 24/7 booking available for hotel outcalls and incalls with complete privacy and Cash on Delivery (COD)." },
      { name: "keywords", content: "book escort service Jaipur, payal escort service booking, call girl booking Jaipur, escort service booking in Sindhi Camp" },
    ],
  }),
});

export default function BookPage() {
  const whatsappNumber = "+91 74148 38654";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">

      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Payal Escort Service</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition">Home</a>
            <a href="/about" className="hover:text-primary transition">About</a>
            <a href="/areas" className="hover:text-primary transition">Areas</a>
            <a href="/contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]" aria-label="WhatsApp Contact">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Booking</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">Book Your Jaipur Escort</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Quick Booking</h2>
              <p className="text-muted-foreground mb-6">
                For immediate booking, contact us directly via WhatsApp. Our team is available 24/7 to assist you with discreet, professional service.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block w-full text-center rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_40px_-10px_#25D366]"
              >
                WhatsApp: {whatsappNumber}
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Booking Process</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">1.</span>
                  <span>Contact us via WhatsApp with your requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary text-lg">2.</span>
                  <span>Confirm your booking with advance payment (₹299)</span>
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
                As the leading <strong>escort service Jaipur</strong>, we maintain strict guidelines to ensure the safety and satisfaction of both our clients and our companions. Please read these terms carefully before proceeding with your booking.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Age Verification:</strong> You must be at least 18 years of old to use our services. Valid ID may be required upon request.</li>
                <li><strong>Advance Payment:</strong> A nominal advance payment is required to confirm all outcall bookings. This ensures the genuine intent of the client and secures the companion's time. The remaining balance is to be paid directly to the companion upon arrival.</li>
                <li><strong>Respect and Decency:</strong> We have a zero-tolerance policy for abuse, harassment, or non-consensual behavior. Our companions are professionals and expect to be treated with utmost respect. Any violation of this will result in immediate termination of the service without refund.</li>
                <li><strong>Substance Policy:</strong> The use of illegal narcotics during the service is strictly prohibited. Intoxicated clients may be refused service at the discretion of the companion.</li>
                <li><strong>Privacy:</strong> We guarantee 100% discretion. In return, we expect our clients to respect the privacy of our companions. No unauthorized photography or recording is permitted under any circumstances.</li>
              </ul>
              <p className="mt-4">
                By contacting us to <strong>book call girls in Jaipur</strong>, you automatically agree to abide by these guidelines. We are committed to providing a safe, luxurious, and unforgettable experience for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Payal Escort Service</p>
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