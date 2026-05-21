"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  GitBranch,
} from "lucide-react";

import {
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* ========================================
          BACKGROUND GLOW
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />

        <div className="absolute left-0 top-1/3 h-[280px] w-[280px] rounded-full bg-blue-500/[0.04] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="container-width">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_420px]">
          {/* ========================================
              LEFT CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-400 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
              </span>

              Available For Freelance & Remote Work
            </div>

            {/* Heading */}
            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[5.5rem]">
              <span className="text-blue-500">
                Swaleh Mohamed Swalehe
              </span>

              <span className="mt-4 block text-white">
                Full-Stack Engineer &
                Product-Focused Web Developer.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              I design and engineer scalable
              digital products focused on
              performance, clean architecture,
              modern frontend systems, backend
              scalability, and refined user
              experiences using modern web
              technologies.
            </p>

            {/* Occupation Cards */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Full-Stack Developer",
                "Frontend Engineer",
                "Backend Systems Developer",
                "UI Systems Builder",
              ].map((role) => (
                <div
                  key={role}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-blue-500/20
                    hover:bg-blue-500/[0.05]
                  "
                >
                  {role}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-wrap items-center gap-5">
              {/* View Projects */}
              <Link
                href="/projects"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(59,130,246,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-400
                  hover:shadow-[0_14px_40px_rgba(59,130,246,0.35)]
                "
              >
                View Projects

                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Contact */}
              <a
                href="#footer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-500/20
                  hover:bg-blue-500/[0.08]
                "
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-14 flex flex-wrap items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/swachizen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-400
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <GitBranch className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/swaleh-mohamed-a5b2353a4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-400
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:bg-blue-500/10
                  hover:text-blue-400
                "
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254792948482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-400
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:swalehmohamed203@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-400
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500/30
                  hover:bg-orange-500/10
                  hover:text-orange-400
                "
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* ========================================
              PROFILE CARD
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-white/[0.03]
                p-4
                shadow-2xl
                backdrop-blur-xl
              "
            >
              {/* Top Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.06] to-transparent" />

              {/* Profile Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/profile.jpg"
                  alt="Swaleh Mohamed Swalehe"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>

              {/* Bottom Info */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Swaleh Mohamed Swalehe
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full-Stack Engineer
                  </p>
                </div>

                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
