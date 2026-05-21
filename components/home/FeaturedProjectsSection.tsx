"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  FolderOpen,
} from "lucide-react";

import { supabase } from "@/lib/supabaseClient";

interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  problem_solved: string;
  cover_image: string;
}

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/20
        hover:bg-white/[0.04]
      "
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.cover_image}
          alt={project.title}
          fill
          loading="lazy"
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1280px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-4 inline-flex rounded-full border border-blue-500/10 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium text-blue-400">
          Featured Project
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
          {project.short_description}
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Problem Solved
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-300">
            {project.problem_solved}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectSkeleton() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >
      <div className="aspect-[16/10] animate-pulse bg-white/[0.04]" />

      <div className="space-y-4 p-7">
        <div className="h-6 w-40 animate-pulse rounded-full bg-white/[0.05]" />

        <div className="h-8 w-3/4 animate-pulse rounded-xl bg-white/[0.05]" />

        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />

          <div className="h-4 w-[90%] animate-pulse rounded bg-white/[0.05]" />

          <div className="h-4 w-[75%] animate-pulse rounded bg-white/[0.05]" />
        </div>

        <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-5">
          <div className="h-3 w-28 animate-pulse rounded bg-white/[0.05]" />

          <div className="h-4 w-full animate-pulse rounded bg-white/[0.05]" />

          <div className="h-4 w-[85%] animate-pulse rounded bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<
    Project[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const { data, error } =
          await supabase
            .from("projects")
            .select(
              `
                id,
                title,
                slug,
                short_description,
                problem_solved,
                cover_image
              `
            )
            .eq("featured", true)
            .order("created_at", {
              ascending: false,
            })
            .limit(2);

        if (error) {
          throw error;
        }

        setProjects(data || []);
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load featured projects at the moment."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-3xl" />
      </div>

      <div className="container-width">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div
              className="
                mb-6
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-2
                text-sm
                text-zinc-400
                backdrop-blur-xl
              "
            >
              Featured Work
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
              Selected projects engineered
              with modern technologies.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              A curated collection of modern
              web products focused on scalable
              systems, refined interfaces, and
              performant user experiences.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-3
              self-start
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-500/20
              hover:bg-blue-500/10
              hover:text-blue-100
            "
          >
            View All Projects

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ProjectSkeleton />

            <ProjectSkeleton />
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-center
              rounded-[2rem]
              border
              border-red-500/10
              bg-red-500/[0.03]
              px-8
              py-16
              text-center
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-red-500/10
                bg-red-500/[0.08]
              "
            >
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Failed To Load Projects
            </h3>

            <p className="mt-3 max-w-md text-zinc-400">
              {error}
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading &&
          !error &&
          projects.length === 0 && (
            <div
              className="
                mt-16
                flex
                flex-col
                items-center
                justify-center
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-16
                text-center
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-500/10
                  bg-blue-500/[0.08]
                "
              >
                <FolderOpen className="h-8 w-8 text-blue-400" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                No Featured Projects Yet
              </h3>

              <p className="mt-3 max-w-md text-zinc-400">
                Featured projects will appear
                here once they are added to the
                portfolio database.
              </p>
            </div>
          )}

        {/* Projects Grid */}
        {!loading &&
          !error &&
          projects.length > 0 && (
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}
      </div>
    </section>
  );
}
