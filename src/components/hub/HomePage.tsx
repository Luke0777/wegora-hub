import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, House, Users, ChartBar, UserCircle, CaretDown, WarningCircle, CheckCircle } from "@phosphor-icons/react";
import {
  HubHeroIllustration,
  AllInOneProblemsIllustration,
  WegoraModularIllustration,
  ServiceWEGIllustration,
  ServiceAccountingIllustration,
  ServiceNebenkostenIllustration,
  ServiceNebenkostenCheckIllustration,
} from "./illustrations";
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

  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Wegora Versammlungen",
      description: "Versammlungen digital durchführen und dokumentieren.",
      color: "#3182CE",
    },
    {
      id: "finanzen",
      icon: ServiceAccountingIllustration,
      title: "Wegora Finanzen",
      description: "Finanzen übersichtlich verwalten – pro Objekt.",
      color: "#10B981",
    },
    {
      id: "nebenkostenmanager",
      icon: ServiceNebenkostenIllustration,
      title: "Wegora NK Manager",
      description: "Nebenkosten erfassen und strukturieren.",
      color: "#8B5CF6",
    },
    {
      id: "kostenanalyse",
      icon: ServiceNebenkostenCheckIllustration,
      title: "Wegora Kostenanalyse",
      description: "Kostenpotenziale in Abrechnungen erkennen.",
      color: "#F97316",
    },
  ];

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
              Die Plattform zur Verwaltung Ihrer Immobilien
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ opacity: 0.6, color: "#1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Für kleine Wohnungseigentümergemeinschaften (WEGs), Selbstverwalter und kleine Immobilienverwaltungen – modular, verständlich und ohne komplexe All-in-One-Systeme.
            </motion.p>

            {/* Partner Microline */}
            <motion.p
              className="text-sm leading-relaxed max-w-2xl mx-auto text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              Für Verwaltungen: Eine Lösung für Eigentümer, die Sie nicht mehr aufnehmen können.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <Button
                size="lg"
                className="h-auto px-8 py-4 text-base font-medium rounded-xl bg-[#2463eb] hover:bg-[#1d4ed8] text-white transition-all duration-200"
                style={{ fontWeight: 500 }}
              >
                Jetzt registrieren
              </Button>
              <Link to="/unser-angebot">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base font-medium text-[#2463eb] hover:text-[#1d4ed8] hover:bg-[#2463eb]/10 transition-colors"
                >
                  Unsere Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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

      {/* Services Preview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Unsere Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Vier spezialisierte Anwendungen – einzeln nutzbar, gemeinsam stärker.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const IllustrationComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="border-2 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
                  style={{ borderColor: `${service.color}20` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.1
                  }}
                >
                  <div className="mx-auto mb-4 h-[120px] flex items-center justify-center">
                    <IllustrationComponent className="w-full max-w-[140px] h-auto" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/unser-angebot">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 h-auto border-[#2463eb] text-[#2463eb] hover:bg-[#2463eb] hover:text-white"
              >
                Alle Services entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Für wen ist Wegora gemacht? */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Für wen ist Wegora gemacht?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Entwickelt für reale Anforderungen in der Immobilienverwaltung.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: House,
                title: "Kleine WEGs",
                description: "Selbst organisieren statt teuer verwalten lassen",
                detail: "Transparente Prozesse für Eigentümer",
              },
              {
                icon: Users,
                title: "Selbstverwalter",
                description: "Weniger manuelle Arbeit",
                detail: "Strukturierte Abrechnung & Versammlungen",
              },
              {
                icon: ChartBar,
                title: "Kleine Verwaltungen",
                description: "Skalieren ohne neue Kunden aufnehmen zu müssen",
                detail: "Eigentümer digital entlasten",
              },
              {
                icon: UserCircle,
                title: "Private Vermieter",
                description: "Klarheit über Finanzen & Nebenkosten",
                detail: "Professionelle Abrechnungen erstellen",
              },
            ].map((userType, index) => {
              const Icon = userType.icon;
              return (
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
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <CardHeader className="px-4 sm:px-6">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg mb-2">
                        {userType.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <p className="text-sm text-foreground mb-2">{userType.description}</p>
                      <p className="text-xs text-muted-foreground">{userType.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem/Solution Comparison */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Warum Wegora?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Der Unterschied zwischen klassischen Verwaltungssystemen und unserem modularen Ansatz.
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <motion.div
            className="hidden md:block max-w-6xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              {/* Bestehende Lösungen */}
              <div className="flex gap-4 items-start">
                <div className="space-y-4 flex-shrink-0 w-[220px]">
                  <div>
                    <Badge
                      className="px-4 py-2 text-sm font-medium tracking-wide rounded-full"
                      style={{ backgroundColor: "#FEF3E2", color: "#9A5B2C" }}
                    >
                      Bestehende Lösungen
                    </Badge>
                    <p className="text-gray-600 text-sm font-semibold mt-2">
                      teuer und komplex
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    {["Sehr kostenintensiv", "Große All-in-One-Systeme", "Wenig flexibel bei Sonderfällen", "Aufwendig in Einrichtung"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <WarningCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground whitespace-nowrap">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center pt-2">
                  <AllInOneProblemsIllustration className="w-[270px] h-auto" />
                </div>
              </div>

              {/* Wegora Ansatz */}
              <div className="flex gap-4 items-start">
                <div className="space-y-4 flex-shrink-0 w-[220px]">
                  <div>
                    <Badge
                      className="px-4 py-2 text-sm font-medium tracking-wide rounded-full"
                      style={{ backgroundColor: "#E8F4FD", color: "#2D5F8B" }}
                    >
                      Wegora Ansatz
                    </Badge>
                    <p className="text-gray-600 text-sm font-semibold mt-2">
                      modular und effizient
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    {["Kosteneffizient & transparent", "Fokussierte Services", "Berücksichtigung von Edge Cases", "Einfache Nutzung"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground whitespace-nowrap">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center pt-4">
                  <WegoraModularIllustration className="w-[240px] h-auto" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Layout */}
          <motion.div
            className="md:hidden space-y-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="text-center">
                <Badge className="px-4 py-2 text-sm font-medium rounded-full" style={{ backgroundColor: "#FEF3E2", color: "#9A5B2C" }}>
                  Bestehende Lösungen
                </Badge>
              </div>
              <AllInOneProblemsIllustration className="w-full" />
              <div className="space-y-2 px-2">
                {["Sehr kostenintensiv", "Große All-in-One-Systeme", "Wenig flexibel"].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <WarningCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <Badge className="px-4 py-2 text-sm font-medium rounded-full" style={{ backgroundColor: "#E8F4FD", color: "#2D5F8B" }}>
                  Wegora Ansatz
                </Badge>
              </div>
              <WegoraModularIllustration className="w-full" />
              <div className="space-y-2 px-2">
                {["Kosteneffizient", "Fokussierte Services", "Einfache Nutzung"].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typische Einstiege mit Wegora */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Typische Einstiege mit Wegora
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexibel starten – Wegora passt sich Ihren Bedürfnissen an.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Start mit NK Manager",
                description: "Wir starten mit dem NK Manager und erweitern später.",
                color: "#8B5CF6",
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#8B5CF6" opacity="0.15" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
                    <rect x="30" y="29" width="20" height="24" rx="2" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
                    <rect x="33" y="33" width="14" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
                    <rect x="33" y="37" width="10" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
                    <rect x="33" y="41" width="12" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
                    <path d="M25,36 L32,36" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
                    <path d="M25,41 L32,41" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                ),
              },
              {
                title: "Nur Versammlungen",
                description: "Wir nutzen nur Versammlungen – alles andere macht die WEG selbst.",
                color: "#3182CE",
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#3182CE" opacity="0.15" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
                    <g transform="translate(40, 40)">
                      <circle cx="-7" cy="-4" r="3.5" fill="none" stroke="#3182CE" strokeWidth="1.5" />
                      <path d="M-11,4 Q-7,1 -3,4" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <circle cx="0" cy="-5" r="4" fill="none" stroke="#3182CE" strokeWidth="1.5" />
                      <path d="M-5,5 Q0,2 5,5" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <circle cx="7" cy="-4" r="3.5" fill="none" stroke="#3182CE" strokeWidth="1.5" />
                      <path d="M3,4 Q7,1 11,4" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </g>
                  </svg>
                ),
              },
              {
                title: "Finanzen zuerst",
                description: "Wir beginnen mit Finanzen und binden später Nebenkosten an.",
                color: "#10B981",
                icon: (
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <circle cx="40" cy="40" r="35" fill="#10B981" opacity="0.15" />
                    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                    <rect x="27" y="37" width="5" height="10" rx="1" fill="#10B981" />
                    <rect x="34" y="32" width="5" height="15" rx="1" fill="#10B981" />
                    <rect x="41" y="34" width="5" height="13" rx="1" fill="#10B981" />
                    <rect x="48" y="30" width="5" height="17" rx="1" fill="#10B981" />
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
                <Card className="border-2 border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-6 h-[100px] w-[100px] flex items-center justify-center">
                      {entry.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
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
              <Button size="lg" className="px-10 py-6 h-auto bg-[#2463eb] hover:bg-[#1d4ed8] text-white text-base font-medium">
                Jetzt registrieren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/unser-angebot">
                <Button size="lg" variant="outline" className="px-10 py-6 h-auto border-[#2463eb] text-[#2463eb] hover:bg-[#2463eb] hover:text-white text-base">
                  Alle Services ansehen
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
