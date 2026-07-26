import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const telegramLink = "https://t.me/SUMAN_VARMA_SPA";

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/escorts", label: "ESCORTS" },
    { href: "/why-us", label: "WHY US" },
    { href: "/pricing", label: "PRICING" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/areas", label: "LOCATIONS" },
    { href: "/report", label: "REPORT" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient relative z-50">
          Suman Escorts Jaipur Jaipur
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-muted-foreground font-medium tracking-wider">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition">{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4 relative z-50">
          <a href={telegramLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0088cc] hover:bg-[#0088cc]/80 text-white transition shadow-[0_0_15px_-5px_#0088cc]" aria-label="Telegram Contact">
            <TelegramIcon className="w-5 h-5" />
          </a>
          <a href="/book" className="hidden sm:inline-flex rounded-full border border-primary/40 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition">
            Book Now
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="py-4 border-b border-border/50 text-lg font-medium hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/book" 
              className="mt-6 mb-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
