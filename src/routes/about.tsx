import { createFileRoute } from "@tanstack/react-router";
import { Header } from '../components/Header';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-5 h-5"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.532.26l.214-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.656-.643.136-.953l11.57-4.458c.538-.196 1.006.128.757 1.074z"/>
  </svg>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Jaipur Escorts Agency & Independent Call Girls" },
      { name: "description", content: "Learn more about Suman Varma Call Girls, the most trusted and genuine Jaipur escorts agency. We provide 100% independent call girls with real pics and no advance payment." },
      { name: "keywords", content: "about escort service Jaipur, Suman Varma Call Girls history, genuine call girls in Jaipur, premium spa Jaipur, Koramangala spa" },
    ],
  }),
});

export default function AboutPage() {
  const telegramHandle = "@Sonal_0101";
  const telegramLink = "https://t.me/Sonal_0101";

  return (
    <div className="min-h-screen bg-background text-foreground">
            <Header />

      <section className="pt-32 pb-16 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-light mb-6">About Suman Varma Call Girls</h1>
          <div className="flex items-center justify-center gap-4 mb-8 text-xs uppercase tracking-widest text-primary/80">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Written by Suman (Agency Director)
            </span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover why we are recognized as the premier escort service Jaipur has to offer, delivering unforgettable experiences with genuine and verified companions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">The Most Trusted Escort Service Jaipur</h2>
              <p className="mb-4">
                For years, Suman Varma Call Girls has stood as the gold standard for luxury companionship and premium relaxation in the Garden City. When you are looking for an <strong>escort service Jaipur</strong>, you are not just looking for a meeting; you are seeking a meticulously curated experience that prioritizes your satisfaction, privacy, and safety.
              </p>
              <p>
                Located conveniently in the heart of the city at <strong>Koramangala</strong>, our establishment serves as a sanctuary for those looking to escape the mundane. Our deep understanding of what constitutes a truly premium service has allowed us to become the most sought-after destination for gentlemen and travelers alike who want to book call girls in Jaipur.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Commitment to Quality & Discretion</h2>
              <p className="mb-4">
                What sets our escort service in Jaipur apart is our uncompromising dedication to quality. Every profile you see is 100% genuine and verified. We maintain a rigorous selection process to ensure that our companions are not only stunningly beautiful but also intellectually engaging, elegant, and sophisticated.
              </p>
              <p className="mb-4">
                We understand that discretion is the cornerstone of our industry. Whether you choose our premium incall services at our luxurious Koramangala location or opt for an outcall service at a five-star hotel in Indiranagar or Whitefield, your privacy is our absolute highest priority. Our booking process is streamlined, confidential, and designed to provide you with peace of mind.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">A Premium Spa Experience</h2>
              <p className="mb-4">
                Beyond being a premier escort service Jaipur, we are a holistic relaxation destination. Our facilities in Koramangala are equipped to provide you with a transcendent spa experience. From the moment you step through our doors, you will be enveloped in an atmosphere of luxury and tranquility. 
              </p>
              <p>
                Our services are tailored to melt away stress and leave you rejuvenated. By combining the therapeutic benefits of a premium spa with the enchanting company of our exclusive call girls in Jaipur, we guarantee an experience that satisfies both body and mind. It is this unique synthesis of wellness and companionship that has cemented our reputation at the very top.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Strict Screening & Verification Methodology</h2>
              <p className="mb-4 text-primary font-medium">Yes, we really have met and tested the service of every single companion.</p>
              <p className="mb-4">
                What truly distinguishes our <strong>escort service Jaipur</strong> from others is our relentless commitment to quality through a stringent 4-step vetting process. We do not accept just anyone into our agency. Every model, college girl, and independent companion undergoes a thorough background check and in-person verification at our Koramangala office.
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-sm">
                <li><strong>ID & Age Verification:</strong> We ensure all companions are strictly over 18 with valid documentation.</li>
                <li><strong>Photo Matching:</strong> We take original, unedited photos of the companions in our facility. The photos you see on our site are 100% genuine and verified by us.</li>
                <li><strong>Interview & Etiquette Test:</strong> We evaluate them not only on their physical beauty but also on their emotional intelligence, conversational skills, and overall elegance.</li>
                <li><strong>Health & Hygiene Check:</strong> Regular health screenings are mandatory for all our active escorts.</li>
              </ul>
              <p className="mb-4">
                When you <strong>book call girls in Jaipur</strong> through us, you are guaranteed to meet a companion who can hold her own in any social setting—from a high-profile corporate dinner in Indiranagar to a relaxed, intimate evening in Koramangala. We ensure that our escorts are polite, articulate, and dedicated to providing a Girlfriend Experience (GFE) that feels incredibly natural and unforced.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Uncompromising Hygiene & Safety Standards</h2>
              <p className="mb-4">
                In the luxury adult entertainment and premium spa industry, health and hygiene are non-negotiable. At Suman Varma Call Girls, we have instituted the highest health protocols for both our clients and our companions. Our incall facility in <strong>Koramangala</strong> is sanitized daily, and fresh linens, premium toiletries, and a completely immaculate environment are guaranteed for every single booking.
              </p>
              <p className="mb-4">
                Furthermore, we prioritize the safety and well-being of our <strong>Jaipur escort girls</strong> just as much as our clients. We operate a secure, verified booking system that protects the identities of everyone involved. This mutual respect creates a stress-free environment where both you and your companion can truly relax and enjoy the moment without any underlying anxieties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">A Premium Spa Experience</h2>
              <p className="mb-4">
                Beyond being a premier escort service Jaipur, we are a holistic relaxation destination. Our facilities in Koramangala are equipped to provide you with a transcendent spa experience. From the moment you step through our doors, you will be enveloped in an atmosphere of luxury and tranquility. 
              </p>
              <p>
                Our services are tailored to melt away stress and leave you rejuvenated. By combining the therapeutic benefits of a premium spa with the enchanting company of our exclusive call girls in Jaipur, we guarantee an experience that satisfies both body and mind. It is this unique synthesis of wellness and companionship that has cemented our reputation at the very top.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Philosophy of Luxury Companionship</h2>
              <p className="mb-4">
                At Suman Varma Call Girls, we believe that true luxury lies in the details and the personalization of service. We reject the "one-size-fits-all" approach that plagues the industry. Instead, we take the time to understand your specific desires, preferences, and fantasies. Whether you seek a dominant, passionate encounter or a sweet, submissive romance, our diverse roster of companions can cater to your exact requirements.
              </p>
              <p>
                We view ourselves not just as a booking agency, but as facilitators of extraordinary experiences. By continuously adapting to the feedback of our elite clientele and maintaining our unwavering standards, we remain the definitive choice for anyone looking to experience the finest <strong>escort service in Jaipur</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Why Koramangala?</h2>
              <p className="mb-4">
                We chose Koramangala as our primary hub for a very strategic reason: accessibility. As the central transit and commercial nexus of Jaipur, Koramangala allows us to swiftly and efficiently serve clients arriving from all over the country and the world. 
              </p>
              <p>
                Being based in Koramangala means our incall facilities are easily reachable, and our outcall companions can navigate to any major hotel or residence in Jaipur with minimal delay. When you book with us, you are booking a service that is deeply rooted in the local infrastructure, ensuring promptness and reliability every single time.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="font-display text-3xl text-gold-gradient mb-4">Our Diverse Companionship Types</h2>
              <p className="mb-4">
                We understand that every client has unique desires. Suman Varma Call Girls boasts the most diverse gallery in Rajasthan. We offer:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>High Profile Models:</strong> Perfect for high-end corporate events, elite parties, or when you simply want the absolute best.</li>
                <li><strong>College Girls:</strong> Ideal for clients seeking a fresh, energetic, and passionate Girlfriend Experience (GFE).</li>
                <li><strong>Russian & Foreign VIPs:</strong> For those who desire an exotic, international standard of luxury companionship right here in Jaipur.</li>
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
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">Experience the Best Escort Service Jaipur</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to experience genuine luxury? Our team is available 24/7 to assist you with your booking.
          </p>
          <a 
            href={telegramLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block rounded-full bg-[#0088cc] px-10 py-4 text-sm font-medium text-white hover:bg-[#0088cc]/80 transition shadow-[0_0_40px_-10px_#0088cc]"
          >
            Contact Us on Telegram
          </a>
        </div>
      </section>

      
    </div>
  );
}
