import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Apple, Bot, Layers, Rocket, LifeBuoy } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "mobile-app-development";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "Mobile App Development Services — iOS, Android & React Native | Jinada Tech";
const DESC = "Native iOS, Android, and React Native app development. From idea to App Store in weeks — strategy, design, build, launch, and ongoing maintenance.";

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
      h1={<>Mobile apps users <span style={{ color: "#7C5CFF" }}>love to open</span></>}
      intro="From concept to App Store and Play Store — we design and build native and cross-platform mobile apps that are fast, beautiful, and built to scale."
      accent="#7C5CFF"
      signature="From idea to App Store in weeks."
      stats={[
        { value: "iOS + Android", label: "Single codebase, two stores" },
        { value: "4.8★", label: "Avg store rating shipped" },
        { value: "8–14 wks", label: "Typical first release" },
      ]}
      serviceName="Mobile App Development"
      serviceDescription="Native iOS, Android, and React Native mobile app development with App Store launch and ongoing maintenance."
      overview={{
        includes:
          "Product strategy, UX research, native or cross-platform development, App Store and Play Store submission, analytics, and post-launch maintenance — end to end.",
        audience:
          "Startups validating an MVP, established businesses extending their product to mobile, and operations teams that need internal apps for field, retail, or logistics.",
        solves:
          "Customers asking 'is there an app?', clunky mobile web flows leaking conversions, internal teams stuck on paper or spreadsheets, and disconnected experiences across web and mobile.",
      }}
      included={[
        { title: "iOS Development", desc: "Native Swift / SwiftUI apps tuned for iPhone, iPad, and Apple ecosystem features.", icon: Apple },
        { title: "Android Development", desc: "Native Kotlin / Jetpack Compose apps optimized for the full range of Android devices.", icon: Bot },
        { title: "React Native Development", desc: "One codebase, two stores — ship faster without sacrificing native feel.", icon: Layers },
        { title: "App Store Launch", desc: "App Store Connect and Play Console setup, screenshots, metadata, review and approval handling.", icon: Rocket },
        { title: "Maintenance & Support", desc: "OS updates, crash monitoring, performance fixes, and feature iteration after launch.", icon: LifeBuoy },
        { title: "Backend & Integrations", desc: "Auth, push notifications, payments, analytics, and APIs — fully wired and production-ready.", icon: Smartphone },
      ]}
      benefits={[
        { title: "Reach customers where they live", desc: "Mobile is where attention is — an app puts your brand one tap from your customer's home screen." },
        { title: "Higher engagement than mobile web", desc: "Push notifications, offline support, and native gestures drive significantly higher retention and session frequency." },
        { title: "Faster time to revenue", desc: "Cross-platform development with React Native cuts build time and budget without compromising UX." },
        { title: "Monetize through the stores", desc: "In-app purchases, subscriptions, and store distribution unlock new revenue lines." },
        { title: "Operational efficiency", desc: "Internal apps replace paper, spreadsheets, and clunky web tools for field and ops teams." },
        { title: "Future-proof architecture", desc: "Built on stacks Apple and Google actively invest in — no rewrites in 18 months." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "We map your users, jobs-to-be-done, and the smallest version of the app worth shipping." },
        { step: "02", title: "Strategy", desc: "Platform choice (native vs React Native), tech stack, monetization, and release plan." },
        { step: "03", title: "Design", desc: "Prototypes in Figma, tested with real users on real devices before code starts." },
        { step: "04", title: "Development", desc: "Bi-weekly builds via TestFlight and Play Internal — you see progress every sprint." },
        { step: "05", title: "Launch", desc: "Store submission, review, approval, and a coordinated go-live across iOS and Android." },
        { step: "06", title: "Optimization", desc: "Crash analytics, performance tuning, A/B tests, and a steady cadence of feature releases." },
      ]}
      faqs={[
        { q: "Do you build iOS and Android apps?", a: "Yes — both. We build native iOS apps in Swift, native Android apps in Kotlin, and cross-platform apps in React Native depending on what's right for your product, budget, and timeline." },
        { q: "Should I choose native or cross-platform development?", a: "Native (Swift / Kotlin) shines for performance-critical apps and deep OS integrations. React Native is ideal when you need iOS and Android in parallel with a leaner budget. We'll recommend the right path in discovery." },
        { q: "How long does app development take?", a: "A focused MVP typically ships in 8–14 weeks. Larger products with backends, payments, and complex integrations take 4–6 months. We share a milestone timeline before kickoff." },
        { q: "Can you publish the app to the stores?", a: "Yes. We handle the full App Store Connect and Google Play Console setup, write store metadata, design screenshots, submit for review, and manage approval back-and-forth." },
        { q: "Do you provide maintenance after launch?", a: "Yes. Mobile needs ongoing care — OS updates, store policy changes, crash fixes, and feature work. We offer monthly maintenance retainers tuned to your app's complexity." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "Complete Partnership", href: "/services/complete-partnership" },
      ]}
    />
  );
}
