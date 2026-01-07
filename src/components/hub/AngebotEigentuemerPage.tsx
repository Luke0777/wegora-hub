import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "@phosphor-icons/react";
import {
  EigentuemerFlowDiagram,
  ServiceAccountingIllustration,
  ServiceNebenkostenIllustration,
  ServiceDokumenteIllustration,
} from "./illustrations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AngebotEigentuemerPage() {
  const services = [
    {
      id: "nebenkosten-manager",
      icon: ServiceNebenkostenIllustration,
      title: "Nebenkosten Manager",
      description:
        "Nebenkostenabrechnungen erstellen\nund versenden — ganz ohne\nSteuerberater.",
      features: [
        "Hausgeld importieren",
        "Abrechnung vorbereiten",
        "Digital versenden",
      ],
      availability: ["Mobile App", "Web-App"],
      badge: "Coming Soon",
      color: "#14B8A6",
    },
    {
      id: "dokumente",
      icon: ServiceDokumenteIllustration,
      title: "Dokumente",
      description:
        "Alle Unterlagen zu Ihrer Wohnung\nan einem Ort — sicher und\njederzeit griffbereit.",
      features: [
        "Zentrale Ablage",
        "Automatisch sortiert",
        "Sicher gespeichert",
      ],
      availability: ["Web-App"],
      badge: "Coming Soon",
      color: "#14B8A6",
    },
    {
      id: "finanzen",
      icon: ServiceAccountingIllustration,
      title: "Finanzen",
      description:
        "Miete, Kosten und Rendite\nIhrer Wohnung — klar und\nübersichtlich dargestellt.",
      features: [
        "Einnahmen & Ausgaben",
        "Rendite berechnen",
        "Steuerdaten exportieren",
      ],
      availability: ["Web-App"],
      badge: "Geplant",
      color: "#14B8A6",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        {/* Subtle atmospheric green gradient - from top-right, fading to center */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 90% 15%, rgba(20, 184, 166, 0.11) 0%, transparent 70%)"
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-[34px]">
            {/* Label */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(12px,1.2vw,14px)] font-medium" style={{ color: "hsl(var(--text-tertiary))" }}>
                Unser Angebot für Eigentümer
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
              Ihre Wohnung.<br />Ihre Entscheidungen.
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ color: "hsl(var(--text-secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Behalten Sie den Überblick über das, was Ihnen gehört —<br />
              ohne Verwaltungsaufwand.
            </motion.p>

            {/* Flow Diagram */}
            <motion.div
              className="pt-16 pb-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <EigentuemerFlowDiagram className="w-full max-w-[900px] h-auto mx-auto" />
            </motion.div>

            {/* Explanation */}
            <motion.div
              className="max-w-[680px] mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Alle Services sind auf Ihre Wohnung ausgerichtet.<br />
                Stammdaten, Mieter und Kosten werden einmal erfasst —<br />
                und stehen Ihnen jederzeit zur Verfügung.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Unsere Services für Eigentümer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Drei spezialisierte Anwendungen für die individuelle Verwaltung Ihrer Wohnung.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  {/* Service Badge */}
                  {service.badge && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <Badge
                        variant="outline"
                        className="text-[10px] px-3 py-1 bg-[#ccfbf1] text-[#14B8A6] border-[#99f6e4] shadow-sm"
                      >
                        {service.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-3">
                    {/* Illustration - desaturiert (grau) bei Geplant */}
                    <div className="mx-auto mb-6 h-[160px] flex items-center justify-center">
                      {IllustrationComponent && (
                        <IllustrationComponent
                          className="w-full max-w-[180px] h-auto"
                          color={service.badge === "Geplant" ? "hsl(215, 14%, 75%)" : service.color}
                        />
                      )}
                    </div>

                    {/* Title - opacity-85 bei Geplant */}
                    <div className={`min-h-[48px] flex items-center justify-center mb-2 ${service.badge === "Geplant" ? "opacity-85" : ""}`}>
                      <CardTitle className="text-lg font-bold leading-tight tracking-tight">
                        {service.title}
                      </CardTitle>
                    </div>

                    {/* Platform Badges - ausgegraut bei Geplant */}
                    <div className={`flex flex-wrap gap-1.5 justify-center mb-3 ${service.badge === "Geplant" ? "opacity-50" : ""}`}>
                      {service.availability?.map((platform, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className={service.badge === "Geplant"
                            ? "text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border"
                            : "text-[10px] px-2 py-0.5 bg-[#14B8A6]/10 text-teal-500 border-[#14B8A6]/20"
                          }
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>

                    {/* Description - opacity-85 bei Geplant */}
                    <div className={`min-h-[48px] ${service.badge === "Geplant" ? "opacity-85" : ""}`}>
                      <CardDescription className="text-sm leading-relaxed whitespace-pre-line">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pt-0 pb-4">
                    {/* Features list - opacity-80 bei Geplant, graue Icons */}
                    <ul className={`space-y-2 mb-3 ${service.badge === "Geplant" ? "opacity-80" : ""}`}>
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                            <CheckCircle
                              className="w-4 h-4"
                              style={{ color: service.badge === "Geplant" ? "hsl(215, 14%, 75%)" : service.color }}
                            />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto pt-4 text-center h-[32px] flex items-center justify-center">
                      {service.badge === "Geplant" ? (
                        <span className="text-sm text-muted-foreground">
                          Demnächst verfügbar
                        </span>
                      ) : (
                        <Link to={`/angebot-eigentuemer/${service.id}`}>
                          <Button variant="outline" size="sm" className="border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors">
                            Zum Service
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Ihr Eigentum sollte nicht mehr Aufmerksamkeit fordern,<br />
                als Sie ihm geben wollen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
