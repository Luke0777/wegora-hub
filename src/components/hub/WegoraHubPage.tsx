import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Users,
  ArrowRight,
  House,
  ChartBar,
  Receipt,
  Brain,
  CheckCircle,
  Database,
  UserCircle,
} from "@phosphor-icons/react";
import { WegoraLogo } from "@/components/ui/WegoraLogo";
import {
  HubHeroIllustration,
  AllInOneProblemsIllustration,
  WegoraModularIllustration,
  ServiceAccountingIllustration,
  ServiceNebenkostenIllustration,
  ServiceNebenkostenCheckIllustration,
  ServiceWEGIllustration,
  DataIntegrationIllustration,
} from "./illustrations";

export function WegoraHubPage() {
  // Scroll affordance state
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [compareVisible, setCompareVisible] = useState(false);
  const compareRef = useRef<HTMLElement>(null);

  // Scroll detection for hiding scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Progressive reveal for compare section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setCompareVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (compareRef.current) {
      observer.observe(compareRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Wegora Versammlungen",
      description:
        "Versammlungen vorbereiten, digital durchführen und sauber dokumentieren.",
      features: [
        "Tagesordnung erstellen",
        "Digitale Abstimmungen",
        "Protokoll erstellen",
        "Einladungen versenden",
      ],
      availability: ["Web-App"],
      color: "#3182CE",
    },
    {
      id: "finanzen",
      icon: ServiceAccountingIllustration,
      title: "Wegora Finanzen",
      description:
        "Finanzen übersichtlich verwalten – pro Objekt, jederzeit nachvollziehbar.",
      features: [
        "Buchungen & Abrechnungen",
        "Wirtschaftspläne",
        "Hausgeldabrechnungen",
        "Finanzdaten pro Objekt",
      ],
      availability: ["Web-App"],
      color: "#10B981",
    },
    {
      id: "nebenkostenmanager",
      icon: ServiceNebenkostenIllustration,
      title: "Wegora NK Manager",
      description:
        "Nebenkosten erfassen, strukturieren und für Abrechnungen vorbereiten.",
      features: [
        "Kosten verwalten",
        "Belege zuordnen",
        "Verteilung vorbereiten",
        "Übersicht pro Zeitraum",
      ],
      availability: ["Mobile App", "Web-App (bald)"],
      recommended: true,
      color: "#8B5CF6",
    },
    {
      id: "kostenanalyse",
      icon: ServiceNebenkostenCheckIllustration,
      title: "Wegora Kostenanalyse",
      description:
        "Kostenpotenziale in Abrechnungen erkennen – mit passenden Alternativen.",
      features: [
        "Kosten einordnen",
        "Potenziale erkennen",
        "Angebote vergleichen",
        "Wirtschaftsplan optimieren",
      ],
      availability: ["Mobile App"],
      color: "#F97316",
    },
  ];


  const userTypes = [
    {
      icon: House,
      title: "Vermieter",
      description: "Nutzen Sie Abrechnung und Dokumenten-Services",
    },
    {
      icon: Users,
      title: "Selbstverwalter",
      description: "Führen Sie Versammlungen digital durch",
    },
    {
      icon: ChartBar,
      title: "Hausverwaltungen",
      description: "Nutzen Sie Accounting & WEG-Services",
    },
    {
      icon: UserCircle,
      title: "Mieter",
      description: "Prüfen und verstehen Sie Ihre Abrechnungen",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
          <div className="flex items-center h-full w-full gap-8">
            <WegoraLogo variant="horizontal" size="md" />
            <nav className="flex-1 flex items-center gap-2">
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">Start</Link>
              <Link to="/ueber-uns" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">Über uns</Link>
              <Link to="/vision" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">Vision</Link>
              <Link to="/unser-angebot" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">Unser Angebot</Link>
              <Link to="/services" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">Services</Link>
              <Link to="/ai-technologie" className="text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md">AI & Technologie</Link>
            </nav>
            <Link to="/kontakt">
              <Button
                size="sm"
                className="h-9 text-sm px-4"
              >
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. Hero Section - Apple-Inspired */}
      <section
        id="start"
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] grid items-center relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Centered Content */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Brand Name */}
            <div className="mb-4 animate-fade-in"
              style={{
                animationDelay: "0s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-weg-500 tracking-wide" style={{ fontWeight: 600 }}>
                Wegora
              </p>
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A] animate-fade-in"
              style={{
                lineHeight: "1.15",
                fontWeight: 600,
                animationDelay: "0.1s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Die Plattform zur Verwaltung Ihrer Immobilien
            </h1>

            {/* Subheadline */}
            <p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto animate-fade-in"
              style={{
                opacity: 0.6,
                color: "#1A1A1A",
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              Für kleine Wohnungseigentümergemeinschaften (WEGs), Selbstverwalter und kleine Immobilienverwaltungen – modular und ohne komplexe All-in-One-Systeme.
            </p>

            {/* Partner Microline */}
            <p
              className="text-sm leading-relaxed max-w-2xl mx-auto animate-fade-in text-muted-foreground"
              style={{
                animationDelay: "0.4s",
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              Für Verwaltungen: Eine Lösung für Eigentümer, die Sie nicht mehr aufnehmen können.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="h-auto px-8 py-4 text-base font-medium rounded-xl bg-weg-500 hover:bg-weg-600 text-white transition-all duration-200"
                style={{ fontWeight: 500 }}
              >
                Jetzt registrieren
              </Button>
              <a
                href="#services"
                className="text-base font-medium text-weg-500 hover:text-weg-600 transition-colors flex items-center gap-1"
              >
                Unsere Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Illustration - Reduced size with more whitespace */}
            <div className="pt-12">
              <HubHeroIllustration className="w-full max-w-2xl h-auto mx-auto" />
            </div>
          </div>
        </div>

        {/* Scroll Affordance Chevron */}
        {showScrollIndicator && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-muted-foreground">
              <span className="text-xs mb-2 opacity-60">Mehr erfahren</span>
              <ArrowRight className="h-5 w-5 rotate-90 opacity-60" />
            </div>
          </div>
        )}

        {/* Apple-Style Animations */}
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in-scale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-fade-in-scale {
            animation: fade-in-scale 1s ease-out;
          }
        `}</style>
      </section>

      {/* 2. Services Section */}
      <section className="py-16 sm:py-24 bg-white" id="services">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Unsere Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Vier spezialisierte Anwendungen – einzeln nutzbar, gemeinsam stärker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const IllustrationComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col relative"
                  style={{ borderColor: `${service.color}20` }}
                >
                  {/* Empfohlener Einstieg Badge - positioned on top edge */}
                  {service.recommended && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <Badge
                        variant="outline"
                        className="text-[10px] px-3 py-1 bg-[#DDD6FE] text-[#7C3AED] border-[#C4B5FD] shadow-sm"
                      >
                        Empfohlener Einstieg
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-3">
                    {/* Illustration */}
                    <div className="mx-auto mb-6 h-[160px] flex items-center justify-center">
                      <IllustrationComponent className="w-full max-w-[180px] h-auto" />
                    </div>
                    
                    {/* Title - fixed height for alignment */}
                    <div className="min-h-[48px] flex items-center justify-center mb-3">
                      <CardTitle className="text-lg font-bold leading-tight tracking-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                    
                    {/* Description - directly under heading */}
                    <div className="min-h-[48px]">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col pt-0 pb-4">
                    {/* Features list - reduced spacing to description */}
                    <ul className="space-y-2 mb-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                            <CheckCircle
                              className="w-4 h-4"
                              style={{ color: service.color }}
                            />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Platform chips at bottom */}
                    <div className="flex flex-wrap gap-1.5 justify-center mt-auto pt-6">
                      {service.availability?.map((platform, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-[10px] px-2 py-0.5 bg-weg-500/10 text-weg-500 border-weg-500/20"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Platform Overview Section */}
      <section className="py-20 sm:py-28" id="unser-angebot">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-semibold mb-4 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
              Ein System. Mehrere Services.
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
              Starten Sie mit dem Service, den Sie heute brauchen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "End-to-End",
                desc: "Komplette Prozesse automatisiert",
              },
              {
                icon: Brain,
                title: "AI-Assistiert",
                desc: "Intelligente Unterstützung bei Entscheidungen",
              },
              {
                icon: ChartBar,
                title: "Qualität",
                desc: "Höchste Standards & Nachvollziehbarkeit",
              },
              {
                icon: Database,
                title: "Modular",
                desc: "Flexibel & skalierbar",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="px-4 sm:px-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <CardDescription className="text-xs sm:text-sm">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Problem/Solution Comparison */}
      <section
        ref={compareRef}
        id="compare"
        className={`py-16 sm:py-20 transition-all duration-300 ${
          compareVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Warum Wegora?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Der Unterschied zwischen klassischen Verwaltungssystemen und unserem modularen, nutzerfreundlichen Ansatz.
            </p>
          </div>

          {/* Desktop Layout - 2 Column: Bullets Left, Graphics Right */}
          <div className="hidden md:block max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              {/* Bestehende Lösungen */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left: Header + Bullets */}
                <div className="space-y-4">
                  <div>
                    <Badge
                      className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
                      style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
                    >
                      Bestehende Lösungen
                    </Badge>
                    <p className="text-sm font-semibold mt-2" style={{ color: "hsl(var(--text-secondary))" }}>
                      teuer und komplex
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {[
                      "Sehr kostenintensiv",
                      "Große All-in-One-Systeme",
                      "Wenig flexibel bei Sonderfällen",
                      "Aufwendig in Einrichtung",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Illustration */}
                <div className="flex items-start pt-12">
                  <AllInOneProblemsIllustration className="w-full h-auto" />
                </div>
              </div>

              {/* Wegora Ansatz */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left: Header + Bullets */}
                <div className="space-y-4">
                  <div>
                    <Badge
                      className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
                      style={{ backgroundColor: "#3182CE", color: "#FFFFFF" }}
                    >
                      Wegora Ansatz
                    </Badge>
                    <p className="text-sm font-semibold mt-2" style={{ color: "hsl(var(--text-secondary))" }}>
                      modular und effizient
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {[
                      "Kosteneffizient & transparent",
                      "Fokussierte Services",
                      "Berücksichtigung von Edge Cases",
                      "Einfache Nutzung",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <div className="w-2 h-2 bg-weg-500 rounded-full mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Illustration */}
                <div className="flex items-start pt-12">
                  <WegoraModularIllustration className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-12 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="text-center">
                <Badge
                  className="px-4 py-2 text-sm font-bold uppercase rounded-full"
                  style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
                >
                  Bestehende Lösungen
                </Badge>
              </div>
              <AllInOneProblemsIllustration className="w-full" />
              <ul className="space-y-3 px-2">
                {[
                  "Sehr kostenintensiv",
                  "Große All-in-One-Systeme",
                  "Wenig flexibel",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <Badge
                  className="px-4 py-2 text-sm font-bold uppercase rounded-full"
                  style={{ backgroundColor: "#3182CE", color: "#FFFFFF" }}
                >
                  Wegora Ansatz
                </Badge>
              </div>
              <WegoraModularIllustration className="w-full" />
              <ul className="space-y-3 px-2">
                {[
                  "Kosteneffizient",
                  "Fokussierte Services",
                  "Einfache Nutzung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-weg-500 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Platform Logic Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ein Konto. Ein Objekt. Mehrere Services.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Objekte, Finanzdaten und Dokumente werden einmal strukturiert
              erfasst und können in verschiedenen Services weiterverwendet
              werden.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <DataIntegrationIllustration className="w-full h-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Einmal erfassen",
                desc: "Legen Sie Objekte und Daten zentral an",
              },
              {
                step: "2",
                title: "Überall nutzen",
                desc: "Alle Services greifen auf dieselbe Datenbasis zu",
              },
              {
                step: "3",
                title: "Immer aktuell",
                desc: "Änderungen sind sofort in allen Services verfügbar",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="text-center border-0 shadow-lg"
              >
                <CardHeader>
                  <div
                    className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#3182CE20", color: "#3182CE" }}
                  >
                    <span className="text-xl font-bold">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. User Types Section */}
      <section className="py-16 sm:py-24 bg-white" id="ueber-uns">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Für wen ist Wegora?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Unterschiedliche Nutzer – ein System
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {userTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="px-4 sm:px-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <CardDescription className="text-xs sm:text-sm">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. AI & Technologie Section (Placeholder) */}
      <section className="py-16 sm:py-24" id="ai-technologie">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              AI & Technologie
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Erfahren Sie mehr über die Technologie hinter Wegora und wie künstliche Intelligenz unsere Services unterstützt.
            </p>
            <div className="p-8 bg-muted/30 rounded-xl border-2 border-dashed border-muted-foreground/20">
              <p className="text-sm text-muted-foreground italic">
                Dieser Bereich wird in Kürze mit detaillierten Informationen über unsere AI-Features und technische Architektur ergänzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Vision & CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30" id="vision">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Unsere Vision
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4">
              Wegora entwickelt Software, die Immobilienverwaltung vereinfacht und optimiert.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Unser Ziel: Prozesse transparenter machen, Nutzer dort unterstützen, wo Verwaltung heute unnötig kompliziert ist, und digitale Werkzeuge bieten, die helfen – nicht überfordern.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                "Weniger Aufwand",
                "Geringere Kosten",
                "Höhere Qualität",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-white shadow-md border-2 border-primary/20"
                >
                  <p className="font-semibold text-primary">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-muted">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Starte jetzt deine erste digitale Eigentümerversammlung
              </h3>
              <Button
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto bg-weg-500 hover:bg-weg-600 text-white"
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Versammlung starten
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
