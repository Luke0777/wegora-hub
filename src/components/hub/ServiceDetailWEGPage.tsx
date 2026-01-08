"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const serviceData: Record<string, { title: string; description: string }> = {
  "versammlungen": {
    title: "Versammlungen",
    description: "Versammlungen vorbereiten, durchführen, dokumentieren und digital versenden.",
  },
  "finanzen": {
    title: "Finanzen",
    description: "Hausgeld, Wirtschaftsplan und Gemeinschaftsfinanzen übersichtlich verwalten.",
  },
  "dokumente": {
    title: "Dokumente",
    description: "Alle Dokumente der Gemeinschaft zentral und sicher verwalten.",
  },
  "vorgaenge": {
    title: "Vorgänge",
    description: "Alle Vorgänge der Gemeinschaft zentral verwalten und verfolgen.",
  },
};

export function ServiceDetailWEGPage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service nicht gefunden</h1>
          <Link href="/angebot-weg" className="text-weg-500 hover:text-weg-600">
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
        {/* Subtle atmospheric blue gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 10% 15%, rgba(36, 99, 235, 0.09) 0%, transparent 70%)"
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
              href="/angebot-weg"
              className="inline-flex items-center gap-2 text-weg-500 hover:text-weg-600 transition-colors mb-8"
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
              <p className="text-lg font-semibold text-weg-500 tracking-wide">
                Wegora WEG
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
            className="bg-weg-500/5 border-2 border-weg-500/20 rounded-xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-weg-500 font-medium text-lg mb-2">
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
