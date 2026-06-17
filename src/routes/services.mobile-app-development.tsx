import { createFileRoute } from "@tanstack/react-router";
import { Smartphone } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "mobile-app-development";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "Mobile App Development — iOS & Android Apps | Jinada Tech";
const DESC = "End-to-end mobile app development for iOS and Android. React Native and native builds, App Store launch, and post-launch growth strategy.";

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: `${SITE}/jinada-mark.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/jinada-mark.png` },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      slug={SLUG}
      icon={Smartphone}
      eyebrow="Mobile App Development"
      h1={<>Mobile apps that <span className="text-gradient-brand">launch fast</span> and scale</>}
      intro="We design, build, and ship iOS and Android apps end-to-end. From MVP to growth — including App Store and Play Store submission, analytics, and post-launch iteration."
      serviceName="Mobile App Development"
      serviceDescription="iOS and Android app development with React Native and native stacks, App Store and Play Store launch, and post-launch growth."
      outcomes={[
        { title: "Cross-platform by default", desc: "Ship to iOS and Android from one codebase with React Native or Expo." },
        { title: "Native when you need it", desc: "Swift and Kotlin for apps with heavy hardware or performance demands." },
        { title: "App Store launch", desc: "We handle submission, review, screenshots, and listing optimization." },
        { title: "Push & deep links", desc: "Notifications, universal links, and in-app messaging wired up from day one." },
        { title: "Analytics & crash reporting", desc: "Posthog, Mixpanel, Sentry — know what users do and what breaks." },
        { title: "Growth roadmap", desc: "Post-launch iteration plan based on real user data, not guesswork." },
      ]}
      process={[
        { step: "01", title: "Scope MVP", desc: "We help you cut to the smallest version that proves the idea works." },
        { step: "02", title: "Design", desc: "Native-feeling UI in Figma, prototyped and tested before code." },
        { step: "03", title: "Build & ship", desc: "TestFlight and internal Play tracks in weeks, not months." },
        { step: "04", title: "Iterate & grow", desc: "Weekly releases, analytics review, and a clear growth plan." },
      ]}
      stack={["React Native", "Expo", "Swift", "Kotlin", "TypeScript", "Supabase", "Firebase", "Sentry"]}
      faqs={[
        { q: "Do you build for iOS, Android, or both?", a: "Both — usually from one React Native or Expo codebase. We also build fully native in Swift or Kotlin when an app needs deep hardware integration or maximum performance." },
        { q: "How long does an MVP take?", a: "A focused MVP typically launches in 8–12 weeks. Larger apps with custom backends, payments, or social features take 3–6 months. We share a clear milestone plan before kickoff." },
        { q: "Will you submit the app to the App Store and Play Store?", a: "Yes. We handle the full submission process — provisioning, certificates, screenshots, listing copy, and resolving any review feedback." },
        { q: "What does an app cost?", a: "MVPs typically range from $15k–$40k. Production-grade apps with custom backends and integrations range from $40k–$120k. We give a fixed quote after a free discovery call." },
        { q: "Do I own the code?", a: "Yes — you own all source code, designs, and App Store / Play Store listings. Everything is transferred to your accounts." },
        { q: "Can you maintain the app after launch?", a: "Yes. Most clients keep us on a monthly retainer for bug fixes, OS updates, new features, and growth experiments." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
      ]}
    />
  );
}
