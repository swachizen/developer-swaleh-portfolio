"use client";

import { motion } from "framer-motion";
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
      "Modern systems engineered for scalability, maintainability and long-term performance.",
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
      "High-quality interfaces focused on usability, responsiveness and visual refinement.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24">
      <div className="container-width">
        <div className="grid gap-6 lg:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
