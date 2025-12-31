import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Brain, Lock, Lightbulb, Gear, CheckCircle, ChartBar, Database } from "@phosphor-icons/react";

export function VisionPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-6" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              Unsere Vision
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-muted-foreground max-w-3xl mx-auto">
              Software entwickeln, die Immobilienverwaltung vereinfacht und optimiert.
            </p>
          </div>
        </div>
      </section>

      {/* Main Vision Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Immobilienverwaltung neu gedacht
              </h2>
              
              <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
                Wegora entwickelt Software, die Immobilienverwaltung vereinfacht und optimiert. Unser Ziel ist es, Prozesse transparenter zu machen, Nutzer dort zu unterstützen, wo Verwaltung heute unnötig kompliziert ist, und digitale Werkzeuge zu bieten, die helfen – nicht überfordern.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Wir glauben, dass moderne Verwaltungssoftware nicht komplex und teuer sein muss. Stattdessen setzen wir auf einen modularen Ansatz: Nutzer wählen genau die Services aus, die sie benötigen – ohne überflüssige Funktionen bezahlen zu müssen.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 my-12">
                {[
                  {
                    title: "Weniger Aufwand",
                    description: "Automatisierung wiederkehrender Prozesse spart Zeit und reduziert Fehler.",
                  },
                  {
                    title: "Geringere Kosten",
                    description: "Modulare Services bedeuten faire Preise – Sie zahlen nur, was Sie nutzen.",
                  },
                  {
                    title: "Höhere Qualität",
                    description: "Fokussierte Lösungen statt überfrachteter All-in-One-Systeme.",
                  },
                ].map((benefit, i) => (
                  <Card key={i} className="border-2 border-primary/20 shadow-md">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-lg text-primary mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Unsere Mission
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
              Wir entwickeln intelligente, nutzerfreundliche Software für kleine und mittlere Wohnungseigentümergemeinschaften, Selbstverwalter und kleine Hausverwaltungen. Unser Fokus liegt auf Zugänglichkeit, Transparenz und echter Mehrwert.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="border-2 border-[#2463eb]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#2463eb]">
                    Für unsere Nutzer
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2463eb] mt-1">•</span>
                      <span>Software, die tatsächlich hilft – nicht zusätzlichen Aufwand schafft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2463eb] mt-1">•</span>
                      <span>Transparente Prozesse und nachvollziehbare Ergebnisse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2463eb] mt-1">•</span>
                      <span>Faire Preisgestaltung ohne versteckte Kosten</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#10B981]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#10B981]">
                    Für die Branche
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-1">•</span>
                      <span>Moderne Standards für digitale Immobilienverwaltung setzen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-1">•</span>
                      <span>Innovation durch AI und intelligente Automatisierung vorantreiben</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-1">•</span>
                      <span>Offene, interoperable Systeme statt isolierter Silos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ein System. Mehrere Services. */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-semibold mb-4 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
              Ein System. Mehrere Services.
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.6, color: "#1A1A1A" }}>
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

      {/* AI & Technology Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              AI & Technologie
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Künstliche Intelligenz unterstützt Sie bei komplexen Aufgaben und macht Verwaltungsprozesse effizienter und präziser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Intelligente Dokumentenanalyse",
                description: "Automatische Erkennung und Kategorisierung von Dokumenten, Rechnungen und Verträgen.",
                features: [
                  "OCR-Texterkennung",
                  "Automatische Datenbelegung",
                  "Plausibilitätsprüfungen",
                ],
                color: "#2463eb",
              },
              {
                icon: Lightbulb,
                title: "Smarte Empfehlungen",
                description: "AI-basierte Vorschläge für Kostenoptimierung und Prozessverbesserungen.",
                features: [
                  "Kostenpotenziale identifizieren",
                  "Vergleich mit Marktpreisen",
                  "Optimierungsvorschläge",
                ],
                color: "#F97316",
              },
              {
                icon: Gear,
                title: "Prozessautomatisierung",
                description: "Wiederkehrende Aufgaben werden intelligent automatisiert und überwacht.",
                features: [
                  "Automatische Workflows",
                  "Fehlerprävention",
                  "Zeitersparnis",
                ],
                color: "#10B981",
              },
              {
                icon: Lock,
                title: "Datensicherheit",
                description: "Höchste Sicherheitsstandards für Ihre sensiblen Verwaltungsdaten.",
                features: [
                  "Ende-zu-Ende-Verschlüsselung",
                  "DSGVO-konform",
                  "Sichere Cloud-Infrastruktur",
                ],
                color: "#8B5CF6",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-shadow" style={{ borderColor: `${feature.color}20` }}>
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: feature.color }} />
                      </div>
                      <CardTitle className="text-xl leading-tight pt-2">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span style={{ color: feature.color }} className="mt-1">✓</span>
                          <span>{item}</span>
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

      {/* Technical Architecture */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Unsere technische Architektur
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed mb-12">
              Modernste Technologien für Zuverlässigkeit, Skalierbarkeit und Performance.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Cloud-Native",
                  points: [
                    "Skalierbare Infrastruktur",
                    "99,9% Verfügbarkeit",
                    "Automatische Backups",
                  ],
                },
                {
                  title: "API-First",
                  points: [
                    "Offene Schnittstellen",
                    "Integration mit Drittsystemen",
                    "Flexibilität & Erweiterbarkeit",
                  ],
                },
                {
                  title: "Modern Stack",
                  points: [
                    "React & TypeScript",
                    "Node.js Backend",
                    "PostgreSQL Datenbanken",
                  ],
                },
              ].map((tech, index) => (
                <Card key={index} className="border-2 border-primary/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 text-primary">
                      {tech.title}
                    </h3>
                    <ul className="space-y-2">
                      {tech.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-r from-[#2463eb]/10 to-[#10B981]/10 rounded-xl border-2 border-[#2463eb]/20">
              <p className="text-sm text-foreground/80">
                <strong className="text-primary">Kontinuierliche Innovation:</strong> Wir arbeiten kontinuierlich an neuen AI-Features, verbesserten Automatisierungen und smarteren Assistenten, um Ihre Verwaltungsarbeit noch effizienter zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Teil unserer Vision werden
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Starten Sie heute mit Wegora und erleben Sie, wie moderne Immobilienverwaltung funktionieren sollte.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 h-auto bg-[#2463eb] hover:bg-[#1d4ed8] text-white"
            >
              <FileText className="mr-2 h-5 w-5" />
              Jetzt starten
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
