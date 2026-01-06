import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, UsersThree } from "@phosphor-icons/react";
import {
  ServiceFlowDiagram,
  ServiceWEGIllustration,
  ServiceAccountingIllustration,
  ServiceDokumenteIllustration,
  ServiceVorgaengeIllustration,
} from "./illustrations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AngebotWEGPage() {
  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Versammlungen",
      description:
        "Versammlungen vorbereiten,\ndurchführen, dokumentieren\nund digital versenden.",
      features: [
        "Einladungen versenden",
        "Tagesordnung vorbereiten",
        "Digital abstimmen",
        "Protokolle erstellen",
      ],
      availability: ["Web-App"],
      badge: "Coming Soon",
      color: "#3182CE",
    },
    {
      id: "finanzen",
      icon: ServiceAccountingIllustration,
      title: "Finanzen",
      description:
        "Hausgeld, Wirtschaftsplan\nund Gemeinschaftsfinanzen\nübersichtlich verwalten.",
      features: [
        "Hausgeld verwalten",
        "Wirtschaftsplan erstellen",
        "Rücklagen überwachen",
        "Abrechnungen generieren",
      ],
      availability: ["Web-App"],
      badge: "Coming Soon",
      color: "#3182CE",
    },
    {
      id: "dokumente",
      icon: ServiceDokumenteIllustration,
      title: "Dokumente",
      description:
        "Alle Dokumente der\nGemeinschaft zentral\nund sicher verwalten.",
      features: [
        "Dokumente ablegen",
        "Automatisch sortieren",
        "Schnell finden",
        "Sicher teilen",
      ],
      availability: ["Web-App"],
      badge: "Coming Soon",
      color: "#3182CE",
    },
    {
      id: "vorgaenge",
      icon: ServiceVorgaengeIllustration,
      title: "Vorgänge",
      description:
        "Alle Vorgänge der\nGemeinschaft zentral\nverwalten und verfolgen.",
      features: [
        "Vorgänge erstellen",
        "Status verfolgen",
        "Dokumente anhängen",
        "Kommunikation bündeln",
      ],
      availability: ["Web-App"],
      badge: "Geplant",
      color: "#3182CE",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        {/* Subtle atmospheric blue gradient - from top-left, fading to center */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 10% 15%, rgba(36, 99, 235, 0.09) 0%, transparent 70%)"
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-[34px]">
            {/* Label */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
                Unser Angebot für WEGs
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
              Ein Objekt. Alles im Griff.
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto"
              style={{ opacity: 0.6, color: "#1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Alle Services greifen ineinander – für weniger Aufwand im Alltag und volle Kontrolle über Ihr Objekt.
            </motion.p>

            {/* Flow Diagram */}
            <motion.div
              className="pt-16 pb-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <ServiceFlowDiagram className="w-full max-w-[900px] h-auto mx-auto" />
            </motion.div>

            {/* Explanation */}
            <motion.div
              className="max-w-[680px] mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Alle Services greifen auf dasselbe zentrale Objekt zu. Stammdaten, Eigentümer und Einheiten werden einmal erfasst und stehen für Versammlungen, Finanzen, Dokumente und Vorgänge jederzeit zur Verfügung.
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
              Unsere Services für WEGs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Vier spezialisierte Anwendungen für die gemeinschaftliche Verwaltung Ihrer WEG.
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
                  {/* Service Badge */}
                  {service.badge && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <Badge
                        variant="outline"
                        className="text-[10px] px-3 py-1 bg-blue-100 text-blue-600 border-blue-200 shadow-sm"
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
                          color={service.badge === "Geplant" ? "#9CA3AF" : service.color}
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
                            ? "text-[10px] px-2 py-0.5 bg-gray-100 text-gray-400 border-gray-200"
                            : "text-[10px] px-2 py-0.5 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20"
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
                              style={{ color: service.badge === "Geplant" ? "#9CA3AF" : service.color }}
                            />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className={`mt-auto pt-4 ${service.badge === "Geplant" ? "text-center" : ""}`}>
                      {service.badge === "Geplant" ? (
                        <span className="text-sm text-muted-foreground">
                          Demnächst verfügbar
                        </span>
                      ) : (
                        <Link
                          to={`/angebot-weg/${service.id}`}
                          className="text-sm font-medium text-[#2463eb] hover:text-blue-700 transition-colors"
                        >
                          Mehr erfahren →
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

      {/* Modularity & Interplay */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Modularität & Zusammenspiel
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                Jeder Service ist eigenständig nutzbar. Gemeinsam wachsen sie mit Ihren Anforderungen.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              >
                <Card className="border-2 border-[#3182CE]/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#3182CE]/10 rounded-lg flex items-center justify-center">
                      <UsersThree className="h-5 w-5 text-[#3182CE]" />
                    </div>
                    Für die Gemeinschaft
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3182CE] flex-shrink-0 mt-0.5" />
                      <span>Transparenz für alle Eigentümer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3182CE] flex-shrink-0 mt-0.5" />
                      <span>Gemeinsame Beschlüsse nachvollziehbar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3182CE] flex-shrink-0 mt-0.5" />
                      <span>Strukturierte Kommunikation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
