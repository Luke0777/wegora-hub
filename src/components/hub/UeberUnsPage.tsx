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

      {/* Systemische Realität - Why Current System Struggles */}
      <section className="py-20 sm:py-28 bg-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Headline + Subline */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#1A1A1A]">
                Warum Verwaltung heute an ihre Grenzen stößt
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-[640px] mx-auto">
                Nicht durch fehlendes Engagement – sondern durch wachsende Komplexität.
              </p>
            </div>

            {/* 4 System-Realitäten als Card Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Card 1: Komplexität */}
              <Card className="border-2 border-gray-200/60 bg-gray-50/30 rounded-xl hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6">
                  {/* Icon + Headline */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 text-[#2463eb] flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,27.94,134l96,56a8,8,0,0,0,8.12,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#1A1A1A]">
                      Komplexität wächst schneller als Struktur
                    </h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>Mehr Vorgänge pro Objekt</li>
                    <li>Steigende regulatorische Anforderungen</li>
                    <li>Zunehmender Abstimmungsaufwand zwischen Beteiligten</li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-100">
                    → Verwaltung wird reaktiv statt steuernd.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Rollen */}
              <Card className="border-2 border-gray-200/60 bg-gray-50/30 rounded-xl hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6">
                  {/* Icon + Headline */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 text-[#2463eb] flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#1A1A1A]">
                      Verantwortung ohne klare Rollen
                    </h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>Entscheidungen verteilen sich auf viele Beteiligte</li>
                    <li>Zuständigkeiten wechseln je nach Thema</li>
                    <li>Wissen liegt bei Einzelpersonen</li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-100">
                    → Prozesse hängen von Menschen ab – nicht von Systemen.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Transparenz */}
              <Card className="border-2 border-gray-200/60 bg-gray-50/30 rounded-xl hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6">
                  {/* Icon + Headline */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 text-[#2463eb] flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#1A1A1A]">
                      Transparenz entsteht nur mit Aufwand
                    </h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>Informationen sind vorhanden, aber verteilt</li>
                    <li>Überblick erfordert aktives Nachfragen</li>
                    <li>Status und Kontext fehlen oft im Zusammenhang</li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-100">
                    → Überblick entsteht erst durch zusätzlichen Aufwand.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4: Zeit */}
              <Card className="border-2 border-gray-200/60 bg-gray-50/30 rounded-xl hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6">
                  {/* Icon + Headline */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 text-[#2463eb] flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#1A1A1A]">
                      Zeit fließt in Koordination
                    </h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>Abstimmungen dauern länger als die Umsetzung</li>
                    <li>Informationen müssen manuell gesammelt werden</li>
                    <li>Entscheidungen verzögern sich dadurch</li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-100">
                    → Verwaltung kostet Zeit – selbst mit Verwalter.
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* Bridge Text with decorative line */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              {/* Decorative accent line */}
              <div className="w-6 h-px bg-gray-300 mx-auto mb-8"></div>
              
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Verwaltung scheitert heute nicht an Menschen.<br />
                Sie scheitert an fehlenden, durchgängigen Strukturen.
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
