import { CaretDown } from "@phosphor-icons/react";
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
            <div className="mb-8">
              <p className="text-[clamp(12px,1.2vw,14px)] font-medium" style={{ color: "hsl(var(--text-tertiary))" }}>
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

            {/* Core thesis - single confident statement */}
            <motion.p
              className="max-w-3xl mx-auto mt-8 text-[clamp(18px,2vw,22px)] leading-[1.6]"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.7,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Mit Wegora treffen Menschen Entscheidungen für ihr Eigentum. Alles andere passiert im Hintergrund.
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

      {/* 2️⃣ + 3️⃣ Combined breathing section */}
      <div
        style={{
          background: `radial-gradient(
            50% 35% at 50% 30%,
            rgba(80, 120, 255, 0.12) 0%,
            rgba(80, 120, 255, 0.05) 50%,
            rgba(80, 120, 255, 0.02) 75%,
            #FFFFFF 100%
          )`
        }}
      >
        {/* Was gute Steuerung ermöglicht - Prose Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-16" style={{ color: "hsl(220 20% 20%)" }}>
                Was gute Steuerung ermöglicht
              </h2>
            </motion.div>

            <motion.div
              className="space-y-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-[clamp(17px,1.8vw,20px)] leading-[1.8]" style={{ color: "hsl(220 12% 35%)" }}>
                Wenn alles seinen Platz hat, entsteht Ruhe.<br />
                Sie öffnen Wegora und sehen, was ansteht — nicht alles auf einmal,<br />
                sondern das, was jetzt Aufmerksamkeit braucht.
              </p>

              {/* Subtle divider */}
              <div className="w-12 h-px mx-auto" style={{ background: "hsl(220 15% 85%)" }} />

              <p className="text-[clamp(17px,1.8vw,20px)] leading-[1.8]" style={{ color: "hsl(220 12% 42%)" }}>
                Darunter liegt Kontext: Dokumente, Beschlüsse, Vorgänge.<br />
                Abrufbar, wenn Sie sie brauchen. Unsichtbar, wenn nicht.
              </p>

              {/* Subtle divider */}
              <div className="w-12 h-px mx-auto" style={{ background: "hsl(220 15% 88%)" }} />

              <p className="text-[clamp(17px,1.8vw,20px)] leading-[1.8]" style={{ color: "hsl(220 12% 50%)" }}>
                Und im Hintergrund läuft, was laufen kann:<br />
                automatisch, aktualisiert, archiviert.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Wie es sich anfühlt - Three Moments */}
        <section className="pt-16 sm:pt-20 pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "hsl(220 20% 20%)" }}>
                Wie es sich anfühlt
              </h2>
            </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Sie öffnen Wegora. Alles Wichtige ist vorbereitet.",
              "Sie entscheiden.\nDie Informationen sind da.",
              "Sie schließen Wegora. Der Rest passiert von selbst."
            ].map((moment, idx) => (
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
                className="rounded-2xl p-8 sm:p-10 text-center"
                style={{
                  background: "linear-gradient(180deg, #F3F7FF 0%, #FFFFFF 70%)",
                  border: "1px solid #E3EBFF",
                  boxShadow: "0 12px 32px rgba(20, 40, 120, 0.06)"
                }}
              >
                <p className="text-[clamp(16px,1.6vw,18px)] leading-[1.7] font-medium whitespace-pre-line" style={{ color: "hsl(220 12% 28%)" }}>
                  {moment}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </section>
      </div>

      {/* 4️⃣ Closing Statement */}
      <section className="pt-20 md:pt-24 pb-32 md:pb-44">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Subtle horizontal line as visual signal */}
          <motion.div
            className="w-16 h-px mx-auto mb-20"
            style={{ background: "hsl(220 15% 80%)" }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[clamp(18px,1.9vw,20px)] leading-[1.65] font-medium" style={{ color: "rgba(0, 0, 0, 0.78)" }}>
              Gute Immobiliensteuerung bedeutet, Entscheidungen treffen zu können —<br />
              nicht, alles selbst im Blick behalten zu müssen.
            </p>
            <p className="text-[clamp(16px,1.7vw,17px)] leading-[1.6]" style={{ color: "rgba(0, 0, 0, 0.58)" }}>
              Das ist, wofür Wegora gebaut wird.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
}
