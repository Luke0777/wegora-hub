import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react";

export function UeberUnsPage() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hasEnoughHeight = window.innerHeight >= 700;
      if (window.scrollY > 100 || !hasEnoughHeight) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const teamMembers = [
    {
      name: "Tobias Klüppel",
      role: "Strategie & Sales",
      subtitle: "CEO Klüppel Immobilien",
      initials: "TK",
      photo: "/images/team/tobias-klueppel.png",
      bio: "Langjährige Erfahrung in der Immobilienverwaltung. Verbindet Branchenkenntnisse mit strategischer Produktentwicklung.",
    },
    {
      name: "Lukas Sommerfeld",
      role: "Strategie & Marketing",
      subtitle: "Account Manager Azure Agentic AI, Microsoft",
      initials: "LS",
      photo: "/images/team/lukas-sommerfeld.png",
      bio: "Expertise in Cloud Strategie und digitaler Transformation. Bringt Know-how aus der Tech Branche und kundenzentrierten Produktentwicklung mit.",
    },
    {
      name: "Marius Sommerfeld",
      role: "Tech",
      subtitle: "Data & AI, Fairparken",
      initials: "MS",
      photo: "/images/team/marius-sommerfeld.png",
      bio: "Spezialisiert auf Datenarchitektur und Service Integration. Entwickelt die technische Plattform-Infrastruktur um eine nahtlose Produkterfahrung zu gewährleisten.",
    },
  ];

  const values = [
    {
      title: "Transparenz",
      description: "Klare Kommunikation, nachvollziehbare Prozesse, faire Preise – keine versteckten Kosten oder undurchsichtige Abläufe.",
    },
    {
      title: "Nutzerzentrierung",
      description: "Wir entwickeln Software für echte Menschen mit echten Problemen – nicht für abstrakte Anforderungslisten.",
    },
    {
      title: "Verlässlichkeit",
      description: "Systeme müssen funktionieren – nicht nur am Anfang, sondern dauerhaft. Wir entwickeln für langfristige Stabilität.",
    },
    {
      title: "Respekt",
      description: "Wir behandeln Nutzerdaten und Entscheidungen mit der Sorgfalt, die sie verdienen – nicht als Experiment.",
    },
  ];

  return (
    <>
      {/* Hero Section - Editorial */}
      <section
        style={{ "--nav-h": "72px" } as React.CSSProperties}
        className="min-h-[clamp(72vh,calc(100svh-var(--nav-h,72px)),92vh)] relative pt-[clamp(140px,18vh,200px)] pb-[clamp(100px,12vh,140px)]"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-5xl mx-auto text-center pt-[34px]">
            {/* Eyebrow Label - Wegora Blue */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-[clamp(20px,2.5vw,28px)] font-semibold text-[#2463eb] tracking-wide" style={{ fontWeight: 600 }}>
                Über uns
              </p>
            </motion.div>

            {/* Main Headline - Outcome-focused */}
            <motion.h1
              className="text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight text-[#1A1A1A]"
              style={{ lineHeight: "1.15", fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Wer wir sind und woran wir glauben
            </motion.h1>

            {/* Subline - Calm, forward-looking */}
            <motion.p
              className="text-[clamp(18px,2vw,22px)] leading-[1.6] max-w-3xl mx-auto mt-8"
              style={{ opacity: 0.6, color: "#1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Wie wir Immobilienverwaltung neu denken – mit klaren Strukturen statt komplexer Software.
            </motion.p>

            {/* Conviction Preview - Human & credible */}
            <motion.div
              className="mt-20 max-w-xl mx-auto text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              {/* Label */}
              <p className="text-sm text-muted-foreground/70 mb-5 tracking-wide font-medium">
                Unsere Überzeugung
              </p>

              {/* Core belief statement */}
              <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">
                Gute Entscheidungen entstehen aus Übersicht, nicht aus Komplexität.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollArrow && (
            <motion.div
              className="fixed left-1/2 -translate-x-1/2 cursor-pointer z-20"
              style={{ bottom: "2rem" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <CaretDown
                  className="w-10 h-10 text-[#2463eb]/70 hover:text-[#2463eb] transition-colors"
                  weight="bold"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Section 1: Wer wir sind */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-[#1A1A1A]">
              Wer wir sind
            </h2>

            <div className="space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Über Jahre hinweg haben wir beobachtet, wie Immobilienverwaltung an strukturellen Grenzen scheitert. Nicht am Engagement der Beteiligten – sondern an fehlenden, durchgängigen Systemen, die Transparenz und Kontrolle möglich machen.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Die bestehenden Lösungen zwingen Nutzer in starre Prozesse. Software wird zum Selbstzweck, statt Menschen in ihrer Arbeit zu unterstützen. Komplexität wächst – Klarheit bleibt auf der Strecke.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Wir sind überzeugt: Verwaltung braucht keine komplexeren Tools – sie braucht klarere Strukturen. Systeme, die sich an echte Arbeitsabläufe anpassen. Software, die Menschen hilft, Entscheidungen zu treffen, statt nur Daten zu verwalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Das Team */}
      <section className="py-24 sm:py-32 bg-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#1A1A1A]">
              Das Team
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                >
                  {/* Avatar Photo */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
                  />

                  {/* Name */}
                  <h3 className="font-semibold text-lg text-[#1A1A1A] mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-[#2463eb] font-medium mb-1">
                    {member.role}
                  </p>

                  {/* Subtitle */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {member.subtitle}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Unsere Werte */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#1A1A1A]">
                Unsere Werte
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center mb-16">
                Diese Prinzipien leiten unsere Arbeit und Produktentwicklung.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
              {/* All 4 values in 2x2 grid */}
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                >
                  <h4 className="font-semibold text-lg text-[#1A1A1A]">
                    {value.title}
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
