"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Sun, Euro, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Language = "pl" | "en";

const content = {
  pl: {
    targetLanguage: "English",
    subtitle: "Nieruchomości na Cyprze",
    nav: {
      properties: "Nieruchomości",
      process: "Proces zakupu",
      why: "Dlaczego Cypr",
      contact: "Kontakt",
    },
    consultation: "Umów konsultację",
    heroBadge: "Polskojęzyczne wsparcie w Pafos i na Cyprze",
    heroTitle: "Znajdź swoją nieruchomość na Cyprze bez stresu.",
    heroText:
      "Pomagamy kupującym znaleźć sprawdzone apartamenty, domy i wille w Pafos oraz najlepszych lokalizacjach południowego Cypru — od pierwszej rozmowy do odbioru kluczy.",
    viewProperties: "Zobacz nieruchomości",
    whatsapp: "Napisz na WhatsApp",
    metrics: [
      { value: "15+", label: "lat doświadczenia" },
      { value: "PL / EN", label: "obsługa klienta" },
      { value: "0%", label: "wybrane oferty bez prowizji" },
    ],
    heroHighlights: ["Sprawdzone oferty", "Pomoc po zakupie", "Jasne koszty"],
    propertiesEyebrow: "Wybrane oferty",
    propertiesTitle: "Nieruchomości warte uwagi",
    seeAll: "Zobacz wszystkie",
    whyEyebrow: "Dlaczego Cypr",
    whyTitle: "Słońce, styl życia i stabilna inwestycja.",
    whyText:
      "Cypr przyciąga kupujących klimatem, bezpieczeństwem, atrakcyjnym rynkiem najmu i prostszym stylem życia.",
    reasons: [
      "Ponad 300 słonecznych dni w roku",
      "Atrakcyjny rynek wynajmu",
      "Bezpieczne środowisko dla rodzin",
      "Polskojęzyczne wsparcie na miejscu",
    ],
    processEyebrow: "Proces zakupu",
    processTitle: "Prowadzimy Cię krok po kroku.",
    steps: [
      "Bezpłatna konsultacja",
      "Dobór sprawdzonych ofert",
      "Prezentacja online lub na miejscu",
      "Wsparcie prawne i rezerwacja",
      "Odbiór kluczy i pomoc po zakupie",
    ],
    aboutEyebrow: "O Project Cyprus",
    aboutTitle: "Lokalna wiedza, polska komunikacja, indywidualne podejście.",
    aboutText:
      "Project Cyprus pomaga osobom szukającym nieruchomości na Cyprze przejść przez cały proces z jasnością i spokojem — od wyboru lokalizacji, przez selekcję ofert, po kontakt z prawnikami, deweloperami i usługami po zakupie.",
    talk: "Porozmawiajmy",
    meetUs: "Poznaj nas",
    contactTitle: "Powiedz nam, czego szukasz na Cyprze.",
    contactText:
      "Wyślemy Ci dopasowane oferty i wyjaśnimy, jak wygląda proces zakupu krok po kroku.",
    freeConsultation: "Umów bezpłatną konsultację",
    footerTagline: "Nieruchomości na Cyprze.",
    footerLanguages: "Polski · English · Pafos, Cyprus",
    properties: [
      {
        title: "Apartament z widokiem na morze",
        location: "Pafos, Universal",
        price: "od €245,000",
        beds: "2 sypialnie",
        type: "Apartament",
        tag: "Bez prowizji",
      },
      {
        title: "Nowoczesna willa z basenem",
        location: "Tala, Pafos",
        price: "od €590,000",
        beds: "3 sypialnie",
        type: "Willa",
        tag: "Oferta specjalna",
      },
      {
        title: "Dom blisko plaży i restauracji",
        location: "Coral Bay",
        price: "od €420,000",
        beds: "3 sypialnie",
        type: "Dom",
        tag: "Nowość",
      },
    ],
  },
  en: {
    targetLanguage: "Polski",
    subtitle: "Property in Cyprus",
    nav: {
      properties: "Properties",
      process: "Buying process",
      why: "Why Cyprus",
      contact: "Contact",
    },
    consultation: "Book a consultation",
    heroBadge: "English-speaking support in Paphos and across Cyprus",
    heroTitle: "Find your property in Cyprus without the stress.",
    heroText:
      "We help buyers find verified apartments, homes, and villas in Paphos and the best locations across southern Cyprus, from the first conversation to collecting the keys.",
    viewProperties: "View properties",
    whatsapp: "Message us on WhatsApp",
    metrics: [
      { value: "15+", label: "years of experience" },
      { value: "PL / EN", label: "client support" },
      { value: "0%", label: "selected commission-free offers" },
    ],
    heroHighlights: ["Verified listings", "After-purchase support", "Clear costs"],
    propertiesEyebrow: "Featured listings",
    propertiesTitle: "Properties worth your attention",
    seeAll: "See all",
    whyEyebrow: "Why Cyprus",
    whyTitle: "Sun, lifestyle, and a stable investment.",
    whyText:
      "Cyprus attracts buyers with its climate, safety, strong rental market, and simpler pace of life.",
    reasons: [
      "More than 300 sunny days a year",
      "Attractive rental market",
      "Safe environment for families",
      "Local support in Polish and English",
    ],
    processEyebrow: "Buying process",
    processTitle: "We guide you step by step.",
    steps: [
      "Free consultation",
      "Selection of verified offers",
      "Online or in-person viewing",
      "Legal support and reservation",
      "Key handover and after-purchase help",
    ],
    aboutEyebrow: "About Project Cyprus",
    aboutTitle: "Local knowledge, clear communication, and a personal approach.",
    aboutText:
      "Project Cyprus helps people looking for property in Cyprus move through the whole process with clarity and confidence, from choosing a location and shortlisting offers to coordinating with lawyers, developers, and after-purchase services.",
    talk: "Let’s talk",
    meetUs: "Meet us",
    contactTitle: "Tell us what you are looking for in Cyprus.",
    contactText:
      "We will send you matched offers and explain how the buying process works, step by step.",
    freeConsultation: "Book a free consultation",
    footerTagline: "Property in Cyprus.",
    footerLanguages: "English · Polski · Paphos, Cyprus",
    properties: [
      {
        title: "Sea-view apartment",
        location: "Paphos, Universal",
        price: "from €245,000",
        beds: "2 bedrooms",
        type: "Apartment",
        tag: "No commission",
      },
      {
        title: "Modern villa with a pool",
        location: "Tala, Paphos",
        price: "from €590,000",
        beds: "3 bedrooms",
        type: "Villa",
        tag: "Special offer",
      },
      {
        title: "Home close to the beach and restaurants",
        location: "Coral Bay",
        price: "from €420,000",
        beds: "3 bedrooms",
        type: "House",
        tag: "New listing",
      },
    ],
  },
} satisfies Record<Language, Record<string, unknown>>;

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
];

