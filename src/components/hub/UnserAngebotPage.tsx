import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "@phosphor-icons/react";
import {
  ServiceFlowDiagram,
  ServiceWEGIllustration,
  ServiceAccountingIllustration,
  ServiceNebenkostenIllustration,
  ServiceNebenkostenCheckIllustration,
} from "./illustrations";
import { motion } from "framer-motion";

export function UnserAngebotPage() {
  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Wegora Versammlungen",
      description:
        "Versammlungen vorbereiten,\ndurchführen und dokumentieren —\nan einem Ort.",
      features: [
        "Einladungen & Tagesordnung",
        "Digitale Abstimmung",
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
        "Alle Finanzen Ihrer Gemeinschaft\nan einem Ort — strukturiert\nund nachvollziehbar.",
      features: [
        "Einnahmen & Ausgaben",
        "Abrechnungen erstellen",
        "Wirtschaftspläne",
      ],
      availability: ["Web-App"],
      color: "#10B981",
    },
    {
      id: "nebenkostenmanager",
      icon: ServiceNebenkostenIllustration,
      title: "Wegora NK Manager",
      description:
        "Nebenkostenabrechnungen erstellen\nund versenden — in wenigen\nSchritten erledigt.",
      features: [
        "Hausgeld importieren",
        "Abrechnung vorbereiten",
        "Digital versenden",
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
        "Verstehen, wohin Ihr Geld\nfließt — und wo Sie\nsparen können.",
      features: [
        "Kosten analysieren",
        "Einsparpotenziale finden",
        "Angebote vergleichen",
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
            {/* Label "Unser Angebot" (small, muted) */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(12px,1.2vw,14px)] font-medium" style={{ color: "hsl(var(--text-tertiary))" }}>
                Unser Angebot
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Was Wegora kann —<br />und was Sie davon nutzen
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Nicht alles muss sofort passieren.<br />
              Beginnen Sie mit einem Service. Erweitern Sie, wenn Sie bereit sind.
            </motion.p>

            {/* Central Illustration - caption belongs visually to graphic */}
            <motion.div
              className="pt-16 pb-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <ServiceFlowDiagram className="w-full max-w-[900px] h-auto mx-auto" />
            </motion.div>

            {/* Explanation BELOW graphic */}
            <motion.div
              className="max-w-[680px] mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Alle Services greifen auf dieselbe Basis zu.<br />
                Was Sie einmal erfassen, steht überall zur Verfügung —<br />
                ohne Doppelarbeit, ohne Widersprüche.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - clear section break from above */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Unsere Services im Detail
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Vier spezialisierte Anwendungen, entwickelt für spezifische Aufgaben in der Immobilienverwaltung.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const IllustrationComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.1
                  }}
                >
                  <Card
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
                      <CardDescription className="text-sm leading-relaxed whitespace-pre-line">
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
                          className="text-[10px] px-2 py-0.5 bg-weg-500/10 text-weg-500 border-weg-500/20"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modularity Section - Philosophical Message */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
                Kein Paket. Kein Zwang.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Die meisten Plattformen wollen, dass Sie alles nutzen — egal, ob Sie es brauchen. Das ist bequem für den Anbieter, aber teuer für Sie.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Wegora funktioniert anders: Sie wählen einen Service. Wenn er Ihnen hilft, bleibt er. Wenn Sie mehr brauchen, ist der nächste Service schon vorbereitet.
              </p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                Kein Wechselaufwand. Keine Doppelerfassung.<br />
                Nur das, was Sie heute brauchen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
