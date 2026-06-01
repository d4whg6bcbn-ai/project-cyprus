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
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { brandAssets } from "@/lib/brand";

type Language = "pl" | "en" | "el";

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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.2V2h-3.1c-3.4 0-4.2 2.5-4.2 4.1v2.1H7.3V12H10v10h4.2V12h2.8l.4-3.8h-3.2Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect width="16" height="16" x="4" y="4" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

type ProcessStep = {
  title: string;
  text: string;
};

type SelectField = {
  label: string;
  placeholder: string;
  options: string[];
};

type TextField = {
  label: string;
  placeholder: string;
};

type FormCopy = {
  title: string;
  text: string;
  submit: string;
  fields: {
    purpose: SelectField;
    budget: SelectField;
    visit: SelectField;
    market: SelectField;
    name: TextField;
    email: TextField;
    phone: TextField;
  };
};

type VideoCopy = {
  mutedLabel: string;
  unmutedLabel: string;
  muteAriaLabel: string;
  unmuteAriaLabel: string;
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
  video: VideoCopy;
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
    contactTitle: string;
  };
  form: FormCopy;
  contact: {
    agentLabel: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    socialLabel: string;
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

const agentName = "Małgorzata Pietkiewicz";
const contactEmail = "margaret@projectcyprus.com";
const cyprusPhone = "+357 94 497547";
const cyprusPhoneHref = "tel:+35794497547";
const polishPhone = "+48 601 922 193";
const polishPhoneHref = "tel:+48601922193";
const whatsappHref = "https://wa.me/48601922193";
const facebookHref = "https://www.facebook.com/profile.php?id=61577908631612";
const instagramHref = "https://www.instagram.com/projectcyprus_/";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85";
const whyImage =
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=85";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
];

