import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, House, CaretDown, Buildings } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export function HomePage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hasEnoughHeight = window.innerHeight >= 700;
      setShowScrollArrow(window.scrollY <= 100 && hasEnoughHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-[34px]">
            {/* Brand Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(12px,1.2vw,14px)] font-medium" style={{ color: "hsl(var(--text-tertiary))" }}>
                Wegora
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Entscheidungen treffen.<br />Nicht verwalten.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Für Eigentümer, WEGs und kleine Verwaltungen.
            </motion.p>

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
                  className="w-10 h-10 text-weg-500/70 hover:text-weg-500 transition-colors"
                  weight="bold"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Unser Ansatz - Belief Statement */}
      <section
        className="pt-24 pb-28 sm:pt-28 sm:pb-32 relative"
        style={{
          background: `radial-gradient(
            45% 50% at 50% 45%,
            rgba(80, 120, 255, 0.055) 0%,
            rgba(80, 120, 255, 0.03) 35%,
            rgba(80, 120, 255, 0.012) 65%,
            #FFFFFF 100%
          )`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-[640px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Eyebrow with divider */}
              <div className="mb-8">
                <p className="text-[12px] font-medium tracking-[0.08em] uppercase mb-3" style={{ color: '#6B7A99' }}>
                  Unser Ansatz
                </p>
                <div className="w-8 h-px mx-auto" style={{ background: '#CBD5E1' }} />
              </div>

              {/* Thesen-Block — verdichtet, geerdet */}
              <div className="mb-6">
                {/* Kernthese (visueller Anker) */}
                <p className="text-[clamp(24px,3vw,32px)] leading-[1.3] font-semibold tracking-tight mb-5" style={{ color: '#1A1A1A' }}>
                  Wegora organisiert Entscheidungen.
                </p>

                {/* Zweite These (ruhig, gleiche Farbe, weniger Gewicht) */}
                <p className="text-lg sm:text-xl leading-snug font-medium tracking-tight" style={{ color: '#1A1A1A' }}>
                  Wegora wächst durch Klarheit.
                </p>
              </div>

              {/* Erklärung (Echo, sehr zurückgenommen) */}
              <p className="text-xs leading-relaxed mt-12" style={{ color: '#9aa8bc' }}>
                Sie beginnen mit dem, was heute wichtig ist.<br />Alles andere wartet, bis es gebraucht wird.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zwei Wege. Ein Prinzip. */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Divider */}
            <div className="w-8 h-px mx-auto mb-8" style={{ background: '#CBD5E1' }} />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Zwei Wege. Ein Prinzip.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Für WEGs, die gemeinsam entscheiden.<br />Für Eigentümer, die für sich selbst sorgen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WEG Card - Left (Blue) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-weg-500/20 bg-gradient-to-br from-weg-50 to-white p-8 shadow-sm hover:shadow-2xl hover:shadow-weg-500/10 transition-all duration-300 flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-weg-500/5 rounded-full -mr-16 -mt-16" />

                <div className="relative flex flex-col flex-1">
                  <div className="w-16 h-16 bg-weg-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Buildings className="h-8 w-8 text-weg-500" weight="duotone" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
                    Gemeinsam entscheiden
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    Versammlungen planen, Beschlüsse dokumentieren,<br />Finanzen verwalten — alles an einem Ort.
                  </p>

                  <div className="mt-auto">
                    <Link to="/angebot-weg" className="text-weg-500 hover:text-weg-600 font-medium inline-flex items-center group">
                      Versammlungen, Finanzen, Dokumente
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Eigentümer Card - Right (Teal) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-owner-500/20 bg-gradient-to-br from-owner-50 to-white p-8 shadow-sm hover:shadow-2xl hover:shadow-owner-500/10 transition-all duration-300 flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-owner-500/5 rounded-full -mr-16 -mt-16" />

                <div className="relative flex flex-col flex-1">
                  <div className="w-16 h-16 bg-owner-500/10 rounded-xl flex items-center justify-center mb-6">
                    <House className="h-8 w-8 text-owner-500" weight="duotone" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">
                    Für sich selbst sorgen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    Nebenkosten prüfen, Dokumente ablegen,<br />Finanzen im Blick — ohne Verwaltungsaufwand.
                  </p>

                  <div className="mt-auto">
                    <Link to="/angebot-eigentuemer" className="text-owner-600 hover:text-owner-700 font-medium inline-flex items-center group">
                      Nebenkosten, Dokumente, Finanzen
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-muted/40 to-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-[clamp(32px,3.5vw,48px)] font-semibold mb-4 text-[#1A1A1A]"
              style={{ fontWeight: 600, lineHeight: 1.15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Weniger verwalten.<br />Mehr entscheiden.
            </motion.h2>
            <motion.p
              className="text-[clamp(16px,1.8vw,20px)] text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Wegora ist für Menschen, die Verantwortung tragen —<br />ohne sich in Verwaltung zu verlieren.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Link to="/angebot-weg">
                <Button size="default" className="px-5 py-2.5 h-auto bg-weg-500/90 hover:bg-weg-500 text-white hover:text-white text-[13px] font-medium">
                  <Buildings className="mr-1.5 h-4 w-4" weight="duotone" />
                  WEG-Module
                </Button>
              </Link>
              <Link to="/angebot-eigentuemer">
                <Button size="default" className="px-5 py-2.5 h-auto bg-owner-500/90 hover:bg-owner-500 text-white hover:text-white text-[13px] font-medium">
                  <House className="mr-1.5 h-4 w-4" weight="duotone" />
                  Eigentümer-Module
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
