import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Path, FileText, Rocket, CaretDown, ListChecks, Target, SquaresFour, Folder, Gavel, ArrowsClockwise } from "@phosphor-icons/react";
import { AnimatedWordReplacement } from "./AnimatedWordReplacement";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function VisionPage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll arrow visibility
      const hasEnoughHeight = window.innerHeight >= 700;
      if (window.scrollY > 100 || !hasEnoughHeight) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1️⃣ Hero - Editorial */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center pt-[34px]">
            {/* Eyebrow "Unsere Vision" */}
            <div className="mb-4">
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
                Unsere Vision
              </p>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A] mt-8"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
            >
              Immobilien<AnimatedWordReplacement from="verwaltung" to="steuerung" />
            </h1>

            {/* Unified Text Block - Subline + Claim with staggered fade-in */}
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              {/* Subline - fades in first */}
              <motion.p
                className="text-[clamp(18px,2vw,22px)] leading-[1.6]"
                style={{ color: "#1A1A1A" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{
                  delay: 1.7,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                Immer mehr WEGs finden keinen Verwalter mehr. Wir definieren Verwaltung neu.
              </motion.p>

              {/* Claim - fades in 200ms later */}
              <motion.p
                className="text-[clamp(18px,2vw,22px)] leading-[1.6]"
                style={{ color: "#1A1A1A" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{
                  delay: 1.9,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                Mit Wegora treffen Menschen Entscheidungen für ihr Eigentum. Alles andere passiert im Hintergrund.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollArrow && (
            <motion.div
              className="fixed left-1/2 -translate-x-1/2 cursor-pointer z-20"
              style={{ bottom: "2rem" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <CaretDown
                  className="w-10 h-10 text-[#2463eb]/70 hover:text-[#2463eb] transition-colors"
                  weight="bold"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 2️⃣ Leitbegriffe - Was gute Immobiliensteuerung ausmacht */}
      <section
        className="py-16 sm:py-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(36, 99, 235, 0.03) 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "hsl(220 20% 20%)" }}>
              Was gute Immobiliensteuerung ausmacht
            </h2>
            <p className="mt-3 text-base" style={{ color: "hsl(220 15% 50%)" }}>
              Fünf Zustände, die zusammenwirken.
            </p>
          </motion.div>

          {/* 5 Leitbegriffe - Micro-Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {[
              { icon: Lightbulb, label: "Überblick" },
              { icon: FileText, label: "Transparenz" },
              { icon: CheckCircle, label: "Entlastung" },
              { icon: Path, label: "Priorisierung" },
              { icon: Rocket, label: "Entscheidungsfreiheit" }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-[#2463eb]/[0.12] bg-[#2463eb]/[0.03] px-4 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/80">
                    <IconComponent className="h-5 w-5 text-[#2463eb]/70" weight="regular" />
                  </div>
                  <span className="text-sm font-medium text-[#2463eb]/85">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Dashboard - Abstrakte Komposition */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2463eb]/[0.04] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "hsl(220 20% 20%)" }}>
              Ein Dashboard. Alles im Blick.
            </h2>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "hsl(220 15% 45%)" }}>
              Fokus oben. Kontext darunter. Der Rest läuft.
            </p>
          </motion.div>

          {/* Abstrakte Dashboard-Komposition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex flex-col items-center">
              {/* Ebene 1: FOKUS (~60% visuelles Gewicht) - dominant */}
              <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full mb-8">
                {[
                  { label: "Entscheidungen", icon: ListChecks },
                  { label: "Prioritäten", icon: Target },
                  { label: "Überblick", icon: SquaresFour }
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl p-7 sm:p-10 text-center border border-[#2463eb]/[0.18] flex flex-col items-center gap-3"
                      style={{
                        background: "linear-gradient(180deg, rgba(36, 99, 235, 0.08) 0%, rgba(36, 99, 235, 0.02) 100%)"
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-[#2463eb]/70" weight="regular" />
                      <span className="text-lg sm:text-xl font-medium" style={{ color: "hsl(220 15% 25%)" }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Vertikale Achse */}
              <div
                className="w-px h-6 mb-4"
                style={{
                  background: "linear-gradient(to bottom, rgba(36, 99, 235, 0.25), rgba(36, 99, 235, 0.05))"
                }}
              />

              {/* Ebene 2: KONTEXT (~30% visuelles Gewicht) - sekundär, enger */}
              <div className="flex justify-center gap-2 sm:gap-3 mb-6">
                {[
                  { label: "Dokumente", icon: Folder },
                  { label: "Beschlüsse", icon: Gavel },
                  { label: "Vorgänge", icon: ArrowsClockwise }
                ].map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-[#2463eb]/[0.06] rounded-lg px-4 py-2 border border-[#2463eb]/[0.15] flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4 text-[#2463eb]/55" weight="regular" />
                      <span className="text-sm font-medium text-[#2463eb]/75">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Vertikale Achse */}
              <div
                className="w-px h-4 mb-4"
                style={{
                  background: "linear-gradient(to bottom, rgba(36, 99, 235, 0.15), rgba(36, 99, 235, 0.03))"
                }}
              />

              {/* Ebene 3: HINTERGRUND (~10% visuelles Gewicht) - leise im Hintergrund */}
              <div className="flex justify-center gap-2">
                {["automatisch", "aktualisiert", "archiviert"].map((label) => (
                  <span
                    key={label}
                    className="text-[0.8rem] px-3 py-1 rounded-full bg-[#2463eb]/[0.04] text-[#2463eb]/40 tracking-wide"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ So entsteht dieser Überblick im Hintergrund - Technical Flow */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50/30">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            So zeigt sich das im Alltag
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Entscheidungen sind klar. Abläufe laufen im Hintergrund.
          </p>
        </motion.div>

        {/* 3 Zustandskarten - Desktop & Mobile */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: (
                <svg viewBox="0 0 48 48" className="w-11 h-11">
                  <circle cx="24" cy="24" r="20" fill="#2463eb" opacity="0.06" />
                  <path d="M16 24l4 4 12-12" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                  <path d="M16 32h16" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
                  <path d="M16 36h12" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.25" />
                </svg>
              ),
              title: "Alles vorbereitet",
              text: "Finanzen, Dokumente und Beschlüsse sind vollständig erfasst, geprüft und strukturiert."
            },
            {
              icon: (
                <svg viewBox="0 0 48 48" className="w-11 h-11">
                  <circle cx="24" cy="24" r="20" fill="#2463eb" opacity="0.06" />
                  <circle cx="24" cy="20" r="6" stroke="#2463eb" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
                  <circle cx="24" cy="20" r="2" fill="#2463eb" opacity="0.6" />
                </svg>
              ),
              title: "Entscheidungen sind klar",
              text: "Eigentümer sehen relevante Informationen, vergleichen und entscheiden digital."
            },
            {
              icon: (
                <svg viewBox="0 0 48 48" className="w-11 h-11">
                  <circle cx="24" cy="24" r="20" fill="#2463eb" opacity="0.06" />
                  <path d="M18 24h12" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
                  <path d="M26 20l4 4-4 4" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                  <circle cx="14" cy="24" r="2" fill="#2463eb" opacity="0.35" />
                  <circle cx="34" cy="24" r="2" fill="#2463eb" opacity="0.6" />
                </svg>
              ),
              title: "Abläufe laufen automatisch",
              text: "Nach Freigaben werden Abrechnungen erstellt und Informationen ohne Aufwand verteilt."
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.15
              }}
            >
              <Card className="h-full bg-white/80 border border-slate-200/60 shadow-none hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="mb-5">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-[#1A1A1A] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Erklärender Satz unter den 3 Zuständen */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
            Eigentümer priorisieren und entscheiden – Wegora übernimmt die Abläufe im Hintergrund.
          </p>
        </motion.div>
      </section>

      {/* 7️⃣ Wegoras Rolle - Closing Band */}
      <section
        className="pt-28 md:pt-36 pb-24 md:pb-32"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(36, 99, 235, 0.02) 40%, rgba(36, 99, 235, 0.04) 100%)"
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5" style={{ color: "hsl(220 20% 18%)" }}>
              Wegora ist die Assistenz hinter guter Immobiliensteuerung.
            </h2>

            {/* Subline */}
            <p className="text-base sm:text-lg leading-relaxed mb-5 max-w-2xl mx-auto" style={{ color: "hsl(220 15% 45%)" }}>
              Wegora hält Struktur, bündelt Kontext und bringt Entscheidungen dorthin, wo sie gebraucht werden.
            </p>

            {/* Supporting Line */}
            <p className="text-sm mb-14" style={{ color: "hsl(220 15% 60%)" }}>
              Der Rest läuft im Hintergrund.
            </p>

            {/* Soft CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/registrieren"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2463eb] text-white font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                Jetzt registrieren
              </a>
              <a
                href="/angebot"
                className="text-sm font-medium text-[#2463eb]/70 hover:text-[#2463eb] transition-colors"
              >
                Unser Angebot ansehen →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
