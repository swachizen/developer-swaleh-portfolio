"use client";

import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  Cpu,
  Database,
  Globe,
  ArrowUpRight,
} from "lucide-react";

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

function SkillRadial({
  value,
  title,
}: {
  value: number;
  title: string;
}) {
  const radius = 46;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute h-[132px] w-[132px] rounded-full bg-blue-500/[0.08] blur-2xl" />

      <svg
        width="130"
        height="130"
        className="-rotate-90 transform"
      >
        {/* Background Track */}
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="10"
          fill="transparent"
        />

        {/* Glow Ring */}
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke="rgba(59,130,246,0.18)"
          strokeWidth="16"
          fill="transparent"
        />

        {/* Progress Ring */}
        <motion.circle
          cx="65"
          cy="65"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {value}%
        </span>

        <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          Proficiency
        </span>
      </div>

      {/* Floating Label */}
      <div
        className="
          absolute
          -bottom-7
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-white/10
          bg-[#0f0f0f]
          px-3
          py-1.5
          text-[11px]
          font-medium
          text-zinc-400
          shadow-lg
          backdrop-blur-xl
        "
      >
        {title}
      </div>
    </div>
  );
}

export default function SkillsExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <div className="container-width">
        <div className="grid gap-20 xl:grid-cols-[1.08fr_0.92fr]">
          {/* ======================================================
              SKILLS SECTION
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Header */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              Skills & Stack
            </div>

            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                Modern technologies powering
                scalable digital products.
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Focused on frontend engineering,
                backend architecture, database
                systems, and modern full-stack
                development workflows.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex flex-col items-center text-center">
                    <SkillRadial
                      value={skill.level}
                      title={skill.title}
                    />

                    <div className="mt-16">
                      <h3 className="text-lg font-medium text-white">
                        {skill.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-zinc-500">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ======================================================
              EXPERIENCE SECTION
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Header */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-500" />

              Experience Snapshot
            </div>

            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                Engineering systems across
                frontend and backend
                environments.
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Practical experience designing,
                building, and maintaining modern
                web applications with scalable
                architecture and clean engineering
                systems.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="mt-14 space-y-5">
              {experience.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      rounded-[1.75rem]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
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
                          bg-blue-500/10
                          transition-all
                          duration-300
                          group-hover:bg-blue-500/15
                        "
                      >
                        <Icon className="h-6 w-6 text-blue-500" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-medium text-white">
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
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
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
              ].map((item) => (
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
                  <h4 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
