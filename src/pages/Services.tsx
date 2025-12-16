import { useEffect, useRef, useState } from "react";
import {
  Code2,
  LayoutDashboard,
  Palette,
  ArrowUpRight,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK =
  "https://wa.me/234XXXXXXXXXX?text=Hello%20I’d%20like%20to%20start%20a%20project";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    bestFor: "Startups & growing businesses",
    description:
      "High-performance websites engineered for clarity, conversion, and long-term maintainability.",
    timeline: "2–4 weeks",
    caseStudy: "/case-studies/web",
    features: [
      "Modern responsive UI",
      "Clean, maintainable codebase",
      "SEO-ready structure",
      "Performance optimization",
      "Cross-browser compatibility",
      "Deployment & launch support",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web App Development",
    bestFor: "SaaS & internal tools",
    description:
      "Purpose-built applications that automate workflows and scale confidently with your product.",
    timeline: "3–6 weeks",
    caseStudy: "/case-studies/apps",
    features: [
      "Authentication & user roles",
      "Admin dashboards",
      "API integrations",
      "Secure data handling",
      "Scalable architecture",
      "Performance-focused builds",
    ],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    bestFor: "Brands that value experience",
    description:
      "Intentional interfaces that feel intuitive, consistent, and visually refined across devices.",
    timeline: "1–2 weeks",
    caseStudy: "/case-studies/design",
    features: [
      "User-centered design",
      "High-fidelity UI",
      "Design systems",
      "Mobile-first layouts",
      "Interactive prototypes",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  // Scroll reveal (native, no libraries)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 opacity-0 translate-y-6 transition-all duration-700"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            What I offer
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-gray-900 leading-tight">
            Services designed for clarity, speed, and impact
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Every engagement is intentional — focused on long-term value,
            usability, and outcomes that genuinely matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const expanded = openIndex === index;
            const visibleFeatures = expanded
              ? service.features
              : service.features.slice(0, 4);

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50"
              >
                {/* Divider line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />

                {/* Icon + Title */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  Best for: {service.bestFor}
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>

                <p className="text-sm text-gray-600 mb-6">
                  Typical timeline:{" "}
                  <span className="font-medium text-gray-800">
                    {service.timeline}
                  </span>
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {visibleFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.features.length > 4 && (
                  <button
                    onClick={() =>
                      setOpenIndex(expanded ? null : index)
                    }
                    className="mb-6 text-sm font-medium text-gray-900 hover:opacity-70 transition"
                  >
                    {expanded ? "Show fewer features" : "+ View all features"}
                  </button>
                )}

                {/* Footer actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition"
                    >
                      Start a project
                      <MessageCircle size={16} />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition"
                    >
                      Contact
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Case study */}
                  <Link
                    to={service.caseStudy}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition"
                  >
                    <FileText size={14} />
                    View case study
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}