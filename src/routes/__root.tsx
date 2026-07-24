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
      { title: "Bangalore Escorts | ₹3,000/Hr | Kavya Escort Service Bangalore 24/7" },
      { name: "description", content: "Book verified call girls in Bangalore from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service across Koramangala, Indiranagar, Whitefield & all Bangalore areas. Cash payment, no advance." },
      { name: "keywords", content: "bangalore escort service, bangalore call girls, call girls in bangalore, escort service in bangalore, koramangala call girls, indiranagar escorts, whitefield call girls, MG road escorts, electronic city call girls, kannada call girl, independent call girls bangalore, russian escorts bangalore, VIP call girls bangalore, housewife escorts bangalore, college call girls bangalore, air hostess escorts bangalore, hotel call girl bangalore, call girl near me, call girl service bangalore, cheap call girl bangalore, cash payment call girls bangalore, night call girl bangalore, best escort service bangalore, bangalore call girl number, escort near me, call girl service near me, independent escort bangalore, bangalore escort girls, escort service bangalore, call girls bangalore, bangalore escorts, escort bangalore, call girl bangalore, bangalore call girl service, bangalore independent call girls, bangalore escort agency, celebrity escorts bangalore, model escorts bangalore, massage service bangalore, full night escort bangalore, incall escort bangalore, outcall escort bangalore, कॉल गर्ल बैंगलोर, बैंगलोर एस्कॉर्ट सर्विस, बैंगलोर कॉल गर्ल नंबर, कॉल गर्ल नियर मी" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "author", content: "Kavya Escort Service" },
      { property: "og:site_name", content: "Kavya Escort Service Bangalore" },
      { property: "og:title", content: "Bangalore Escorts | ₹3,000/Hr | Verified Call Girls 24/7" },
      { property: "og:description", content: "Book verified call girls in Bangalore from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service across Koramangala, Indiranagar, Whitefield & all Bangalore areas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bangalore Escorts | ₹3,000/Hr | Verified Call Girls 24/7" },
      { name: "twitter:description", content: "Book verified call girls in Bangalore from ₹3,000/hr. 500+ real profiles, 100% privacy, 24/7 escort service across all Bangalore areas." },
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
        "name": "Kavya Escort Service Bangalore",
        "url": "https://kavyaescortservice.com/",
        "description": "Bangalore's most trusted escort service agency with 500+ verified call girls. Available 24/7 across all Bangalore areas.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kavyaescortservice.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Kavya Escort Service Bangalore",
        "telephone": "+919928561640",
        "email": "kavyaescortservice@gmail.com",
        "priceRange": "₹₹₹",
        "image": "/images/photo_2026-07-23_23-02-09.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MG Road",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946
        },
        "areaServed": [
          "Koramangala, Bangalore",
          "Indiranagar, Bangalore",
          "Whitefield, Bangalore",
          "MG Road, Bangalore",
          "Electronic City, Bangalore",
          "HSR Layout, Bangalore",
          "BTM Layout, Bangalore",
          "Marathahalli, Bangalore",
          "JP Nagar, Bangalore",
          "Jayanagar, Bangalore",
          "Hebbal, Bangalore",
          "Bellandur, Bangalore",
          "Sarjapur Road, Bangalore",
          "Yelahanka, Bangalore",
          "Manyata Tech Park, Bangalore",
          "Bannerghatta Road, Bangalore",
          "Majestic, Bangalore",
          "Brigade Road, Bangalore",
          "UB City, Bangalore",
          "Bangalore"
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
            "name": "How to book call girls in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply call or Telegram @Sonal_0101. Share your preferred time, location, and companion preference. Our team responds within minutes and arranges a verified companion at your location within 30-45 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Bangalore do you cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover ALL of Bangalore — Koramangala, Indiranagar, Whitefield, MG Road, Electronic City, HSR Layout, BTM Layout, Marathahalli, Hebbal, JP Nagar, Jayanagar, Sarjapur, Bellandur, Yelahanka, and 50+ more areas."
            }
          },
          {
            "@type": "Question",
            "name": "Are the photos of call girls in Bangalore 100% genuine?",
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
      <a href="https://t.me/Sonal_0101" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#0088cc] hover:bg-[#0088cc]/90 transition text-lg tracking-wide">
        Telegram
      </a>
      <a href="https://wa.me/919928561640" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 transition text-lg tracking-wide">
        WhatsApp
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="pb-[60px] md:pb-0">
        <Outlet />
      </div>
      <MobileActionBar />
    </QueryClientProvider>
  );
}
