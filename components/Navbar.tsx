"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import {
  FolderKanban,
  Menu,
  MessageCircleMore,
  User2,
  X,
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

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/10
        bg-black
      "
    >
      <nav
        aria-label="Primary Navigation"
        className="
          container-width
          flex
          h-20
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Homepage"
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-blue-500
              transition-transform
              duration-200
              group-hover:scale-110
            "
          />

          <span className="text-sm font-medium tracking-wide text-zinc-100">
            Developer Swaleh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  isActive ? "page" : undefined
                }
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-blue-500/20
                      bg-white/[0.04]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  <Icon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  <span>{link.name}</span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Contact */}
          <Link
            href="#footer"
            scroll
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-[#0a0a0a]
              px-5
              py-2.5
              text-sm
              font-medium
              text-zinc-300
              transition-colors
              duration-200
              hover:border-blue-500/20
              hover:bg-blue-500/[0.08]
              hover:text-white
              md:flex
            "
          >
            <MessageCircleMore
              className="h-4 w-4"
              aria-hidden="true"
            />

            <span>Contact Me</span>
          </Link>

          {/* Mobile Contact */}
          <Link
            href="#footer"
            scroll
            aria-label="Contact Me"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#0a0a0a]
              text-zinc-300
              transition-colors
              duration-200
              hover:border-blue-500/20
              hover:bg-blue-500/[0.08]
              hover:text-white
              md:hidden
            "
          >
            <MessageCircleMore
              className="h-5 w-5"
              aria-hidden="true"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#0a0a0a]
              text-zinc-300
              transition-colors
              duration-200
              hover:border-blue-500/20
              hover:bg-blue-500/[0.08]
              hover:text-white
              md:hidden
            "
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                >
                  <X
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                >
                  <Menu
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              border-t
              border-white/10
              bg-black
              md:hidden
            "
          >
            <div className="container-width flex flex-col gap-2 py-6">
              {navLinks.map((link) => {
                const Icon = link.icon;

                const isActive =
                  pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={
                      isActive
                        ? "page"
                        : undefined
                    }
                    className={`
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "border border-blue-500/20 bg-blue-500/[0.08] text-white"
                          : "border border-transparent bg-[#0a0a0a] text-zinc-400 hover:border-blue-500/10 hover:bg-white/[0.03] hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />

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
