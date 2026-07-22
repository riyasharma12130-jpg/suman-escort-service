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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "jxESRVjN5XoFAcmwonYhi6dzJ8GzTTLfTxW2jthxhlE" },
      { title: "Jaipur Escorts: 100% Independent Call Girls with Real Pics" },
      { name: "description", content: "Enjoy Jaipur Escorts with a trusted agency. Get real Jaipur call girls & VIP models 24/7. Cash on Delivery (COD) and No Advance Payment required. Call +91 74148 38654." },
      { name: "keywords", content: "jaipur escort service, jaipur call girls, jaipur escort girls nearby me, independent call girls jaipur, Jaipur escort girls, payal escort service, premium spa Jaipur" },
      { name: "author", content: "Payal Escort Service" },
      { property: "og:site_name", content: "Payal Escort Service" },
      { property: "og:title", content: "Jaipur Escorts: 100% Independent Call Girls with Real Pics" },
      { property: "og:description", content: "Enjoy Jaipur Escorts with a trusted agency. Get real Jaipur call girls & VIP models 24/7. Cash on Delivery (COD) and No Advance Payment required." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jaipur Escorts: 100% Independent Call Girls with Real Pics" },
      { name: "twitter:description", content: "Enjoy Jaipur Escorts with a trusted agency. Get real Jaipur call girls & VIP models 24/7. Cash on Delivery (COD) and No Advance Payment required." },
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
        "name": "Payal Escort Service",
        "url": "https://jaipurescortgirls.vercel.app/"
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "name": "Payal Escort Service",
        "telephone": "+917414838654",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sindhi Camp",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.92393,
      "longitude": 75.7937
    },
    "areaServed": [
      "Sindhi Camp, Jaipur",
      "Jaipur",
      "C Scheme, Jaipur",
      "Raja Park, Jaipur",
      "Vaishali Nagar, Jaipur",
      "Malviya Nagar, Jaipur"
    ],
    "url": "https://jaipurescortgirls.com",
    "sameAs": [
      "https://www.facebook.com/payalescortservice",
      "https://www.instagram.com/payalescortservice"
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
