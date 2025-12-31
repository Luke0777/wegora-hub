import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { House, Users, ChartBar, UserCircle } from "@phosphor-icons/react";

export function UeberUnsPage() {
  const userTypes = [
    {
      icon: House,
      title: "Vermieter",
      description: "Nutzen Sie Abrechnung und Dokumenten-Services",
      details: "Perfekt für Eigentümer von Mietobjekten, die ihre Nebenkostenabrechnungen selbst erstellen und verwalten möchten.",
    },
    {
      icon: Users,
      title: "Selbstverwalter",
      description: "Führen Sie Versammlungen digital durch",
      details: "Ideal für WEGs, die ihre Verwaltung selbst in die Hand nehmen und dabei professionelle Tools nutzen wollen.",
    },
    {
      icon: ChartBar,
      title: "Hausverwaltungen",
      description: "Nutzen Sie Accounting & WEG-Services",
      details: "Effiziente Lösung für kleine bis mittlere Hausverwaltungen, die modernste Software-Tools einsetzen möchten.",
    },
    {
      icon: UserCircle,
      title: "Mieter",
      description: "Prüfen und verstehen Sie Ihre Abrechnungen",
      details: "Transparente Einsicht in Nebenkostenabrechnungen und einfache Nachvollziehbarkeit aller Positionen.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-6" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              Über uns
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-muted-foreground max-w-3xl mx-auto">
              Das Team hinter Wegora und unsere Vision für moderne Immobilienverwaltung.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Wer wir sind
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
                Wegora wurde gegründet, um Immobilienverwaltung einfacher, transparenter und effizienter zu machen. Wir sind ein Team aus Entwicklern, Produktdesignern und Branchenexperten, die gemeinsam an der Zukunft der Verwaltungssoftware arbeiten.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Unsere Erfahrung zeigt: Viele bestehende Lösungen sind entweder zu komplex und teuer – oder zu einfach und unflexibel. Wir wollen den Mittelweg gehen: professionelle Software, die sich an die Bedürfnisse der Nutzer anpasst, statt umgekehrt.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Mit einem modularen Ansatz, modernen Technologien und einem Fokus auf Nutzerfreundlichkeit schaffen wir Werkzeuge, die tatsächlich helfen – nicht zusätzliche Komplexität schaffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Für wen ist Wegora?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Unterschiedliche Nutzer – ein System
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
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

          {/* Detailed User Type Descriptions */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {userTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="border-2 border-primary/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">{type.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Unsere Werte
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
              Diese Prinzipien leiten unsere tägliche Arbeit und Produktentwicklung.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparenz",
                  description: "Klare Kommunikation, nachvollziehbare Prozesse, faire Preise – keine versteckten Kosten oder undurchsichtige Abläufe.",
                },
                {
                  title: "Nutzerzentrierung",
                  description: "Wir entwickeln Software für echte Menschen mit echten Problemen – nicht für abstrakte Anforderungslisten.",
                },
                {
                  title: "Innovation",
                  description: "Moderne Technologien und AI einsetzen, wo sie echten Mehrwert schaffen – nicht als Selbstzweck.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-2 border-primary/20 shadow-md text-left">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Für Verwaltungen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Sie sind eine Hausverwaltung und können keine neuen Kunden mehr aufnehmen? Wegora bietet Ihren Bestandskunden eine professionelle Lösung zur Selbstverwaltung – mit Ihrer Unterstützung als kompetenter Partner.
            </p>
            <div className="p-8 bg-gradient-to-r from-[#2463eb]/10 to-[#10B981]/10 rounded-xl border-2 border-[#2463eb]/20">
              <p className="text-sm text-foreground/80">
                <strong className="text-primary">Partnerschaft:</strong> Sprechen Sie uns an, wenn Sie Interesse an einer Zusammenarbeit haben. Gemeinsam können wir Ihren Kunden den besten Service bieten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