// Keep both language entries in sync whenever page content changes.
const content = {
  pl: {
    metaLang: "pl",
    headerSubtitle: "Real Estate Advisory",
    navItems: [
      { label: "Nieruchomości", href: "#properties" },
      { label: "Proces zakupu", href: "#process" },
      { label: "Dlaczego Cypr", href: "#why" },
      { label: "O nas", href: "#about" },
      { label: "Kontakt", href: "#contact" },
    ],
    consultationCta: "Umów konsultację",
    languageLabels: { pl: "PL", en: "EN", el: "GR" },
    mobileMenuOpen: "Otwórz menu",
    mobileMenuClose: "Zamknij menu",
    currentLanguageLabel: "Aktualny język",
    switchLanguageLabel: "Przełącz język na",
    video: {
      mutedLabel: "Kliknij, aby obejrzeć z dźwiękiem",
      unmutedLabel: "Odtwarzanie z dźwiękiem",
      muteAriaLabel: "Wycisz wideo",
      unmuteAriaLabel: "Odtwórz wideo z dźwiękiem",
    },
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
      contactTitle: "Porozmawiaj z doradcą",
    },
    form: {
      title: "Formularz konsultacji",
      text: "Wybierz odpowiedzi, a Małgorzata Pietkiewicz przygotuje dla Ciebie właściwy kierunek rozmowy.",
      submit: "Wyślij zapytanie",
      fields: {
        purpose: {
          label: "Cel zakupu",
          placeholder: "Wybierz cel zakupu",
          options: ["Inwestycja", "Relokacja"],
        },
        budget: {
          label: "Budżet",
          placeholder: "Wybierz budżet",
          options: ["Do 250 000 EUR", "250 000–500 000 EUR", "Powyżej 500 000 EUR"],
        },
        visit: {
          label: "Czy chciałbyś przylecieć na Cypr obejrzeć wybrane apartamenty lub domy na żywo?",
          placeholder: "Wybierz odpowiedź",
          options: ["Tak, chcę", "Na razie nie"],
        },
        market: {
          label: "Czy interesuje Cię rynek wtórny, pierwotny czy oba?",
          placeholder: "Wybierz rynek",
          options: ["Rynek wtórny", "Rynek pierwotny", "Oba"],
        },
        name: {
          label: "Imię i nazwisko",
          placeholder: "Wpisz imię i nazwisko",
        },
        email: {
          label: "Email",
          placeholder: "Wpisz adres email",
        },
        phone: {
          label: "Telefon",
          placeholder: "Wpisz numer telefonu",
        },
      },
    },
    contact: {
      agentLabel: "Agent",
      emailLabel: "Email",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      socialLabel: "Media społecznościowe",
    },
    footer: {
      description: "Premiumowe wsparcie dla osób szukających apartamentu, domu lub willi na południowym Cyprze.",
      navTitle: "Nawigacja",
      contactTitle: "Kontakt",
      languageTitle: "Język",
      languageText: "Polski · English · Ελληνικά",
      copyright: "© 2026 Project Cyprus. Nieruchomości na Cyprze.",
      locationLine: "Pafos · Limassol · Larnaca · Ayia Napa · Protaras",
    },
  },
  en: {
    metaLang: "en",
    headerSubtitle: "Real Estate Advisory",
    navItems: [
      { label: "Properties", href: "#properties" },
      { label: "Buying process", href: "#process" },
      { label: "Why Cyprus", href: "#why" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    consultationCta: "Book a consultation",
    languageLabels: { pl: "PL", en: "EN", el: "GR" },
    mobileMenuOpen: "Open menu",
    mobileMenuClose: "Close menu",
    currentLanguageLabel: "Current language",
    switchLanguageLabel: "Switch language to",
    video: {
      mutedLabel: "Click to watch with sound",
      unmutedLabel: "Playing with sound",
      muteAriaLabel: "Mute video",
      unmuteAriaLabel: "Play video with sound",
    },
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
      contactTitle: "Speak with an advisor",
    },
    form: {
      title: "Consultation form",
      text: "Choose your answers and Małgorzata Pietkiewicz will prepare the right direction for the conversation.",
      submit: "Send enquiry",
      fields: {
        purpose: {
          label: "Purchase purpose",
          placeholder: "Choose purchase purpose",
          options: ["Investment", "Relocation"],
        },
        budget: {
          label: "Budget",
          placeholder: "Choose budget",
          options: ["Up to 250 000 EUR", "250 000–500 000 EUR", "Above 500 000 EUR"],
        },
        visit: {
          label: "Would you like to fly to Cyprus to view selected apartments or houses in person?",
          placeholder: "Choose an answer",
          options: ["Yes, I would", "Not yet"],
        },
        market: {
          label: "Are you interested in resale properties, new-build properties, or both?",
          placeholder: "Choose market type",
          options: ["Resale market", "New-build market", "Both"],
        },
        name: {
          label: "Full name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email",
          placeholder: "Enter your email address",
        },
        phone: {
          label: "Phone",
          placeholder: "Enter your phone number",
        },
      },
    },
    contact: {
      agentLabel: "Agent",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      socialLabel: "Social media",
    },
    footer: {
      description: "Premium support for people looking for an apartment, house, or villa in southern Cyprus.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      languageTitle: "Language",
      languageText: "English · Polski · Ελληνικά",
      copyright: "© 2026 Project Cyprus. Property in Cyprus.",
      locationLine: "Paphos · Limassol · Larnaca · Ayia Napa · Protaras",
    },
  },
  el: {
    metaLang: "el",
    headerSubtitle: "Real Estate Advisory",
    navItems: [
      { label: "Ακίνητα", href: "#properties" },
      { label: "Διαδικασία αγοράς", href: "#process" },
      { label: "Γιατί Κύπρος", href: "#why" },
      { label: "Σχετικά με εμάς", href: "#about" },
      { label: "Επικοινωνία", href: "#contact" },
    ],
    consultationCta: "Κλείστε συμβουλευτική",
    languageLabels: { pl: "PL", en: "EN", el: "GR" },
    mobileMenuOpen: "Άνοιγμα μενού",
    mobileMenuClose: "Κλείσιμο μενού",
    currentLanguageLabel: "Τρέχουσα γλώσσα",
    switchLanguageLabel: "Αλλαγή γλώσσας σε",
    video: {
      mutedLabel: "Κάντε κλικ για προβολή με ήχο",
      unmutedLabel: "Αναπαραγωγή με ήχο",
      muteAriaLabel: "Σίγαση βίντεο",
      unmuteAriaLabel: "Αναπαραγωγή βίντεο με ήχο",
    },
    hero: {
      imageAlt: "Ακτογραμμή της Κύπρου στο ηλιοβασίλεμα",
      eyebrow: "Υποστήριξη στην Κύπρο στα ελληνικά, αγγλικά και πολωνικά",
      title: "Βρείτε ακίνητο στην Κύπρο με απόλυτη ηρεμία.",
      text: "Σας βοηθάμε να επιλέξετε ελεγμένα διαμερίσματα, βίλες και επενδυτικά ακίνητα στις καλύτερες τοποθεσίες της νότιας Κύπρου — από την πρώτη συζήτηση μέχρι την παράδοση των κλειδιών.",
      primaryCta: "Κλείστε δωρεάν συμβουλευτική",
      secondaryCta: "Δείτε ακίνητα",
      locationStrip: "Πάφος · Λεμεσός · Λάρνακα · Αγία Νάπα · Πρωταράς",
      scrollCue: "Κύλιση",
    },
    heroStats: [
      { value: "15+", label: "χρόνια εμπειρίας", icon: Star },
      { value: "PL / EN", label: "εξυπηρέτηση", icon: MessageCircle },
      { value: "0%", label: "προμήθεια αγοραστή", icon: Euro },
      { value: "Πάφος", label: "και νότια Κύπρος", icon: MapPin },
    ],
    promises: [
      {
        title: "Ελεγμένοι κατασκευαστές",
        text: "Ελέγχουμε έργα, τοποθεσίες και συνεργάτες πριν τα παρουσιάσουμε στους πελάτες.",
        icon: Building2,
      },
      {
        title: "Χωρίς προμήθεια αγοραστή",
        text: "Εργαζόμαστε με διαφάνεια και επιλεγμένες προσφορές δεν επιβαρύνουν τον αγοραστή με προμήθεια.",
        icon: Euro,
      },
      {
        title: "Νομική και διαδικαστική υποστήριξη",
        text: "Βοηθάμε στην οργάνωση εγγράφων, κρατήσεων και κάθε σταδίου της αγοράς.",
        icon: ShieldCheck,
      },
      {
        title: "Βοήθεια μετά την αγορά",
        text: "Η παράδοση των κλειδιών δεν είναι το τέλος. Σας βοηθάμε με πρακτικά θέματα επιτόπου.",
        icon: KeyRound,
      },
    ],
    intro: {
      eyebrow: "Τρόπος ζωής και επένδυση",
      title: "Κάθε σωστή απόφαση αρχίζει από το κατάλληλο μέρος.",
      text: "Η Κύπρος μπορεί να είναι δεύτερη κατοικία, ήρεμη επένδυση ή η αρχή ενός νέου τρόπου ζωής. Ο ρόλος μας είναι να οργανώσουμε τις επιλογές, να μειώσουμε το ρίσκο και να σας δείξουμε μόνο ακίνητα που πραγματικά έχουν νόημα.",
      quote: "Δεν αγοράζετε απλώς μια διεύθυνση. Επιλέγετε τρόπο ζωής, ασφάλεια και μέλλον.",
      imageAlt: "Κομψή εξοχική κατοικία στην Κύπρο",
      cardEyebrow: "Project Cyprus",
      cardText: "Η ηρεμία στην απόφαση αρχίζει με σωστή επιλογή.",
    },
    properties: {
      eyebrow: "Επιλεγμένες προτάσεις",
      title: "Επιλεγμένα ακίνητα που αξίζουν την προσοχή σας",
      text: "Προσεκτικά επιλεγμένα διαμερίσματα, κατοικίες και βίλες σε τοποθεσίες που συνδυάζουν επενδυτική προοπτική με ποιότητα ζωής.",
      allCta: "Δείτε όλες τις προσφορές",
      detailsCta: "Ρωτήστε",
      items: [
        {
          title: "Διαμέρισμα με θέα στη θάλασσα",
          location: "Πάφος, Universal",
          price: "από €245,000",
          beds: "2 υπνοδωμάτια",
          type: "Διαμέρισμα",
          status: "Χωρίς προμήθεια",
          image: propertyImages[0],
        },
        {
          title: "Σύγχρονη βίλα με πισίνα",
          location: "Τάλα, Πάφος",
          price: "από €590,000",
          beds: "3 υπνοδωμάτια",
          type: "Βίλα",
          status: "Ειδική προσφορά",
          image: propertyImages[1],
        },
        {
          title: "Κατοικία κοντά στην παραλία και τα εστιατόρια",
          location: "Coral Bay",
          price: "από €420,000",
          beds: "3 υπνοδωμάτια",
          type: "Κατοικία",
          status: "Νέα καταχώρηση",
          image: propertyImages[2],
        },
      ],
    },
    why: {
      eyebrow: "Γιατί Κύπρος",
      title: "Ήλιος, ασφάλεια και μια αγορά που προσελκύει επενδυτές.",
      text: "Η Κύπρος προσφέρει κάτι περισσότερο από όμορφη θέα. Συνδυάζει ποιότητα ζωής, σταθερή ζήτηση για ενοικίαση και πιο ήρεμο καθημερινό ρυθμό.",
      cards: [
        "Πάνω από 300 ηλιόλουστες ημέρες τον χρόνο",
        "Σταθερή αγορά ενοικίασης",
        "Ασφαλές περιβάλλον για οικογένειες",
        "Ελκυστικός τρόπος ζωής",
        "Καλές συνδέσεις με την Ευρώπη",
        "Αυξανόμενο ενδιαφέρον επενδυτών",
      ],
      imageAlt: "Σύγχρονη μεσογειακή βίλα",
      locationEyebrow: "Τοποθεσίες",
      locationTitle: "Πάφος · Λεμεσός · Λάρνακα",
      locationText: "Ταιριάζουμε την περιοχή με τον στόχο σας: δεύτερη κατοικία, εισόδημα από ενοίκιο, επένδυση ή μετεγκατάσταση.",
    },
    process: {
      eyebrow: "Διαδικασία αγοράς",
      title: "Μια ξεκάθαρη διαδρομή από την πρώτη ιδέα μέχρι την παράδοση των κλειδιών.",
      text: "Κάθε στάδιο έχει αποφάσεις, έγγραφα και ερωτήσεις. Ο ρόλος μας είναι να σας καθοδηγήσουμε ήρεμα και ξεκάθαρα.",
      steps: [
        {
          title: "Δωρεάν συμβουλευτική",
          text: "Συζητάμε τον σκοπό αγοράς, τον τρόπο ζωής, τον προϋπολογισμό και τις προτιμώμενες τοποθεσίες.",
        },
        {
          title: "Επιλογή τοποθεσίας και προϋπολογισμού",
          text: "Οργανώνουμε τις επιλογές ώστε η επένδυση να ταιριάζει στο σχέδιό σας, όχι μόνο στις φωτογραφίες.",
        },
        {
          title: "Επιλογή ελεγμένων προτάσεων",
          text: "Παρουσιάζουμε επιλεγμένα ακίνητα με σαφή αιτιολόγηση και πραγματική προοπτική.",
        },
        {
          title: "Παρουσίαση online ή από κοντά",
          text: "Οργανώνουμε προβολές, συγκρίνουμε έργα και απαντάμε σε συγκεκριμένες ερωτήσεις.",
        },
        {
          title: "Κράτηση και νομική υποστήριξη",
          text: "Βοηθάμε με τα έγγραφα, την επικοινωνία με δικηγόρο και τη διαδικασία κράτησης.",
        },
        {
          title: "Παράδοση κλειδιών και βοήθεια μετά την αγορά",
          text: "Σας υποστηρίζουμε στην παράδοση και στις πρακτικές αποφάσεις που ακολουθούν.",
        },
      ],
    },
    about: {
      eyebrow: "Σχετικά με το Project Cyprus",
      title: "Τοπική γνώση, καθαρή επικοινωνία και προσωπική προσέγγιση.",
      text: "Το Project Cyprus βοηθά όσους αναζητούν ακίνητο στην Κύπρο να περάσουν όλη τη διαδικασία με σαφήνεια και σιγουριά — από την επιλογή τοποθεσίας και την επιλογή προτάσεων μέχρι τον συντονισμό με δικηγόρους, κατασκευαστές και υπηρεσίες μετά την αγορά.",
      imageAlt: "Κομψό εσωτερικό διαμερίσματος",
      imageCardText: "Τοπική γνώση, αξιόπιστες επαφές και επικοινωνία που σας δίνει αίσθηση ελέγχου.",
      primaryCta: "Ας γνωριστούμε",
      secondaryCta: "Στείλτε μήνυμα στο WhatsApp",
    },
    credibility: [
      { value: "15+", label: "χρόνια εμπειρίας" },
      { value: "PL / EN", label: "επικοινωνία" },
      { value: "0%", label: "προμήθεια αγοραστή" },
      { value: "Νότια", label: "Κύπρος ως επίκεντρο" },
    ],
    testimonials: {
      eyebrow: "Μαρτυρίες",
      title: "Τι εκτιμούν οι πελάτες μας;",
      text: "Η ενότητα είναι έτοιμη για πραγματικές μαρτυρίες πελατών. Προς το παρόν παρουσιάζει τις βασικές αξίες της διαδικασίας.",
      quotes: [
        "Καθαρή επικοινωνία, ήρεμη διαδικασία και συγκεκριμένες προτάσεις αντί για τυχαίες καταχωρήσεις.",
        "Υποστήριξη από την πρώτη συζήτηση μέχρι την αγοραστική απόφαση.",
        "Προσέγγιση προσαρμοσμένη στον στόχο: δεύτερη κατοικία, επένδυση ή μετεγκατάσταση.",
      ],
    },
    cta: {
      imageAlt: "Σύγχρονη βίλα στην Κύπρο",
      eyebrow: "Δωρεάν συμβουλευτική",
      title: "Πείτε μας τι αναζητάτε στην Κύπρο.",
      text: "Θα ετοιμάσουμε προσαρμοσμένες προτάσεις και θα εξηγήσουμε όλη τη διαδικασία αγοράς βήμα προς βήμα.",
      primaryCta: "Κλείστε δωρεάν συμβουλευτική",
      secondaryCta: "Στείλτε μήνυμα στο WhatsApp",
      contactTitle: "Μιλήστε με σύμβουλο",
    },
    form: {
      title: "Φόρμα συμβουλευτικής",
      text: "Επιλέξτε τις απαντήσεις σας και η Małgorzata Pietkiewicz θα προετοιμάσει τη σωστή κατεύθυνση για τη συζήτηση.",
      submit: "Αποστολή αιτήματος",
      fields: {
        purpose: {
          label: "Σκοπός αγοράς",
          placeholder: "Επιλέξτε σκοπό αγοράς",
          options: ["Επένδυση", "Μετεγκατάσταση"],
        },
        budget: {
          label: "Προϋπολογισμός",
          placeholder: "Επιλέξτε προϋπολογισμό",
          options: ["Έως 250 000 EUR", "250 000–500 000 EUR", "Πάνω από 500 000 EUR"],
        },
        visit: {
          label: "Θα θέλατε να ταξιδέψετε στην Κύπρο για να δείτε επιλεγμένα διαμερίσματα ή κατοικίες από κοντά;",
          placeholder: "Επιλέξτε απάντηση",
          options: ["Ναι, θα ήθελα", "Όχι ακόμα"],
        },
        market: {
          label: "Σας ενδιαφέρουν ακίνητα μεταπώλησης, νεόδμητα ακίνητα ή και τα δύο;",
          placeholder: "Επιλέξτε αγορά",
          options: ["Ακίνητα μεταπώλησης", "Νεόδμητα ακίνητα", "Και τα δύο"],
        },
        name: {
          label: "Ονοματεπώνυμο",
          placeholder: "Πληκτρολογήστε ονοματεπώνυμο",
        },
        email: {
          label: "Email",
          placeholder: "Πληκτρολογήστε email",
        },
        phone: {
          label: "Τηλέφωνο",
          placeholder: "Πληκτρολογήστε τηλέφωνο",
        },
      },
    },
    contact: {
      agentLabel: "Σύμβουλος",
      emailLabel: "Email",
      phoneLabel: "Τηλέφωνο",
      whatsappLabel: "WhatsApp",
      socialLabel: "Κοινωνικά δίκτυα",
    },
    footer: {
      description: "Premium υποστήριξη για όσους αναζητούν διαμέρισμα, κατοικία ή βίλα στη νότια Κύπρο.",
      navTitle: "Πλοήγηση",
      contactTitle: "Επικοινωνία",
      languageTitle: "Γλώσσα",
      languageText: "Ελληνικά · English · Polski",
      copyright: "© 2026 Project Cyprus. Ακίνητα στην Κύπρο.",
      locationLine: "Πάφος · Λεμεσός · Λάρνακα · Αγία Νάπα · Πρωταράς",
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
    <div className="flex rounded-full border border-[#D4AF37]/25 bg-[#030303]/70 p-1 text-[0.72rem] font-semibold uppercase text-[#F5E8C7]/70 shadow-inner shadow-black/40 backdrop-blur">
      {(["pl", "en", "el"] as const).map((item) => {
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
                ? "bg-[#D4AF37] text-[#030303] shadow-[0_8px_22px_rgba(212,175,55,0.22)]"
                : "hover:text-[#FFF8E1]"
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
          ? "border border-[#D4AF37]/25 bg-[#030303] text-[#FFF8E1] hover:border-[#D4AF37]/45 hover:bg-[#101010]"
          : "bg-[#D4AF37] text-[#030303] shadow-[0_20px_55px_rgba(212,175,55,0.25)] hover:bg-[#E0C46C]"
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
          ? "border-[#D4AF37]/30 bg-[#030303]/45 text-[#FFF8E1] backdrop-blur hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10"
          : "border-[#D4AF37]/25 bg-[#030303]/60 text-[#FFF8E1] hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/10"
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border border-[#D4AF37]/20 bg-[#030303]/76 px-4 py-3 text-[#FFF8E1] shadow-[0_22px_80px_rgba(0,0,0,0.46)] backdrop-blur-2xl md:rounded-full md:px-5">
        <a href="#" className="flex items-center gap-3" aria-label="Project Cyprus">
          <Image
            src={brandAssets.logoTransparent}
            alt="Project Cyprus"
            width={500}
            height={500}
            priority
            className="h-12 w-12 rounded-full object-contain ring-1 ring-[#D4AF37]/22 md:h-14 md:w-14"
          />
          <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/80 sm:block">
            {copy.headerSubtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[#D4AF37]/15 bg-[#101010]/55 p-1 lg:flex">
          {copy.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#F5E8C7]/78 transition hover:bg-[#D4AF37]/10 hover:text-[#E0C46C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher language={language} onChange={onLanguageChange} copy={copy} />
          <a
            href="#contact"
            className="rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#030303] shadow-[0_14px_34px_rgba(212,175,55,0.22)] transition hover:bg-[#E0C46C]"
          >
            {copy.consultationCta}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? copy.mobileMenuClose : copy.mobileMenuOpen}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#101010]/60 text-[#FFF8E1] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#030303]/96 p-4 text-[#FFF8E1] shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <div className="mb-4 flex items-center gap-3 border-b border-[#D4AF37]/12 pb-4">
            <Image
              src={brandAssets.logoTransparent}
              alt="Project Cyprus"
              width={500}
              height={500}
              className="h-12 w-12 rounded-full object-contain ring-1 ring-[#D4AF37]/20"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/80">
              {copy.headerSubtitle}
            </span>
          </div>
          <nav className="grid gap-1">
            {copy.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#F5E8C7]/82 hover:bg-[#D4AF37]/10 hover:text-[#E0C46C]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <LanguageSwitcher language={language} onChange={onLanguageChange} copy={copy} />
            <PrimaryButton href="#contact">{copy.consultationCta}</PrimaryButton>
            <SocialLinks copy={copy} />
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
        className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]"
      >
        {eyebrow}
      </p>
      <h2
        className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-[#FFF8E1] md:text-6xl"
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            light ? "text-[#FFF8E1]/68" : "text-[#D7C9A0]/76"
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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#030303] text-[#FFF8E1]">
      <Image
        src={heroImage}
        alt={copy.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.95),rgba(3,3,3,0.7)_42%,rgba(3,3,3,0.3)),linear-gradient(0deg,rgba(3,3,3,0.98),rgba(3,3,3,0.08)_44%,rgba(3,3,3,0.45))]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 md:px-8 md:pb-12 md:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-[#FFF8E1]/86 shadow-lg backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              {copy.hero.eyebrow}
            </div>
            <h1 className="font-serif text-5xl leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#FFF8E1]/76 md:text-xl">
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
                  {Icon && <Icon className="mb-5 h-5 w-5 text-[#D4AF37]" />}
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 text-[#FFF8E1]/68">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm uppercase tracking-[0.22em] text-[#FFF8E1]/62 md:flex-row md:items-center md:justify-between">
          <span>{copy.hero.locationStrip}</span>
          <a href="#promise" className="inline-flex items-center gap-2 text-[#D4AF37]">
            {copy.hero.scrollCue} <ChevronRight className="h-4 w-4 rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ copy }: { copy: SiteCopy }) {
  return (
    <section id="promise" className="bg-[#030303] px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {copy.promises.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-[#101010] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.22)]">
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-6 text-lg font-semibold text-[#FFF8E1]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#FFF8E1]/62">{item.text}</p>
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
    <section className="bg-[#050505] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {copy.intro.eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-[#FFF8E1] md:text-7xl">
            {copy.intro.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#D7C9A0]/76">
            {copy.intro.text}
          </p>
          <blockquote className="mt-10 max-w-3xl border-l border-[#C9A227] pl-6 font-serif text-2xl leading-snug text-[#F5E8C7] md:text-3xl">
            {copy.intro.quote}
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
          <div className="absolute -left-6 -top-6 hidden h-36 w-36 rounded-[2rem] border border-[#C9A227]/25 bg-[#D4AF37]/30 md:block" />
          <div className="relative">
            <PremiumVideoCard
              previewSrc={brandAssets.videos.whyCyprus.preview}
              fullSrc={brandAssets.videos.whyCyprus.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto w-full max-w-[360px]"
            />
            <div className="mt-4 rounded-[1.5rem] border border-[#D4AF37]/16 bg-[#101010]/80 p-5 text-[#FFF8E1]">
              <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                {copy.intro.cardEyebrow}
              </p>
              <p className="mt-2 text-lg font-semibold">{copy.intro.cardText}</p>
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
      <article className="group relative flex min-h-[520px] overflow-hidden rounded-[2rem] bg-[#030303] shadow-[0_24px_90px_rgba(0,0,0,0.26)] transition duration-500 hover:-translate-y-2">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.08),rgba(3,3,3,0.94))]" />
        <div className="relative z-10 flex w-full flex-col justify-between p-5 text-[#FFF8E1]">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/12 px-3 py-2 text-xs font-semibold backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
              {property.location}
            </span>
            <span className="rounded-full bg-[#D4AF37] px-3 py-2 text-xs font-semibold text-[#030303]">
              {property.status}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-3xl leading-tight">{property.title}</h3>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/14 pt-5">
              <div>
                <p className="text-2xl font-semibold text-[#D4AF37]">{property.price}</p>
                <p className="mt-1 text-sm text-[#FFF8E1]/70">
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
    <section id="properties" className="bg-[#050505] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:items-end">
          <div>
            <SectionHeading
              eyebrow={copy.properties.eyebrow}
              title={copy.properties.title}
              text={copy.properties.text}
            />
            <FadeIn className="mt-8">
              <SecondaryButton href="#contact">{copy.properties.allCta}</SecondaryButton>
            </FadeIn>
          </div>
          <FadeIn delay={0.12} className="w-full lg:justify-self-end">
            <PremiumVideoCard
              previewSrc={brandAssets.videos.featuredListings.preview}
              fullSrc={brandAssets.videos.featuredListings.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto w-full max-w-[320px]"
            />
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
    <section id="why" className="overflow-hidden bg-[#030303] px-5 py-24 text-[#FFF8E1] md:px-8 md:py-32">
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
                <CheckCircle2 className="mb-4 h-5 w-5 text-[#D4AF37]" />
                <p className="text-sm font-medium leading-6 text-[#FFF8E1]/82">{item}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.14} className="relative">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_26px_100px_rgba(0,0,0,0.35)]">
            <Image
              src={whyImage}
              alt={copy.why.imageAlt}
              width={1000}
              height={1200}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/86 via-[#030303]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/14 bg-[#030303]/55 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                {copy.why.locationEyebrow}
              </p>
              <p className="mt-3 text-2xl font-semibold">{copy.why.locationTitle}</p>
              <p className="mt-2 text-sm leading-6 text-[#FFF8E1]/68">
                {copy.why.locationText}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PremiumVideoCard({
  previewSrc,
  fullSrc,
  labels,
  poster,
  className = "",
  aspectClassName = "aspect-[9/16]",
  videoClassName = "",
  objectFitClassName = "object-cover",
  objectPositionClassName = "object-center",
}: {
  previewSrc: string;
  fullSrc: string;
  labels: VideoCopy;
  poster?: string;
  className?: string;
  aspectClassName?: string;
  videoClassName?: string;
  objectFitClassName?: string;
  objectPositionClassName?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [soundEnabled, setSoundEnabled] = React.useState(false);
  const [activeSrc, setActiveSrc] = React.useState(previewSrc);

  React.useEffect(() => {
    const video = videoRef.current;

    setActiveSrc(previewSrc);
    setSoundEnabled(false);

    if (!video) {
      return;
    }

    video.muted = true;
    video.src = previewSrc;
    video.load();
    void video.play().catch(() => undefined);
  }, [previewSrc]);

  const muteVideo = React.useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    setSoundEnabled(false);
    void video.play().catch(() => undefined);
  }, []);

  const restartWithSound = React.useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextSrc = fullSrc || previewSrc;
    const shouldSwitchSource = activeSrc !== nextSrc;

    const playFromStart = () => {
      try {
        video.currentTime = 0;
      } catch {
        // Some browsers wait for metadata before allowing currentTime changes.
      }

      video.muted = false;
      video.volume = 1;
      setSoundEnabled(true);
      void video.play().catch(() => undefined);

      window.setTimeout(() => {
        try {
          video.currentTime = 0;
        } catch {
          // Keep playback uninterrupted if the browser rejects the second seek.
        }
      }, 0);
    };

    video.pause();

    if (shouldSwitchSource) {
      setActiveSrc(nextSrc);
      video.src = nextSrc;
      video.load();

      if (video.readyState >= 1) {
        playFromStart();
        return;
      }

      video.addEventListener("loadedmetadata", playFromStart, { once: true });
      return;
    }

    playFromStart();
  }, [activeSrc, fullSrc, previewSrc]);

  React.useEffect(() => {
    if (!soundEnabled) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const wrapper = wrapperRef.current;

      if (!wrapper || wrapper.contains(event.target as Node)) {
        return;
      }

      muteVideo();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [muteVideo, soundEnabled]);

  return (
    <div
      ref={wrapperRef}
      onClick={restartWithSound}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        restartWithSound();
      }}
      tabIndex={0}
      role="button"
      aria-label={soundEnabled ? labels.unmutedLabel : labels.mutedLabel}
      className={`group relative isolate cursor-pointer overflow-hidden rounded-[2rem] bg-[#030303] shadow-[0_28px_90px_rgba(0,0,0,0.38),0_0_44px_rgba(212,175,55,0.08)] outline-none ring-1 ring-inset ring-[#D4AF37]/24 transition hover:-translate-y-1 hover:ring-[#D4AF37]/42 focus-visible:ring-4 focus-visible:ring-[#D4AF37]/22 ${aspectClassName} ${className}`}
    >
      <video
        ref={videoRef}
        src={activeSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={`absolute inset-0 block h-full w-full max-w-none rounded-none ${objectFitClassName} ${objectPositionClassName} ${videoClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(3,3,3,0.04),rgba(3,3,3,0.12)_62%,rgba(3,3,3,0.58))]" />
      <span className="pointer-events-none absolute bottom-4 left-4 right-16 rounded-full border border-[#D4AF37]/28 bg-[#030303]/72 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#FFF8E1] shadow-lg backdrop-blur-xl transition duration-300 sm:text-xs">
        {soundEnabled ? labels.unmutedLabel : labels.mutedLabel}
      </span>
      <button
        type="button"
        aria-label={soundEnabled ? labels.muteAriaLabel : labels.unmuteAriaLabel}
        onClick={(event) => {
          event.stopPropagation();
          if (soundEnabled) {
            muteVideo();
            return;
          }
          restartWithSound();
        }}
        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#030303]/78 text-[#D4AF37] shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#030303]"
      >
        {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </div>
  );
}

function ProcessVideoCard({ labels }: { labels: VideoCopy }) {
  return (
    <FadeIn delay={0.12} className="w-full lg:justify-self-end">
      <PremiumVideoCard
        previewSrc={brandAssets.videos.buyingProcess.preview}
        fullSrc={brandAssets.videos.buyingProcess.full}
        labels={labels}
        className="mx-auto w-full max-w-[310px] md:max-w-[350px] lg:max-w-[380px]"
      />
    </FadeIn>
  );
}

function ProcessTimeline({ copy }: { copy: SiteCopy }) {
  return (
    <section id="process" className="relative overflow-hidden bg-[#050505] px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#030303]/8 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {copy.process.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-[#FFF8E1] md:text-6xl">
              {copy.process.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#D7C9A0]/76 md:text-lg">
              {copy.process.text}
            </p>
          </FadeIn>
          <ProcessVideoCard labels={copy.video} />
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {copy.process.steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <div className="group h-full rounded-[1.75rem] border border-[#D4AF37]/14 bg-[#101010]/78 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur transition hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-[#141414]">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl text-[#C9A227]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#030303] text-[#D4AF37] transition group-hover:rotate-6">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#FFF8E1]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#D7C9A0]/74">{step.text}</p>
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
    <section id="about" className="bg-[#050505] px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] border border-[#D4AF37]/14 bg-[#101010] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] lg:grid-cols-[0.86fr_1fr] lg:p-6">
        <FadeIn>
          <PremiumVideoCard
            previewSrc={brandAssets.videos.about.preview}
            fullSrc={brandAssets.videos.about.full}
            labels={copy.video}
            aspectClassName="aspect-[9/16]"
            className="mx-auto w-full max-w-[360px]"
          />
          <div className="mt-4 rounded-[1.4rem] border border-[#D4AF37]/16 bg-[#030303]/62 p-5 text-[#FFF8E1]">
            <p className="text-sm leading-6">{copy.about.imageCardText}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="px-2 py-8 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {copy.about.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-[#FFF8E1] md:text-6xl">
            {copy.about.title}
          </h2>
          <p className="mt-7 text-lg leading-9 text-[#D7C9A0]/76">{copy.about.text}</p>
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
    <section className="bg-[#030303] px-5 py-20 text-[#FFF8E1] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {copy.credibility.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="border-l border-white/12 pl-6">
              <p className="font-serif text-5xl tracking-tight text-[#D4AF37] md:text-6xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#FFF8E1]/60">
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
    <section className="bg-[#101010] px-5 py-24 text-[#FFF8E1] md:px-8 md:py-32">
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
                <p className="font-serif text-6xl leading-none text-[#D4AF37]">“</p>
                <p className="mt-4 text-lg leading-8 text-[#FFF8E1]/78">{quote}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLinks({ copy }: { copy: SiteCopy }) {
  const links = [
    { label: "Facebook", href: facebookHref, icon: FacebookIcon },
    { label: "Instagram", href: instagramHref, icon: InstagramIcon },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/80">
        {copy.contact.socialLabel}
      </p>
      <div className="mt-3 flex items-center gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/10 text-[#FFF8E1] transition hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#030303]"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SelectFieldView({
  id,
  field,
}: {
  id: string;
  field: SelectField;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-semibold text-[#FFF8E1]/84">{field.label}</span>
      <span className="relative mt-2 block">
        <select
          id={id}
          name={id}
          required
          defaultValue=""
          className="h-14 w-full appearance-none rounded-2xl border border-white/12 bg-[#030303]/58 px-4 pr-11 text-sm text-[#FFF8E1] outline-none transition focus:border-[#D4AF37]/70 focus:ring-4 focus:ring-[#D4AF37]/10"
        >
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 translate-y-[-50%] rotate-90 text-[#D4AF37]" />
      </span>
    </label>
  );
}

function TextFieldView({
  id,
  field,
  type = "text",
}: {
  id: string;
  field: TextField;
  type?: "text" | "email" | "tel";
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-semibold text-[#FFF8E1]/84">{field.label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={field.placeholder}
        className="mt-2 h-14 w-full rounded-2xl border border-white/12 bg-[#030303]/58 px-4 text-sm text-[#FFF8E1] outline-none transition placeholder:text-[#FFF8E1]/34 focus:border-[#D4AF37]/70 focus:ring-4 focus:ring-[#D4AF37]/10"
      />
    </label>
  );
}

function ConsultationForm({ copy }: { copy: SiteCopy }) {
  const fields = copy.form.fields;

  return (
    <form
      action={`mailto:${contactEmail}`}
      method="post"
      className="rounded-[2rem] border border-[#D4AF37]/18 bg-[#030303]/68 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.36)] backdrop-blur-xl md:p-6"
    >
      <Image
        src={brandAssets.logoTransparent}
        alt="Project Cyprus"
        width={500}
        height={500}
        className="mb-5 h-16 w-16 rounded-full object-contain ring-1 ring-[#D4AF37]/20"
      />
      <p className="text-sm font-semibold text-[#D4AF37]">{copy.form.title}</p>
      <p className="mt-2 text-sm leading-6 text-[#FFF8E1]/62">{copy.form.text}</p>

      <div className="mt-6 grid gap-4">
        <SelectFieldView id="purchase-purpose" field={fields.purpose} />
        <SelectFieldView id="budget" field={fields.budget} />
        <SelectFieldView id="visit-cyprus" field={fields.visit} />
        <SelectFieldView id="market-type" field={fields.market} />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextFieldView id="full-name" field={fields.name} />
          <TextFieldView id="email" field={fields.email} type="email" />
        </div>
        <TextFieldView id="phone" field={fields.phone} type="tel" />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#030303] transition hover:bg-[#E0C46C]"
      >
        {copy.form.submit}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function ContactDetails({ copy, compact = false }: { copy: SiteCopy; compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "" : "mt-6"}`}>
      <div className="rounded-[1.35rem] border border-white/12 bg-white/8 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]/80">
          {copy.contact.agentLabel}
        </p>
        <p className="mt-2 font-semibold text-[#FFF8E1]">{agentName}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={`mailto:${contactEmail}`}
          className="group rounded-[1.35rem] border border-white/12 bg-white/8 p-4 transition hover:bg-white/12"
        >
          <Mail className="h-4 w-4 text-[#D4AF37]" />
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#FFF8E1]/48">
            {copy.contact.emailLabel}
          </p>
          <p className="mt-1 break-all text-sm font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37]">
            {contactEmail}
          </p>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-[1.35rem] border border-white/12 bg-white/8 p-4 transition hover:bg-white/12"
        >
          <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#FFF8E1]/48">
            {copy.contact.whatsappLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37]">
            {polishPhone}
          </p>
        </a>
      </div>
      <div className="grid gap-3">
        <a
          href={polishPhoneHref}
          className="group rounded-[1.35rem] border border-white/12 bg-white/8 p-4 transition hover:bg-white/12"
        >
          <Phone className="h-4 w-4 text-[#D4AF37]" />
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#FFF8E1]/48">
            {copy.contact.phoneLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37]">
            {polishPhone}
          </p>
        </a>
      </div>
    </div>
  );
}

function CTASection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#030303] px-5 py-24 text-[#FFF8E1] md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(212,175,55,0.12),transparent_30rem),radial-gradient(circle_at_88%_72%,rgba(224,196,108,0.08),transparent_26rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-[2.2rem] border border-[#D4AF37]/16 bg-[#101010]/72 p-5 shadow-[0_34px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-7">
        <FadeIn className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              {copy.cta.eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
              {copy.cta.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#FFF8E1]/72">
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
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_260px] xl:items-end">
            <div className="rounded-[2rem] border border-[#D4AF37]/16 bg-[#030303]/56 p-5">
              <p className="text-sm font-semibold text-[#D4AF37]">{copy.cta.contactTitle}</p>
              <ContactDetails copy={copy} compact />
              <div className="mt-5">
                <SocialLinks copy={copy} />
              </div>
            </div>
            <PremiumVideoCard
              previewSrc={brandAssets.videos.contact.preview}
              fullSrc={brandAssets.videos.contact.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto max-h-[520px] w-full max-w-[260px] xl:mx-0"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="self-start">
          <ConsultationForm copy={copy} />
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="bg-[#030303] px-5 py-12 text-[#FFF8E1] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#D4AF37]/18 pt-10 lg:grid-cols-[1fr_0.65fr_0.65fr_0.65fr]">
        <div>
          <Image
            src={brandAssets.logoTransparent}
            alt="Project Cyprus"
            width={500}
            height={500}
            className="h-auto w-44 rounded-full object-contain ring-1 ring-[#D4AF37]/16 md:w-52"
          />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#FFF8E1]/58">
            {copy.footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#D4AF37]">{copy.footer.navTitle}</p>
          <div className="mt-4 grid gap-3 text-sm text-[#FFF8E1]/62">
            {copy.navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#FFF8E1]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#D4AF37]">
            {copy.footer.contactTitle}
          </p>
          <div className="mt-4 grid gap-3 text-sm text-[#FFF8E1]/62">
            <p className="font-semibold text-[#FFF8E1]">{agentName}</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFF8E1]">
              WhatsApp · {polishPhone}
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-[#FFF8E1]">
              {contactEmail}
            </a>
            <a href={cyprusPhoneHref} className="hover:text-[#FFF8E1]">
              {cyprusPhone}
            </a>
            <a href={polishPhoneHref} className="hover:text-[#FFF8E1]">
              {polishPhone}
            </a>
            <span>Pafos, Cyprus</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#D4AF37]">
            {copy.footer.languageTitle}
          </p>
          <p className="mt-4 text-sm text-[#FFF8E1]/62">{copy.footer.languageText}</p>
          <div className="mt-6">
            <SocialLinks copy={copy} />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#FFF8E1]/42 md:flex-row">
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
    <main className="min-h-screen bg-[#030303] text-[#FFF8E1]">
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
