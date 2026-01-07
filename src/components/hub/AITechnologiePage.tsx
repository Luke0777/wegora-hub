import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Lock, Lightbulb, Gear } from "@phosphor-icons/react";
import { DataIntegrationIllustration } from "./illustrations";

export function AITechnologiePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-6" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              AI & Technologie
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-muted-foreground max-w-3xl mx-auto">
              Wie künstliche Intelligenz und moderne Technologie unsere Services intelligenter machen.
            </p>
          </div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              AI-gestützte Verwaltung
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
                color: "hsl(var(--weg-500))",
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
                color: "hsl(var(--owner-500))",
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

      {/* Integrierte Plattform-Architektur */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-semibold mb-6 text-[#1A1A1A]" style={{ fontWeight: 600 }}>
              Das Objekt im Zentrum
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Alle Services arbeiten mit derselben zentralen Datenbasis. Einmal erfassen, überall nutzen.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Objekte, Finanzdaten und Dokumente werden strukturiert erfasst und intelligent zwischen den Services synchronisiert.
            </p>
          </div>

          {/* Large Ecosystem Illustration */}
          <div className="max-w-4xl mx-auto mb-16">
            <DataIntegrationIllustration className="w-full h-auto" />
          </div>

          {/* How it works */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "1",
                  title: "Einmal erfassen",
                  desc: "Legen Sie Objekte, Eigentümer und Stammdaten zentral an – die Basis für alle Services.",
                  color: "#3182CE",
                },
                {
                  step: "2",
                  title: "Intelligent verknüpfen",
                  desc: "Alle Services greifen auf dieselbe Datenbasis zu. Keine Doppelungen, keine Inkonsistenzen.",
                  color: "hsl(var(--owner-500))",
                },
                {
                  step: "3",
                  title: "Automatisch aktualisieren",
                  desc: "Änderungen werden sofort in allen verbundenen Services verfügbar gemacht.",
                  color: "#8B5CF6",
                },
              ].map((item) => (
                <Card
                  key={item.step}
                  className="border-2 shadow-lg text-center"
                  style={{ borderColor: `${item.color}20` }}
                >
                  <CardHeader>
                    <div
                      className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <span className="text-2xl font-bold">{item.step}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-weg-500/5 rounded-xl border-2 border-weg-500/10">
                <h3 className="font-bold text-lg mb-3 text-weg-500">Ein einziges Login</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zugriff auf alle Services mit einem Account. Keine separaten Logins für verschiedene Tools.
                </p>
              </div>
              <div className="p-6 bg-owner-500/5 rounded-xl border-2 border-owner-500/10">
                <h3 className="font-bold text-lg mb-3 text-owner-500">Eine Datenquelle</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zentrale Verwaltung Ihrer Immobilien-Daten. Kein manuelles Übertragen zwischen Systemen.
                </p>
              </div>
            </div>
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

            <div className="grid sm:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Kontinuierliche Innovation
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Wir entwickeln unsere Technologie ständig weiter, um Ihnen die besten Lösungen zu bieten. Machine Learning, Natural Language Processing und fortschrittliche Datenanalyse sind nur einige der Bereiche, in denen wir aktiv forschen und entwickeln.
            </p>
            <div className="p-8 bg-gradient-to-r from-weg-500/10 to-[#10B981]/10 rounded-xl border-2 border-weg-500/20">
              <p className="text-sm text-foreground/80">
                <strong className="text-primary">Roadmap:</strong> Wir arbeiten kontinuierlich an neuen AI-Features, verbesserten Automatisierungen und smarteren Assistenten, um Ihre Verwaltungsarbeit noch effizienter zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
