"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

import ContactForm from "./ContactForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      className="relative mt-32 overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_35%)]"
      />

      <div className="container-width py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_520px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-sm
                text-zinc-400
                backdrop-blur-xl
              "
            >
              <BadgeCheck
                className="h-4 w-4 text-blue-500"
                aria-hidden="true"
              />

              <span>
                Available for freelance &
                collaborations
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8">
              <h2
                id="footer-heading"
                className="
                  max-w-2xl
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  md:text-5xl
                "
              >
                Let&apos;s build something
                meaningful together.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Whether you need a modern web
                application, scalable frontend
                architecture, backend systems,
                or a complete digital product,
                feel free to reach out.
              </p>
            </div>

            {/* Contact Links */}
            <div className="mt-10 flex flex-col gap-5">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/254792948482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="
                  group
                  flex
                  w-full
                  items-center
                  gap-4
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-zinc-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-green-500/20
                  hover:bg-green-500/10
                  hover:text-white
                  sm:w-fit
                "
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <Phone
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-zinc-500">
                    WhatsApp
                  </p>

                  <p className="truncate text-sm font-medium text-white">
                    +254 792 948 482
                  </p>
                </div>

                <ArrowUpRight
                  className="
                    ml-auto
                    h-4
                    w-4
                    opacity-60
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  aria-hidden="true"
                />
              </Link>

              {/* Email */}
              <Link
                href="mailto:swalehmohamed203@gmail.com"
                aria-label="Send an email"
                className="
                  group
                  flex
                  w-full
                  items-center
                  gap-4
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-zinc-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500/20
                  hover:bg-blue-500/10
                  hover:text-white
                  sm:w-fit
                "
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <Mail
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-zinc-500">
                    Email Address
                  </p>

                  <p className="truncate text-sm font-medium text-white">
                    swalehmohamed203@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  className="
                    ml-auto
                    h-4
                    w-4
                    opacity-60
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              rounded-[2rem]
              border
              border-white/10
              bg-[#0a0a0a]
              p-6
              backdrop-blur-xl
              md:p-8
            "
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div
          className="
            mt-20
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-white/10
            pt-8
            md:flex-row
            md:items-center
          "
        >
          <div>
            <p className="text-sm text-zinc-500">
              © {currentYear} Swaleh Mohamed
              Swaleh. All rights reserved.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Full-Stack Website Developer •
              Civil Engineering Student
            </p>
          </div>

          <div
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              tracking-[0.2em]
              text-zinc-500
            "
          >
            ENGINEER • DEVELOPER • DESIGNER
          </div>
        </div>
      </div>
    </footer>
  );
}
