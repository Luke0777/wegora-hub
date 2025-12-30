import { useState, useEffect, useRef } from "react";
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
      id: "weg",
      icon: ServiceWEGIllustration,
      title: "WEG-Versammlungen",
      description:
        "Digitale Vorbereitung, Live-Abstimmungen und automatische Protokolle für Eigentümerversammlungen.",
      features: [
        "Tagesordnung erstellen",
        "Digitale Abstimmungen",
        "Automatisches Protokoll",
        "Einladungsversand",
      ],
      color: "#3182CE",
    },
    {
      id: "accounting",
      icon: ServiceAccountingIllustration,
      title: "Accounting & Immobilienfinanzen",
      description:
        "Buchhaltung, Wirtschaftspläne und Hausgeldabrechnungen für Verwalter und Selbstverwalter.",
      features: [
        "Buchungen & Abrechnungen",
        "Wirtschaftspläne erstellen",
        "Hausgeldabrechnungen",
        "Strukturierte Finanzdaten",
      ],
      color: "#10B981",
    },
    {
      id: "nebenkosten",
      icon: ServiceNebenkostenIllustration,
      title: "Nebenkosten & Dokumenten-Intelligenz",
      description:
        "AI-gestützte Analyse von Abrechnungen mit automatischer Klassifizierung und Plausibilitätsprüfung.",
      features: [
        "AI-Dokumentenanalyse",
        "Umlagefähigkeit prüfen",
        "Plausibilitätschecks",
        "Transparenz für Mieter",
      ],
      color: "#8B5CF6",
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
      {/* Simple Header for standalone version */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-lg rounded-lg">
          <div className="flex items-center h-full w-full">
            <WegoraLogo variant="horizontal" size="md" />
            <div className="flex-1"></div>
            <Button
              size="sm"
              className="h-9 text-sm px-4"
            >
              Kontakt
            </Button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section
        id="hero"
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] grid items-center relative"
      >
        <div
          className="max-w-[clamp(1200px,90vw,1440px)] mx-auto grid items-center px-[clamp(16px,4vw,48px)]"
          style={
            {
              gridTemplateColumns: "minmax(620px, 740px) 1fr",
              columnGap: "clamp(48px, 6vw, 96px)",
            } as React.CSSProperties
          }
        >
          {/* Left Column - Text Content */}
          <div>
            <h1
              className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 lg:mb-10 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={
                {
                  maxWidth: "none",
                  wordBreak: "normal",
                  overflowWrap: "normal",
                  hyphens: "none",
                  lineHeight: "1.2",
                } as React.CSSProperties
              }
            >
              Eigentümerversammlungen selbst durchführen – digital, einfach,
              transparent
            </h1>

            <div className="hero-support text-left space-y-4 lg:space-y-5">
              <p className="text-base sm:text-lg text-foreground leading-[1.6] mt-4 max-w-[60ch]">
                Für Selbstverwaltungen und kleine Hausverwaltungen: Einladungen
                verschicken, Live-Abstimmungen durchführen und Protokolle
                automatisch erstellen – alles in einem Tool.
              </p>

              <div className="flex justify-start items-center mt-6">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Versammlung starten
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Speziell entwickelt für Selbstverwaltungen und kleine
                Hausverwaltungen
              </p>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="order-first lg:order-last">
            <HubHeroIllustration className="w-full h-64 sm:h-80 lg:h-96" />
          </div>
        </div>

        {/* Scroll Affordance Chevron */}
        {showScrollIndicator && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-pulse">
            <div className="flex flex-col items-center text-muted-foreground">
              <span className="text-xs mb-2 opacity-60">Mehr erfahren</span>
              <ArrowRight className="h-5 w-5 rotate-90 opacity-60" />
            </div>
          </div>
        )}

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 1439px) {
            #hero > div {
              grid-template-columns: minmax(600px, 680px) 1fr !important;
            }
          }
          @media (max-width: 1023px) {
            #hero > div {
              grid-template-columns: minmax(520px, 1fr) minmax(0, 1fr) !important;
            }
          }
          @media (max-width: 767px) {
            #hero > div {
              grid-template-columns: 1fr !important;
              row-gap: 24px !important;
            }
          }
        `}</style>
      </section>

      {/* 2. Product Vision Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Die Plattform für automatisierte und AI-assistierte
              Immobilienprozesse
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              WEGORA entwickelt sich zur AI-assistierten Plattform für zentrale
              Prozesse der Immobilienverwaltung. Unser Fokus liegt auf
              End-to-End Automatisierung, hoher Qualität und
              Nachvollziehbarkeit – ohne überladene All-in-One-Systeme.
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

      {/* 3. Problem/Solution Comparison */}
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
              Warum WEGORA?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Der Unterschied zwischen teuren All-in-One-Systemen und unserem
              fokussierten, modularen Ansatz.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {/* Bestehende Lösungen */}
              <div className="space-y-6">
                <div className="text-center">
                  <Badge
                    className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
                    style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
                  >
                    Bestehende Lösungen
                  </Badge>
                  <p className="text-gray-600 text-sm font-semibold mt-2">
                    teuer und komplex
                  </p>
                </div>

                <AllInOneProblemsIllustration className="w-full max-w-sm mx-auto" />

                <ul className="space-y-3">
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

              {/* WEGORA Ansatz */}
              <div className="space-y-6">
                <div className="text-center">
                  <Badge
                    className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
                    style={{ backgroundColor: "#3182CE", color: "#FFFFFF" }}
                  >
                    WEGORA Ansatz
                  </Badge>
                  <p className="text-gray-600 text-sm font-semibold mt-2">
                    modular und effizient
                  </p>
                </div>

                <WegoraModularIllustration className="w-full max-w-sm mx-auto" />

                <ul className="space-y-3">
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                  WEGORA Ansatz
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Unsere Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Drei spezialisierte Services, die zusammenarbeiten – jeder für
              sich nutzbar, gemeinsam noch stärker.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const IllustrationComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: `${service.color}20` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <IllustrationComponent className="w-full max-w-[200px] h-auto" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-foreground"
                        >
                          <CheckCircle
                            className="h-4 w-4 flex-shrink-0 mt-0.5"
                            style={{ color: service.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Für wen ist WEGORA?
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

      {/* 7. Vision & CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Unsere Vision
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4">
              WEGORA entwickelt sich zur AI-assistierten Plattform für zentrale
              Prozesse der Immobilienverwaltung.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Wir fokussieren uns bewusst auf klar definierte Services statt
              auf überladene All-in-One-Systeme. Unser Ziel: Immobilienprozesse
              End-to-End zu automatisieren, AI dort einzusetzen, wo sie echte
              Entscheidungen unterstützt, und Komplexität für Nutzer zu
              reduzieren.
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
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto bg-blue-600 hover:bg-blue-700 text-white"
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
