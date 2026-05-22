"use client";

import { motion } from "framer-motion";

const expertise = [
  "Frontend Engineering",
  "Backend Systems",
  "Scalable Architecture",
];

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <div className="container-width">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/[0.03]
            px-8
            py-14
            backdrop-blur-xl
            md:px-14
            md:py-20
          "
        >
          {/* Inner Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />
          </div>

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/[0.08]
              px-4
              py-2
              text-sm
              font-medium
              text-blue-300
            "
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-500"
            />

            Let&apos;s Build Something Exceptional
          </div>

          {/* Content */}
          <div className="mt-10 max-w-4xl">
            <h2
              id="cta-heading"
              className="
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
                md:text-6xl
              "
            >
              Transforming ambitious ideas into
              scalable digital experiences.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Focused on modern web applications,
              scalable systems, clean architecture,
              and refined user experiences built
              for long-term performance and growth.
            </p>
          </div>

          {/* Expertise */}
          <ul
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-4
              text-sm
              text-zinc-500
            "
          >
            {expertise.map((item) => (
              <li
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  transition-colors
                  duration-300
                  hover:border-blue-500/20
                  hover:text-zinc-300
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
