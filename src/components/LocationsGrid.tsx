import { Link } from '@tanstack/react-router';
import { cities } from '../data/cities';

export function LocationsGrid() {
  // Format city name for URL (lowercase, replace spaces with dashes)
  const formatUrl = (city: string) => {
    return `${city.toLowerCase().replace(/\s+/g, '-')}-escorts`;
  };

  return (
    <section className="bg-background py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Available Locations Across India
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Browse our extensive network of premium companionship services across all major cities and towns. Click a location to view available escorts in your area.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {cities.sort().map((city) => (
            <Link
              key={city}
              to="/locations/$locationId"
              params={{ locationId: formatUrl(city) }}
              className="px-4 py-2 text-xs md:text-sm rounded-full border border-border/60 bg-card/30 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
