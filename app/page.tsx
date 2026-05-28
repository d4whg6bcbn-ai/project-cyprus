"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Euro,
  KeyRound,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type Language = "pl" | "en";

type NavItem = {
  label: string;
  href: string;
};

type Property = {
  title: string;
  location: string;
  price: string;
  beds: string;
  type: string;
  status: string;
  image: string;
};

type Icon = React.ComponentType<{ className?: string }>;

type IconCard = {
  title: string;
  text: string;
  icon: Icon;
};

type Stat = {
  value: string;
  label: string;
  icon?: Icon;
};

type ProcessStep = {
  title: string;
  text: string;
};

type SiteCopy = {
  metaLang: string;
  headerSubtitle: string;
  navItems: NavItem[];
  consultationCta: string;
  languageLabels: Record<Language, string>;
  mobileMenuOpen: string;
  mobileMenuClose: string;
  currentLanguageLabel: string;
  switchLanguageLabel: string;
  hero: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    locationStrip: string;
    scrollCue: string;
  };
  heroStats: Stat[];
  promises: IconCard[];
  intro: {
    eyebrow: string;
    title: string;
    text: string;
    quote: string;
    imageAlt: string;
    cardEyebrow: string;
    cardText: string;
  };
  properties: {
    eyebrow: string;
    title: string;
    text: string;
    allCta: string;
    detailsCta: string;
    items: Property[];
  };
  why: {
    eyebrow: string;
    title: string;
    text: string;
    cards: string[];
    imageAlt: string;
    locationEyebrow: string;
    locationTitle: string;
    locationText: string;
  };
  process: {
    eyebrow: string;
    title: string;
    text: string;
    steps: ProcessStep[];
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    imageAlt: string;
    imageCardText: string;
    primaryCta: string;
    secondaryCta: string;
  };
  credibility: Stat[];
  testimonials: {
    eyebrow: string;
    title: string;
    text: string;
    quotes: string[];
  };
  cta: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    quickStartTitle: string;
    quickStartItems: string[];
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    languageTitle: string;
    languageText: string;
    copyright: string;
    locationLine: string;
  };
};

const whatsappHref = "#contact"; // TODO: Replace with a real WhatsApp wa.me link when the number is configured.
const contactEmail = "kontakt@project-cyprus.pl"; // TODO: Replace with the confirmed contact email before launch.

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85";
const introImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85";
const whyImage =
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=85";
const aboutImage =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85";
const ctaImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
];

