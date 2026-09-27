export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalDoc = {
  heading: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

export type App = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  stats: { value: string; label: string }[];
  accent: string;
  icon?: string;
  website?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  // Empty = the showcase renders a generated preview for this slug instead
  screenshots: string[];
  contactEmail: string;
  privacy: LegalDoc | null;
  terms: LegalDoc | null;
};

export const apps: App[] = [
  {
    slug: "donk",
    name: "Dønk",
    category: "Underholdning",
    tagline: "Festapp for iOS og Android",
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
    website: "https://www.donkapp.no",
    appStoreUrl: "https://apps.apple.com/no/app/d%C3%B8nk/id6762613600?l=nb",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bjorn.dronk",
    screenshots: ["/apps/donk-home.jpg", "/apps/donk-lobby.jpg"],
    contactEmail: "support@donkapp.no",
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
    tagline: "Oppgaver og lommepenger for hele familien",
    description:
      "Min Belønning er en app jeg har designet og utviklet for foreldre og barn. Foreldre legger inn oppgaver med et beløp knyttet til seg, og barna tjener penger for hver oppgave de gjør — det gjør husarbeidet morsommere og mer givende.",
    features: [
      "Foreldre lager oppgaver med et beløp",
      "Barna huker av og tjener penger per oppgave",
      "Full oversikt over hva hvert barn har tjent",
    ],
    stats: [
      { value: "Familie", label: "Kategori" },
      { value: "Foreldre & barn", label: "For" },
      { value: "Kommer snart", label: "Status" },
    ],
    accent: "#2fc58a",
    screenshots: [],
    contactEmail: "kontakt.bergemedia@gmail.com",
    privacy: null,
    terms: null,
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
