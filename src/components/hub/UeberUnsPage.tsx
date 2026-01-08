"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react";

export function UeberUnsPage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hasEnoughHeight = window.innerHeight >= 700;
      if (window.scrollY > 100 || !hasEnoughHeight) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const teamMembers = [
    {
      name: "Tobias Klüppel",
      role: "Strategie & Sales",
      subtitle: "CEO Klüppel Immobilien",
      initials: "TK",
      photo: "/images/team/tobias-klueppel.png",
      bio: "Langjährige Erfahrung in der Immobilienverwaltung. Verbindet Branchenkenntnisse mit strategischer Produktentwicklung.",
    },
    {
      name: "Lukas Sommerfeld",
      role: "Strategie & Marketing",
      subtitle: "Account Manager Azure Agentic AI, Microsoft",
      initials: "LS",
      photo: "/images/team/lukas-sommerfeld.png",
      bio: "Expertise in Cloud Strategie und digitaler Transformation. Bringt Know-how aus der Tech Branche und kundenzentrierten Produktentwicklung mit.",
    },
    {
      name: "Marius Sommerfeld",
      role: "Tech",
      subtitle: "Data & AI, Fairparken",
      initials: "MS",
      photo: "/images/team/marius-sommerfeld.png",
      bio: "Spezialisiert auf Datenarchitektur und Service Integration. Entwickelt die technische Plattform-Infrastruktur um eine nahtlose Produkterfahrung zu gewährleisten.",
    },
  ];

  const principles = [
    {
      title: "Klarheit vor Vollständigkeit",
      description: "Wir zeigen, was wichtig ist — nicht alles, was möglich wäre.",
      tradeoff: "Das bedeutet: weniger Features, mehr Fokus.",
    },
    {
      title: "Verlässlichkeit vor Innovation",
      description: "Wir ändern nichts, das funktioniert, nur um es neu zu nennen.",
      tradeoff: "Das bedeutet: langsame, überlegte Weiterentwicklung.",
    },
    {
      title: "Ehrlichkeit vor Optimismus",
      description: "Wir versprechen nur, was wir halten können.",
      tradeoff: "Das bedeutet: keine Roadmap-Versprechen, die nie kommen.",
    },
  ];

  return (
    <>
      {/* Hero Section - Editorial with subtle blue gradient */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        {/* Subtle radial gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(36, 99, 235, 0.04) 0%, rgba(36, 99, 235, 0.01) 50%, transparent 100%)"
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto text-center pt-[34px]">
            {/* Eyebrow Label - Wegora Blue, muted */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(12px,1.2vw,14px)] font-medium" style={{ color: "hsl(var(--text-tertiary))" }}>
                Über uns
              </p>
            </motion.div>

            {/* Main Headline - grounded, confident */}
            <motion.h1
              className="text-[clamp(36px,4.5vw,56px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.2", fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Wer wir sind und woran wir glauben
            </motion.h1>

            {/* Subline - visually lighter, more breathing room */}
            <motion.p
              className="text-[clamp(17px,1.8vw,20px)] leading-[1.7] max-w-2xl mx-auto mt-10"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Immobilienverwaltung ist ein lösbares Problem.<br />
              Nicht durch mehr Software — durch klarere Strukturen.
            </motion.p>

            {/* Conviction Preview - standalone philosophical statement */}
            <motion.div
              className="mt-24 max-w-lg mx-auto text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              {/* Label - sentence case, quieter */}
              <p className="text-[13px] mb-6 tracking-wide font-medium" style={{ color: "hsl(var(--text-muted))" }}>
                Unsere Überzeugung
              </p>

              {/* Core belief - slightly larger, stands alone */}
              <p className="text-[17px] leading-[1.7]" style={{ color: "hsl(var(--text-secondary))" }}>
                Wir glauben, dass Eigentümer nicht zu Verwaltern werden sollten,<br />
                um ihr Eigentum im Griff zu haben.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollArrow && (
            <motion.div
              className="fixed left-1/2 -translate-x-1/2 cursor-pointer z-20"
              style={{ bottom: "2rem" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <CaretDown
                  className="w-10 h-10 text-weg-500/70 hover:text-weg-500 transition-colors"
                  weight="bold"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Section 1: Wer wir sind - calm, intentional */}
      <section className="py-28 sm:py-36">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section heading - grounded, not loud */}
            <motion.h2
              className="text-[clamp(24px,3vw,32px)] font-semibold mb-10 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Wer wir sind
            </motion.h2>

            <div className="space-y-12">
              {/* Shortened diagnosis - one paragraph, quieter */}
              <motion.p
                className="text-[17px] leading-[1.8]"
                style={{ color: "hsl(var(--text-secondary))" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                Wir haben gesehen, wie Immobilienverwaltung an der falschen Stelle kompliziert wird. Nicht weil die Aufgaben schwer sind — sondern weil die Werkzeuge nicht passen. Wegora ist unser Versuch, das zu ändern. Nicht mit mehr Features, sondern mit weniger Reibung.
              </motion.p>

              {/* What we refuse - statement block, stands alone */}
              <motion.div
                className="pt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <p className="text-[13px] mb-8 tracking-wide font-medium" style={{ color: "hsl(var(--text-muted))" }}>
                  Was wir nicht tun
                </p>
                <div className="space-y-4">
                  <p className="text-[16px] leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                    Wir bauen keine Software, die Sie zum Experten zwingt.
                  </p>
                  <p className="text-[16px] leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                    Keine Prozesse, die nur wir verstehen.
                  </p>
                  <p className="text-[16px] leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                    Keine Preise, die Sie später überraschen.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Das Team - soft blue tint with fade in/out */}
      <section className="py-28 sm:py-36 relative">
        {/* Subtle blue-tinted background with long fade transitions */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(36, 99, 235, 0.025) 15%, rgba(36, 99, 235, 0.04) 50%, rgba(36, 99, 235, 0.025) 85%, transparent 100%)"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Section heading - centered, calm */}
            <motion.h2
              className="text-[clamp(24px,3vw,32px)] font-semibold mb-16 text-center text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Das Team
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-16">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                >
                  {/* Avatar Photo - slightly larger */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="mx-auto mb-5 w-28 h-28 rounded-full object-cover"
                  />

                  {/* Name - grounded */}
                  <h3 className="font-semibold text-[17px] text-[#1A1A1A] mb-1">
                    {member.name}
                  </h3>

                  {/* Role - subtle, not blue */}
                  <p className="text-[14px] font-medium mb-1" style={{ color: "hsl(var(--text-secondary))" }}>
                    {member.role}
                  </p>

                  {/* Subtitle - quieter */}
                  <p className="text-[13px] mb-4" style={{ color: "hsl(var(--text-muted))" }}>
                    {member.subtitle}
                  </p>

                  {/* Bio - readable */}
                  <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Unsere Prinzipien - philosophical statements */}
      <section className="py-28 sm:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section heading - left-aligned, grounded */}
            <motion.h2
              className="text-[clamp(24px,3vw,32px)] font-semibold mb-20 text-[#1A1A1A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Unsere Prinzipien
            </motion.h2>

            {/* Principles as standalone statements with generous spacing */}
            <div className="space-y-16">
              {principles.map((principle, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                >
                  {/* Principle title - statement-like */}
                  <h4 className="font-semibold text-[18px] text-[#1A1A1A]">
                    {principle.title}
                  </h4>
                  {/* Description - clear, readable */}
                  <p className="text-[16px] leading-[1.7]" style={{ color: "hsl(var(--text-secondary))" }}>
                    {principle.description}
                  </p>
                  {/* Trade-off - quieter, smaller */}
                  <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--text-muted))" }}>
                    {principle.tradeoff}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
