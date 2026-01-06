import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, House, CaretDown, WarningCircle, CheckCircle, Buildings } from "@phosphor-icons/react";
// Illustrations removed from "Warum Wegora?" section - now using simple card-based comparison
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
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
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
              Eine Plattform. Zwei Perspektiven.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ opacity: 0.6, color: "#1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Eine modulare Plattform für die digitale Immobilienverwaltung – flexibel nutzbar auf Gemeinschafts- und Wohnungsebene.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col items-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <Button
                size="lg"
                className="h-auto px-8 py-4 text-base font-medium rounded-xl bg-[#2463eb] hover:bg-[#1d4ed8] hover:text-blue-50 text-white transition-all duration-200"
                style={{ fontWeight: 500 }}
              >
                Jetzt registrieren
              </Button>
              <p className="text-sm text-muted-foreground mt-5">
                Perspektive wählen im nächsten Schritt
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

      {/* Service Split - WEGs vs. Eigentümer */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Für wen ist Wegora?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Wählen Sie Ihre Perspektive
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
              {/* Zielgruppe Badge ÜBER der Card */}
              <div className="flex items-center gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="px-3 py-1.5 text-xs font-medium bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20"
                >
                  <Buildings className="h-3.5 w-3.5 mr-1.5" weight="duotone" />
                  Für WEGs, Selbstverwalter & kleine Verwaltungen
                </Badge>
              </div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#2463eb]/20 bg-gradient-to-br from-blue-50 to-white p-8 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2463eb]/5 rounded-full -mr-16 -mt-16" />

                <div className="relative flex flex-col flex-1">
                  <div className="w-14 h-14 bg-[#2463eb]/10 rounded-xl flex items-center justify-center mb-6">
                    <Buildings className="h-7 w-7 text-[#2463eb]" weight="duotone" />
                  </div>

                  <h3 className="text-xl font-bold text-[#2463eb] mb-4">
                    Wegora WEG
                  </h3>
                  {/* Feste Höhe für Claim-Bereich damit beide Cards aligned sind */}
                  <div className="min-h-[100px] sm:min-h-[80px] flex items-start">
                    <p className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
                      Ein Objekt. Alles im Griff.
                    </p>
                  </div>
                  {/* Feste Höhe für Subtext damit beide Cards aligned sind */}
                  <div className="min-h-[72px] mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Gemeinschaft, Beschlüsse, Hausgeld, Wirtschaftsplan und Dokumente – klar strukturiert an einem Ort.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Link to="/angebot-weg">
                      <Button className="bg-[#2463eb] hover:bg-[#1d4ed8] hover:text-blue-50 text-white">
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
              {/* Zielgruppe Badge ÜBER der Card */}
              <div className="flex items-center gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="px-3 py-1.5 text-xs font-medium bg-teal-500/10 text-teal-600 border-teal-500/20"
                >
                  <House className="h-3.5 w-3.5 mr-1.5" weight="duotone" />
                  Für Eigentümer & Vermieter
                </Badge>
              </div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-teal-500/20 bg-gradient-to-br from-teal-50 to-white p-8 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16" />

                <div className="relative flex flex-col flex-1">
                  <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                    <House className="h-7 w-7 text-teal-500" weight="duotone" />
                  </div>

                  <h3 className="text-xl font-bold text-teal-500 mb-4">
                    Wegora Eigentümer
                  </h3>
                  {/* Feste Höhe für Claim-Bereich damit beide Cards aligned sind */}
                  <div className="min-h-[100px] sm:min-h-[80px] flex items-start">
                    <p className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
                      Ihre Wohnung. Ihre Finanzen. Ihr Überblick.
                    </p>
                  </div>
                  {/* Feste Höhe für Subtext damit beide Cards aligned sind */}
                  <div className="min-h-[72px] mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Nebenkostenabrechnung, Miete, Kosten und Vorgänge – verständlich und übersichtlich.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Link to="/angebot-eigentuemer">
                      <Button className="bg-teal-500 hover:bg-teal-600 hover:text-teal-50 text-white">
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Auch für Verwaltungen gedacht - Callout */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2463eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Buildings className="h-6 w-6 text-[#2463eb]" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    Auch für Verwaltungen gedacht
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Viele Verwaltungen stoßen an Kapazitätsgrenzen. Wegora schafft klare Strukturen für Eigentümer und entlastet Ihr Team – auch dort, wo eine vollständige Verwaltung nicht mehr möglich oder sinnvoll ist.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warum Wegora? - Clean Comparison */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50/80">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Soft container wrapper */}
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 sm:p-12">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                Warum Wegora?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Ein anderer Ansatz für die Immobilienverwaltung.
              </p>
            </motion.div>

            {/* Two Cards Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Klassische Lösungen Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="h-full border border-slate-200 bg-slate-50/50 shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                        <WarningCircle className="w-5 h-5 text-orange-500" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">Klassische Lösungen</h3>
                        <p className="text-xs text-muted-foreground">teuer und komplex</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Hohe Kosten für Komplettsysteme",
                        "Starre All-in-One-Pakete",
                        "Wenig flexibel bei Sonderfällen",
                        "Lange Einarbeitungszeit"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Wegora Ansatz Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <Card className="h-full border-2 border-[#2463eb]/20 bg-gradient-to-br from-blue-50/50 to-teal-50/30 shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2463eb]/10 to-teal-500/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#2463eb]" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A]">Wegora Ansatz</h3>
                        <p className="text-xs text-muted-foreground">modular und effizient</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Eine Plattform, zwei Perspektiven",
                        "Modulare Services nach Bedarf",
                        "Gemeinsame Datenbasis",
                        "Schneller Einstieg möglich"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#2463eb] mt-0.5 flex-shrink-0" weight="fill" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Mini visual: WEG + Eigentümer split */}
                    <div className="mt-6 pt-5 border-t border-slate-200/60">
                      <div className="flex gap-2">
                        <div className="flex-1 bg-[#2463eb]/10 rounded-lg p-3 text-center">
                          <Buildings className="w-5 h-5 text-[#2463eb] mx-auto mb-1" weight="duotone" />
                          <span className="text-xs font-medium text-[#2463eb]">WEG</span>
                        </div>
                        <div className="flex-1 bg-teal-500/10 rounded-lg p-3 text-center">
                          <House className="w-5 h-5 text-teal-500 mx-auto mb-1" weight="duotone" />
                          <span className="text-xs font-medium text-teal-600">Eigentümer</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Typische Einstiege mit Wegora */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Typische Einstiege mit Wegora
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Flexibel starten – Wegora passt sich Ihren Bedürfnissen an.
            </p>
            {/* Mini-Legende */}
            <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2463eb]"></span>
                <span>WEG = Gemeinschaftliche Nutzung</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>Eigentümer = Wohnungsebene</span>
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Nur Versammlungen",
                description: "Wir nutzen nur Versammlungen – alles andere macht die WEG selbst.",
                context: "weg" as const,
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#2463eb" opacity="0.1" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#2463eb" strokeWidth="1.5" />
                    <g transform="translate(40, 40)">
                      <circle cx="-7" cy="-4" r="3.5" fill="none" stroke="#2463eb" strokeWidth="1.5" />
                      <path d="M-11,4 Q-7,1 -3,4" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="-5" r="4" fill="none" stroke="#2463eb" strokeWidth="1.5" />
                      <path d="M-5,5 Q0,2 5,5" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <circle cx="7" cy="-4" r="3.5" fill="none" stroke="#2463eb" strokeWidth="1.5" />
                      <path d="M3,4 Q7,1 11,4" stroke="#2463eb" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </g>
                  </svg>
                ),
              },
              {
                title: "Finanzen zuerst",
                description: "Wir beginnen mit Finanzen und binden später Nebenkosten an.",
                context: "weg" as const,
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#2463eb" opacity="0.1" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#2463eb" strokeWidth="1.5" />
                    <rect x="27" y="37" width="5" height="10" rx="1" fill="#2463eb" />
                    <rect x="34" y="32" width="5" height="15" rx="1" fill="#2463eb" />
                    <rect x="41" y="34" width="5" height="13" rx="1" fill="#2463eb" />
                    <rect x="48" y="30" width="5" height="17" rx="1" fill="#2463eb" />
                  </svg>
                ),
              },
              {
                title: "Start mit NK Manager",
                description: "Wir starten mit dem NK Manager und erweitern später.",
                context: "eigentuemer" as const,
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#14B8A6" opacity="0.1" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#14B8A6" strokeWidth="1.5" />
                    <rect x="30" y="29" width="20" height="24" rx="2" fill="#FFFFFF" stroke="#14B8A6" strokeWidth="1.5" />
                    <rect x="33" y="33" width="14" height="2" rx="1" fill="#14B8A6" opacity="0.5" />
                    <rect x="33" y="37" width="10" height="2" rx="1" fill="#14B8A6" opacity="0.5" />
                    <rect x="33" y="41" width="12" height="2" rx="1" fill="#14B8A6" opacity="0.5" />
                    <path d="M25,36 L32,36" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
                    <path d="M25,41 L32,41" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                ),
              },
            ].map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1
                }}
              >
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                  <CardContent className="p-6 text-center relative flex flex-col h-full">
                    <div className="mx-auto mb-5 h-[100px] w-[100px] flex items-center justify-center">
                      {entry.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{entry.description}</p>
                    {/* Kontext-Badge unten */}
                    <div className="flex justify-center mt-4 pt-4 border-t border-gray-100">
                      {entry.context === "weg" && (
                        <Badge
                          variant="outline"
                          className="px-2.5 py-1 text-[11px] font-medium bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20"
                        >
                          <Buildings className="h-3 w-3 mr-1" weight="duotone" />
                          WEG
                        </Badge>
                      )}
                      {entry.context === "eigentuemer" && (
                        <Badge
                          variant="outline"
                          className="px-2.5 py-1 text-[11px] font-medium bg-teal-500/10 text-teal-600 border-teal-500/20"
                        >
                          <House className="h-3 w-3 mr-1" weight="duotone" />
                          Eigentümer
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Kein Zwang zu einem bestimmten Einstieg – nutzen Sie genau die Services, die Sie heute brauchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 to-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-[clamp(32px,3.5vw,48px)] font-semibold mb-6 text-[#1A1A1A]"
              style={{ fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Starten Sie mit dem Service, den Sie heute brauchen
            </motion.h2>
            <motion.p
              className="text-[clamp(16px,1.8vw,20px)] text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Wegora wächst mit Ihren Anforderungen – nicht umgekehrt.
            </motion.p>
            <motion.p
              className="text-base text-muted-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Keine langfristigen Verpflichtungen. Keine versteckten Kosten. Nur die Services, die Sie wirklich nutzen.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <Link to="/angebot-weg">
                <Button size="lg" className="w-[300px] py-5 h-auto bg-[#2463eb] hover:bg-[#1d4ed8] hover:text-blue-50 text-white text-[15px] font-medium">
                  <Buildings className="mr-2 h-5 w-5 flex-shrink-0" weight="fill" />
                  Wegora für WEGs entdecken
                </Button>
              </Link>
              <Link to="/angebot-eigentuemer">
                <Button size="lg" className="w-[300px] py-5 h-auto bg-teal-500 hover:bg-teal-600 hover:text-teal-50 text-white text-[15px] font-medium">
                  <House className="mr-2 h-5 w-5 flex-shrink-0" weight="fill" />
                  Wegora für Eigentümer entdecken
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 pt-8 border-t border-muted-foreground/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground">
                Haben Sie Fragen? <Link to="/vision" className="text-[#2463eb] hover:underline">Erfahren Sie mehr über unsere Vision</Link> oder kontaktieren Sie uns direkt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
