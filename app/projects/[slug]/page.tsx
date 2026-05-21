"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  FolderGit2,
  GitBranch,
  Globe,
  TriangleAlert,
} from "lucide-react";

import toast from "react-hot-toast";

import { supabase } from "@/lib/supabaseClient";
import { techIcons } from "@/lib/projectTechIcons";

interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  cover_image: string;
  screenshots: string[];
  tech_stack: string[];
  live_demo: string;
  github_link: string;
  problem_solved: string;
  outcomes: string;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectSlugPage({
  params,
}: Props) {
  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [copiedLink, setCopiedLink] =
    useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { slug } = await params;

        const { data, error } =
          await supabase
            .from("projects")
            .select("*")
            .eq("slug", slug)
            .single();

        if (error) {
          throw error;
        }

        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params]);

  /* ========================================
     COPY TO CLIPBOARD
  ======================================== */

  const handleCopy = async (
    value: string,
    type: string
  ) => {
    try {
      await navigator.clipboard.writeText(
        value
      );

      setCopiedLink(type);

      toast.success(
        `${type} copied successfully.`
      );

      setTimeout(() => {
        setCopiedLink("");
      }, 2000);
    } catch (error) {
      toast.error(
        "Failed to copy link."
      );
    }
  };

  /* ========================================
     LOADING STATE
  ======================================== */

  if (loading) {
    return (
      <main className="bg-background py-24">
        <section className="container-width">
          <div className="animate-pulse space-y-8">
            <div className="h-12 w-1/2 rounded bg-white/[0.04]" />

            <div className="h-[420px] rounded-[2rem] bg-white/[0.04]" />

            <div className="grid gap-6">
              <div className="h-[280px] rounded-[2rem] bg-white/[0.04]" />

              <div className="h-[280px] rounded-[2rem] bg-white/[0.04]" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* ========================================
     EMPTY STATE
  ======================================== */

  if (!project) {
    return (
      <main className="bg-background py-24">
        <section className="container-width">
          <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-10 text-center">
            <TriangleAlert className="h-16 w-16 text-red-400" />

            <h1 className="mt-6 text-4xl font-semibold text-white">
              Project Not Found
            </h1>

            <p className="mt-4 max-w-lg text-zinc-400">
              The requested project could not be
              found in the database.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back To Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

      <section className="container-width">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
            <FolderGit2 className="h-4 w-4 text-blue-500" />
            Project Details
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.short_description}
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src={project.cover_image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="w-full object-cover"
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Screenshots
            </h2>

            <div className="mt-8 grid gap-6">
              {project.screenshots?.map(
                (image) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-[2rem] border border-white/10"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} Screenshot`}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-semibold text-white">
                Problem Solved
              </h2>

              <p className="mt-6 text-zinc-400">
                {project.problem_solved}
              </p>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-semibold text-white">
                Outcomes
              </h2>

              <p className="mt-6 text-zinc-400">
                {project.outcomes}
              </p>
            </div>
          </div>

          <div className="h-fit rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8">
            <h3 className="text-xl font-semibold text-white">
              Tech Stack
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech_stack.map(
                (tech) => {
                  const Icon =
                    techIcons[tech];

                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 text-blue-500" />
                      )}

                      {tech}
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-10 space-y-4">
              {/* Live Demo */}
              <div className="flex gap-3">
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    Live Demo
                  </div>

                  <ExternalLink className="h-4 w-4 text-zinc-500" />
                </a>

                <button
                  onClick={() =>
                    handleCopy(
                      project.live_demo,
                      "Live Demo"
                    )
                  }
                  className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  {copiedLink ===
                  "Live Demo" ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-zinc-400" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <div className="flex gap-3">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-5 w-5 text-blue-500" />
                    GitHub Repository
                  </div>

                  <ExternalLink className="h-4 w-4 text-zinc-500" />
                </a>

                <button
                  onClick={() =>
                    handleCopy(
                      project.github_link,
                      "GitHub"
                    )
                  }
                  className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  {copiedLink ===
                  "GitHub" ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
