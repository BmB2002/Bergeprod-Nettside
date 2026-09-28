import { minBelonningPrivacy } from "./legal/minbelonning-privacy";
import { minBelonningTerms } from "./legal/minbelonning-terms";
import { minBelonningPrivacyEn } from "./legal/minbelonning-privacy-en";
import { minBelonningTermsEn } from "./legal/minbelonning-terms-en";

// Text fields support **bold** and [label](href) inline
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "short"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string; id?: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "address"; lines: string[] }
  | { type: "qa"; items: { q: string; a: string }[] };

export type LegalSection = {
  title: string;
  // Sections with an id are listed in the table of contents
  id?: string;
  summary?: boolean;
  paragraphs?: string[];
  items?: string[];
  blocks?: LegalBlock[];
};

export type Lang = "no" | "en";

export type LegalDoc = {
  // Language of the text, controls the page's own labels. Defaults to Norwegian.
  lang?: Lang;
  heading: string;
  updated: string;
  intro?: string | string[];
  toc?: boolean;
  sections: LegalSection[];
};

export type SupportInfo = {
  intro: string;
  channels: { title: string; description: string; label: string; href: string }[];
  faq: { q: string; a: string }[];
};

export type Platform = "ios" | "android" | "web" | "windows";

export type App = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  // Card text on the overview page
  short: string;
  platforms: Platform[];
  description: string;
  features: string[];
  stats: { value: string; label: string }[];
  accent: string;
  icon?: string;
  // Wordmark shown on the app's own page
  logo?: string;
  // If set, the project card and /<slug> go here instead of the app's own page
  projectUrl?: string;
  website?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  // First one is used on the overview card, first two in the app page hero
  screenshots: string[];
  about?: {
    paragraphs: string[];
    sections: { title: string; items: string[] }[];
    note?: string;
  };
  contactEmail: string;
  support: SupportInfo;
  privacy: LegalDoc | null;
  terms: LegalDoc | null;
  // Optional English versions, served under /<slug>/en/privacy and /<slug>/en/terms
  nameEn?: string;
  privacyEn?: LegalDoc;
  termsEn?: LegalDoc;
};

