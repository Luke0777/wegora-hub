import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

export function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(36px,4vw,56px)] font-semibold tracking-tight text-[#1A1A1A] mb-6" style={{ fontWeight: 600, lineHeight: "1.15" }}>
              Kontakt
            </h1>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-muted-foreground max-w-3xl mx-auto">
              Haben Sie Fragen? Wir sind für Sie da.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2463eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeSimple className="h-6 w-6 text-[#2463eb]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a href="mailto:info@wegora.de" className="text-[#2463eb] hover:underline">
                        info@wegora.de
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Wir antworten in der Regel innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2463eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#2463eb]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-foreground">+49 (0) 123 456789</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mo-Fr: 9:00 - 17:00 Uhr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2463eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#2463eb]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-foreground">
                        Wegora GmbH<br />
                        Musterstraße 123<br />
                        12345 Berlin<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
                <Card className="border-2 border-muted shadow-lg">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent"
                          placeholder="Ihr Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent"
                          placeholder="ihre@email.de"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Betreff
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent"
                          placeholder="Worum geht es?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463eb] focus:border-transparent resize-none"
                          placeholder="Ihre Nachricht an uns..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#2463eb] hover:bg-[#1d4ed8] text-white"
                      >
                        <EnvelopeSimple className="mr-2 h-5 w-5" />
                        Nachricht senden
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Häufige Fragen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Bevor Sie uns kontaktieren, schauen Sie sich unsere häufig gestellten Fragen an.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  question: "Wie kann ich Wegora testen?",
                  answer: "Registrieren Sie sich einfach kostenlos und testen Sie alle Services.",
                },
                {
                  question: "Gibt es eine Demo?",
                  answer: "Ja, kontaktieren Sie uns für eine persönliche Demo-Session.",
                },
                {
                  question: "Welche Preise bietet Wegora?",
                  answer: "Unsere Preise sind transparent und modular – Sie zahlen nur, was Sie nutzen.",
                },
                {
                  question: "Ist technischer Support verfügbar?",
                  answer: "Ja, unser Support-Team ist per E-Mail und Telefon erreichbar.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-2 border-muted shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
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
