import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import SkillsExperienceSection from "@/components/home/SkillsExperienceSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* ========================================
          GLOBAL BACKGROUND EFFECTS
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-500/[0.05] blur-3xl" />

        {/* Right Glow */}
        <div className="absolute right-0 top-1/3 h-[260px] w-[260px] rounded-full bg-white/[0.03] blur-3xl" />

        {/* Grid Overlay */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="relative">
        <HeroSection />
      </section>

      {/* ========================================
          TRUST SECTION
      ======================================== */}

      <section className="relative">
        <TrustSection />
      </section>

      {/* ========================================
          FEATURED PROJECTS
      ======================================== */}

      <section className="relative">
        <FeaturedProjectsSection />
      </section>

      {/* ========================================
          SKILLS + EXPERIENCE
      ======================================== */}

      <section className="relative">
        <SkillsExperienceSection />
      </section>

      {/* ========================================
          CALL TO ACTION
      ======================================== */}

      <section className="relative">
        <CTASection />
      </section>
    </main>
  );
}

