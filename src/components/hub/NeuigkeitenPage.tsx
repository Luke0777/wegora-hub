import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CaretDown,
  FileText,
  CheckCircle,
  ChartBar,
  Path,
  Rocket,
  Layout
} from "@phosphor-icons/react";

export function NeuigkeitenPage() {
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
  const updatesData = [
    {
      title: "Nebenkosten einfacher vorbereiten – auch mobil",
      subtitle: "Beta · Januar 2026 · Produkt-Update",
      description: "Nebenkosten unterwegs erfassen und zentral bündeln – für eine strukturierte Vorbereitung der Abrechnung.",
      icon: FileText,
    },
    {
      title: "Beschlüsse digital treffen",
      subtitle: "Beta · November 2025 · Produkt-Update",
      description: "Beschlüsse digital vorbereiten, abstimmen und klar dokumentieren – inklusive Protokoll-Überblick und Status.",
      icon: CheckCircle,
    },
    {
      title: "Finanzen übersichtlich verwalten – klar strukturiert",
      subtitle: "Beta · Januar 2026 · Produkt-Update",
      description: "Einnahmen und Ausgaben geordnet im Blick behalten – mit einer klaren Struktur pro Objekt.",
      icon: ChartBar,
    },
  ];

  return (
    <>
      {/* Hero Section - Editorial */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto text-center pt-[34px]">
            {/* Eyebrow Label - Wegora Blue */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
                Neuigkeiten
              </p>
            </motion.div>

            {/* Main Headline - Outcome-focused */}
            <motion.h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Wie sich Wegora weiterentwickelt
            </motion.h1>

            {/* Subline - Calm, forward-looking */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto mt-8"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Updates, Verbesserungen und neue Möglichkeiten – Schritt für Schritt.
            </motion.p>

            {/* Preview-Anker - Latest Update */}
            <motion.div
              className="mt-28 max-w-lg mx-auto text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              {/* Badge line */}
              <p className="text-sm text-muted-foreground/70 mb-4 tracking-wide font-medium">
                Beta · Januar 2026 · Produkt-Update
              </p>

              {/* Latest update title */}
              <p className="text-[18px] font-medium leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                Nebenkosten einfacher vorbereiten – auch mobil
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
                  className="w-10 h-10 text-[#2463eb]/70 hover:text-[#2463eb] transition-colors"
                  weight="bold"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* News/Updates Section - Outcome-Focused */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Was sich verbessert hat
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Neue Möglichkeiten, um Immobilien effizienter zu steuern.
            </p>
          </motion.div>

          {/* Updates Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {updatesData.map((item, idx) => {
              const IconComponent = item.icon;

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
                  <Card className="bg-[#F8FAFF] border border-[rgba(47,102,255,0.25)] shadow-sm hover:bg-[rgba(47,102,255,0.06)] hover:border-[rgba(47,102,255,0.4)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-out">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Icon Container */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-lg bg-white border border-[rgba(47,102,255,0.2)] flex items-center justify-center">
                            <IconComponent
                              className="w-7 h-7 text-[#2463eb]"
                              weight="regular"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          {/* Subtitle - context line */}
                          <p className="text-sm text-muted-foreground font-medium">
                            {item.subtitle}
                          </p>

                          {/* Title - outcome-focused */}
                          <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] leading-tight">
                            {item.title}
                          </h3>

                          {/* Description - user benefit */}
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Roadmap Section - Editorial Direction */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] mb-6">
                Was wir als Nächstes möglich machen
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Wir entwickeln Wegora Schritt für Schritt weiter – entlang echter Entscheidungsprozesse.
              </p>
            </motion.div>

            {/* Direction Statements - Text-based, NOT cards */}
            <div className="space-y-12 max-w-3xl mx-auto">
              {[
                {
                  direction: "Mehr Überblick im Portal (Dashboard)",
                  description: "Mehr Überblick über Objekte im Dashboard – Status, Vorgänge und nächste Schritte auf einen Blick.",
                  timeline: null,
                  icon: Layout,
                },
                {
                  direction: "Offene Schnittstellen",
                  description: "Integration in bestehende Systeme – weniger Medienbrüche, mehr Struktur.",
                  timeline: "geplant 2026",
                  icon: Path,
                },
                {
                  direction: "Wegora überall nutzen",
                  description: "Alle Services auch mobil verfügbar.",
                  timeline: null,
                  icon: Rocket,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={idx}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: idx * 0.15
                    }}
                  >
                    {/* Icon + Direction Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F8FAFF] border border-[rgba(47,102,255,0.2)] flex items-center justify-center">
                        <IconComponent
                          className="w-5 h-5 text-[#2463eb]"
                          weight="regular"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                          {item.direction}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        {/* Timeline - small, gray, de-emphasized */}
                        {item.timeline && (
                          <p className="text-sm text-muted-foreground/60 mt-2 italic">
                            ({item.timeline})
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing Statement */}
            <motion.div
              className="text-center mt-16 pt-8 border-t border-muted-foreground/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Wegora entwickelt sich entlang realer Entscheidungsprozesse – nicht entlang von Feature-Listen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
