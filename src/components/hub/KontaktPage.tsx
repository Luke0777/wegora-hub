import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple, CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function KontaktPage() {
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
      {/* Hero Section - Editorial */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
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
                Kontakt
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
              Lassen Sie uns sprechen, wenn es sinnvoll ist.
            </motion.h1>

            {/* Subline - Calm, forward-looking */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto mt-8"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Wir beantworten, was wir können. Und sagen ehrlich, wenn wir nicht die Richtigen sind.
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

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-3">Ihr Anliegen</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Schildern Sie kurz Ihre Situation – wir melden uns.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <Card className="border-2 border-muted shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent"
                        placeholder="ihre@email.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Anliegen
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent resize-none"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-[#2463eb]/90 hover:bg-[#2463eb] text-white px-5 py-2.5 text-[13px] font-medium"
                    >
                      <EnvelopeSimple className="mr-1.5 h-4 w-4" />
                      Anfrage absenden
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </motion.div>
              <p className="text-sm text-muted-foreground text-center mt-6 leading-relaxed">
                Wir melden uns innerhalb weniger Tage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Häufige Fragen vorab
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Manche Fragen klären sich direkt – ohne Kontakt.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  question: "Für wen ist Wegora gedacht?",
                  answer: "Für Wohnungseigentümergemeinschaften, Einzeleigentümer und kleine Verwaltungen, die ihre Immobilienverwaltung strukturierter und transparenter gestalten möchten.",
                },
                {
                  question: "Wie läuft eine Produktvorstellung ab?",
                  answer: "Wir zeigen Ihnen in einem kurzen Termin, wie unsere Services funktionieren – unverbindlich und auf Ihre Situation zugeschnitten.",
                },
                {
                  question: "Kann ich Services vorab testen?",
                  answer: "Ja – über unsere Service-Seiten können Sie einzelne Angebote direkt ausprobieren.",
                },
                {
                  question: "Wie schnell meldet ihr euch?",
                  answer: "Sobald wir können. Wir lesen jede Anfrage und antworten, wenn wir etwas beitragen können.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  <Card className="border-2 border-muted shadow-md h-full">
                    <CardContent className="p-6 h-full">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
