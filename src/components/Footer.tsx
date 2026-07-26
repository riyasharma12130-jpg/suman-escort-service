import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl text-gold-gradient mb-4">Suman Escorts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium companionship agency providing 100% verified independent call girls. We strictly operate on a Zero Advance Payment model. Direct cash only.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/Sonal_0101" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition">
                Telegram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Top Locations</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/locations/$locationId" params={{ locationId: 'vaishali-nagar-call-girls' }} className="hover:text-primary transition">Vaishali Nagar Call Girls</Link></li>
              <li><Link to="/locations/$locationId" params={{ locationId: 'malviya-nagar-call-girls' }} className="hover:text-primary transition">Malviya Nagar Call Girls</Link></li>
              <li><Link to="/locations/$locationId" params={{ locationId: 'c-scheme-escorts' }} className="hover:text-primary transition">C-Scheme Escorts</Link></li>
              <li><Link to="/locations/$locationId" params={{ locationId: 'mansarovar-escorts' }} className="hover:text-primary transition">Mansarovar Escorts</Link></li>
              <li><Link to="/locations/$locationId" params={{ locationId: 'raja-park-escorts' }} className="hover:text-primary transition">Raja Park Escorts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/escorts" className="hover:text-primary transition">Our Escorts</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition">Rates & Pricing</Link></li>
              <li><Link to="/areas" className="hover:text-primary transition">All Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Legal & Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition">Help & FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/report" className="hover:text-primary transition">Report an Issue</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              <li><Link to="/sitemap" className="hover:text-primary transition">HTML Sitemap</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/50 pt-8 mt-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed text-justify mb-6">
            <strong>Disclaimer & Privacy Policy Summary:</strong> Suman Escort Service acts strictly as a booking agency. All models, escorts, and companions listed on this website are independent contractors and are 18 years of age or older. We have a strict zero-tolerance policy towards forced labor and human trafficking. We prioritize absolute client confidentiality; no digital trails, credit card statements, or identifiable booking logs are retained. Services are strictly for companionship and entertainment purposes in compliance with local regulations. Direct Cash Payment is the only accepted method to ensure 100% privacy and security for both parties.
          </p>
          <div className="text-[10px] text-muted-foreground/40 leading-relaxed text-justify mb-6">
            <strong>SEO Tags & Service Directory:</strong> Jaipur escort service, Rajasthan call girls, VIP Jaipur escorts, premium call girls Jaipur, independent escorts Jaipur, cash payment call girls, genuine escort agency, Vaishali Nagar escorts, Malviya Nagar call girls, VIP companions, hotel escorts near me, no advance payment escorts, high profile escorts, celebrity call girls, Russian escorts in Jaipur, Kannada call girls, college girls outcall, Bhabhi escorts, night stay companions, outstation escort services Rajasthan, Jagatpura escorts, Bani Park call girls, 24/7 escort service, genuine independent call girls, female escorts.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Suman Escort Service. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Premium Companionship • Unmatched Discretion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