export default function ProjectCyprusHomepage() {
  const [language, setLanguage] = React.useState<Language>("pl");
  const copy = content[language];
  const targetLanguage = language === "pl" ? "en" : "pl";

  return (
    <main className="min-h-screen bg-[#fbf7f0] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-[#fbf7f0]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              PC
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Project Cyprus</p>
              <p className="text-xs text-slate-500">{copy.subtitle}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#properties" className="hover:text-slate-950">{copy.nav.properties}</a>
            <a href="#process" className="hover:text-slate-950">{copy.nav.process}</a>
            <a href="#why" className="hover:text-slate-950">{copy.nav.why}</a>
            <a href="#contact" className="hover:text-slate-950">{copy.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={`Switch to ${copy.targetLanguage}`}
              onClick={() => setLanguage(targetLanguage)}
              className={`language-switch flag-${targetLanguage}`}
            >
              <span>{copy.targetLanguage}</span>
            </button>
            <Button asChild className="hidden rounded-full bg-[#b98545] px-5 text-white hover:bg-[#9f7139] sm:inline-flex">
              <a href="#contact">{copy.consultation}</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,133,69,0.22),transparent_35%),radial-gradient(circle_at_left,rgba(15,23,42,0.08),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b98545]/30 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sun className="h-4 w-4 text-[#b98545]" />
              {copy.heroBadge}
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              {copy.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                <a href="#properties">{copy.viewProperties} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white/70 px-7">
                <a href="#contact"><MessageCircle className="mr-2 h-4 w-4" /> {copy.whatsapp}</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
              {copy.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
                alt="Cyprus coastline"
                className="h-[560px] w-full object-cover"
              />
            </div>
            <Card className="absolute -bottom-8 left-6 right-6 rounded-3xl border-0 bg-white/95 shadow-xl backdrop-blur">
              <CardContent className="grid gap-4 p-5 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#b98545]" />
                  <span className="text-sm font-medium">{copy.heroHighlights[0]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-[#b98545]" />
                  <span className="text-sm font-medium">{copy.heroHighlights[1]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Euro className="h-5 w-5 text-[#b98545]" />
                  <span className="text-sm font-medium">{copy.heroHighlights[2]}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b98545]">{copy.propertiesEyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{copy.propertiesTitle}</h2>
          </div>
          <Button variant="outline" className="rounded-full border-slate-300 bg-white px-6">{copy.seeAll}</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.properties.map((property, index) => (
            <Card key={property.title} className="group overflow-hidden rounded-[1.75rem] border-0 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img src={propertyImages[index]} alt={property.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm">{property.tag}</span>
              </div>
              <CardContent className="p-6">
                <p className="mb-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" /> {property.location}</p>
                <h3 className="text-xl font-semibold tracking-tight">{property.title}</h3>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-lg font-semibold text-[#b98545]">{property.price}</p>
                    <p className="text-sm text-slate-500">{property.type} · {property.beds}</p>
                  </div>
                  <Button size="icon" className="rounded-full bg-slate-950 hover:bg-slate-800"><ArrowRight className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="why" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6aa70]">{copy.whyEyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{copy.whyTitle}</h2>
            <p className="mt-5 text-slate-300">{copy.whyText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.reasons.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="mb-4 h-6 w-6 text-[#d6aa70]" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b98545]">{copy.processEyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{copy.processTitle}</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {copy.steps.map((step, index) => (
            <div key={step} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fbf7f0] text-sm font-bold text-[#b98545]">{index + 1}</div>
              <p className="font-semibold leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[0.9fr_1.1fr]">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" alt="Modern apartment interior" className="h-full min-h-[420px] w-full object-cover" />
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b98545]">{copy.aboutEyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">{copy.aboutTitle}</h2>
            <p className="mt-5 leading-8 text-slate-600">{copy.aboutText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-slate-950 px-6 hover:bg-slate-800">
                <a href="#contact"><Phone className="mr-2 h-4 w-4" /> {copy.talk}</a>
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 px-6">{copy.meetUs}</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#b98545] px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{copy.contactTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{copy.contactText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="h-12 rounded-full bg-white px-7 text-slate-950 hover:bg-white/90">{copy.freeConsultation}</Button>
            <Button variant="outline" className="h-12 rounded-full border-white/40 px-7 text-white hover:bg-white/10">WhatsApp</Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row lg:px-8">
        <p>© 2026 Project Cyprus. {copy.footerTagline}</p>
        <p>{copy.footerLanguages}</p>
      </footer>
    </main>
  );
}
