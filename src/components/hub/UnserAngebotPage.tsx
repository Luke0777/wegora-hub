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
  HubHeroIllustration,
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

  return (
    <>
      {/* Merged Hero: Unser Angebot */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* H1 - Main Headline */}
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-3" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              Unser Angebot
            </h1>
            
            {/* H2 - Core Concept (bigger, more prominent) */}
            <h2 className="text-[clamp(28px,3vw,40px)] font-semibold text-[#1A1A1A] mb-4" style={{ fontWeight: 600, lineHeight: "1.3" }}>
              Ein Objekt. Mehrere Services.
            </h2>
            
            {/* Compact Intro (1-2 lines max) */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-[680px] mx-auto leading-relaxed mb-8 sm:mb-10">
              Alle Services greifen auf dasselbe zentrale Objekt zu – einmal erfasst, überall verfügbar.
            </p>
            
            {/* Central Illustration */}
            <div className="mb-10 sm:mb-12">
              <HubHeroIllustration className="w-full max-w-[620px] h-auto mx-auto" />
            </div>
            
            {/* Explanation BELOW graphic - Clean, no box */}
            <div className="max-w-[680px] mx-auto text-center">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                Das zentrale Objekt
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Stammdaten, Eigentümer und Einheiten werden einmal gepflegt – und stehen in Finanzen, NK Manager, Versammlungen und Kostenanalyse sofort bereit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
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
              Jeder Service ist eigenständig nutzbar. Gemeinsam bilden sie ein leistungsstarkes Ökosystem für Ihre Immobilienverwaltung.
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
                      <span>Nutzen Sie nur die Services, die Sie brauchen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#2463eb] flex-shrink-0 mt-0.5" />
                      <span>Keine Verpflichtung zu teuren All-in-One-Paketen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#2463eb] flex-shrink-0 mt-0.5" />
                      <span>Transparente, faire Preisgestaltung</span>
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
                      <span>Daten fließen nahtlos zwischen Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Erweitern Sie Ihr System bei Bedarf</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>Maximale Effizienz durch Integration</span>
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
