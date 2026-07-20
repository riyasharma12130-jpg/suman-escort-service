import { createFileRoute } from "@tanstack/react-router";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Escort Service Jaipur & Premium Spa" },
      { name: "description", content: "Contact Jaipur's premium escort service in Sindhi Camp. Available 24/7 for discreet booking. WhatsApp +91 74148 38654." },
      { name: "keywords", content: "contact escort service Jaipur, call girls in Jaipur contact, Jaipur escort service contact, Sindhi Camp spa contact" },
    ],
  }),
});

export default function ContactPage() {
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
            <a href="/book" className="hover:text-primary transition">Book</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]" aria-label="WhatsApp Contact">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>
      </header>

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">Get in Touch</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg mb-2">Phone (WhatsApp & Call)</h3>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-primary hover:text-gold transition">
                    +91 74148 38654
                  </a>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Business Address</h3>
                  <p className="text-muted-foreground">Payal Escort Service<br/>Sindhi Camp, Jaipur<br/>Rajasthan 302001, IN</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Availability</h3>
                  <p className="text-muted-foreground">24/7 - All days of the week</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Payment Methods</h3>
                  <p className="text-muted-foreground">Paytm, GPay, PhonePe, Cash</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6 text-gold-gradient">Why Choose Us</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Verified, genuine profiles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Complete privacy and discretion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Multiple payment options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Professional and hygienic service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:bg-[#25D366]/80 transition shadow-[0_0_60px_-10px_#25D366] mb-12"
            >
              Message Us on WhatsApp
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-2 mt-8 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.84852378877!2d75.78652431610486!3d26.9205561081523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3fd270d4c81%3A0xc64ef72d4c0627d3!2sSindhi%20Camp%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704200000000!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{border:0, borderRadius: '0.5rem'}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Payal Escort Service in Sindhi Camp, Jaipur"
            ></iframe>
          </div>

          <div className="mt-20 bg-card/50 border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl mb-6 text-gold-gradient text-center">Communication Policy & Privacy</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                When you contact Payal Escort Service, you are engaging with the most professional <strong>escort service Jaipur</strong> has to offer. We understand that reaching out for adult companionship requires a high degree of trust, which is why our communication policy is built entirely around your privacy and discretion.
              </p>
              <p>
                <strong>Confidentiality Guarantee:</strong> Every WhatsApp message, phone call, and inquiry is treated with strict confidentiality. We never store your contact information for marketing purposes, nor do we share it with third parties. Once your service is completed, your chat history on our end is routinely cleared to protect your identity.
              </p>
              <p>
                <strong>Response Time:</strong> Our customer support team is available 24/7. When you want to <strong>book call girls in Jaipur</strong>, we know that time is of the essence. We strive to respond to all WhatsApp inquiries within minutes, providing you with real-time updates on companion availability, recent photos, and travel times for outcall services to areas like C Scheme, Malviya Nagar, and Sindhi Camp.
              </p>
              <p>
                Please note that we do not entertain time-wasters, bargainers, or individuals looking for explicit chat services. Our communication lines are dedicated solely to serious clients looking to book genuine, premium companions for real-world encounters. 
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