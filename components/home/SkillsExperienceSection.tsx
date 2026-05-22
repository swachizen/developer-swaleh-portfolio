import BriefcaseBusiness from "lucide-react/dist/esm/icons/briefcase-business";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Database from "lucide-react/dist/esm/icons/database";
import Globe from "lucide-react/dist/esm/icons/globe";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";

const skills = [
  {
    title: "Next.js",
    level: 94,
    description:
      "Production-grade React framework architecture.",
  },
  {
    title: "React",
    level: 93,
    description:
      "Component systems and scalable UI engineering.",
  },
  {
    title: "TypeScript",
    level: 91,
    description:
      "Strongly typed frontend and backend systems.",
  },
  {
    title: "Supabase",
    level: 92,
    description:
      "Realtime backend infrastructure and authentication.",
  },
  {
    title: "PostgreSQL",
    level: 88,
    description:
      "Relational database modeling and optimization.",
  },
  {
    title: "Tailwind CSS",
    level: 95,
    description:
      "Modern utility-first interface development.",
  },
  {
    title: "Node.js",
    level: 85,
    description:
      "Backend APIs and scalable server-side logic.",
  },
  {
    title: "REST APIs",
    level: 86,
    description:
      "Structured API integrations and endpoint systems.",
  },
];

const experience = [
  {
    icon: Globe,
    title: "Frontend Engineering",
    description:
      "Building performant interfaces with scalable UI systems and modern frontend tooling.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Designing APIs, authentication systems, databases, and realtime infrastructure.",
  },
  {
    icon: Cpu,
    title: "API Integrations",
    description:
      "Integrating external services, third-party APIs, and backend workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Freelance Development",
    description:
      "Delivering modern web products focused on usability, performance, and clean engineering.",
  },
];

const stats = [
  {
    label: "Frontend Focus",
    value: "92%",
  },
  {
    label: "Backend Systems",
    value: "84%",
  },
  {
    label: "Database Design",
    value: "86%",
  },
];

function SkillBar({
  title,
  level,
  description,
}: {
  title: string;
  level: number;
  description: string;
}) {
  return (
    <article
      className="
        group
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/20
        hover:bg-white/[0.04]
      "
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <span className="text-sm font-medium text-blue-400">
          {level}%
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{
            width: `${level}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-500">
        {description}
      </p>
    </article>
  );
}

export default function SkillsExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-blue-500/[0.04] blur-2xl" />

        <div className="absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-blue-500/[0.03] blur-2xl" />
      </div>

      <div className="container-width">
        <div className="grid gap-20 xl:grid-cols-[1.05fr_0.95fr]">
          {/* ======================================================
              SKILLS
          ====================================================== */}

          <div>
            {/* Header */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              Skills & Stack
            </div>

            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                Modern technologies powering scalable digital products.
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Focused on frontend engineering, backend architecture,
                database systems, and modern full-stack development workflows.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.title}
                  title={skill.title}
                  level={skill.level}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          {/* ======================================================
              EXPERIENCE
          ====================================================== */}

          <div>
            {/* Header */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              Experience Snapshot
            </div>

            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                Engineering systems across frontend and backend environments.
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Practical experience designing, building, and maintaining
                scalable applications with clean architecture and modern
                engineering systems.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="mt-14 space-y-5">
              {experience.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="
                      group
                      rounded-[1.75rem]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/20
                      hover:bg-white/[0.04]
                    "
                  >
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
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
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-zinc-500">
                              {item.description}
                            </p>
                          </div>

                          <ArrowUpRight
                            className="
                              mt-1
                              h-5
                              w-5
                              text-zinc-600
                              transition-all
                              duration-300
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-blue-500
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:border-blue-500/20
                    hover:bg-white/[0.04]
                  "
                >
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
