import Image from "next/image";
import Link from "next/link";

import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Mail from "lucide-react/dist/esm/icons/mail";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";

import {
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Optimized Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />

        <div className="absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-white/[0.03] blur-2xl" />
      </div>

      <div className="container-width">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_400px]">
          {/* LEFT CONTENT */}
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="glass mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              Available For Freelance & Remote Work
            </div>

            {/* Heading */}
            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[5.2rem]">
              <span className="text-blue-500">
                Swaleh Mohamed Swalehe
              </span>

              <span className="mt-4 block text-white">
                Full-Stack Engineer &
                Product-Focused Web Developer
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              I engineer scalable digital products
              focused on performance, clean
              architecture, backend systems,
              modern frontend engineering, and
              refined user experiences.
            </p>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Full-Stack Developer",
                "Frontend Engineer",
                "Backend Systems",
                "UI Systems",
              ].map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                >
                  {role}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                View Projects

                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="#footer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white transition hover:border-blue-500/20 hover:bg-blue-500/[0.08]"
              >
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/swachizen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:text-white"
              >
                <GitBranch className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/swaleh-mohamed-a5b2353a4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:text-blue-400"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/254792948482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:text-emerald-400"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>

              <a
                href="mailto:swalehmohamed203@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:text-orange-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/profile.webp"
                  alt="Swaleh Mohamed Swalehe"
                  fill
                  priority
                  fetchPriority="high"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Swaleh Mohamed Swalehe
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full-Stack Engineer
                  </p>
                </div>

                <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
