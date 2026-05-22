import {
  BadgeCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Production Focused",
    description:
      "Modern systems engineered for scalability, maintainability, and long-term performance.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Architecture",
    description:
      "Secure backend systems and structured frontend engineering patterns.",
  },
  {
    icon: Sparkles,
    title: "Clean User Experience",
    description:
      "High-quality interfaces focused on usability, responsiveness, and visual refinement.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-20 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-2xl" />
      </div>

      <div className="container-width">
        <div className="grid gap-6 lg:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-[#0a0a0a]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/20
                  hover:bg-white/[0.02]
                "
              >
                {/* Subtle Glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-500/10
                    bg-blue-500/[0.08]
                  "
                >
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
