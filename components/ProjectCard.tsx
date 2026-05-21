"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.cover_image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>

            <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:text-blue-500" />
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
            {project.short_description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech_stack.map(
              (tech: string) => (
                <div
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
