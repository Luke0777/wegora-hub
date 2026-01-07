import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const serviceData: Record<string, { title: string; description: string }> = {
  "nebenkosten-manager": {
    title: "Nebenkosten Manager",
    description: "Nebenkostenabrechnungen in wenigen Schritten erstellen und versenden.",
  },
  "dokumente": {
    title: "Dokumente",
    description: "Alle wichtigen Unterlagen zentral und sicher.",
  },
  "finanzen": {
    title: "Finanzen",
    description: "Miete, Kosten und Rendite Ihrer Wohnung im Blick.",
  },
};

export function ServiceDetailEigentuemerPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service nicht gefunden</h1>
          <Link to="/angebot-eigentuemer" className="text-owner-500 hover:text-owner-600">
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[50vh] relative pt-[clamp(140px,18vh,200px)] pb-16"
      >
        {/* Subtle atmospheric teal gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 90% 15%, rgba(0, 128, 128, 0.11) 0%, transparent 70%)"
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/angebot-eigentuemer"
              className="inline-flex items-center gap-2 text-owner-500 hover:text-owner-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Zurück zur Übersicht</span>
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-lg font-semibold text-owner-500 tracking-wide">
                Wegora Eigentümer
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1A1A1A] mb-6"
              style={{ lineHeight: "1.15" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {service.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="bg-owner-50 border-2 border-owner-200 rounded-xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-owner-600 font-medium text-lg mb-2">
              Detailseite in Arbeit
            </p>
            <p className="text-muted-foreground">
              Der vollständige Inhalt für "{service.title}" wird bald hier verfügbar sein.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
