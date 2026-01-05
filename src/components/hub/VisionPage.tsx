import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Path, FileText, Rocket, CaretDown } from "@phosphor-icons/react";
import { AnimatedWordReplacement } from "./AnimatedWordReplacement";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function VisionPage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [stepsVisible, setStepsVisible] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Centralized workflow step data
  const WORKFLOW_STEPS = [
    {
      title: "Finanzen sind vorbereitet",
      desc: "Vollständig erfasst, geprüft und strukturiert.",
      chip: "Wegora Finanzen",
      chipSub: null,
      actionText: null,
    },
    {
      title: "Abrechnung & Planung liegen vor",
      desc: "Klar vorbereitet – als Entscheidungsgrundlage belastbar.",
      chip: "Wegora Finanzen",
      chipSub: null,
      actionText: "Finanzen bestätigen",
    },
    {
      title: "Eigentümer entscheiden digital",
      desc: "Vergleichbar, nachvollziehbar und kontextualisiert.",
      chip: "Wegora Versammlungen",
      chipSub: null,
      actionText: "Beschlüsse treffen",
    },
    {
      title: "Beschlüsse sind jederzeit verfügbar",
      desc: "Mit Status, Verantwortlichkeiten und Historie.",
      chip: "Wegora Portal",
      chipSub: null,
      actionText: "Dokumente prüfen",
    },
    {
      title: "NK-Abrechnungen sind bereit",
      desc: "Automatisch aufbereitet – pro Eigentümer.",
      chip: "NK Manager",
      chipSub: null,
      actionText: "NK bestätigen",
    },
    {
      title: "Versand läuft automatisch",
      desc: "Nach Freigabe – ohne weiteren Aufwand.",
      chip: "Wegora Portal",
      chipSub: null,
      actionText: null,
    },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStepsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
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

      {/* 2️⃣ Wie sich die Zukunft mit Wegora anfühlt - Static Cards */}
      <section className="relative py-16 sm:py-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Wie sich die Zukunft mit Wegora anfühlt
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Stellen Sie sich vor: Sie öffnen ein Portal – und sehen sofort, was wichtig ist.
            </p>
          </motion.div>

          {/* 5-Card Display - Uniform, hover-focused design */}
          {/* Desktop View */}
          <div className="hidden md:flex justify-center items-start gap-4">
            {[
              {
                icon: Lightbulb,
                title: "Überblick",
                text: "<strong>Kosten, Vorgänge, Dokumente</strong> und Entscheidungen an einem Ort. Klar strukturiert. Jederzeit einsehbar."
              },
              {
                icon: FileText,
                title: "Transparenz",
                text: "Veränderungen am Objekt sind dokumentiert. <strong>Historie, Status und Kontext</strong> bleiben erhalten."
              },
              {
                icon: CheckCircle,
                title: "Entlastung",
                text: "Rechnungen werden <strong>automatisch zugeordnet</strong>. Finanzen sind vorbereitet, geprüft und nachvollziehbar."
              },
              {
                icon: Path,
                title: "Priorisierung",
                text: "To-do-Listen zeigen, was ansteht – nicht alles auf einmal. Termine, Fristen und Entscheidungen sind <strong>geführt</strong>."
              },
              {
                icon: Rocket,
                title: "Entscheidungsfreiheit",
                text: "Wenn eine Entscheidung nötig ist, treffen Sie sie digital – <strong>klar vorbereitet</strong>, vergleichbar, nachvollziehbar."
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.1
                  }}
                >
                  <Card
                    className="flex-none w-[220px] bg-[#F8FAFF] border border-[rgba(47,102,255,0.25)] shadow-sm hover:bg-[rgba(47,102,255,0.06)] hover:border-[rgba(47,102,255,0.4)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out"
                  >
                    <CardContent className="p-5 pt-8 text-center h-full flex flex-col min-h-[380px]">
                      {/* Fixed height icon area - icons aligned at same height */}
                      <div className="h-[50px] mb-10 flex items-center justify-center">
                        <IconComponent
                          className="w-11 h-11 text-[#2463eb]"
                          weight="regular"
                        />
                      </div>

                      {/* Fixed height title area - headings top-aligned even when wrapped */}
                      <h3 className="h-[44px] flex items-start justify-center font-bold text-base mb-4 text-[#1A1A1A]">
                        {card.title}
                      </h3>

                      {/* Body text - first line aligned across all cards */}
                      <p
                        className="text-sm leading-relaxed text-muted-foreground text-center"
                        dangerouslySetInnerHTML={{
                          __html: card.text.replace(/<strong>/g, '<span class="text-[#1A1A1A] font-medium">').replace(/<\/strong>/g, '</span>')
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6">
            <div className="flex gap-4 snap-x snap-mandatory px-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Überblick",
                  text: "<strong>Kosten, Vorgänge, Dokumente</strong> und Entscheidungen an einem Ort. Klar strukturiert. Jederzeit einsehbar."
                },
                {
                  icon: FileText,
                  title: "Transparenz",
                  text: "Veränderungen am Objekt sind dokumentiert. <strong>Historie, Status und Kontext</strong> bleiben erhalten."
                },
                {
                  icon: CheckCircle,
                  title: "Entlastung",
                  text: "Rechnungen werden <strong>automatisch zugeordnet</strong>. Finanzen sind vorbereitet, geprüft und nachvollziehbar."
                },
                {
                  icon: Path,
                  title: "Priorisierung",
                  text: "To-do-Listen zeigen, was ansteht – nicht alles auf einmal. Termine, Fristen und Entscheidungen sind <strong>geführt</strong>."
                },
                {
                  icon: Rocket,
                  title: "Entscheidungsfreiheit",
                  text: "Wenn eine Entscheidung nötig ist, treffen Sie sie digital – <strong>klar vorbereitet</strong>, vergleichbar, nachvollziehbar."
                }
              ].map((card, idx) => {
                const IconComponent = card.icon;
                
                return (
                  <Card 
                    key={idx}
                    className="flex-none w-[280px] snap-center bg-[#F8FAFF] border border-[rgba(47,102,255,0.25)] shadow-sm"
                  >
                    <CardContent className="p-6 pt-8 text-center h-full flex flex-col min-h-[340px]">
                      {/* Fixed height icon area - icons aligned at same height */}
                      <div className="h-[50px] mb-10 flex items-center justify-center">
                        <IconComponent 
                          className="w-11 h-11 text-[#2463eb]"
                          weight="regular" 
                        />
                      </div>
                      
                      {/* Fixed height title area - headings top-aligned even when wrapped */}
                      <h3 className="h-[44px] flex items-start justify-center font-bold text-base mb-4 text-[#1A1A1A]">
                        {card.title}
                      </h3>
                      
                      {/* Body text - first line aligned across all cards */}
                      <p 
                        className="text-sm leading-relaxed text-muted-foreground text-center"
                        dangerouslySetInnerHTML={{ 
                          __html: card.text.replace(/<strong>/g, '<span class="text-[#1A1A1A] font-medium">').replace(/<\/strong>/g, '</span>') 
                        }}
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Transitional Text - Invites continued reading */}
          <motion.div
            className="text-center mt-32 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">
              Immobiliensteuerung im Alltag
            </h3>
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1">
              <p>Überblick behalten.</p>
              <p>Entscheidungen treffen.</p>
              <p>Der Rest läuft im Hintergrund.</p>
            </div>
          </motion.div>
        </div>

        {/* Subtle Fade Gradient - Scroll Continuation Cue */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/30 pointer-events-none" />
      </section>

      {/* 5️⃣ So entsteht dieser Überblick im Hintergrund - Technical Flow */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50/30">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            So sieht die Zukunft der Immobiliensteuerung aus – Schritt für Schritt
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der Wirtschaftsplanung bis zum Versand der Nebenkostenabrechnung.
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div ref={stepsRef} className="mt-12 hidden md:block">
          <div className="grid grid-cols-6 gap-8 max-w-7xl mx-auto">
            {WORKFLOW_STEPS.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={stepsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.2
                }}
                className="relative"
              >
                {/* node - light background with blue border like cards */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2463eb] bg-[#F8FAFF] shadow-sm">
                  <span className="text-sm font-bold text-[#2463eb]">{idx + 1}</span>
                </div>

                {/* small tick below circle */}
                <div className="mx-auto mt-3 h-4 w-px bg-[#2463eb]/20" />

                <div className="mt-6 text-center px-2">
                  {/* Title with fixed height and max 2 lines */}
                  <div className="h-[48px] flex items-start justify-center mb-3">
                    <div className="text-[15px] font-semibold leading-snug text-[#1A1A1A] line-clamp-2">
                      {s.title}
                    </div>
                  </div>
                  {/* Description - all start at same vertical position */}
                  <div className="text-[13px] leading-relaxed text-muted-foreground min-h-[66px]">
                    {s.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider 1 - Human Actions Layer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={stepsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.6
            }}
            className="relative mt-12 max-w-7xl mx-auto"
          >
            <div className="h-px bg-border" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <span className="text-xs font-medium text-muted-foreground">Eigentümer</span>
            </div>
            <div className="grid grid-cols-6 gap-8 mt-9">
              {WORKFLOW_STEPS.map((s, idx) => (
                <div key={idx} className="flex justify-center">
                  {s.actionText && (
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600 border border-blue-200">
                      {s.actionText}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider 2 - Wegora Systems Layer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={stepsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.8
            }}
            className="relative mt-9 max-w-7xl mx-auto"
          >
            <div className="h-px bg-border" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <span className="text-xs font-medium text-muted-foreground">Wegora</span>
            </div>
            <div className="grid grid-cols-6 gap-8 mt-9">
              {WORKFLOW_STEPS.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center gap-0.5">
                  <span className="inline-block rounded-full border px-3 py-1 text-xs whitespace-nowrap bg-blue-50 border-blue-200 text-blue-600">
                    {s.chip}
                  </span>
                  {s.chipSub && (
                    <span className="text-[10px] text-muted-foreground leading-tight">
                      {s.chipSub}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Flow */}
        <div className="mt-12 md:hidden px-6">
          <ol className="space-y-8">
            {WORKFLOW_STEPS.map((s, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={stepsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.2
                }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#2463eb] bg-[#F8FAFF] shadow-sm">
                  <span className="text-sm font-bold text-[#2463eb]">{idx + 1}</span>
                </div>
                <div className="pt-1 flex-1">
                  {s.actionText && (
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600 border border-blue-200 mb-2">
                      ✓ Ihre Aktion
                    </span>
                  )}
                  <div className="text-[15px] font-semibold leading-snug text-[#1A1A1A] mb-2 line-clamp-2">
                    {s.title}
                  </div>
                  <div className="text-[13px] leading-relaxed text-muted-foreground mb-2">
                    {s.desc}
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="inline-block rounded-full border px-3 py-1 text-xs whitespace-nowrap bg-blue-50 border-blue-200 text-blue-600">
                      {s.chip}
                    </span>
                    {s.chipSub && (
                      <span className="text-[10px] text-muted-foreground ml-3 leading-tight">
                        {s.chipSub}
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Eigentümer priorisieren, monitoren und entscheiden.
          </p>
        </motion.div>
      </section>

      {/* 7️⃣ Wegoras Rolle - Editorial - Positioning */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#1A1A1A]">
              Wegora schafft die Struktur, in der Immobiliensteuerung funktioniert
            </h2>

            {/* Positioning Text */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-[600px] mx-auto text-center">
              <p className="font-semibold">
                Wegora ist kein weiteres Verwaltungstool.
              </p>
              <p>
                Wegora ist die Struktur, auf der Immobiliensteuerung möglich wird.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ Prinzipien - Abschluss (Principles - Summary) */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#1A1A1A]">
                Immobiliensteuerung folgt klaren Prinzipien
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center mb-16">
                Fünf Prinzipien, die Immobiliensteuerung möglich machen:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
              {/* Principle 1 */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              >
                <h4 className="font-semibold text-lg text-[#1A1A1A]">
                  Verständlich
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  WEGs verstehen, was passiert – ohne Fachsprache.
                </p>
              </motion.div>

              {/* Principle 2 */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <h4 className="font-semibold text-lg text-[#1A1A1A]">
                  Modular
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Nur nutzen, was wirklich gebraucht wird – ohne All-in-One-Zwang.
                </p>
              </motion.div>

              {/* Principle 3 */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <h4 className="font-semibold text-lg text-[#1A1A1A]">
                  Transparent
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Schritte und Entscheidungen sind nachvollziehbar – ohne Ratespiel.
                </p>
              </motion.div>

              {/* Principle 4 */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <h4 className="font-semibold text-lg text-[#1A1A1A]">
                  Entlastend
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Routine ist vorbereitet – Zeit bleibt für Betreuung.
                </p>
              </motion.div>

              {/* Principle 5 - Centered across both columns */}
              <motion.div
                className="space-y-3 sm:col-span-2 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <h4 className="font-semibold text-lg text-[#1A1A1A]">
                  Kontrollierbar
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  WEGs behalten die Kontrolle – Technologie unterstützt.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
