"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  TriangleAlert,
} from "lucide-react";

import { supabase } from "@/lib/supabaseClient";

import SearchBar from "@/components/Search";
import ProjectCard from "@/components/ProjectCard";

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  tech_stack: string[];
  cover_image: string;
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const [projects, setProjects] = useState<
    Project[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  /* ========================================
     FETCH PROJECTS
  ======================================== */

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const { data, error } =
          await supabase
            .from("projects")
            .select(`
              id,
              title,
              slug,
              short_description,
              tech_stack,
              cover_image
            `)
            .order("created_at", {
              ascending: false,
            });

        if (error) {
          throw error;
        }

        setProjects(data || []);
      } catch (err) {
        setError(
          "Failed to load projects."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  /* ========================================
     SEARCH FILTER
  ======================================== */

  const filteredProjects = useMemo(() => {
    if (!query.trim()) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableContent =
        `
          ${project.title}
          ${project.short_description}
          ${project.tech_stack.join(" ")}
        `.toLowerCase();

      return searchableContent.includes(
        query.toLowerCase()
      );
    });
  }, [projects, query]);

  const displayedProjects =
    filteredProjects.length > 0
      ? filteredProjects
      : projects;

  /* ========================================
     LOADING STATE
  ======================================== */

  if (loading) {
    return (
      <main className="bg-background py-24">
        <section className="container-width">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]"
              >
                <div className="h-64 w-full bg-white/[0.04]" />

                <div className="space-y-4 p-6">
                  <div className="h-5 w-1/2 rounded bg-white/[0.04]" />

                  <div className="h-4 w-full rounded bg-white/[0.04]" />

                  <div className="h-4 w-3/4 rounded bg-white/[0.04]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  /* ========================================
     ERROR STATE
  ======================================== */

  if (error) {
    return (
      <main className="bg-background py-24">
        <section className="container-width">
          <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-[2rem] border border-red-500/10 bg-red-500/[0.03] p-10 text-center">
            <TriangleAlert className="h-14 w-14 text-red-400" />

            <h2 className="mt-6 text-2xl font-semibold text-white">
              Unable To Load Projects
            </h2>

            <p className="mt-4 max-w-md text-zinc-400">
              {error}
            </p>
          </div>
        </section>
      </main>
    );
  }

  /* ========================================
     EMPTY STATE
  ======================================== */

  if (projects.length === 0) {
    return (
      <main className="bg-background py-24">
        <section className="container-width">
          <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-10 text-center">
            <FolderGit2 className="h-16 w-16 text-blue-500" />

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white">
              No Projects Available
            </h1>

            <p className="mt-5 max-w-xl text-lg text-zinc-400">
              Projects will appear here once
              they&apos;re added to the database.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

      <section className="container-width">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
            <FolderGit2 className="h-4 w-4 text-blue-500" />
            Featured Projects
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
            Modern engineering projects and
            scalable digital systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of production-focused
            applications engineered using modern
            frontend systems, scalable backend
            architecture and performant UI
            experiences.
          </p>
        </motion.div>

        <div className="mt-20">
          <SearchBar
            query={query}
            setQuery={setQuery}
            resultsLength={
              filteredProjects.length
            }
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {displayedProjects.map(
              (project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
