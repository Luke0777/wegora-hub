import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Brain, Database } from "@phosphor-icons/react";
import {
  ServiceFlowDiagram,
  ServiceWEGIllustration,
  ServiceAccountingIllustration,
  ServiceNebenkostenIllustration,
  ServiceNebenkostenCheckIllustration,
} from "./illustrations";

export function UnserAngebotPage() {
  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Wegora Versammlungen",
      description:
        "Versammlungen vorbereiten, durchführen, dokumentieren und digital versenden.",
      features: [
        "Einladungen versenden",
        "Tagesordnung vorbereiten",
        "Digital abstimmen",
        "Protokolle erstellen",
      ],
      availability: ["Web-App"],
      color: "#3182CE",
    },
    {
      id: "finanzen",
      icon: ServiceAccountingIllustration,
      title: "Wegora Finanzen",
      description:
        "Finanzen übersichtlich verwalten – klar strukturiert pro Objekt und Gemeinschaft.",
      features: [
        "Einnahmen überblicken",
        "Ausgaben kontrollieren",
        "Abrechnungen erstellen",
        "Wirtschaftspläne entwerfen",
      ],
      availability: ["Web-App"],
      color: "#10B981",
    },
    {
      id: "nebenkostenmanager",
      icon: ServiceNebenkostenIllustration,
      title: "Wegora NK Manager",
      description:
        "Nebenkostenabrechnungen in wenigen Schritten erstellen und versenden.",
      features: [
        "Hausgeld hochladen",
        "Kostenpunkte bestätigen",
        "NK-Abrechnung vorbereiten",
        "NK-Abrechnung versenden",
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
        "Kosten verstehen, Einsparpotenziale erkennen und fundiert entscheiden.",
      features: [
        "Kosten analysieren",
        "Potenziale erkennen",
        "Angebote vergleichen",
        "Planung optimieren",
      ],
      availability: ["Mobile App"],
      color: "#F97316",
    },
  ];

  return (
    <>
      {/* Hero Section - Aligned with HomePage */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-[34px]">
            {/* Label "Unser Angebot" (small, not dominant) */}
            <div className="mb-4">
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
                Unser Angebot
              </p>
            </div>

            {/* Main Headline - matches Home H1 exactly */}
            <h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
            >
              Ein Objekt. Alles im Griff.
            </h1>

            {/* Subline - matches Home subline exactly */}
            <p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ opacity: 0.6, color: "#1A1A1A" }}
            >
              Alle Services greifen ineinander – für weniger Aufwand im Alltag und volle Kontrolle über Ihr Objekt.
            </p>

            {/* Central Illustration - caption belongs visually to graphic */}
            <div className="pt-16 pb-7">
              <ServiceFlowDiagram className="w-full max-w-[900px] h-auto mx-auto" />
            </div>

            {/* Explanation BELOW graphic */}
            <div className="max-w-[680px] mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Alle Services greifen auf dasselbe zentrale Objekt zu. Stammdaten, Eigentümer und Einheiten werden einmal erfasst und stehen für Finanzen, Versammlungen, Nebenkosten und Auswertungen jederzeit zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - clear section break from above */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Unsere Services im Detail
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Vier spezialisierte Anwendungen, entwickelt für spezifische Aufgaben in der Immobilienverwaltung.
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
                  {/* Empfohlener Einstieg Badge */}
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
                    
                    {/* Title */}
                    <div className="min-h-[48px] flex items-center justify-center mb-3">
                      <CardTitle className="text-lg font-bold leading-tight tracking-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                    
                    {/* Description */}
                    <div className="min-h-[48px]">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col pt-0 pb-4">
                    {/* Features list */}
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
                    
                    {/* Platform chips */}
                    <div className="flex flex-wrap gap-1.5 justify-center mt-auto pt-6">
                      {service.availability?.map((platform, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-[10px] px-2 py-0.5 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20"
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

      {/* Modularity & Interplay */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Modularität & Zusammenspiel
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Jeder Service ist eigenständig nutzbar. Gemeinsam wachsen sie mit Ihren Anforderungen.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <Card className="border-2 border-[#2463eb]/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#2463eb]/10 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-[#2463eb]" />
                    </div>
                    Einzeln stark
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#2463eb] flex-shrink-0 mt-0.5" />
                      <span>Nutzen Sie nur, was Sie brauchen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#2463eb] flex-shrink-0 mt-0.5" />
                      <span>Keine Verpflichtung zu großen Paketen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#2463eb] flex-shrink-0 mt-0.5" />
                      <span>Einfacher Einstieg, überschaubare Kosten</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#10B981]/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-[#10B981]" />
                    </div>
                    Zusammen stärker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Services arbeiten nahtlos zusammen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>System wächst mit Ihren Anforderungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Einmal erfasst, überall verfügbar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
