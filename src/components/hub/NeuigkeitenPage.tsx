import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function NeuigkeitenPage() {
  const news = [
    {
      date: "Dezember 2024",
      title: "Wegora NK Manager jetzt verfügbar",
      category: "Produkt-Update",
      description: "Der Wegora NK Manager ist jetzt als Mobile App verfügbar. Erfassen Sie Nebenkosten unterwegs und bereiten Sie alles für Ihre Abrechnungen vor.",
      badge: "Neu",
      badgeColor: "#10B981",
    },
    {
      date: "November 2024",
      title: "AI-gestützte Dokumenten-Analyse",
      category: "Feature",
      description: "Unsere neue AI-Funktion erkennt automatisch Rechnungen und ordnet sie den richtigen Kategorien zu. Sparen Sie Zeit bei der Dateneingabe.",
      badge: "Beta",
      badgeColor: "#2463eb",
    },
    {
      date: "Oktober 2024",
      title: "Wegora Versammlungen: Digitale Abstimmungen",
      category: "Produkt-Update",
      description: "Führen Sie Abstimmungen digital durch – mit rechtssicherer Dokumentation und automatischer Protokollerstellung.",
      badge: "Update",
      badgeColor: "#8B5CF6",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-6" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              Neuigkeiten
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-muted-foreground max-w-3xl mx-auto">
              Die neuesten Updates, Features und Entwicklungen bei Wegora.
            </p>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item, index) => (
              <Card key={index} className="border-2 border-muted shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          className="text-xs px-3 py-1"
                          style={{ backgroundColor: item.badgeColor, color: "#FFFFFF" }}
                        >
                          {item.badge}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">{item.category}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Was kommt als Nächstes?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Wir arbeiten kontinuierlich an neuen Features und Verbesserungen. Bleiben Sie auf dem Laufenden!
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Wegora Finanzen",
                  status: "In Entwicklung",
                  desc: "Vollständige Finanzverwaltung pro Objekt",
                },
                {
                  title: "API-Schnittstellen",
                  status: "Geplant Q1 2025",
                  desc: "Integration mit Drittsystemen",
                },
                {
                  title: "Mobile Web-App",
                  status: "Geplant Q2 2025",
                  desc: "Alle Services auch mobil nutzbar",
                },
              ].map((item, index) => (
                <Card key={index} className="border-2 border-primary/20 shadow-md text-left">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {item.status}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
