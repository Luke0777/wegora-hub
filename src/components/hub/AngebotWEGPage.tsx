import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, UsersThree, Gavel, ClipboardText } from "@phosphor-icons/react";
import {
  ServiceFlowDiagram,
  ServiceWEGIllustration,
  ServiceAccountingIllustration,
} from "./illustrations";
import { motion } from "framer-motion";

export function AngebotWEGPage() {
  const services = [
    {
      id: "versammlungen",
      icon: ServiceWEGIllustration,
      title: "Wegora Versammlungen",
      description:
        "Versammlungen vorbereiten, durchführen, dokumentieren und digital versenden.",
      features: [
        "Einladungen versenden",
        "Tagesordnung vorbereiten",
        "Digital abstimmen",
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
        "Hausgeld, Wirtschaftsplan und Gemeinschaftsfinanzen übersichtlich verwalten.",
      features: [
        "Hausgeld verwalten",
        "Wirtschaftsplan erstellen",
        "Rücklagen überwachen",
        "Abrechnungen generieren",
      ],
      availability: ["Web-App"],
      color: "#10B981",
    },
    {
      id: "beschluesse",
      icon: null,
      iconElement: Gavel,
      title: "Wegora Beschlüsse",
      description:
        "Beschlüsse erfassen, verfolgen und umsetzen.",
      features: [
        "Beschlüsse dokumentieren",
        "Umsetzung tracken",
        "Fristen überwachen",
        "Historie einsehen",
      ],
      availability: ["Web-App"],
      color: "#F97316",
    },
    {
      id: "vorgaenge",
      icon: null,
      iconElement: ClipboardText,
      title: "Wegora Vorgänge",
      description:
        "Alle Vorgänge der Gemeinschaft zentral verwalten.",
      features: [
        "Vorgänge erstellen",
        "Status verfolgen",
        "Dokumente anhängen",
        "Kommunikation bündeln",
      ],
      availability: ["Web-App"],
      color: "#8B5CF6",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
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
                Alle Services greifen auf dasselbe zentrale Objekt zu. Stammdaten, Eigentümer und Einheiten werden einmal erfasst und stehen für Finanzen, Versammlungen, Beschlüsse und Vorgänge jederzeit zur Verfügung.
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
              const IconComponent = service.iconElement;
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
                  <CardHeader className="text-center pb-3">
                    {/* Illustration or Icon */}
                    <div className="mx-auto mb-6 h-[160px] flex items-center justify-center">
                      {IllustrationComponent ? (
                        <IllustrationComponent className="w-full max-w-[180px] h-auto" />
                      ) : IconComponent ? (
                        <div
                          className="w-24 h-24 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <IconComponent
                            className="w-12 h-12"
                            style={{ color: service.color }}
                            weight="duotone"
                          />
                        </div>
                      ) : null}
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
                          className="text-[10px] px-2 py-0.5 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20"
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
