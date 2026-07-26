import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Footer } from "../components/Footer";
import { LocationsGrid } from "../components/LocationsGrid";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
{
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "jxESRVjN5XoFAcmwonYhi6dzJ8GzTTLfTxW2jthxhlE" },
      { title: "Jaipur Escorts | ₹3,000/Hr | Suman Varma Call Girls" },
      { name: "description", content: "Book verified call girls in Jaipur, Hassan, Mysore, and Rajasthan from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service. Cash payment, no advance." },
      { name: "keywords", content: "karnataka escort service, hassan escorts, mysore call girls, digha escorts, bangalore escort service, bangalore call girls, call girls in bangalore, escort service in bangalore, koramangala call girls, indiranagar escorts, whitefield call girls, kannada call girl, independent call girls bangalore, russian escorts bangalore, VIP call girls, hotel call girl, call girl near me, call girl service karnataka, cheap call girl, cash payment call girls, best escort service, call girl number, escort near me, independent escort, bangalore escort girls, call girls, call girl service, bangalore independent call girls, escort agency, celebrity escorts, model escorts, massage service, full night escort, incall escort, outcall escort, कॉल गर्ल, एस्कॉर्ट सर्विस, कॉल गर्ल नंबर, कॉल गर्ल नियर मी" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Suman Varma Call Girls" },
      { property: "og:site_name", content: "Suman Varma Call Girls Rajasthan" },
      { property: "og:title", content: "Jaipur Escorts | ₹3,000/Hr | Verified Call Girls" },
      { property: "og:description", content: "Book verified call girls across Rajasthan from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jaipur Escorts | ₹3,000/Hr | Verified Call Girls" },
      { name: "twitter:description", content: "Book verified call girls across Rajasthan from ₹3,000/hr. 500+ real profiles, 100% privacy." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Suman Varma Call Girls Jaipur",
        "url": "https://kavyaescortservice.com/",
        "description": "Jaipur's most trusted escort service agency with 500+ verified call girls. Available 24/7 across all Jaipur areas.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kavyaescortservice.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Suman Varma Call Girls Jaipur",
        "telephone": "+919928561640",
        "email": "sumanescortservice@gmail.com",
        "priceRange": "₹₹₹",
        "image": "/images/photo_2026-07-23_23-02-09.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MI Road",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": [
          "Koramangala, Jaipur",
          "Indiranagar, Jaipur",
          "Whitefield, Jaipur",
          "MI Road, Jaipur",
          "Electronic City, Jaipur",
          "HSR Layout, Jaipur",
          "BTM Layout, Jaipur",
          "Marathahalli, Jaipur",
          "JP Nagar, Jaipur",
          "Jayanagar, Jaipur",
          "Hebbal, Jaipur",
          "Bellandur, Jaipur",
          "Sarjapur Road, Jaipur",
          "Yelahanka, Jaipur",
          "Manyata Tech Park, Jaipur",
          "Bannerghatta Road, Jaipur",
          "Majestic, Jaipur",
          "Brigade Road, Jaipur",
          "UB City, Jaipur",
          "Jaipur",
          "Hassan",
          "Mysore",
          "Mangalore",
          "Hubli",
          "Digha",
          "Rajasthan"
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "url": "https://kavyaescortservice.com",
        "sameAs": [
          "https://www.facebook.com/kavyaescortservice",
          "https://www.instagram.com/kavyaescortservice"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "2100"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to book call girls in Jaipur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply call or Telegram @SUMAN_VARMA_SPA. Share your preferred time, location, and companion preference. Our team responds within minutes and arranges a verified companion at your location within 30-45 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Jaipur do you cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover ALL of Jaipur — Koramangala, Indiranagar, Whitefield, MI Road, Electronic City, HSR Layout, BTM Layout, Marathahalli, Hebbal, JP Nagar, Jayanagar, Sarjapur, Bellandur, Yelahanka, and 50+ more areas."
            }
          },
          {
            "@type": "Question",
            "name": "Are the photos of call girls in Jaipur 100% genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every profile photo is verified directly with the companion. No stock images, no fake profiles. What you see is exactly who arrives — guaranteed."
            }
          },
          {
            "@type": "Question",
            "name": "Is advance payment required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We have a strict no-advance-payment policy. You pay only after the companion arrives and you are satisfied. Cash payment accepted."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="-Is-JQ0w7h9-zQk0MNZJG7A5OnqOH2lDrTBGR29yQy8" />
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-[60px] font-medium text-white shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <a href="https://t.me/SUMAN_VARMA_SPA" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#0088cc] hover:bg-[#0088cc]/90 transition text-lg tracking-wide">
        Telegram
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 transition text-lg tracking-wide">
        WhatsApp
      </a>
    </div>
  );
}

function DesktopContactWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4">
      <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:bg-[#25D366]/90 transition transform hover:scale-105 font-medium text-lg">
        WhatsApp
      </a>
      <a href="https://t.me/SUMAN_VARMA_SPA" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#0088cc] text-white px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:bg-[#0088cc]/90 transition transform hover:scale-105 font-medium text-lg">
        Telegram
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="pb-[60px] md:pb-0 flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet />
        </div>
        <LocationsGrid />
        <Footer />
      </div>
      <MobileActionBar />
      <DesktopContactWidget />
    </QueryClientProvider>
  );
}
