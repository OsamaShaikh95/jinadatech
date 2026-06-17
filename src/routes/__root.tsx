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
import { Toaster } from "sonner";

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
      { title: "Jinada Tech — Websites • Apps • AI Automation" },
      { name: "description", content: "Jinada Tech builds digital products, AI solutions and growth systems for modern businesses. Web, mobile, AI, SEO and marketing." },
      { name: "author", content: "Jinada Tech" },
      { property: "og:title", content: "Jinada Tech — Websites • Apps • AI Automation" },
      { property: "og:description", content: "Building digital products, AI solutions, and growth systems for modern businesses." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jinada Tech" },
      { property: "og:image", content: "https://jinadatech.com/jinada-mark.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://jinadatech.com/jinada-mark.png" },
      { name: "theme-color", content: "#050816" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/jinada-mark.png" },
      { rel: "apple-touch-icon", href: "/jinada-mark.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Jinada Tech",
          url: "https://jinadatech.com",
          logo: "https://jinadatech.com/jinada-mark.png",
          description: "Modern technology partner helping businesses launch, automate, and scale through web, mobile, AI, SEO and digital marketing.",
          email: "info@jinadatech.com",
          telephone: "+1-512-387-1981",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hutto",
            addressRegion: "TX",
            addressCountry: "US",
          },
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+1-512-387-1981",
            email: "info@jinadatech.com",
            contactType: "customer service",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          }],
          sameAs: ["https://jinadatech.com"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://jinadatech.com/#localbusiness",
          name: "Jinada Tech",
          url: "https://jinadatech.com",
          image: "https://jinadatech.com/jinada-mark.png",
          logo: "https://jinadatech.com/jinada-mark.png",
          description: "Technology partner offering website development, mobile apps, AI automation, and SEO & marketing for startups and businesses.",
          email: "info@jinadatech.com",
          telephone: "+1-512-387-1981",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hutto",
            addressRegion: "TX",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Hutto" },
            { "@type": "City", name: "Austin" },
            { "@type": "State", name: "Texas" },
            { "@type": "Country", name: "United States" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Jinada Tech",
          url: "https://jinadatech.com",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();",
          }}
        />
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
      <Outlet />
      <Toaster theme="dark" position="bottom-right" />
    </QueryClientProvider>
  );
}
