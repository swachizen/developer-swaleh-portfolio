"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowDown } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden pb-32 pt-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <div className="container-width">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          {/* Badge */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              text-blue-300
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            Let&apos;s Build Something Great
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Ready to transform your ideas into
              scalable digital products?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Let&apos;s collaborate on modern web
              applications, scalable systems, and
              high-performance digital
              experiences engineered with clean
              architecture and exceptional user
              experience.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="#contact"
              scroll
              className="
                group
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
                font-medium
                text-white
                shadow-[0_10px_30px_rgba(59,130,246,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-400
                hover:bg-blue-400
                hover:shadow-[0_16px_40px_rgba(59,130,246,0.32)]
              "
            >
              Start A Project

              <ArrowDown
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </Link>

            <p className="text-sm text-zinc-500">
              Scroll directly to the contact form
              in the footer section.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
