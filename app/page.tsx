"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Euro,
  KeyRound,
  Mail,
  MapPin,
  Maximize2,
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
import { getLocalizedOffers, type OfferView } from "@/lib/offers";

type Language = "pl" | "en";

type NavItem = {
  label: string;
  href: string;
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
  wide?: boolean;
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
  submit: string;
  sending: string;
  success: string;
  error: string;
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

type Testimonial = {
  name: string;
  preview: string;
  full: string;
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
    emphasis: string;
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
    emphasis: string;
    imageAlt: string;
    imageCardText: string;
    primaryCta: string;
    secondaryCta: string;
    agent: {
      heading: string;
      body: string[];
      imageAlt: string;
    };
  };
  credibility: Stat[];
  testimonials: {
    eyebrow: string;
    title: string;
    clientLabel: string;
    readMore: string;
    showLess: string;
    items: Testimonial[];
  };
  cta: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    contactTitle: string;
    detailsTitle: string;
  };
  form: FormCopy;
  contact: {
    agentLabel: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    socialLabel: string;
    cyprusPhoneLabel: string;
    polandPhoneLabel: string;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    languageTitle: string;
    languageText: string;
    copyright: string;
    creditPrefix: string;
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

const heroImage = "/images/background-head.jpeg";
const agentPortrait = "/images/agent-portrait.jpg";
// Keep both language entries in sync whenever page content changes.
const languageStorageKey = "project-cyprus-language";

function normalizeLanguage(value: unknown): Language {
  return value === "en" || value === "pl" ? value : "pl";
}

const offerLabels = {
  pl: {
    location: "Lokalizacja",
    type: "Typ",
    bedrooms: "Sypialnie",
    area: "Powierzchnia",
    price: "Cena",
    ask: "Zapytaj o tę nieruchomość",
    close: "Zamknij",
    previous: "Poprzednie zdjęcie",
    next: "Następne zdjęcie",
  },
  en: {
    location: "Location",
    type: "Type",
    bedrooms: "Bedrooms",
    area: "Area",
    price: "Price",
    ask: "Ask about this property",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
  },
} satisfies Record<Language, Record<string, string>>;

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
    languageLabels: { pl: "PL", en: "EN" },
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
      eyebrow: "Wsparcie po polsku i angielsku na Cyprze",
      title: "Znajdź nieruchomość na Cyprze z pełnym spokojem.",
      text: "Pomagamy wybrać sprawdzone apartamenty, wille i inwestycje w najlepszych lokalizacjach południowego Cypru — od pierwszej rozmowy do odbioru kluczy.",
      primaryCta: "Umów bezpłatną konsultację",
      secondaryCta: "Zobacz nieruchomości",
      locationStrip: "Pafos · Limassol · Larnaca · Ayia Napa · Protaras",
      scrollCue: "Przewiń",
    },
    heroStats: [
      {
        value: "Licencjonowana agencja",
        label: "Współpracujemy z cypryjską agencją nieruchomości",
        icon: Star,
        wide: true,
      },
      { value: "PL / EN", label: "obsługa", icon: MessageCircle },
      { value: "0%", label: "prowizji od kupującego", icon: Euro },
      { value: "Pafos", label: "i południowy Cypr", icon: MapPin },
    ],
    promises: [
      {
        title: "Ponad 90% ofert",
        text: "Nieruchomości z rynku pierwotnego, wtórnego, działek oraz lokali komercyjnych.",
        icon: Sparkles,
      },
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
      text: "Nie ograniczamy się do ofert widocznych na stronie.\nPrezentowane nieruchomości są jedynie przykładem dostępnych możliwości.",
      emphasis: "Na podstawie Twoich oczekiwań przygotujemy indywidualnie dopasowaną ofertę spośród ponad 90% nieruchomości dostępnych na rynku pierwotnym i wtórnym.",
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
          text: "Selekcjonujemy oferty tak, aby pasowały do Twojego celu, budżetu i realnego planu zakupu.",
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
      title: "Lokalna wiedza, komunikacja PL/EN, indywidualne podejście.",
      text: "Project Cyprus pomaga osobom szukającym nieruchomości na Cyprze przejść przez cały proces z jasnością i spokojem.",
      emphasis: "Od wyboru lokalizacji, przez selekcję ofert, po kontakt z prawnikami, deweloperami i usługami po zakupie.",
      imageAlt: "Eleganckie wnętrze apartamentu",
      imageCardText: "Lokalne rozeznanie, sprawdzone kontakty i komunikacja, która daje poczucie kontroli.",
      primaryCta: "Poznajmy się",
      secondaryCta: "Napisz na WhatsApp",
      agent: {
        heading: "O mnie",
        imageAlt: "Małgorzata Pietkiewicz",
        body: [
          "Nazywam się Małgorzata Pietkiewicz i mieszkam w malowniczym Pafos na Cyprze. Współpracuję z renomowaną agencją nieruchomości posiadającą ponad 25 lat doświadczenia na lokalnym rynku, pomagając klientom w znalezieniu wymarzonego domu, apartamentu lub inwestycji na wyspie.",
          "Cypr zachwycił mnie swoim klimatem, kulturą i niezwykłymi krajobrazami już od pierwszych chwil pobytu. To tutaj odkryłam swoją pasję do nieruchomości oraz satysfakcję płynącą z pomagania innym w odnalezieniu miejsca, które mogą nazwać swoim domem.",
          "Każdego klienta traktuję indywidualnie, starannie dobierając oferty do jego potrzeb, oczekiwań i stylu życia. Moim celem jest, aby cały proces zakupu przebiegał w atmosferze zaufania, komfortu i pełnego wsparcia na każdym etapie.",
          "Serdecznie zapraszam do kontaktu. Z przyjemnością pomogę Państwu spełnić marzenie o własnej nieruchomości na słonecznym Cyprze.",
        ],
      },
    },
    credibility: [
      {
        value: "Licencja",
        label: "Współpracujemy z cypryjską agencją nieruchomości",
      },
      { value: "PL / EN", label: "komunikacja" },
      { value: "0%", label: "prowizji od kupującego" },
      { value: "Południe", label: "Cypr jako fokus" },
    ],
    testimonials: {
      eyebrow: "Opinie",
      title: "Co cenią nasi klienci?",
      clientLabel: "Klient Project Cyprus",
      readMore: "Czytaj więcej",
      showLess: "Zwiń",
      items: [
        {
          name: "Kołcz Monika",
          preview: "Z ręką na sercu polecamy Project Cyprus i niezastąpioną Panią Małgosię. Z tak profesjonalnym i szybkim podejściem jeszcze się nie spotkaliśmy.",
          full: "Z ręką na sercu polecamy Project Cyprus i niezastąpioną Panią Małgosię. Z tak profesjonalnym i szybkim podejściem jeszcze się nie spotkaliśmy. Po rozmowie Pani Małgosia w ciągu 24 godzin przygotowała dla nas listę idealnych nieruchomości. Były to dokładnie te, które odpowiadają naszym oczekiwaniom.\n\nNie tracąc czasu, już następnego dnia byliśmy w kancelarii, by podpisać umowę rezerwacyjną. Jej wsparcie było nieocenione również po podpisaniu — Pani Małgosia nieustannie monitorowała postępy, upewniając się, że wszystko idzie zgodnie z planem, aż do samego końca. To był czysty profesjonalizm połączony z niespotykaną troską o klienta. Dziękujemy i polecamy z całego serca.",
        },
        {
          name: "Kasia Kurek",
          preview: "Wspaniała współpraca. Małgorzata przedstawiła nas lokalnym deweloperom, którzy zaprezentowali swoje oferty.",
          full: "Wspaniała współpraca. Małgorzata przedstawiła nas lokalnym deweloperom, którzy zaprezentowali swoje oferty. Pokazano nam lokalizacje i projekty, a po godzinie oglądania oraz rozmowie z Małgorzatą zdecydowaliśmy się na zakup apartamentu.\n\nJuż następnego dnia odbyliśmy niezobowiązujące spotkanie z prawnikiem, który sprawdził projekt. Organizacja była naprawdę doskonała. Zdecydowanie polecam i na pewno wrócimy do Project Cyprus.",
        },
        {
          name: "Anna i Piotr",
          preview: "Od pierwszego kontaktu czuliśmy, że jesteśmy w dobrych rękach. Małgorzata dokładnie wysłuchała naszych potrzeb.",
          full: "Od pierwszego kontaktu czuliśmy, że jesteśmy w dobrych rękach. Małgorzata bardzo dokładnie wysłuchała naszych potrzeb, wyjaśniła różnice między lokalizacjami i pokazała nam tylko takie nieruchomości, które realnie pasowały do naszego budżetu oraz planów.\n\nNajbardziej doceniliśmy spokojną komunikację, szybkie odpowiedzi i pomoc na każdym etapie — od wyboru apartamentu, przez kontakt z deweloperem, aż po formalności. Cały proces był dużo prostszy, niż się spodziewaliśmy. Polecamy Project Cyprus każdemu, kto chce kupić nieruchomość na Cyprze bez stresu.",
        },
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
      detailsTitle: "Dane kontaktowe",
    },
    form: {
      title: "Formularz konsultacji",
      submit: "Wyślij zapytanie",
      sending: "Wysyłanie...",
      success: "Dziękujemy. Twoje zgłoszenie zostało wysłane. Skontaktujemy się z Tobą wkrótce.",
      error: "Nie udało się wysłać formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.",
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
      cyprusPhoneLabel: "Cypr",
      polandPhoneLabel: "Polska",
    },
    footer: {
      description: "Wsparcie premium dla osób szukających apartamentu, domu lub willi na południowym Cyprze.",
      navTitle: "Nawigacja",
      contactTitle: "Kontakt",
      languageTitle: "Język",
      languageText: "Polski · English",
      copyright: "© 2026 Project Cyprus. Nieruchomości na Cyprze.",
      creditPrefix: "Strona stworzona z sercem przez",
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
    languageLabels: { pl: "PL", en: "EN" },
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
      eyebrow: "Support in Polish and English in Cyprus",
      title: "Find your property in Cyprus with complete peace of mind.",
      text: "We help you choose verified apartments, villas, and investment properties in the best locations of southern Cyprus, from the first conversation to collecting the keys.",
      primaryCta: "Book a free consultation",
      secondaryCta: "View properties",
      locationStrip: "Paphos · Limassol · Larnaca · Ayia Napa · Protaras",
      scrollCue: "Scroll",
    },
    heroStats: [
      {
        value: "Licensed agency",
        label: "We work with a licensed Cyprus real estate agency",
        icon: Star,
        wide: true,
      },
      { value: "PL / EN", label: "support", icon: MessageCircle },
      { value: "0%", label: "buyer commission", icon: Euro },
      { value: "Paphos", label: "and southern Cyprus", icon: MapPin },
    ],
    promises: [
      {
        title: "Over 90% of offers",
        text: "Properties from the new-build market, resale market, plots and commercial premises.",
        icon: Sparkles,
      },
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
      text: "We are not limited to the offers visible on the website.\nThe properties shown are only examples of available possibilities.",
      emphasis: "Based on your expectations, we will prepare an individually matched offer from over 90% of properties available on the new-build and resale markets.",
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
          text: "We shortlist properties so they match your goal, budget and real purchase plan.",
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
      text: "Project Cyprus helps people looking for property in Cyprus move through the whole process with clarity and confidence.",
      emphasis: "From choosing a location and shortlisting offers to coordinating with lawyers, developers, and after-purchase services.",
      imageAlt: "Elegant apartment interior",
      imageCardText: "Local insight, trusted contacts, and communication that gives you a sense of control.",
      primaryCta: "Let’s meet",
      secondaryCta: "Message us on WhatsApp",
      agent: {
        heading: "About me",
        imageAlt: "Małgorzata Pietkiewicz",
        body: [
          "My name is Małgorzata Pietkiewicz and I live in picturesque Paphos, Cyprus. I work with a reputable real estate agency with over 25 years of experience in the local market, helping clients find their dream home, apartment or investment on the island.",
          "Cyprus captivated me with its climate, culture and extraordinary landscapes from the very first moments of my stay. It was here that I discovered my passion for real estate and the satisfaction that comes from helping others find a place they can call home.",
          "I treat every client individually, carefully matching properties to their needs, expectations and lifestyle. My goal is to make the entire purchase process feel trustworthy, comfortable and fully supported at every stage.",
          "I warmly invite you to get in touch. I will be happy to help you fulfil your dream of owning a property in sunny Cyprus.",
        ],
      },
    },
    credibility: [
      { value: "Licensed", label: "We work with a licensed Cyprus real estate agency" },
      { value: "PL / EN", label: "communication" },
      { value: "0%", label: "buyer commission" },
      { value: "South", label: "Cyprus focus" },
    ],
    testimonials: {
      eyebrow: "Testimonials",
      title: "What do our clients value?",
      clientLabel: "Project Cyprus client",
      readMore: "Read more",
      showLess: "Show less",
      items: [
        {
          name: "Kołcz Monika",
          preview: "We wholeheartedly recommend Project Cyprus and the irreplaceable Małgosia. We had never experienced such a professional and fast approach before.",
          full: "We wholeheartedly recommend Project Cyprus and the irreplaceable Małgosia. We had never experienced such a professional and fast approach before. After our conversation, within 24 hours Małgosia prepared a list of ideal properties for us. They were exactly the ones that matched our expectations.\n\nWithout wasting any time, the very next day we were at the lawyer’s office to sign the reservation agreement. Her support was invaluable even after signing — Małgosia constantly monitored the progress, making sure everything was going according to plan until the very end. It was pure professionalism combined with exceptional care for the client. Thank you, and we recommend her from the bottom of our hearts.",
        },
        {
          name: "Kasia Kurek",
          preview: "A wonderful collaboration. Małgorzata introduced us to local developers, who presented their offers and locations.",
          full: "A wonderful collaboration. Małgorzata introduced us to local developers, who presented their offers. They showed us the locations and their projects. Honestly, after an hour of viewing the projects and receiving Małgorzata’s advice, we decided to buy the apartment.\n\nThe very next day, we had a no-obligation meeting with a lawyer who reviewed the project. Truly excellent organisation. I highly recommend it. We will definitely return to Project Cyprus.",
        },
        {
          name: "Anna and Piotr",
          preview: "From the very first contact, we felt that we were in good hands. Małgorzata listened carefully to our needs.",
          full: "From the very first contact, we felt that we were in good hands. Małgorzata listened carefully to our needs, explained the differences between locations and showed us only properties that genuinely matched our budget and plans.\n\nWhat we appreciated most was the calm communication, quick replies and support at every stage — from choosing the apartment, through contact with the developer, to the formalities. The whole process was much simpler than we expected. We recommend Project Cyprus to anyone who wants to buy a property in Cyprus without stress.",
        },
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
      detailsTitle: "Contact details",
    },
    form: {
      title: "Consultation form",
      submit: "Send enquiry",
      sending: "Sending...",
      success: "Thank you. Your request has been sent. We will contact you shortly.",
      error: "The form could not be sent. Please try again or contact us directly.",
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
      cyprusPhoneLabel: "Cyprus",
      polandPhoneLabel: "Poland",
    },
    footer: {
      description: "Premium support for people looking for an apartment, house, or villa in southern Cyprus.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      languageTitle: "Language",
      languageText: "English · Polski",
      copyright: "© 2026 Project Cyprus. Property in Cyprus.",
      creditPrefix: "Website built with heart by",
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
    <div className="flex rounded-full border border-[#D4AF37]/22 bg-[#070707]/72 p-1 text-[0.72rem] font-semibold uppercase text-[#F5E8C7]/76 shadow-inner shadow-black/40 backdrop-blur">
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
          ? "border border-[#D4AF37]/28 bg-[#241e15] text-[#FFF8E1] hover:border-[#D4AF37]/48 hover:bg-[#302619]"
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
          ? "border-[#D4AF37]/32 bg-[#241b12]/48 text-[#FFF8E1] backdrop-blur hover:border-[#D4AF37]/52 hover:bg-[#D4AF37]/12"
          : "border-[#D4AF37]/28 bg-[#241b12]/62 text-[#FFF8E1] hover:border-[#D4AF37]/48 hover:bg-[#D4AF37]/12"
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
      <div className="header-onyx-panel mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2.35rem] border px-4 py-3 text-[#FFF8E1] backdrop-blur-2xl md:rounded-full md:px-6 md:py-3.5">
        <a href="#" className="flex shrink-0 items-center gap-4" aria-label="Project Cyprus">
          <Image
            src={brandAssets.logoTransparent}
            alt="Project Cyprus"
            width={500}
            height={500}
            priority
            className="h-20 w-20 rounded-full object-contain ring-1 ring-[#D4AF37]/22 md:h-24 md:w-24"
          />
          <span className="hidden max-w-[9rem] text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#D4AF37]/80 sm:block">
            {copy.headerSubtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[#D4AF37]/16 bg-[#070707]/54 p-1 lg:flex">
          {copy.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] text-[#F5E8C7]/78 transition hover:bg-[#D4AF37]/10 hover:text-[#E0C46C]"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/28 bg-[#070707]/68 text-[#FFF8E1] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="header-onyx-panel mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border p-4 text-[#FFF8E1] backdrop-blur-2xl md:hidden"
        >
          <div className="mb-4 flex items-center gap-3 border-b border-[#D4AF37]/12 pb-4">
            <Image
              src={brandAssets.logoTransparent}
              alt="Project Cyprus"
              width={500}
              height={500}
              className="h-16 w-16 rounded-full object-contain ring-1 ring-[#D4AF37]/20"
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
            <SocialLinks copy={copy} darkSurface />
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
        className={`text-sm font-bold uppercase tracking-[0.22em] md:text-base ${
          light ? "text-[#D4AF37]" : "text-[#9c7a2f]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem] ${
          light ? "text-[#FFF8E1]" : "text-[#2A241B]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 text-lg leading-8 ${
            light ? "text-[#F5E8C7]/72" : "text-[#4d412f]/78"
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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f5e8c7] text-[#FFF8E1]">
      <Image
        src={heroImage}
        alt={copy.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-[center_46%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,8,0.64),rgba(40,30,17,0.28)_44%,rgba(245,232,199,0.02)_74%),linear-gradient(0deg,rgba(42,36,27,0.46),rgba(31,23,13,0.05)_52%,rgba(18,13,8,0.10))]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_32%_100%,rgba(212,175,55,0.30),transparent_44%),radial-gradient(ellipse_at_78%_100%,rgba(245,232,199,0.14),transparent_38%),linear-gradient(180deg,transparent,rgba(65,47,22,0.72)_62%,rgba(45,31,13,0.98))]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-44 md:px-8 md:pb-12 md:pt-52">
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
            className="grid grid-cols-2 auto-rows-fr gap-3"
          >
            {copy.heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="lux-card-dark flex min-h-[9.75rem] flex-col rounded-[1.5rem] border p-4 text-[#FFF8E1] backdrop-blur-xl"
                >
                  {Icon && <Icon className="mb-4 h-5 w-5 shrink-0 text-[#D4AF37]" />}
                  <p className="text-lg font-semibold leading-tight tracking-tight md:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#F5E8C7]/68 md:text-[0.82rem]">{stat.label}</p>
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
    <section id="promise" className="section-bronze-bridge px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-5">
        {copy.promises.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="lux-card-dark h-full rounded-[1.75rem] border p-5 text-[#FFF8E1]">
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-5 text-base font-semibold leading-6">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#F5E8C7]/64">{item.text}</p>
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
    <section className="section-champagne-glow px-5 py-24 text-[#FFF8E1] md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="flex h-full flex-col justify-between gap-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
            {copy.intro.eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-[#FFF8E1] md:text-7xl">
            {copy.intro.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#F5E8C7]/74">
            {copy.intro.text}
          </p>
          <blockquote className="max-w-3xl border-l border-[#D4AF37] pl-6 font-serif text-2xl leading-snug text-[#F5E8C7] md:text-3xl">
            {copy.intro.quote}
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
          <div className="absolute -left-6 -top-6 hidden h-36 w-36 rounded-[2rem] border border-[#B9975B]/35 bg-[#D4AF37]/24 md:block" />
          <div className="relative">
            <PremiumVideoCard
              previewSrc={brandAssets.videos.whyCyprus.preview}
              fullSrc={brandAssets.videos.whyCyprus.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto w-full max-w-[420px]"
            />
            <div className="lux-card-dark mt-4 rounded-[1.5rem] border p-5 text-[#FFF8E1]">
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

function OfferInfoBadge({
  icon: Icon,
  label,
  value,
}: {
  icon: Icon;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2 rounded-full border border-[#D4AF37]/34 bg-[#100d09]/72 px-3 py-2 text-xs font-semibold text-[#FFF8E1] shadow-[0_10px_26px_rgba(212,175,55,0.12)] backdrop-blur-xl">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
      <span className="sr-only">{label}: </span>
      <span className="truncate">{value}</span>
    </span>
  );
}

function OfferCard({
  offer,
  index,
  labels,
  onOpen,
}: {
  offer: OfferView;
  index: number;
  labels: typeof offerLabels[Language];
  onOpen: () => void;
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-[2rem] bg-[#221a12] text-left shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_72px_rgba(212,175,55,0.16)] outline-none ring-1 ring-[#D4AF37]/32 transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_96px_rgba(0,0,0,0.28),0_0_92px_rgba(212,175,55,0.22)] hover:ring-[#D4AF37]/50 focus-visible:ring-4 focus-visible:ring-[#D4AF37]/34"
      >
        <span className="relative block aspect-[4/5] min-h-[430px] overflow-hidden">
          <Image
            src={offer.mainImage}
            alt={offer.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(212,175,55,0.16),transparent_34%),linear-gradient(180deg,rgba(8,6,4,0.08),rgba(45,31,13,0.30)_44%,rgba(9,7,5,0.92))]" />
          <span className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
            <OfferInfoBadge icon={MapPin} label={labels.location} value={offer.location} />
            <OfferInfoBadge icon={Building2} label={labels.type} value={offer.type} />
          </span>
          <span className="absolute bottom-0 left-0 right-0 p-5 text-[#FFF8E1]">
            <span className="mb-4 flex flex-wrap gap-2">
              <OfferInfoBadge icon={BedDouble} label={labels.bedrooms} value={offer.bedrooms} />
              <OfferInfoBadge icon={Maximize2} label={labels.area} value={offer.area} />
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-3 py-2 text-xs font-bold text-[#030303] shadow-[0_14px_34px_rgba(212,175,55,0.24)]">
                <Euro className="h-3.5 w-3.5" />
                <span className="sr-only">{labels.price}: </span>
                {offer.price}
              </span>
            </span>
            <span className="block font-serif text-3xl leading-tight md:text-[2rem]">
              {offer.title}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-xl transition group-hover:bg-white/16">
              {labels.ask}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </span>
        </span>
      </button>
    </FadeIn>
  );
}

function OfferDetailsModal({
  offer,
  labels,
  onClose,
}: {
  offer: OfferView;
  labels: typeof offerLabels[Language];
  onClose: () => void;
}) {
  const [imageIndex, setImageIndex] = React.useState(0);
  const activeImage = offer.images[imageIndex] ?? offer.mainImage;
  const hasMultipleImages = offer.images.length > 1;

  const showPreviousImage = React.useCallback(() => {
    setImageIndex((value) => (value === 0 ? offer.images.length - 1 : value - 1));
  }, [offer.images.length]);

  const showNextImage = React.useCallback(() => {
    setImageIndex((value) => (value + 1) % offer.images.length);
  }, [offer.images.length]);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPreviousImage();
        return;
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, onClose, showNextImage, showPreviousImage]);

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#030303]/84 px-4 py-5 text-[#FFF8E1] backdrop-blur-xl md:px-6 md:py-8">
      <div className="mx-auto grid min-h-[calc(100svh-2.5rem)] max-w-7xl items-center">
        <div className="lux-panel relative overflow-hidden rounded-[2rem] border">
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/28 bg-[#070707]/72 text-[#FFF8E1] shadow-lg backdrop-blur-xl transition hover:bg-[#D4AF37] hover:text-[#030303]"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
            <div className="relative min-h-[52svh] bg-[#070707] md:min-h-[680px]">
              <Image
                src={activeImage}
                alt={offer.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/16 bg-[#070707]/70 px-4 py-2 text-xs font-semibold text-[#F5E8C7] backdrop-blur-xl">
                {imageIndex + 1} / {offer.images.length}
              </div>
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label={labels.previous}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#070707]/72 text-[#FFF8E1] shadow-lg backdrop-blur-xl transition hover:bg-[#D4AF37] hover:text-[#030303]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label={labels.next}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#070707]/72 text-[#FFF8E1] shadow-lg backdrop-blur-xl transition hover:bg-[#D4AF37] hover:text-[#030303]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            <div className="max-h-[86svh] overflow-y-auto p-5 md:p-8 lg:max-h-[760px]">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                {labels.location}: {offer.location}
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight text-[#FFF8E1] md:text-5xl">
                {offer.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                <OfferInfoBadge icon={Building2} label={labels.type} value={offer.type} />
                <OfferInfoBadge icon={BedDouble} label={labels.bedrooms} value={offer.bedrooms} />
                <OfferInfoBadge icon={Maximize2} label={labels.area} value={offer.area} />
                <OfferInfoBadge icon={Euro} label={labels.price} value={offer.price} />
              </div>
              <div className="mt-8 space-y-5 text-base leading-8 text-[#F5E8C7]/76">
                {offer.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-[#030303] shadow-[0_18px_45px_rgba(212,175,55,0.24)] transition hover:bg-[#E0C46C]"
              >
                {labels.ask}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProperties({ copy, language }: { copy: SiteCopy; language: Language }) {
  const [selectedOffer, setSelectedOffer] = React.useState<OfferView | null>(null);
  const offers = React.useMemo(() => getLocalizedOffers(language), [language]);
  const labels = offerLabels[language];

  return (
    <section id="properties" className="section-graphite-warm scroll-mt-36 px-5 py-24 text-[#FFF8E1] md:scroll-mt-40 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:items-start">
          <div className="h-full">
            <FadeIn className="flex max-w-4xl flex-col lg:min-h-[747px]">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
                {copy.properties.eyebrow}
              </p>
              <h2 className="mt-8 font-serif text-4xl leading-[1.08] tracking-tight text-[#FFF8E1] sm:text-5xl md:text-[3.25rem]">
                {copy.properties.title}
              </h2>
              <div className="mt-12 max-w-3xl">
                <div className="space-y-7 text-base leading-8 text-[#F5E8C7]/74 md:text-lg">
                  {copy.properties.text.split("\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-12 border-l border-[#D4AF37] pl-6 font-serif text-xl leading-snug text-[#F5E8C7] md:text-2xl">
                  {copy.properties.emphasis}
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.12} className="w-full lg:justify-self-end">
            <PremiumVideoCard
              previewSrc={brandAssets.videos.featuredListings.preview}
              fullSrc={brandAssets.videos.featuredListings.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto w-full max-w-[420px] lg:mx-0"
            />
          </FadeIn>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              index={index}
              labels={labels}
              onOpen={() => setSelectedOffer(offer)}
            />
          ))}
        </div>
      </div>
      {selectedOffer && (
        <OfferDetailsModal
          offer={selectedOffer}
          labels={labels}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </section>
  );
}


function WhyCyprus({ copy }: { copy: SiteCopy }) {
  return (
    <section id="why" className="section-champagne-glow scroll-mt-36 overflow-hidden px-5 py-24 text-[#FFF8E1] md:scroll-mt-40 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.85fr_1fr]">
        <div className="flex h-full flex-col justify-between gap-14">
          <div>
            <FadeIn className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
                {copy.why.eyebrow}
              </p>
              <h2 className="mt-7 font-serif text-4xl leading-[1.08] tracking-tight text-[#FFF8E1] sm:text-5xl md:text-[3.25rem]">
                {copy.why.title}
              </h2>
              <p className="mt-9 text-lg leading-8 text-[#F5E8C7]/74">
                {copy.why.text}
              </p>
              <p className="mt-12 max-w-3xl border-l border-[#D4AF37] pl-6 font-serif text-xl leading-snug text-[#F5E8C7] md:text-2xl">
                {copy.why.locationText}
              </p>
            </FadeIn>
          </div>
          <FadeIn className="grid gap-5 sm:grid-cols-2">
            {copy.why.cards.map((item) => (
              <div
                key={item}
                className="lux-card-dark rounded-[1.35rem] border p-5"
              >
                <CheckCircle2 className="mb-4 h-5 w-5 text-[#D4AF37]" />
                <p className="text-sm font-medium leading-6 text-[#F5E8C7]/84">{item}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.14} className="relative">
          <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
            <PremiumVideoCard
              previewSrc={brandAssets.videos.whyCyprusAlt.preview}
              fullSrc={brandAssets.videos.whyCyprusAlt.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="w-full"
            />
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.18} className="mx-auto mt-16 max-w-7xl">
        <a
          href="#contact"
          className="lux-card-dark group flex flex-col gap-4 rounded-[1.75rem] border p-5 text-[#FFF8E1] transition hover:-translate-y-1 hover:border-[#D4AF37]/42 sm:flex-row sm:items-center sm:justify-between md:p-6"
        >
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              {copy.why.locationEyebrow}
            </span>
            <span className="mt-2 block font-serif text-2xl leading-tight md:text-3xl">
              {copy.why.locationTitle}
            </span>
            <span className="mt-2 block max-w-3xl text-sm leading-6 text-[#F5E8C7]/70 md:text-base">
              {copy.why.locationText}
            </span>
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/28 bg-[#2a2117] text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-[#030303]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </FadeIn>
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
  const activeSrcRef = React.useRef(previewSrc);
  const [soundEnabled, setSoundEnabled] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    activeSrcRef.current = previewSrc;
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
    const shouldSwitchSource = activeSrcRef.current !== nextSrc;

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
      activeSrcRef.current = nextSrc;
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
  }, [fullSrc, previewSrc]);

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
      className={`group relative isolate cursor-pointer overflow-hidden rounded-[2rem] bg-[#221a12] shadow-[0_28px_90px_rgba(0,0,0,0.34),0_0_78px_rgba(212,175,55,0.18)] outline-none ring-1 ring-inset ring-[#D4AF37]/38 transition hover:-translate-y-1 hover:shadow-[0_30px_96px_rgba(0,0,0,0.36),0_0_96px_rgba(212,175,55,0.24)] hover:ring-[#D4AF37]/56 focus-visible:ring-4 focus-visible:ring-[#D4AF37]/30 ${aspectClassName} ${className}`}
    >
      <video
        ref={videoRef}
        src={previewSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className={`absolute inset-0 block h-full w-full max-w-none rounded-none ${objectFitClassName} ${objectPositionClassName} ${videoClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_80%_15%,rgba(212,175,55,0.12),transparent_34%),linear-gradient(180deg,rgba(31,22,12,0.03),rgba(53,36,15,0.14)_62%,rgba(18,14,10,0.56))]" />
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
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/34 bg-[#251d13]/78 text-[#D4AF37] shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#030303] sm:h-11 sm:w-11"
      >
        {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </div>
  );
}

function ProcessVideoCard({ labels }: { labels: VideoCopy }) {
  return (
    <FadeIn delay={0.12} className="w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end">
      <PremiumVideoCard
        previewSrc={brandAssets.videos.buyingProcess.preview}
        fullSrc={brandAssets.videos.buyingProcess.full}
        labels={labels}
        className="mx-auto w-full max-w-[330px] md:max-w-[400px] lg:max-w-[460px]"
      />
    </FadeIn>
  );
}

function ProcessTimeline({ copy }: { copy: SiteCopy }) {
  return (
    <section id="process" className="section-deep-gold relative scroll-mt-36 overflow-hidden px-5 py-24 text-[#FFF8E1] md:scroll-mt-40 md:px-8 md:py-32">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#F5E8C7]/6 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)]">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
              {copy.process.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-[#FFF8E1] sm:text-5xl md:text-[3.25rem]">
              {copy.process.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5E8C7]/74">
              {copy.process.text}
            </p>
          </FadeIn>
          <ProcessVideoCard labels={copy.video} />

          <div className="grid gap-3 sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
            {copy.process.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.04}>
                <div className="lux-card group h-full rounded-[1.35rem] border p-4 text-[#FFF8E1] backdrop-blur transition hover:-translate-y-1 hover:border-[#D4AF37]/38">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#D4AF37]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/24 bg-[#2a2117] text-[#D4AF37] transition group-hover:rotate-6">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#F5E8C7]/70">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="about" className="section-graphite-warm scroll-mt-36 px-5 pb-24 pt-10 md:scroll-mt-40 md:px-8 md:pb-32">
      <div className="lux-panel mx-auto max-w-7xl rounded-[2rem] border p-5 text-[#FFF8E1] lg:p-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1fr]">
          <FadeIn>
            <PremiumVideoCard
              previewSrc={brandAssets.videos.about.preview}
              fullSrc={brandAssets.videos.about.full}
              labels={copy.video}
              aspectClassName="aspect-[9/16]"
              className="mx-auto w-full max-w-[440px]"
            />
            <div className="lux-card-dark mt-4 rounded-[1.4rem] border p-5 text-[#F5E8C7]">
              <p className="text-sm leading-6">{copy.about.imageCardText}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="flex h-full flex-col justify-between gap-12 px-2 pb-8 md:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
                {copy.about.eyebrow}
              </p>
              <h2 className="mt-12 font-serif text-4xl leading-[1.08] tracking-tight text-[#FFF8E1] sm:text-5xl md:text-[3.25rem]">
                {copy.about.title}
              </h2>
              <p className="mt-14 text-lg leading-8 text-[#F5E8C7]/74">{copy.about.text}</p>
              <p className="mt-14 max-w-3xl border-l border-[#D4AF37] pl-6 font-serif text-xl leading-snug text-[#F5E8C7] md:text-2xl">
                {copy.about.emphasis}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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

        <FadeIn delay={0.18} className="mt-14 border-t border-[#D4AF37]/14 pt-14">
          <div className="lux-card grid gap-10 rounded-[1.75rem] border p-5 text-[#FFF8E1] md:grid-cols-[260px_1fr] md:p-7 lg:grid-cols-[320px_1fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#241e15] shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
              <Image
                src={agentPortrait}
                alt={copy.about.agent.imageAlt}
                width={700}
                height={900}
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 100vw"
                className="aspect-[4/5] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center py-2 md:py-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37] md:text-base">
                {copy.about.agent.heading}
              </p>
              <div className="mt-10 space-y-8 text-base leading-8 text-[#F5E8C7]/76 md:text-lg md:leading-9">
                {copy.about.agent.body.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 2
                        ? "my-10 border-l border-[#D4AF37] pl-6 font-serif text-xl leading-snug text-[#F5E8C7] md:text-2xl"
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CredibilitySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section-bronze-bridge px-5 py-20 text-[#FFF8E1] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {copy.credibility.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="border-l border-[#D4AF37]/26 pl-6">
              <p className="font-serif text-5xl tracking-tight text-[#D4AF37] md:text-6xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#F5E8C7]/62">
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  clientLabel,
  readMore,
  showLess,
  index,
}: {
  testimonial: Testimonial;
  clientLabel: string;
  readMore: string;
  showLess: string;
  index: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const text = expanded ? testimonial.full : testimonial.preview;

  return (
    <FadeIn delay={index * 0.08}>
      <article className="lux-card-dark flex h-full min-h-[320px] flex-col rounded-[1.75rem] border p-6 text-[#FFF8E1] transition hover:-translate-y-1 hover:border-[#D4AF37]/30 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]/90">
              {clientLabel}
            </p>
            <h3 className="mt-3 text-xl font-semibold">{testimonial.name}</h3>
          </div>
          <p className="font-serif text-5xl leading-none text-[#D4AF37]">“</p>
        </div>

        <div className="mt-6 flex-1 text-base leading-7 text-[#F5E8C7]/76">
          {expanded ? (
            <div className="space-y-4">
              {text.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p>{text}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/28 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#030303]"
        >
          {expanded ? showLess : readMore}
          <ChevronRight className={`h-4 w-4 transition ${expanded ? "-rotate-90" : "rotate-90"}`} />
        </button>
      </article>
    </FadeIn>
  );
}

function TestimonialsSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="section-deep-gold px-5 py-24 text-[#FFF8E1] md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={copy.testimonials.eyebrow}
          title={copy.testimonials.title}
          align="center"
          light
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {copy.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              clientLabel={copy.testimonials.clientLabel}
              readMore={copy.testimonials.readMore}
              showLess={copy.testimonials.showLess}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLinks({ copy, darkSurface = false }: { copy: SiteCopy; darkSurface?: boolean }) {
  const links = [
    { label: "Facebook", href: facebookHref, icon: FacebookIcon },
    { label: "Instagram", href: instagramHref, icon: InstagramIcon },
  ];

  return (
    <div>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          darkSurface ? "text-[#D4AF37]/86" : "text-[#9c7a2f]/90"
        }`}
      >
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
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-0.5 ${
                darkSurface
                  ? "border-[#D4AF37]/24 bg-[#FFF8E1]/8 text-[#FFF8E1] hover:bg-[#D4AF37] hover:text-[#030303]"
                  : "border-[#B9975B]/34 bg-[#FFF8E1]/68 text-[#2A241B] hover:bg-[#2A241B] hover:text-[#FFF8E1]"
              }`}
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
      <span className="text-base font-semibold leading-6 text-[#2A241B]/86">{field.label}</span>
      <span className="relative mt-3 block">
        <select
          id={id}
          name={id}
          required
          defaultValue=""
          className="lux-field h-16 w-full appearance-none rounded-[1.25rem] border px-5 pr-12 text-base text-[#2A241B] outline-none transition focus:border-[#B9975B]/70 focus:ring-4 focus:ring-[#B9975B]/14"
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
        <ChevronRight className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 translate-y-[-50%] rotate-90 text-[#D4AF37]" />
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
      <span className="text-base font-semibold leading-6 text-[#2A241B]/86">{field.label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={field.placeholder}
        className="lux-field mt-3 h-16 w-full rounded-[1.25rem] border px-5 text-base text-[#2A241B] outline-none transition placeholder:text-[#6b5b41]/48 focus:border-[#B9975B]/70 focus:ring-4 focus:ring-[#B9975B]/14"
      />
    </label>
  );
}

function ConsultationForm({ copy }: { copy: SiteCopy }) {
  const fields = copy.form.fields;
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: copy.metaLang,
          purchasePurpose: String(formData.get("purchase-purpose") ?? ""),
          budget: String(formData.get("budget") ?? ""),
          visitCyprus: String(formData.get("visit-cyprus") ?? ""),
          marketType: String(formData.get("market-type") ?? ""),
          fullName: String(formData.get("full-name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          message: String(formData.get("message") ?? ""),
          company: String(formData.get("company") ?? ""),
        }),
      });

      if (!response.ok) {
        setFormStatus("error");
        return;
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      className="lux-panel-light rounded-[2rem] border p-6 text-[#2A241B] backdrop-blur-xl md:p-8"
    >
      <Image
        src={brandAssets.logoTransparent}
        alt="Project Cyprus"
        width={500}
        height={500}
        className="mb-6 h-16 w-16 rounded-full object-contain ring-1 ring-[#D4AF37]/20"
      />
      <p className="text-lg font-semibold text-[#7b5f24] md:text-xl">{copy.form.title}</p>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-9 grid gap-6 lg:grid-cols-2">
        <SelectFieldView id="purchase-purpose" field={fields.purpose} />
        <SelectFieldView id="budget" field={fields.budget} />
        <SelectFieldView id="visit-cyprus" field={fields.visit} />
        <SelectFieldView id="market-type" field={fields.market} />
        <TextFieldView id="full-name" field={fields.name} />
        <TextFieldView id="email" field={fields.email} type="email" />
        <TextFieldView id="phone" field={fields.phone} type="tel" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 text-base font-semibold text-[#030303] transition hover:bg-[#E0C46C] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? copy.form.sending : copy.form.submit}
        <ArrowRight className="h-4 w-4" />
      </button>
      {formStatus !== "idle" && (
        <p
          role="status"
          className={`mt-5 rounded-[1.25rem] border px-4 py-3 text-sm leading-6 ${
            formStatus === "success"
              ? "border-[#B9975B]/34 bg-[#D4AF37]/12 text-[#2A241B]"
              : "border-[#B9975B]/34 bg-[#3A3021]/10 text-[#2A241B]"
          }`}
        >
          {formStatus === "success" ? copy.form.success : copy.form.error}
        </p>
      )}
    </form>
  );
}

function ContactDetails({ copy, compact = false }: { copy: SiteCopy; compact?: boolean }) {
  const cardClass = compact
    ? "lux-card-soft group rounded-[1.15rem] border p-3.5 text-[#FFF8E1] transition hover:border-[#D4AF37]/32"
    : "lux-card-soft group rounded-[1.35rem] border p-4 text-[#FFF8E1] transition hover:border-[#D4AF37]/32";
  const labelClass = compact
    ? "mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#F5E8C7]/52"
    : "mt-3 text-xs uppercase tracking-[0.22em] text-[#F5E8C7]/52";
  const valueClass = compact
    ? "mt-1 text-sm font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37]"
    : "mt-1 text-sm font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37]";
  const iconClass = compact ? "h-3.5 w-3.5 text-[#D4AF37]" : "h-4 w-4 text-[#D4AF37]";

  return (
    <div className={`grid ${compact ? "gap-2.5" : "gap-4 mt-6"}`}>
      <div className={compact ? "lux-card-soft rounded-[1.15rem] border p-3.5 text-[#FFF8E1]" : "lux-card-soft rounded-[1.35rem] border p-4 text-[#FFF8E1]"}>
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]/90">
          {copy.contact.agentLabel}
        </p>
        <p className={compact ? "mt-1.5 text-sm font-semibold" : "mt-2 font-semibold"}>
          {agentName}
        </p>
      </div>
      <div className={`grid ${compact ? "gap-2.5" : "gap-3"}`}>
        <a
          href={`mailto:${contactEmail}`}
          className={cardClass}
        >
          <Mail className={iconClass} />
          <p className={labelClass}>
            {copy.contact.emailLabel}
          </p>
          <p className="mt-1 whitespace-nowrap text-xs font-semibold tracking-tight text-[#FFF8E1] group-hover:text-[#D4AF37] sm:text-sm">
            {contactEmail}
          </p>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
        >
          <MessageCircle className={iconClass} />
          <p className={labelClass}>
            {copy.contact.whatsappLabel}
          </p>
          <p className={valueClass}>
            {polishPhone}
          </p>
        </a>
      </div>
      <div className={`grid ${compact ? "grid-cols-2 gap-2.5" : "gap-3 sm:grid-cols-2"}`}>
        <a
          href={cyprusPhoneHref}
          className={cardClass}
        >
          <Phone className={iconClass} />
          <p className={labelClass}>
            {copy.contact.cyprusPhoneLabel}
          </p>
          <p className={compact ? "mt-1 text-xs font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37] sm:text-sm" : valueClass}>
            {cyprusPhone}
          </p>
        </a>
        <a
          href={polishPhoneHref}
          className={cardClass}
        >
          <Phone className={iconClass} />
          <p className={labelClass}>
            {copy.contact.polandPhoneLabel}
          </p>
          <p className={compact ? "mt-1 text-xs font-semibold text-[#FFF8E1] group-hover:text-[#D4AF37] sm:text-sm" : valueClass}>
            {polishPhone}
          </p>
        </a>
      </div>
    </div>
  );
}

function CTASection({ copy }: { copy: SiteCopy }) {
  return (
    <section id="contact" className="section-contact-glow relative scroll-mt-36 overflow-hidden px-5 py-24 text-[#2A241B] md:scroll-mt-40 md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,232,199,0.20),transparent_32rem),radial-gradient(circle_at_88%_72%,rgba(224,196,108,0.22),transparent_30rem),radial-gradient(circle_at_48%_4%,rgba(212,175,55,0.12),transparent_26rem),linear-gradient(180deg,rgba(3,3,3,0.08),rgba(3,3,3,0.20))]" />
      <div className="lux-panel relative mx-auto max-w-7xl rounded-[2.2rem] border p-5 backdrop-blur-xl lg:p-8">
        <FadeIn>
          <div className="lux-panel-light rounded-[2rem] border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] md:p-7">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7a2f] md:text-base">
                {copy.cta.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]">
                {copy.cta.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d412f]/80">
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

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="lux-card rounded-[2rem] border p-5 text-[#FFF8E1] md:p-6">
                <p className="text-sm font-semibold text-[#D4AF37]">{copy.cta.detailsTitle}</p>
                <ContactDetails copy={copy} />
                <div className="mt-6">
                  <SocialLinks copy={copy} darkSurface />
                </div>
              </div>
              <PremiumVideoCard
                previewSrc={brandAssets.videos.contact.preview}
                fullSrc={brandAssets.videos.contact.full}
                labels={copy.video}
                aspectClassName="aspect-[9/16]"
                className="mx-auto max-h-[640px] w-full max-w-[360px] lg:mx-0 lg:ml-auto"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-8">
          <ConsultationForm copy={copy} />
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="bg-[radial-gradient(circle_at_18%_0%,rgba(212,175,55,0.26),transparent_28rem),radial-gradient(circle_at_92%_78%,rgba(185,151,91,0.20),transparent_30rem),radial-gradient(circle_at_50%_0%,rgba(245,232,199,0.10),transparent_24rem),linear-gradient(135deg,#3a2a14,#1d1710_46%,#100f0d)] px-5 py-12 text-[#FFF8E1] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#D4AF37]/30 pt-10 lg:grid-cols-[1fr_0.65fr_0.65fr_0.65fr]">
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
            <SocialLinks copy={copy} darkSurface />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#FFF8E1]/42 md:flex-row">
        <div className="grid gap-1">
          <p>{copy.footer.copyright}</p>
          <p className="text-[11px] leading-5 text-[#FFF8E1]/38">
            {copy.footer.creditPrefix}{" "}
            <a
              href="https://www.altusluna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#D4AF37]/70 transition-colors hover:text-[#F4D77A]"
            >
              Altus Luna
            </a>
            .
          </p>
        </div>
        <p>{copy.footer.locationLine}</p>
      </div>
    </footer>
  );
}

export default function ProjectCyprusHomepage() {
  const [language, setLanguage] = React.useState<Language>("pl");
  const copy = content[language];

  const handleLanguageChange = React.useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);

    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // Ignore storage errors; language switching should still work.
    }
  }, []);

  React.useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(languageStorageKey);
      const normalizedLanguage = normalizeLanguage(storedLanguage);

      if (storedLanguage && storedLanguage !== normalizedLanguage) {
        window.localStorage.setItem(languageStorageKey, normalizedLanguage);
      }

      window.queueMicrotask(() => setLanguage(normalizedLanguage));
    } catch {
      window.queueMicrotask(() => setLanguage("pl"));
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = copy.metaLang;
  }, [copy.metaLang]);

  return (
    <main className="site-luxury-bg min-h-screen text-[#FFF8E1]">
      <FloatingHeader
        language={language}
        onLanguageChange={handleLanguageChange}
        copy={copy}
      />
      <HeroSection copy={copy} />
      <TrustStrip copy={copy} />
      <IntroSection copy={copy} />
      <FeaturedProperties copy={copy} language={language} />
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
