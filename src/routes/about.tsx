import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Heart, Lightbulb, Target, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your modern technology partner | Jinada Tech" },
      { name: "description", content: "Jinada Tech is a technology partner helping startups and local businesses grow online through modern digital solutions." },
      { property: "og:title", content: "About Jinada Tech" },
      { property: "og:description", content: "Helping startups and local businesses grow online through modern digital solutions." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, title: "Innovation first", desc: "We bet on emerging tech early — AI, edge, automation — and deploy it pragmatically." },
  { icon: Target, title: "Outcomes over output", desc: "We measure success in revenue, retention and shipped value, not hours billed." },
  { icon: Users, title: "Senior, always", desc: "Every engagement is led by a senior team. No juniors learning on your dime." },
  { icon: Heart, title: "Long-term partners", desc: "Most of our clients have been with us for years. We play the long game." },
];

function About() {
  return (
    <Layout>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Our story"
          title={<>Your modern <span className="text-gradient-brand">technology partner</span></>}
          description="Jinada Tech is a technology partner helping startups and local businesses grow online through modern digital solutions."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Our mission</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              To make world‑class software, AI and growth accessible to ambitious teams — without the bloat,
              theatre or pricing of traditional agencies. We build the way founders build: fast, focused, and
              outcome‑obsessed.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Our vision</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              A future where every business — from a single‑founder startup to a local shop to a global brand —
              has the automation, intelligence and digital presence of a top‑tier tech company. We're here to
              help build that future, one product at a time.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6">
              <v.icon size={22} className="text-[var(--brand-blue-soft)]" />
              <h4 className="mt-4 font-semibold">{v.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden glass-strong rounded-3xl p-10 sm:p-14">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-[var(--brand-blue)]/25 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Build. <span className="text-gradient-brand">Automate.</span> Scale.
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Three pillars guide every project: we build with modern technology, automate the boring
                away, and architect for compounding growth.
              </p>
              <Link to="/contact" className="mt-6 btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                Work with us <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="space-y-3">
              {[
                "Senior team of engineers, designers and growth operators",
                "Serving startups, local businesses and D2C brands",
                "End-to-end: strategy, product, engineering and growth",
                "Trusted on 80+ shipped products to date",
              ].map((p) => (
                <li key={p} className="glass rounded-xl p-4 text-sm">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
