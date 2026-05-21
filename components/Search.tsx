"use client";

import { Search, SearchX } from "lucide-react";

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
  resultsLength: number;
}

export default function SearchBar({
  query,
  setQuery,
  resultsLength,
}: SearchProps) {
  return (
    <div className="mb-14">
      {/* Search Input */}
      <div className="group relative">
        {/* Input */}
        <input
          type="text"
          placeholder="Search projects' title, description, tech stack"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="
            h-16
            w-full
            rounded-[1.25rem]
            border
            border-white/10
            bg-[#0a0a0a]
            pl-5
            pr-16
            text-sm
            text-white
            shadow-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-zinc-500
            focus:border-blue-500/40
            focus:bg-[#0d0d0d]
            focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
          "
        />

        {/* Search Icon */}
        <div className="pointer-events-none absolute right-5 top-1/2 z-10 -translate-y-1/2">
          <Search className="h-5 w-5 text-zinc-500 transition-colors duration-300 group-focus-within:text-blue-500" />
        </div>

        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] border border-transparent transition-all duration-300 group-focus-within:border-blue-500/20" />
      </div>

      {/* Search Result Info */}
      {query.trim() && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          {resultsLength > 0 ? (
            <div className="flex items-center gap-2 rounded-full border border-blue-500/10 bg-blue-500/[0.06] px-3 py-1.5 text-blue-300">
              <Search className="h-4 w-4 text-blue-400" />

              <span>
                {resultsLength} result
                {resultsLength > 1
                  ? "s"
                  : ""}{" "}
                found
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-red-500/10 bg-red-500/[0.05] px-3 py-1.5 text-red-300">
              <SearchX className="h-4 w-4 text-red-400" />

              <span>
                No projects found. Showing
                related projects.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