// Keep both language entries in sync whenever page content changes.
const content = {
  pl: {
    metaLang: "pl",
    headerSubtitle: "Real estate advisory",
    navItems: [
      { label: "Nieruchomości", href: "#properties" },
      { label: "Proces zakupu", href: "#process" },
      { label: "Dlaczego Cypr", href: "#why" },
      { label: "O nas", href: "#about" },
      { label: "Kontakt", href: "#contact" },
    ],
    consultationCta: "Umów konsultację",
    languageLabels: { pl: "PL", en: "EN" },
    mobileMenuOpen: "Otwórz menu",
    mobileMenuClose: "Zamknij menu",
    currentLanguageLabel: "Aktualny język",
    switchLanguageLabel: "Przełącz język na",
    hero: {
      imageAlt: "Wybrzeże Cypru o zachodzie słońca",
      eyebrow: "Polskojęzyczne wsparcie na Cyprze",
      title: "Znajdź nieruchomość na Cyprze z pełnym spokojem.",
      text: "Pomagamy wybrać sprawdzone apartamenty, wille i inwestycje w najlepszych lokalizacjach południowego Cypru — od pierwszej rozmowy do odbioru kluczy.",
      primaryCta: "Umów bezpłatną konsultację",
      secondaryCta: "Zobacz nieruchomości",
      locationStrip: "Pafos · Limassol · Larnaca · Ayia Napa · Protaras",
      scrollCue: "Przewiń",
    },
    heroStats: [
      { value: "15+", label: "lat doświadczenia", icon: Star },
      { value: "PL / EN", label: "obsługa", icon: MessageCircle },
      { value: "0%", label: "prowizji od kupującego", icon: Euro },
      { value: "Pafos", label: "i południowy Cypr", icon: MapPin },
    ],
    promises: [
      {
        title: "Sprawdzeni deweloperzy",
        text: "Weryfikujemy projekty, lokalizacje i partnerów zanim pokażemy je klientom.",
        icon: Building2,
      },
      {
        title: "Bez prowizji od kupującego",
        text: "Pracujemy przejrzyście, a wybrane oferty nie obciążają kupującego prowizją.",
        icon: Euro,
      },
      {
        title: "Wsparcie prawne i procesowe",
        text: "Pomagamy uporządkować dokumenty, rezerwację i kolejne etapy zakupu.",
        icon: ShieldCheck,
      },
      {
        title: "Pomoc po zakupie",
        text: "Klucze to nie koniec. Pomagamy odnaleźć się na miejscu i zadbać o praktyczne sprawy.",
        icon: KeyRound,
      },
    ],
    intro: {
      eyebrow: "Styl życia i inwestycja",
      title: "Każda dobra decyzja zaczyna się od właściwego miejsca.",
      text: "Cypr może być drugim domem, spokojną inwestycją albo początkiem zupełnie nowego stylu życia. Naszą rolą jest uporządkować możliwości, odsiać ryzyko i pokazać Ci tylko te nieruchomości, które naprawdę mają sens.",
      quote: "Nie kupujesz tylko adresu. Wybierasz styl życia, bezpieczeństwo i przyszłość.",
      imageAlt: "Elegancki dom wakacyjny na Cyprze",
      cardEyebrow: "Project Cyprus",
      cardText: "Spokój decyzji zaczyna się od dobrej selekcji.",
    },
    properties: {
      eyebrow: "Wybrane oferty",
      title: "Wybrane nieruchomości warte uwagi",
      text: "Starannie wybrane apartamenty, domy i wille w lokalizacjach, które łączą potencjał inwestycyjny z jakością życia.",
      allCta: "Zobacz wszystkie oferty",
      detailsCta: "Zapytaj",
      items: [
        {
          title: "Apartament z widokiem na morze",
          location: "Pafos, Universal",
          price: "od €245,000",
          beds: "2 sypialnie",
          type: "Apartament",
          status: "Bez prowizji",
          image: propertyImages[0],
        },
        {
          title: "Nowoczesna willa z basenem",
          location: "Tala, Pafos",
          price: "od €590,000",
          beds: "3 sypialnie",
          type: "Willa",
          status: "Oferta specjalna",
          image: propertyImages[1],
        },
        {
          title: "Dom blisko plaży i restauracji",
          location: "Coral Bay",
          price: "od €420,000",
          beds: "3 sypialnie",
          type: "Dom",
          status: "Nowość",
          image: propertyImages[2],
        },
      ],
    },
    why: {
      eyebrow: "Dlaczego Cypr",
      title: "Słońce, bezpieczeństwo i rynek, który przyciąga inwestorów.",
      text: "Cypr daje coś więcej niż ładne widoki. To połączenie jakości życia, stabilnego popytu najmu i spokojnego tempa codzienności.",
      cards: [
        "Ponad 300 słonecznych dni w roku",
        "Stabilny rynek wynajmu",
        "Bezpieczne środowisko dla rodzin",
        "Atrakcyjny styl życia",
        "Dobre połączenia z Europą",
        "Rosnące zainteresowanie inwestorów",
      ],
      imageAlt: "Nowoczesna śródziemnomorska willa",
      locationEyebrow: "Lokalizacje",
      locationTitle: "Pafos · Limassol · Larnaca",
      locationText: "Dobieramy region do celu: drugi dom, wynajem, inwestycja albo przeprowadzka.",
    },
    process: {
      eyebrow: "Proces zakupu",
      title: "Przejrzysta droga od pomysłu do odbioru kluczy.",
      text: "Każdy etap ma swoje decyzje, dokumenty i pytania. Naszą rolą jest przeprowadzić Cię przez nie spokojnie i konkretnie.",
      steps: [
        {
          title: "Bezpłatna konsultacja",
          text: "Rozmawiamy o celu zakupu, stylu życia, budżecie i preferowanych lokalizacjach.",
        },
        {
          title: "Dobór lokalizacji i budżetu",
          text: "Porządkujemy opcje tak, aby inwestycja pasowała do planu, nie tylko do zdjęć.",
        },
        {
          title: "Selekcja sprawdzonych ofert",
          text: "Pokazujemy wybrane nieruchomości z jasnym uzasadnieniem i realnym potencjałem.",
        },
        {
          title: "Prezentacja online lub na miejscu",
          text: "Organizujemy oglądanie, porównujemy projekty i odpowiadamy na konkretne pytania.",
        },
        {
          title: "Rezerwacja i wsparcie prawne",
          text: "Pomagamy przejść przez dokumenty, komunikację z prawnikiem i rezerwację.",
        },
        {
          title: "Odbiór kluczy i pomoc po zakupie",
          text: "Wspieramy przy przekazaniu nieruchomości i kolejnych praktycznych decyzjach.",
        },
      ],
    },
    about: {
      eyebrow: "O Project Cyprus",
      title: "Lokalna wiedza, polska komunikacja, indywidualne podejście.",
      text: "Project Cyprus pomaga osobom szukającym nieruchomości na Cyprze przejść przez cały proces z jasnością i spokojem — od wyboru lokalizacji, przez selekcję ofert, po kontakt z prawnikami, deweloperami i usługami po zakupie.",
      imageAlt: "Eleganckie wnętrze apartamentu",
      imageCardText: "Lokalne rozeznanie, sprawdzone kontakty i komunikacja, która daje poczucie kontroli.",
      primaryCta: "Poznajmy się",
      secondaryCta: "Napisz na WhatsApp",
    },
    credibility: [
      { value: "15+", label: "lat doświadczenia" },
      { value: "PL / EN", label: "komunikacja" },
      { value: "0%", label: "prowizji od kupującego" },
      { value: "Południe", label: "Cypr jako fokus" },
    ],
    testimonials: {
      eyebrow: "Opinie",
      title: "Co cenią nasi klienci?",
      text: "Sekcja przygotowana pod prawdziwe opinie klientów. Na razie pokazuje najważniejsze wartości procesu.",
      quotes: [
        "Jasna komunikacja, spokojny proces i konkretne rekomendacje zamiast przypadkowych ofert.",
        "Wsparcie od pierwszej rozmowy aż po decyzję zakupową.",
        "Podejście dopasowane do celu: drugi dom, inwestycja lub przeprowadzka.",
      ],
    },
    cta: {
      imageAlt: "Nowoczesna willa na Cyprze",
      eyebrow: "Bezpłatna konsultacja",
      title: "Powiedz nam, czego szukasz na Cyprze.",
      text: "Przygotujemy dopasowane propozycje i wyjaśnimy cały proces zakupu krok po kroku.",
      primaryCta: "Umów bezpłatną konsultację",
      secondaryCta: "Napisz na WhatsApp",
      quickStartTitle: "Szybki start rozmowy",
      quickStartItems: ["Cel zakupu", "Preferowana lokalizacja", "Budżet", "Termin decyzji"],
    },
    footer: {
      description: "Premiumowe wsparcie dla osób szukających apartamentu, domu lub willi na południowym Cyprze.",
      navTitle: "Nawigacja",
      contactTitle: "Kontakt",
      languageTitle: "Język",
      languageText: "Polski · English",
      copyright: "© 2026 Project Cyprus. Nieruchomości na Cyprze.",
      locationLine: "Pafos · Limassol · Larnaca · Ayia Napa · Protaras",
    },
  },
  en: {
    metaLang: "en",
    headerSubtitle: "Real estate advisory",
    navItems: [
      { label: "Properties", href: "#properties" },
      { label: "Buying process", href: "#process" },
      { label: "Why Cyprus", href: "#why" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    consultationCta: "Book a consultation",
    languageLabels: { pl: "PL", en: "EN" },
    mobileMenuOpen: "Open menu",
    mobileMenuClose: "Close menu",
    currentLanguageLabel: "Current language",
    switchLanguageLabel: "Switch language to",
    hero: {
      imageAlt: "Cyprus coastline at sunset",
      eyebrow: "English-speaking support in Cyprus",
      title: "Find your property in Cyprus with complete peace of mind.",
      text: "We help you choose verified apartments, villas, and investment properties in the best locations of southern Cyprus, from the first conversation to collecting the keys.",
      primaryCta: "Book a free consultation",
      secondaryCta: "View properties",
      locationStrip: "Paphos · Limassol · Larnaca · Ayia Napa · Protaras",
      scrollCue: "Scroll",
    },
    heroStats: [
      { value: "15+", label: "years of experience", icon: Star },
      { value: "PL / EN", label: "support", icon: MessageCircle },
      { value: "0%", label: "buyer commission", icon: Euro },
      { value: "Paphos", label: "and southern Cyprus", icon: MapPin },
    ],
    promises: [
      {
        title: "Verified developers",
        text: "We check projects, locations, and partners before presenting them to clients.",
        icon: Building2,
      },
      {
        title: "No buyer commission",
        text: "We work transparently, and selected offers do not charge commission to the buyer.",
        icon: Euro,
      },
      {
        title: "Legal and process support",
        text: "We help organize documents, reservations, and each stage of the purchase process.",
        icon: ShieldCheck,
      },
      {
        title: "After-purchase help",
        text: "The keys are not the end. We help you settle practical matters on the ground.",
        icon: KeyRound,
      },
    ],
    intro: {
      eyebrow: "Lifestyle and investment",
      title: "Every good decision starts with the right place.",
      text: "Cyprus can be a second home, a calm investment, or the beginning of a completely new lifestyle. Our role is to organize the possibilities, reduce risk, and show you only the properties that truly make sense.",
      quote: "You are not just buying an address. You are choosing lifestyle, security, and the future.",
      imageAlt: "Elegant holiday home in Cyprus",
      cardEyebrow: "Project Cyprus",
      cardText: "Peace of mind starts with the right selection.",
    },
    properties: {
      eyebrow: "Featured listings",
      title: "Selected properties worth your attention",
      text: "Carefully chosen apartments, houses, and villas in locations that combine investment potential with quality of life.",
      allCta: "See all offers",
      detailsCta: "Ask",
      items: [
        {
          title: "Sea-view apartment",
          location: "Paphos, Universal",
          price: "from €245,000",
          beds: "2 bedrooms",
          type: "Apartment",
          status: "No commission",
          image: propertyImages[0],
        },
        {
          title: "Modern villa with a pool",
          location: "Tala, Paphos",
          price: "from €590,000",
          beds: "3 bedrooms",
          type: "Villa",
          status: "Special offer",
          image: propertyImages[1],
        },
        {
          title: "Home close to the beach and restaurants",
          location: "Coral Bay",
          price: "from €420,000",
          beds: "3 bedrooms",
          type: "House",
          status: "New listing",
          image: propertyImages[2],
        },
      ],
    },
    why: {
      eyebrow: "Why Cyprus",
      title: "Sun, safety, and a market that attracts investors.",
      text: "Cyprus offers more than beautiful views. It combines quality of life, stable rental demand, and a calmer everyday rhythm.",
      cards: [
        "More than 300 sunny days a year",
        "Stable rental market",
        "Safe environment for families",
        "Attractive lifestyle",
        "Good connections with Europe",
        "Growing investor interest",
      ],
      imageAlt: "Modern Mediterranean villa",
      locationEyebrow: "Locations",
      locationTitle: "Paphos · Limassol · Larnaca",
      locationText: "We match the region to your goal: second home, rental income, investment, or relocation.",
    },
    process: {
      eyebrow: "Buying process",
      title: "A clear path from first idea to key handover.",
      text: "Every stage comes with decisions, documents, and questions. Our role is to guide you through them calmly and clearly.",
      steps: [
        {
          title: "Free consultation",
          text: "We discuss your purchase goal, lifestyle, budget, and preferred locations.",
        },
        {
          title: "Location and budget planning",
          text: "We organize options so the investment fits your plan, not just the photos.",
        },
        {
          title: "Selection of verified offers",
          text: "We show selected properties with clear reasoning and real potential.",
        },
        {
          title: "Online or in-person viewing",
          text: "We organize viewings, compare projects, and answer specific questions.",
        },
        {
          title: "Reservation and legal support",
          text: "We help with documents, lawyer communication, and the reservation process.",
        },
        {
          title: "Key handover and after-purchase help",
          text: "We support the handover and the practical decisions that follow.",
        },
      ],
    },
    about: {
      eyebrow: "About Project Cyprus",
      title: "Local knowledge, clear communication, and a personal approach.",
      text: "Project Cyprus helps people looking for property in Cyprus move through the whole process with clarity and confidence, from choosing a location and shortlisting offers to coordinating with lawyers, developers, and after-purchase services.",
      imageAlt: "Elegant apartment interior",
      imageCardText: "Local insight, trusted contacts, and communication that gives you a sense of control.",
      primaryCta: "Let’s meet",
      secondaryCta: "Message us on WhatsApp",
    },
    credibility: [
      { value: "15+", label: "years of experience" },
      { value: "PL / EN", label: "communication" },
      { value: "0%", label: "buyer commission" },
      { value: "South", label: "Cyprus focus" },
    ],
    testimonials: {
      eyebrow: "Testimonials",
      title: "What do our clients value?",
      text: "This section is prepared for real client testimonials. For now, it highlights the core values of the process.",
      quotes: [
        "Clear communication, a calm process, and concrete recommendations instead of random listings.",
        "Support from the first conversation all the way to the purchase decision.",
        "An approach tailored to the goal: second home, investment, or relocation.",
      ],
    },
    cta: {
      imageAlt: "Modern villa in Cyprus",
      eyebrow: "Free consultation",
      title: "Tell us what you are looking for in Cyprus.",
      text: "We will prepare matched proposals and explain the whole buying process step by step.",
      primaryCta: "Book a free consultation",
      secondaryCta: "Message us on WhatsApp",
      quickStartTitle: "Start the conversation",
      quickStartItems: ["Purchase goal", "Preferred location", "Budget", "Decision timeline"],
    },
    footer: {
      description: "Premium support for people looking for an apartment, house, or villa in southern Cyprus.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      languageTitle: "Language",
      languageText: "English · Polski",
      copyright: "© 2026 Project Cyprus. Property in Cyprus.",
      locationLine: "Paphos · Limassol · Larnaca · Ayia Napa · Protaras",
    },
  },
} satisfies Record<Language, SiteCopy>;

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LanguageSwitcher({
  language,
  onChange,
  copy,
}: {
  language: Language;
  onChange: (language: Language) => void;
  copy: SiteCopy;
}) {
  return (
    <div className="flex rounded-full border border-white/15 bg-white/8 p-1 text-[0.72rem] font-semibold uppercase text-[#fffaf2]/70 shadow-inner shadow-black/20 backdrop-blur">
      {(["pl", "en"] as const).map((item) => {
        const active = item === language;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={active}
            aria-label={`${active ? copy.currentLanguageLabel : copy.switchLanguageLabel}: ${copy.languageLabels[item]}`}
            className={`rounded-full px-3 py-2 transition ${
              active
                ? "bg-[#d8c4a3] text-[#07131f] shadow-sm"
                : "hover:text-[#fffaf2]"
            }`}
          >
            {copy.languageLabels[item]}
          </button>
        );
      })}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
        dark
          ? "bg-[#07131f] text-[#fffaf2] hover:bg-[#0b1623]"
          : "bg-[#d8c4a3] text-[#07131f] shadow-[0_20px_55px_rgba(216,196,163,0.25)] hover:bg-[#e4d0ad]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition ${
        light
          ? "border-white/25 bg-white/10 text-[#fffaf2] backdrop-blur hover:bg-white/15"
          : "border-[#07131f]/15 bg-[#07131f]/5 text-[#07131f] hover:bg-[#07131f]/10"
      }`}
    >
      {children}
    </a>
  );
}

function FloatingHeader({
  language,
  onLanguageChange,
  copy,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: SiteCopy;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border border-white/15 bg-[#07131f]/72 px-4 py-3 text-[#fffaf2] shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:rounded-full md:px-5">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c4a3]/30 bg-[#fffaf2]/10 text-sm font-semibold">
            PC
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide md:text-base">
              Project Cyprus
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-[#d8c4a3]/80">
              {copy.headerSubtitle}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {copy.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#fffaf2]/78 transition hover:bg-white/10 hover:text-[#fffaf2]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher language={language} onChange={onLanguageChange} copy={copy} />
          <a
            href="#contact"
            className="rounded-full bg-[#d8c4a3] px-5 py-3 text-sm font-semibold text-[#07131f] transition hover:bg-[#e4d0ad]"
          >
            {copy.consultationCta}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? copy.mobileMenuClose : copy.mobileMenuOpen}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#07131f]/95 p-4 text-[#fffaf2] shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <nav className="grid gap-1">
            {copy.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#fffaf2]/82 hover:bg-white/8"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <LanguageSwitcher language={language} onChange={onLanguageChange} copy={copy} />
            <PrimaryButton href="#contact">{copy.consultationCta}</PrimaryButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <FadeIn
      className={`mx-auto ${align === "center" ? "max-w-3xl text-center" : "max-w-4xl"}`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
          light ? "text-[#d8c4a3]" : "text-[#7f8f68]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl ${
          light ? "text-[#fffaf2]" : "text-[#07131f]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            light ? "text-[#fffaf2]/68" : "text-[#283949]/72"
          }`}
        >
          {text}
        </p>
      )}
    </FadeIn>
  );
}

function HeroSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#07131f] text-[#fffaf2]">
      <Image
        src={heroImage}
        alt={copy.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,0.93),rgba(7,19,31,0.68)_42%,rgba(7,19,31,0.28)),linear-gradient(0deg,rgba(7,19,31,0.96),rgba(7,19,31,0.08)_44%,rgba(7,19,31,0.4))]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 md:px-8 md:pb-12 md:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-[#fffaf2]/86 shadow-lg backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#d8c4a3]" />
              {copy.hero.eyebrow}
            </div>
            <h1 className="font-serif text-5xl leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#fffaf2]/76 md:text-xl">
              {copy.hero.text}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#contact">{copy.hero.primaryCta}</PrimaryButton>
              <SecondaryButton href="#properties" light>
                {copy.hero.secondaryCta}
              </SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            className="grid grid-cols-2 gap-3"
          >
            {copy.heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/14 bg-white/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                >
                  {Icon && <Icon className="mb-5 h-5 w-5 text-[#d8c4a3]" />}
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 text-[#fffaf2]/68">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm uppercase tracking-[0.22em] text-[#fffaf2]/62 md:flex-row md:items-center md:justify-between">
          <span>{copy.hero.locationStrip}</span>
          <a href="#promise" className="inline-flex items-center gap-2 text-[#d8c4a3]">
            {copy.hero.scrollCue} <ChevronRight className="h-4 w-4 rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ copy }: { copy: SiteCopy }) {
  return (
    <section id="promise" className="bg-[#07131f] px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {copy.promises.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-[#0b1623] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.22)]">
                <Icon className="h-6 w-6 text-[#d8c4a3]" />
                <h3 className="mt-6 text-lg font-semibold text-[#fffaf2]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#fffaf2]/62">{item.text}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function IntroSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="bg-[#f4efe7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7f8f68]">
            {copy.intro.eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-[#07131f] md:text-7xl">
            {copy.intro.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#283949]/76">
            {copy.intro.text}
          </p>
          <blockquote className="mt-10 max-w-3xl border-l border-[#b9975b] pl-6 font-serif text-2xl leading-snug text-[#07131f] md:text-3xl">
            {copy.intro.quote}
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
          <div className="absolute -left-6 -top-6 hidden h-36 w-36 rounded-[2rem] border border-[#b9975b]/25 bg-[#d8c4a3]/30 md:block" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#07131f] shadow-[0_28px_90px_rgba(7,19,31,0.22)]">
            <Image
              src={introImage}
              alt={copy.intro.imageAlt}
              width={900}
              height={1100}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131f]/72 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-[1.5rem] border border-white/14 bg-white/12 p-5 text-[#fffaf2] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d8c4a3]">
                  {copy.intro.cardEyebrow}
                </p>
                <p className="mt-2 text-lg font-semibold">{copy.intro.cardText}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
  index,
  detailsCta,
}: {
  property: Property;
  index: number;
  detailsCta: string;
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="group relative flex min-h-[520px] overflow-hidden rounded-[2rem] bg-[#07131f] shadow-[0_24px_90px_rgba(7,19,31,0.18)] transition duration-500 hover:-translate-y-2">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,31,0.08),rgba(7,19,31,0.92))]" />
        <div className="relative z-10 flex w-full flex-col justify-between p-5 text-[#fffaf2]">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/12 px-3 py-2 text-xs font-semibold backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-[#d8c4a3]" />
              {property.location}
            </span>
            <span className="rounded-full bg-[#d8c4a3] px-3 py-2 text-xs font-semibold text-[#07131f]">
              {property.status}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-3xl leading-tight">{property.title}</h3>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/14 pt-5">
              <div>
                <p className="text-2xl font-semibold text-[#d8c4a3]">{property.price}</p>
                <p className="mt-1 text-sm text-[#fffaf2]/70">
                  {property.type} · {property.beds}
                </p>
              </div>
              <a
                href="#contact"
                className="group/link inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/16"
              >
                {detailsCta}
                <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

function FeaturedProperties({ copy }: { copy: SiteCopy }) {
  return (
    <section id="properties" className="bg-[#f4efe7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_0.45fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.properties.eyebrow}
            title={copy.properties.title}
            text={copy.properties.text}
          />
          <FadeIn className="lg:justify-self-end">
            <SecondaryButton href="#contact">{copy.properties.allCta}</SecondaryButton>
          </FadeIn>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {copy.properties.items.map((property, index) => (
            <PropertyCard
              key={property.title}
              property={property}
              index={index}
              detailsCta={copy.properties.detailsCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCyprus({ copy }: { copy: SiteCopy }) {
  return (
    <section id="why" className="overflow-hidden bg-[#07131f] px-5 py-24 text-[#fffaf2] md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <SectionHeading
            eyebrow={copy.why.eyebrow}
            title={copy.why.title}
            text={copy.why.text}
            light
          />
          <FadeIn className="mt-10 grid gap-3 sm:grid-cols-2">
            {copy.why.cards.map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4"
              >
                <CheckCircle2 className="mb-4 h-5 w-5 text-[#d8c4a3]" />
                <p className="text-sm font-medium leading-6 text-[#fffaf2]/82">{item}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.14} className="relative">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-[#7f8f68]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_26px_100px_rgba(0,0,0,0.35)]">
            <Image
              src={whyImage}
              alt={copy.why.imageAlt}
              width={1000}
              height={1200}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131f]/86 via-[#07131f]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/14 bg-[#07131f]/55 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d8c4a3]">
                {copy.why.locationEyebrow}
              </p>
              <p className="mt-3 text-2xl font-semibold">{copy.why.locationTitle}</p>
              <p className="mt-2 text-sm leading-6 text-[#fffaf2]/68">
                {copy.why.locationText}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProcessTimeline({ copy }: { copy: SiteCopy }) {
  return (
    <section id="process" className="relative overflow-hidden bg-[#f4efe7] px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#07131f]/8 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={copy.process.eyebrow}
          title={copy.process.title}
          text={copy.process.text}
          align="center"
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {copy.process.steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <div className="group h-full rounded-[1.75rem] border border-[#07131f]/10 bg-white/70 p-6 shadow-[0_20px_70px_rgba(7,19,31,0.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl text-[#b9975b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#07131f] text-[#d8c4a3] transition group-hover:rotate-6">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#07131f]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#283949]/70">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="about" className="bg-[#f4efe7] px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] border border-[#07131f]/10 bg-[#fffaf2] p-4 shadow-[0_30px_100px_rgba(7,19,31,0.1)] lg:grid-cols-[0.86fr_1fr] lg:p-6">
        <FadeIn className="relative overflow-hidden rounded-[1.6rem]">
          <Image
            src={aboutImage}
            alt={copy.about.imageAlt}
            width={950}
            height={1100}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131f]/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/14 bg-white/12 p-5 text-[#fffaf2] backdrop-blur-xl">
            <p className="text-sm leading-6">{copy.about.imageCardText}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="px-2 py-8 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7f8f68]">
            {copy.about.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-[#07131f] md:text-6xl">
            {copy.about.title}
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#283949]/74">{copy.about.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#contact" dark>
              {copy.about.primaryCta}
            </PrimaryButton>
            <SecondaryButton href={whatsappHref}>
              <MessageCircle className="h-4 w-4" />
              {copy.about.secondaryCta}
            </SecondaryButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CredibilitySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="bg-[#07131f] px-5 py-20 text-[#fffaf2] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {copy.credibility.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="border-l border-white/12 pl-6">
              <p className="font-serif text-5xl tracking-tight text-[#d8c4a3] md:text-6xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#fffaf2]/60">
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="bg-[#0b1623] px-5 py-24 text-[#fffaf2] md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={copy.testimonials.eyebrow}
          title={copy.testimonials.title}
          text={copy.testimonials.text}
          align="center"
          light
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {copy.testimonials.quotes.map((quote, index) => (
            <FadeIn key={quote} delay={index * 0.08}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7">
                <p className="font-serif text-6xl leading-none text-[#d8c4a3]">“</p>
                <p className="mt-4 text-lg leading-8 text-[#fffaf2]/78">{quote}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#07131f] px-5 py-24 text-[#fffaf2] md:px-8 md:py-32">
      <Image
        src={ctaImage}
        alt={copy.cta.imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,0.96),rgba(7,19,31,0.72),rgba(7,19,31,0.45))]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c4a3]">
            {copy.cta.eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
            {copy.cta.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf2]/72">
            {copy.cta.text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={`mailto:${contactEmail}`}>
              {copy.cta.primaryCta}
            </PrimaryButton>
            <SecondaryButton href={whatsappHref} light>
              <MessageCircle className="h-4 w-4" />
              {copy.cta.secondaryCta}
            </SecondaryButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="rounded-[2rem] border border-white/14 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-sm font-semibold text-[#d8c4a3]">
              {copy.cta.quickStartTitle}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#fffaf2]/72">
              {copy.cta.quickStartItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#07131f]/35 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="bg-[#050d15] px-5 py-12 text-[#fffaf2] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.65fr_0.65fr_0.65fr]">
        <div>
          <p className="text-2xl font-semibold">Project Cyprus</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#fffaf2]/58">
            {copy.footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d8c4a3]">{copy.footer.navTitle}</p>
          <div className="mt-4 grid gap-3 text-sm text-[#fffaf2]/62">
            {copy.navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#fffaf2]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d8c4a3]">
            {copy.footer.contactTitle}
          </p>
          <div className="mt-4 grid gap-3 text-sm text-[#fffaf2]/62">
            <a href={whatsappHref} className="hover:text-[#fffaf2]">
              WhatsApp
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-[#fffaf2]">
              {contactEmail}
            </a>
            <span>Pafos, Cyprus</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d8c4a3]">
            {copy.footer.languageTitle}
          </p>
          <p className="mt-4 text-sm text-[#fffaf2]/62">{copy.footer.languageText}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#fffaf2]/42 md:flex-row">
        <p>{copy.footer.copyright}</p>
        <p>{copy.footer.locationLine}</p>
      </div>
    </footer>
  );
}

export default function ProjectCyprusHomepage() {
  const [language, setLanguage] = React.useState<Language>("pl");
  const copy = content[language];

  React.useEffect(() => {
    document.documentElement.lang = copy.metaLang;
  }, [copy.metaLang]);

  return (
    <main className="min-h-screen bg-[#07131f] text-[#07131f]">
      <FloatingHeader
        language={language}
        onLanguageChange={setLanguage}
        copy={copy}
      />
      <HeroSection copy={copy} />
      <TrustStrip copy={copy} />
      <IntroSection copy={copy} />
      <FeaturedProperties copy={copy} />
      <WhyCyprus copy={copy} />
      <ProcessTimeline copy={copy} />
      <AboutSection copy={copy} />
      <CredibilitySection copy={copy} />
      <TestimonialsSection copy={copy} />
      <CTASection copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}