export const apps: App[] = [
  {
    slug: "donk",
    name: "Dønk",
    category: "Underholdning",
    tagline: "Festapp for iOS og Android",
    short: "Partyspill-appen for vennegrupper. Flere spill, både flerspiller og enkeltspill.",
    platforms: ["ios", "android"],
    description:
      "Dønk er en festapp jeg har designet og utviklet, tilgjengelig på App Store og Google Play. Jeg har også laget nettsiden donkapp.no som presenterer appen.",
    features: [
      "Flerspiller med kode — opptil 20 spillere",
      "Flaskepost: send slurker til venner og fremmede",
      "Spill som Bomben, You!, Profilen og Grønt lys",
    ],
    stats: [
      { value: "4,9 ★", label: "App Store" },
      { value: "16+", label: "Aldersgrense" },
      { value: "iOS & Android", label: "Plattform" },
    ],
    accent: "#ff6a1a",
    icon: "/apps/donk-icon.jpg",
    logo: "/apps/donk-logo.png",
    projectUrl: "https://www.donkapp.no/",
    website: "https://www.donkapp.no",
    appStoreUrl: "https://apps.apple.com/no/app/d%C3%B8nk/id6762613600?l=nb",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bjorn.dronk",
    screenshots: ["/apps/donk-home.jpg", "/apps/donk-lobby.jpg"],
    contactEmail: "support@donkapp.no",
    support: {
      intro:
        "Trenger du hjelp med noe, har du funnet en bug, eller har du bare et drøyt forslag til et nytt spill? Ta kontakt!",
      channels: [
        {
          title: "Instagram",
          description: "Send oss en DM for raske svar og ferske oppdateringer.",
          label: "@donk_partyapp",
          href: "https://instagram.com/donk_partyapp",
        },
        {
          title: "E-post",
          description: "For mer formelle henvendelser eller tekniske problemer.",
          label: "support@donkapp.no",
          href: "mailto:support@donkapp.no",
        },
      ],
      faq: [
        {
          q: "Hvordan spiller jeg med venner på flere telefoner?",
          a: "Velg flerspiller, og del den sekssifrede koden med vennene dine. De skriver inn koden i appen og havner i samme lobby — opptil 20 spillere.",
        },
        {
          q: "Hvordan avslutter jeg abonnementet?",
          a: "Abonnementet administreres via Apple ID eller Google-kontoen din. På iPhone: Innstillinger → [navnet ditt] → Abonnementer → Dønk. Kanseller minst 24 timer før perioden fornyes.",
        },
        {
          q: "Jeg har betalt, men har ikke fått tilgang. Hva gjør jeg?",
          a: "Prøv «Gjenopprett kjøp» i appen. Hjelper ikke det, send oss en e-post med en beskrivelse av problemet.",
        },
        {
          q: "Hvordan får jeg refusjon?",
          a: "Refusjoner håndteres av Apple eller Google. For App Store-kjøp, gå til reportaproblem.apple.com.",
        },
      ],
    },
    privacy: {
      heading: "Personvernerklæring",
      updated: "Sist oppdatert: Mai 2025",
      intro:
        "DØNK respekterer ditt personvern. Denne erklæringen forklarer hvilke data vi samler inn og hvordan de brukes.",
      sections: [
        {
          title: "Data vi samler inn",
          items: [
            "Brukernavn og profilbilde lagres kun lokalt på din enhet.",
            "For flerspillerfunksjoner lagres brukernavn og profilbilde anonymt og kryptert i Firebase. Ingen personlig identifiserbar informasjon knyttes til disse dataene.",
            "Anonyme bruksdata for å forbedre appen.",
            "Kjøpshistorikk brukes utelukkende for å bestemme tilgang til premium-funksjoner.",
          ],
        },
        {
          title: "Vår forpliktelse",
          paragraphs: [
            "Vi deler IKKE personopplysninger med tredjeparter, bruker ikke annonsesporing og selger ikke dine data.",
          ],
        },
        {
          title: "Aldersgrense",
          paragraphs: ["Appen er beregnet for brukere fra 16 år og oppover."],
        },
      ],
    },
    terms: {
      heading: "Brukervilkår – DØNK",
      updated: "Sist oppdatert: Juni 2026",
      sections: [
        {
          title: "1. Aksept av vilkår",
          paragraphs: [
            "Ved å laste ned, registrere deg eller bruke DØNK-appen («Tjenesten») godtar du disse vilkårene i sin helhet. Hvis du ikke er enig i vilkårene, må du avinstallere appen og opphøre all bruk.",
          ],
        },
        {
          title: "2. Abonnement, prøveperiode og kjøp",
          items: [
            "Priser: 39 kr per uke eller 89 kr per måned. Prisene kan variere basert på valuta og lokale avgifter.",
            "Egendefinert bombe (éngangsinnkjøp): Pris 19 kr. Dette er et éngangsinnkjøp som permanent låser opp funksjonen for din Apple ID.",
            "Gratis prøveperiode: Nye brukere kan tilbys en 3-dagers gratis prøveperiode. Når denne utløper, starter det valgte abonnementet automatisk.",
            "Automatisk fornyelse: Abonnementet fornyes automatisk for hver periode med mindre det kanselleres minst 24 timer før inneværende periode utløper.",
            "Administrasjon: Betaling, fornyelse og kansellering administreres utelukkende via brukerens Apple ID-innstillinger.",
          ],
        },
        {
          title: "3. Ansvarsfraskrivelse og brukeransvar",
          paragraphs: [
            "DØNK er en underholdningsapp. Appen fremmer ikke, oppfordrer ikke til, og refererer ikke til forbruk av alkoholholdige drikker eller andre rusmidler. Enhver omtale av «slurker» eller lignende spillmekanikker refererer til valgfri drikke etter spillerens eget ønske (f.eks. vann, brus eller lignende).",
            "All deltakelse i spillet skjer helt på eget ansvar og risiko. Utvikleren påtar seg intet ansvar for personskade, helseproblemer, ulykker, materielle skader eller juridiske konsekvenser som følge av bruk av appen eller aktivitetene den foreslår. Spillere oppfordres til å utvise sunn fornuft og ta vare på hverandre.",
          ],
        },
        {
          title: "4. Aldersgrense og økonomisk ansvar",
          paragraphs: [
            "Appen har en aldersgrense på 16 år. Brukere mellom 16 og 18 år bekrefter ved opprettelse av abonnement eller kjøp at de har innhentet tillatelse fra foreldre eller verge til å foreta økonomiske transaksjoner i appen. Du samtykker i å bruke appen i samsvar med gjeldende lover, og ikke bruke den til trakassering, mobbing eller ulovlige formål.",
          ],
        },
        {
          title: "5. Brukergenerert innhold (UGC)",
          paragraphs: [
            "I flerspillermodus og andre funksjoner kan brukere legge inn navn, tekst eller annet innhold. Du er selv fullt ut ansvarlig for innholdet du oppretter. DØNK har nulltoleranse for støtende, trakasserende, hatefullt eller ulovlig innhold. Vi forbeholder oss retten til å moderere, fjerne innhold, eller utestenge brukere som bryter disse retningslinjene, uten forvarsel.",
          ],
        },
        {
          title: "6. Immaterielle rettigheter",
          paragraphs: [
            "Alt innhold i appen – inkludert tekst, design, spørsmål, spillkonsepter, grafikk og kildekode – er DØNKs eksklusive eiendom og er beskyttet av opphavsrett. Innholdet kan ikke kopieres, distribueres, modifiseres eller brukes kommersielt uten skriftlig forhåndssamtykke fra oss.",
          ],
        },
        {
          title: "7. Tredjepartstjenester",
          paragraphs: [
            "Appen bruker Firebase (Google) for datalagring, analyse og sanntidsfunksjonalitet. Ved å bruke appen samtykker du også til Googles gjeldende vilkår. Kjøp gjort via App Store er i tillegg underlagt Apples til enhver tid gjeldende vilkår (Apple Media Services Terms and Conditions).",
          ],
        },
        {
          title: "8. Ansvarsbegrensning",
          paragraphs: [
            "I den grad loven tillater det, er DØNKs samlede økonomiske ansvar begrenset til det beløpet du faktisk har betalt for appen de siste 12 månedene. Vi er under ingen omstendigheter ansvarlige for indirekte skader, følgeskader eller tap av data.",
          ],
        },
        {
          title: "9. Refusjon",
          paragraphs: [
            "Alle refusjonsforespørsler og betalingsfeil håndteres direkte av Apple i henhold til deres retningslinjer. DØNK har ikke mulighet til å refundere beløp direkte. For å be om refusjon, vennligst kontakt Apple Support eller besøk reportaproblem.apple.com.",
          ],
        },
        {
          title: "10. Endringer i tjenesten og vilkår",
          paragraphs: [
            "Vi forbeholder oss retten til å endre appens innhold, funksjoner, priser eller disse vilkårene. Vesentlige endringer i vilkårene vil bli varslet i appen eller via App Store med rimelig varsel. Fortsatt bruk av appen etter endringer betyr at du godtar de nye vilkårene.",
          ],
        },
        {
          title: "11. Gjeldende lov og verneting",
          paragraphs: [
            "Disse vilkårene styres av og tolkes i samsvar med norsk lov. Eventuelle tvister som ikke kan løses i minnelighet, skal bringes inn for norske domstoler.",
          ],
        },
      ],
    },
  },
  {
    slug: "minbelonning",
    name: "Min Belønning",
    category: "Familie",
    tagline: "Husarbeid barna faktisk gleder seg til",
    short: "Du lager oppgavene, barna gjør dem, og du godkjenner med ett trykk. Så ser de belønningen vokse.",
    platforms: ["ios"],
    description:
      "Min Belønning gjør husarbeid til noe barna faktisk gleder seg til. Du lager oppgavene, barna gjør dem, og du godkjenner med ett trykk. Så ser de belønningen vokse mot det de sparer til.",
    features: [
      "Lag oppgaver og bestem hva de er verdt",
      "Barna trykker «Jeg er ferdig!», og du godkjenner med ett trykk",
      "Sparemål, toppliste og feiring for barna",
    ],
    stats: [
      { value: "Familie", label: "Kategori" },
      { value: "49 kr/mnd", label: "Min Belønning+" },
      { value: "Kommer snart", label: "Status" },
    ],
    accent: "#ff3d9a",
    icon: "/apps/minbelonning-icon.jpg",
    logo: "/apps/minbelonning-logo.png",
    screenshots: [
      "/apps/minbelonning-welcome.jpg",
      "/apps/minbelonning-child-home.jpg",
      "/apps/minbelonning-parent-home.jpg",
      "/apps/minbelonning-new-task.jpg",
      "/apps/minbelonning-earned.jpg",
      "/apps/minbelonning-leaderboard.jpg",
    ],
    about: {
      paragraphs: [
        "Ingen lister på kjøleskapet, ingen masing og ingen krangling om hva som ble lovet. Alt står i appen, for både deg og barna.",
      ],
      sections: [
        {
          title: "Slik fungerer det",
          items: [
            "Lag en oppgave og bestem hva den er verdt, for eksempel 30 kr for å rydde rommet.",
            "Gi den til ett barn, til alle, eller la den som er først ta den.",
            "Barnet trykker «Jeg er ferdig!», og du får beskjed.",
            "Du godkjenner, og barnet får en skikkelig feiring på skjermen.",
          ],
        },
        {
          title: "For barna",
          items: [
            "Egen oversikt over dagens oppgaver",
            "Sparemål som viser hvor langt de har kommet",
            "Feiring med mynter og jubel hver gang en oppgave blir godkjent",
            "Toppliste for uken, måneden og totalt",
            "Et lite spill å kose seg med",
          ],
        },
        {
          title: "For deg som forelder",
          items: [
            "Familiepotten viser hva barna kan tjene. Når du godkjenner, flyttes beløpet fra potten til barnet.",
            "Du ser alltid hva hvert barn har tjent og hva som er betalt ut.",
            "Ikke helt ferdig? Send oppgaven tilbake, så får barnet beskjed om å prøve igjen.",
            "Du betaler ut selv, slik dere pleier, og markerer det i appen.",
          ],
        },
        {
          title: "Trygt for barna",
          items: [
            "Barnet kobler til sin egen telefon ved å skanne en kode på telefonen din. Barna lager ingen konto og trenger verken passord eller epostadresse.",
            "Bilder lagres privat, og bare familien kan se dem.",
            "Ingen reklame og ingen sporing.",
            "Belønningene er et regnskap i appen. Ingen ekte penger flyttes.",
          ],
        },
        {
          title: "Min Belønning+",
          items: [
            "Opptil 20 aktive og 50 lagrede oppgaver",
            "Faste oppgaver som dukker opp av seg selv hver dag eller uke",
            "Bildebevis: barnet tar et bilde når oppgaven er gjort",
            "Beskrivelse og sjekkliste på oppgavene",
            "Flere sparemål per barn og flere foresatte i familien",
            "Familieoversikt og hele historikken",
          ],
        },
      ],
      note: "Min Belønning+ koster 49 kr i måneden eller 399 kr i året. Abonnementet fornyes automatisk og trekkes fra kontoen din i App Store. Du kan si det opp når som helst i innstillingene for App Store, senest 24 timer før neste periode starter.",
    },
    contactEmail: "hei@bergeprod.no",
    support: {
      intro:
        "Trenger du hjelp med Min Belønning, har du funnet en feil, eller har du et forslag til hvordan appen kan bli bedre? Ta kontakt, så hjelper vi deg.",
      channels: [
        {
          title: "E-post",
          description: "For spørsmål, tekniske problemer, personvern og tilbakemeldinger.",
          label: "hei@bergeprod.no",
          href: "mailto:hei@bergeprod.no",
        },
      ],
      faq: [
        {
          q: "Hvordan kobler jeg til barnets telefon?",
          a: "Barnet skanner en kode som vises på telefonen din. Barna lager ingen konto og trenger verken passord eller epostadresse.",
        },
        {
          q: "Hvordan lager jeg en oppgave?",
          a: "Trykk «Ny oppgave», bestem hva den er verdt, og velg om den skal gå til ett barn, til alle, eller til den som er først.",
        },
        {
          q: "Hva skjer når barnet er ferdig?",
          a: "Barnet trykker «Jeg er ferdig!», og du får beskjed. Godkjenner du, flyttes beløpet fra familiepotten til barnet. Er ikke oppgaven helt ferdig, kan du sende den tilbake så barnet får prøve igjen.",
        },
        {
          q: "Flytter appen ekte penger?",
          a: "Nei. Belønningene er et regnskap i appen. Du betaler ut selv, slik dere pleier, og markerer det i appen.",
        },
        {
          q: "Hva får jeg med Min Belønning+?",
          a: "Flere aktive og lagrede oppgaver, faste oppgaver som gjentar seg, bildebevis, sjekklister, flere sparemål og foresatte, og hele historikken. Det koster 49 kr i måneden eller 399 kr i året.",
        },
        {
          q: "Hvordan sier jeg opp Min Belønning+?",
          a: "Abonnementet sies opp i innstillingene for App Store, senest 24 timer før neste periode starter.",
        },
      ],
    },
    privacy: minBelonningPrivacy,
    terms: minBelonningTerms,
    nameEn: "My Reward",
    privacyEn: minBelonningPrivacyEn,
    termsEn: minBelonningTermsEn,
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
