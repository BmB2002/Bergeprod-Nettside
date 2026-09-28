import type { LegalDoc } from "../apps";

const EMAIL = "[hei@bergeprod.no](mailto:hei@bergeprod.no)";

export const websitePrivacy: LegalDoc = {
  heading: "Personvernerklæring for bergeprod.no",
  updated: "Sist oppdatert 28. september 2026",
  toc: true,
  intro: [
    "Denne personvernerklæringen gjelder for nettsidene bergeprod.no og apps.bergeprod.no («nettsiden»). Nettsiden drives av Berge Media («vi», «oss» og «vår»).",
    "Nettsiden har ingen innlogging, ingen skjemaer og ingen analyseverktøy. Her forklarer vi det lille som likevel skjer med opplysninger når du besøker den.",
    "Appene våre har egne personvernerklæringer, se [punkt 9](#apper).",
  ],
  sections: [
    {
      id: "ansvarlig",
      title: "1. Hvem er ansvarlig?",
      blocks: [
        { type: "p", text: "Berge Media er behandlingsansvarlig for personopplysningene som behandles på nettsiden." },
        { type: "address", lines: ["Berge Media", "Korsvika 61", "6006 Ålesund", "Norge", `Epost: ${EMAIL}`] },
      ],
    },
    {
      id: "opplysninger",
      title: "2. Hvilke opplysninger behandles?",
      blocks: [
        { type: "short", text: "Tekniske opplysninger når du besøker siden, og det du selv skriver til oss i chatten eller på epost." },
        { type: "h3", text: "2.1 Når du besøker nettsiden" },
        {
          type: "p",
          text: "Nettsiden driftes av Vercel. Når du besøker den, registrerer Vercel IP adressen din, tidspunkt, hvilken side du ba om, nettleser og eventuelle feilmeldinger. Dette skjer på alle nettsider og brukes bare til drift, feilsøking og sikkerhet.",
        },
        {
          type: "p",
          text: "Skrifttypene på nettsiden leveres fra vår egen server, ikke fra Google eller andre. Vi bruker ingen analyseverktøy, ingen reklame og ingen sporingspiksler.",
        },
        { type: "h3", text: "2.2 Filmene fra YouTube" },
        {
          type: "p",
          text: "Filmene på nettsiden ligger på YouTube, som eies av Google. Vi viser dem i YouTubes utvidede personvernmodus (youtube-nocookie.com). Når en film eller et forhåndsbilde lastes, får YouTube IP adressen din og tekniske opplysninger om nettleseren, slik det skjer når du henter noe fra en annen nettside.",
        },
        {
          type: "p",
          text: "I utvidet personvernmodus legger ikke YouTube inn informasjonskapsler for å tilpasse reklame. Når en film spilles av, kan YouTube likevel lagre enkelte tekniske opplysninger i nettleseren din. Les mer i [Googles personvernerklæring](https://policies.google.com/privacy).",
        },
        { type: "h3", text: "2.3 Chatten" },
        {
          type: "p",
          text: "Nettsiden har en chat levert av Chato. Chatten lastes fra chato.no når du åpner en side. Den lagrer en tilfeldig chat-ID og visningsinnstillinger i nettleseren din, slik at den husker samtalen din mens du er på siden.",
        },
        {
          type: "p",
          text: "Skriver du i chatten, sendes meldingen din og chat-ID-en til Chato, slik at spørsmålet ditt kan besvares. Skriv ikke inn mer personlig informasjon enn det som trengs for å svare deg.",
        },
        { type: "h3", text: "2.4 Når du sender oss en epost" },
        {
          type: "p",
          text: "Sender du oss en epost, behandler vi epostadressen din, navnet ditt hvis du oppgir det, og det du skriver, for å kunne svare deg.",
        },
      ],
    },
    {
      id: "lagring-nettleser",
      title: "3. Informasjonskapsler og lagring i nettleseren",
      blocks: [
        { type: "p", text: "Vi setter ingen informasjonskapsler selv. Dette er det som kan lagres i nettleseren din når du bruker nettsiden:" },
        {
          type: "table",
          head: ["Hva", "Hvem", "Hvorfor", "Hvor lenge"],
          rows: [
            ["Chat-ID og visningsinnstillinger (lokal lagring)", "Chato", "At chatten husker samtalen din", "Til du tømmer nettleserens data for siden"],
            ["Tekniske opplysninger når en film spilles av", "YouTube (Google)", "At filmen kan spilles av", "Etter Googles egne regler"],
          ],
        },
        {
          type: "p",
          text: "Du kan når som helst slette lagrede data i nettleserens innstillinger. Nettsiden virker fortsatt, men chatten starter da en ny samtale.",
        },
      ],
    },
    {
      id: "formal",
      title: "4. Formål og rettslig grunnlag",
      blocks: [
        {
          type: "table",
          head: ["Formål", "Opplysninger", "Rettslig grunnlag"],
          rows: [
            [
              "Levere nettsiden og holde den trygg og stabil",
              "IP adresse og tekniske opplysninger i Vercels logger",
              "Berettiget interesse, art. 6 nr. 1 bokstav f",
            ],
            [
              "Vise filmene",
              "IP adresse og tekniske opplysninger som sendes til YouTube",
              "Berettiget interesse i å vise arbeidet vårt, art. 6 nr. 1 bokstav f",
            ],
            [
              "Svare deg i chatten",
              "Meldingene dine og chat-ID",
              "Berettiget interesse i å svare på henvendelser, art. 6 nr. 1 bokstav f",
            ],
            [
              "Svare på epost",
              "Epostadresse, navn og det du skriver",
              "Berettiget interesse, art. 6 nr. 1 bokstav f, eller avtale hvis henvendelsen gjelder et oppdrag, art. 6 nr. 1 bokstav b",
            ],
          ],
        },
        {
          type: "p",
          text: "Når vi bygger på berettiget interesse, har vi vurdert at interessen ikke veier tyngre enn personvernet ditt. Du kan protestere mot behandlingen, se [punkt 7](#rettigheter).",
        },
      ],
    },
    {
      id: "deling",
      title: "5. Hvem deler vi opplysninger med?",
      blocks: [
        { type: "p", text: "Vi selger aldri personopplysninger. Disse leverandørene behandler opplysninger når du bruker nettsiden:" },
        {
          type: "table",
          head: ["Leverandør", "Hva de gjør", "Hvor"],
          rows: [
            ["[Vercel](https://vercel.com/legal/privacy-policy)", "Drifter nettsiden", "USA og EU"],
            ["[Google (YouTube)](https://policies.google.com/privacy)", "Viser filmene", "USA og EU"],
            ["Chato", "Leverer chatten", "Se [chato.no](https://chato.no)"],
          ],
        },
        {
          type: "p",
          text: "Overføringer til USA skjer med gyldig grunnlag etter GDPR kapittel V, som Europakommisjonens standard personvernbestemmelser (Standard Contractual Clauses) eller rammeverket Data Privacy Framework mellom EU og USA.",
        },
      ],
    },
    {
      id: "lagring",
      title: "6. Hvor lenge lagres opplysningene?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Tekniske logger hos Vercel:** i kort tid etter Vercels faste rutiner, deretter slettes de automatisk.",
            "**Epost:** så lenge det trengs for å hjelpe deg, og senest 12 måneder etter at saken er avsluttet, med mindre henvendelsen blir til et oppdrag.",
            "**Lagring i nettleseren:** til du sletter den, se [punkt 3](#lagring-nettleser).",
          ],
        },
      ],
    },
    {
      id: "rettigheter",
      title: "7. Dine rettigheter",
      blocks: [
        {
          type: "p",
          text: "Du har rett til innsyn, retting, sletting, begrensning og dataportabilitet, og til å protestere mot behandling som bygger på berettiget interesse. Det er gratis å bruke rettighetene dine.",
        },
        {
          type: "p",
          text: `Skriv til ${EMAIL}, så svarer vi innen én måned. Er henvendelsen omfattende, kan fristen forlenges med inntil to måneder, og da gir vi deg beskjed.`,
        },
      ],
    },
    {
      id: "klage",
      title: "8. Klage til Datatilsynet",
      paragraphs: [
        "Vi ønsker at du kontakter oss først hvis du mener at vi ikke behandler opplysningene dine riktig. Du har også rett til å klage til Datatilsynet, som er tilsynsmyndigheten i Norge: [datatilsynet.no](https://www.datatilsynet.no).",
      ],
    },
    {
      id: "apper",
      title: "9. Appene våre",
      blocks: [
        { type: "p", text: "Appene har egne personvernerklæringer, som gjelder når du bruker appene:" },
        {
          type: "ul",
          items: [
            "[Dønk](https://apps.bergeprod.no/donk/privacy)",
            "[Min Belønning](https://apps.bergeprod.no/minbelonning/privacy)",
          ],
        },
      ],
    },
    {
      id: "endringer",
      title: "10. Endringer i denne erklæringen",
      paragraphs: ["Vi oppdaterer erklæringen når nettsiden endres. Datoen øverst viser når den sist ble endret."],
    },
    {
      id: "kontakt",
      title: "11. Kontakt oss",
      blocks: [
        { type: "p", text: "Har du spørsmål om personvern på nettsiden, kan du kontakte oss:" },
        { type: "address", lines: ["Berge Media", "Korsvika 61", "6006 Ålesund", "Norge", `Epost: ${EMAIL}`] },
      ],
    },
  ],
};
