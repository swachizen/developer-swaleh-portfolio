"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  GraduationCap,
  MapPin,
  CalendarDays,
  User2,
  Server,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-5 w-5" />,
    level: 92,
    technologies: [
      { name: "Next.js", level: 94 },
      { name: "TypeScript", level: 91 },
      { name: "React", level: 93 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-5 w-5" />,
    level: 84,
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 86 },
      { name: "Authentication", level: 82 },
      { name: "Server Logic", level: 84 },
      { name: "Index.js", level: 83 },
    ],
  },
  {
    title: "Database & SQL",
    icon: <Database className="h-5 w-5" />,
    level: 86,
    technologies: [
      { name: "Supabase", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQL", level: 88 },
      { name: "Database Design", level: 83 },
      { name: "Realtime Systems", level: 80 },
    ],
  },
];

function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

function RadialProgress({
  value,
  size = 120,
  stroke = 8,
  label,
  small = false,
}: {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
  small?: boolean;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="-rotate-90 transform"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1f1f1f"
          strokeWidth={stroke}
          fill="transparent"
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b82f6"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: progress }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center">
        <span
          className={`font-semibold text-white ${
            small ? "text-sm" : "text-2xl"
          }`}
        >
          {value}%
        </span>

        {label && (
          <span
            className={`mt-1 text-zinc-500 ${
              small ? "text-[10px]" : "text-xs"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const age = calculateAge("2007-08-05");

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

      <section className="container-width py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
            <Globe className="h-4 w-4 text-blue-500" />
            Full-Stack Website Developer
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
            Building modern web experiences with performance, precision, and
            scalable architecture.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            I&apos;m Swaleh Mohamad Swalehe, a {age}-year-old full-stack website
            developer based in Kenya. I specialize in modern
            frontend development with TypeScript and scalable backend systems
            powered by Supabase, SQL, and Node.js ecosystems.
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="Swaleh Mohamad"
                width={700}
                height={900}
                priority
                quality={90}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface hover-lift rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <User2 className="h-5 w-5 text-blue-500" />
                  <h3 className="text-sm font-medium text-white">
                    Personal Information
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-zinc-400">
                  <p>Name: Swaleh Mohamad</p>
                  <p>Age: {age} Years</p>
                  <p>Born: 05/08/2007</p>
                </div>
              </div>

              <div className="surface hover-lift rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <h3 className="text-sm font-medium text-white">
                    Location
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-zinc-400">
                  <p>Kenya</p>
                  <p>East Africa</p>
                </div>
              </div>

              <div className="surface hover-lift rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-blue-500" />
                  <h3 className="text-sm font-medium text-white">
                    Development Journey
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-zinc-400">
                  <p>Started: January 2025</p>
                  <p>Self-taught developer</p>
                  <p>Learning continuously every day</p>
                </div>
              </div>

              <div className="surface hover-lift rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <h3 className="text-sm font-medium text-white">
                    Education
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-zinc-400">
                  <p>Bachelor of Science in Civil Engineering</p>
                  <p>Expected Graduation: Late 2030</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8">
              <h2 className="text-2xl font-semibold text-white">
                About Me
              </h2>

              <div className="mt-6 space-y-6 text-base leading-8 text-zinc-400">
                <p>
                  I am a self-taught full-stack website developer focused on
                  building modern, responsive, and scalable web applications
                  using contemporary technologies and clean engineering
                  principles.
                </p>

                <p>
                  My primary expertise is frontend development with TypeScript,
                  Next.js, React, and modern UI systems. I also work extensively
                  with backend architecture, SQL databases, Supabase, APIs, and
                  server-side logic.
                </p>

                <p>
                  I began my software development journey in early January 2025,
                  and since then I have consistently dedicated time to improving
                  my skills, learning new technologies, and building real-world
                  applications. I strongly believe software engineering is a
                  continuous learning journey where every day introduces
                  something new.
                </p>

                <p>
                  Alongside software engineering, I am also pursuing a degree in
                  Civil Engineering,
                  which I started in September 2025. Combining engineering
                  principles with modern software development allows me to think
                  structurally, analytically, and systematically when solving
                  technical problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-14">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white">
              Skills & Technologies
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Focused on building performant frontend experiences, scalable
              backend systems, and efficient database architectures.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="surface hover-lift rounded-3xl p-8"
              >
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-blue-500">
                      {skill.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {skill.title}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        Professional proficiency overview
                      </p>
                    </div>
                  </div>

                  <RadialProgress
                    value={skill.level}
                    size={100}
                    stroke={7}
                    small
                  />
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-white">
                            {tech.name}
                          </h4>

                          <p className="mt-1 text-xs text-zinc-500">
                            Current working proficiency
                          </p>
                        </div>

                        <RadialProgress
                          value={tech.level}
                          size={72}
                          stroke={6}
                          small
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>
    </main>
  );
}
