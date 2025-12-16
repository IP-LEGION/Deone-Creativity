import { useState } from "react";

const services = [
  {
    title: "Custom Web Development",
    bestFor: "Startups & growing businesses",
    outcome:
      "A fast, scalable web presence that converts visitors into customers.",
    timeline: "2–4 weeks",
    price: "₦150,000",
    features: [
      "Modern responsive UI",
      "Clean, maintainable codebase",
      "SEO-friendly structure",
      "Performance optimization",
      "Cross-browser compatibility",
      "Custom animations & interactions",
      "Deployment support",
    ],
  },
  {
    title: "Web App Development",
    bestFor: "SaaS & internal tools",
    outcome:
      "Powerful applications that automate workflows and scale with your users.",
    timeline: "3–6 weeks",
    price: "₦300,000",
    features: [
      "Authentication & user roles",
      "Dashboard & admin panels",
      "API integration",
      "Secure data handling",
      "Scalable architecture",
      "Performance-focused build",
      "Future-ready structure",
    ],
  },
  {
    title: "UI / UX Design",
    bestFor: "Brands that care about experience",
    outcome:
      "Interfaces that feel intuitive, intentional, and visually memorable.",
    timeline: "1–2 weeks",
    price: "₦100,000",
    features: [
      "User-centered design approach",
      "High-fidelity UI designs",
      "Design systems & consistency",
      "Mobile-first layouts",
      "Interactive prototypes",
      "Accessibility considerations",
    ],
  },
];

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);

  const visibleFeatures = expanded
    ? service.features
    : service.features.slice(0, 4);

  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Gradient Hover Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-900">
          {service.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Best for: {service.bestFor}
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {service.outcome}
        </p>

        <div className="mt-4 text-sm text-gray-600">
          Typical timeline: <span className="font-medium">{service.timeline}</span>
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {visibleFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Progressive Reveal */}
        {service.features.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-sm font-medium text-gray-900 transition-opacity hover:opacity-70"
          >
            {expanded ? "Show fewer features" : "+ View all features"}
          </button>
        )}

        {/* Price + CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Investment starts at
            </p>
            <p className="text-lg font-semibold text-gray-900">
              {service.price}
            </p>
          </div>

          <button className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-md">
            Get a tailored quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            What I offer
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Services designed for clarity, speed, and impact
          </h2>
          <p className="mt-4 text-gray-600">
            Every service is built with intention — focused on results,
            usability, and long-term value rather than shortcuts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
