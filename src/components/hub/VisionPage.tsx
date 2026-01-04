import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Path, FileText, Rocket, CaretDown } from "@phosphor-icons/react";
import { ServiceFlowDiagram } from "./illustrations";
import { AnimatedWordReplacement } from "./AnimatedWordReplacement";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function VisionPage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll arrow visibility
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
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
                  delay: 2.9,
                  duration: 0.8,
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
                  delay: 3.1,
                  duration: 0.8,
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
              className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
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
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Wie sich die Zukunft mit Wegora anfühlt
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Stellen Sie sich vor: Sie öffnen ein Portal – und sehen sofort, was wichtig ist.
            </p>
          </div>

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
                title: "Prioritäten statt To-dos",
                text: "To-do-Listen zeigen, was ansteht – nicht alles auf einmal. Termine, Fristen und Entscheidungen sind <strong>geführt</strong>."
              },
              {
                icon: Rocket,
                title: "Entscheiden statt Verwalten",
                text: "Wenn eine Entscheidung nötig ist, treffen Sie sie digital – <strong>klar vorbereitet</strong>, vergleichbar, nachvollziehbar."
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;

              return (
                <Card 
                  key={idx}
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
                  title: "Prioritäten statt To-dos",
                  text: "To-do-Listen zeigen, was ansteht – nicht alles auf einmal. Termine, Fristen und Entscheidungen sind <strong>geführt</strong>."
                },
                {
                  icon: Rocket,
                  title: "Entscheiden statt Verwalten",
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
          <div className="text-center mt-12 mb-16">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-600 mb-4">
              So fühlt sich Immobiliensteuerung im Alltag an
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              WEGs verwalten nicht mehr.<br />
              Sie behalten den Überblick und entscheiden.
            </p>
          </div>
        </div>

        {/* Subtle Fade Gradient - Scroll Continuation Cue */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50/30 pointer-events-none" />
      </section>

      {/* 5️⃣ So entsteht dieser Überblick im Hintergrund - Technical Flow */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50/30">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            So entsteht dieser Überblick im Hintergrund
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">Stellen Sie sich vor:</p>
        </div>

        {/* Desktop Flow */}
        <div className="mt-12 hidden md:block">
          <div className="relative rounded-2xl border bg-white/60 px-10 py-12">
            {/* connector line */}
            <div className="absolute left-10 right-10 top-10 h-px bg-border" />

            <div className="grid grid-cols-5 gap-6">
              {[
                { title: "Rechnung geht ein", desc: "Automatisch erfasst & zugeordnet." },
                { title: "Wird geprüft", desc: "Plausibilisiert und vorbereitet." },
                { title: "Abweichungen werden sichtbar", desc: "Früh erkannt – bevor sie Probleme werden." },
                { title: "Entscheidung wird vorbereitet", desc: "Klarer Vorschlag mit Kontext & Kosten." },
                { title: "Umsetzung läuft strukturiert", desc: "Status, nächste Schritte, Verantwortlichkeit." },
              ].map((s, idx) => (
                <div key={idx} className="relative pt-6">
                  {/* node */}
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm">
                    <span className="text-xs font-medium text-muted-foreground">{idx + 1}</span>
                  </div>

                  {/* small tick to line */}
                  <div className="mx-auto mt-2 h-3 w-px bg-border" />

                  <div className="mt-5 text-center">
                    <div className="text-sm font-semibold">{s.title}</div>
                    <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* subtle accent */}
            <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-blue-600/30" />
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="mt-12 md:hidden">
          <div className="rounded-2xl border bg-white/60 px-6 py-8">
            <ol className="relative space-y-6">
              {/* vertical connector */}
              <div className="absolute left-5 top-3 bottom-3 w-px bg-border" />

              {[
                { title: "Rechnung geht ein", desc: "Automatisch erfasst & zugeordnet." },
                { title: "Wird geprüft", desc: "Plausibilisiert und vorbereitet." },
                { title: "Abweichungen werden sichtbar", desc: "Früh erkannt – bevor sie Probleme werden." },
                { title: "Entscheidung wird vorbereitet", desc: "Klarer Vorschlag mit Kontext & Kosten." },
                { title: "Umsetzung läuft strukturiert", desc: "Status, nächste Schritte, Verantwortlichkeit." },
              ].map((s, idx) => (
                <li key={idx} className="relative flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm">
                    <span className="text-xs font-medium text-muted-foreground">{idx + 1}</span>
                  </div>
                  <div className="pt-1">
                    <div className="text-sm font-semibold">{s.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            WEGs behalten die Kontrolle – ohne im Detail zu versinken.
          </p>
        </div>
      </section>

      {/* 5️⃣ 2-Layer Architecture - Menschen → Wegora */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
            Menschen im Mittelpunkt. Wegora im Hintergrund.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Klare Rollen ermöglichen Struktur – damit Menschen entscheiden können.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border bg-white/60 px-8 py-10">
          {/* Layer 1: Menschen / WEGs */}
          <div className="relative">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold">WEGs / Menschen</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Entscheiden · Priorisieren · Überblick behalten
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                {["Bestätigen", "Rückfragen", "Ablehnen"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* connector */}
            <div className="mt-8 h-px bg-border" />
          </div>

          {/* Layer 2: Wegora */}
          <div className="relative mt-8">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-blue-700">Wegora</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Strukturiert Abläufe · Bereitet Entscheidungen vor · Führt Umsetzung nach
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                {["Kontext bündeln", "Vorschläge erzeugen", "Status & Verantwortlichkeit"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-blue-50 px-3 py-1 text-xs text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* small kicker */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Wegora schafft Raum für Entscheidungen – weil Routine im Hintergrund zuverlässig erledigt wird.
        </div>
      </section>

      {/* 7️⃣ Wegoras Rolle - Editorial - Positioning */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#1A1A1A]">
              Welche Rolle Wegora in dieser Zukunft spielt
            </h2>
            
            {/* Central Graphic */}
            <div className="mb-16">
              <ServiceFlowDiagram className="w-full max-w-[700px] h-auto mx-auto" />
            </div>
            
            {/* Positioning Text */}
            <div className="space-y-8 text-base sm:text-lg leading-relaxed max-w-[600px] mx-auto text-center">
              <p className="font-semibold">
                Wegora ist kein weiteres Verwaltungstool.
              </p>
              <p>
                Wegora ist die Struktur, auf der Verwaltung wieder möglich wird.
              </p>
              <p className="text-muted-foreground">
                Wir schaffen klare Abläufe, die Verwaltung kontinuierlich weiterlaufen lassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Services - Building Blocks */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-12 text-center text-[#1A1A1A]">
              So bauen wir diese Zukunft — Schritt für Schritt
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="space-y-3 pt-4 border-t border-[#2463eb]">
                <h4 className="font-semibold text-base text-[#1A1A1A]">
                  Abrechnung & Umlagen (End-to-End)
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Von Belegen bis zur fertigen Abrechnung — nachvollziehbar vorbereitet, Entscheidungen klar sichtbar.
                </p>
              </div>

              {/* Service 2 */}
              <div className="space-y-3 pt-4 border-t border-[#2463eb]">
                <h4 className="font-semibold text-base text-[#1A1A1A]">
                  Beschluss & Umsetzung
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Von der Vorlage bis zur Dokumentation — damit Beschlüsse nicht liegen bleiben.
                </p>
              </div>

              {/* Service 3 */}
              <div className="space-y-3 pt-4 border-t border-[#2463eb]">
                <h4 className="font-semibold text-base text-[#1A1A1A]">
                  Dokumente & Kommunikation
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Informationen werden strukturiert, Anfragen werden geordnet — weniger Nachfragen, mehr Überblick.
                </p>
              </div>

              {/* Service 4 */}
              <div className="space-y-3 pt-4 border-t border-[#2463eb]">
                <h4 className="font-semibold text-base text-[#1A1A1A]">
                  Auffälligkeiten & Kontrolle
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Abweichungen werden früh sichtbar — WEGs entscheiden rechtzeitig statt im Nachhinein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Prinzipien - Abschluss (Principles - Summary) */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-20 text-center text-[#1A1A1A]">
              Die Verwaltung der Zukunft folgt klaren Prinzipien
            </h2>
            
            <div className="space-y-10 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Verständlich</strong> — WEGs verstehen, was passiert – ohne Fachsprache.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Modular</strong> — Nutzen, was wirklich gebraucht wird – ohne All-in-One-Zwang.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Transparent</strong> — Leistungen und Schritte sind nachvollziehbar – ohne Ratespiel.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Entlastend</strong> — Routine wird vorbereitet – Zeit bleibt für Betreuung.
              </p>

              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Kontrollierbar</strong> — Technologie unterstützt Entscheidungen – WEGs behalten die Kontrolle.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
