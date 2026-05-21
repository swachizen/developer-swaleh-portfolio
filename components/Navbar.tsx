"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  User2,
  FolderKanban,
  MessageCircleMore,
} from "lucide-react";

const navLinks = [
  {
    name: "About Me",
    href: "/about",
    icon: User2,
  },
  {
    name: "My Projects",
    href: "/projects",
    icon: FolderKanban,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="container-width flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <div className="h-2 w-2 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-125" />

          <span className="text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-300 group-hover:text-white">
            Developer Swaleh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-white/[0.05] text-white"
                    : "text-zinc-400 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />

                <span>{link.name}</span>

                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full border border-blue-500/20 bg-blue-500/5"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <button
            onClick={scrollToFooter}
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white md:flex"
          >
            <MessageCircleMore className="h-4 w-4" />

            <span>Contact Me</span>
          </button>

          {/* Mobile Contact */}
          <button
            onClick={scrollToFooter}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white md:hidden"
          >
            <MessageCircleMore className="h-5 w-5" />
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white md:hidden"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container-width flex flex-col gap-2 py-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm transition-all duration-300 ${
                      isActive
                        ? "border border-blue-500/20 bg-blue-500/10 text-white"
                        : "border border-transparent bg-white/[0.02] text-zinc-400 hover:border-blue-500/10 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
