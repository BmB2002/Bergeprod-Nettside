import type { LegalDoc } from "../apps";

const EMAIL = "[hei@bergeprod.no](mailto:hei@bergeprod.no)";
const SUPPORT = "[apps.bergeprod.no/minbelonning/support](https://apps.bergeprod.no/minbelonning/support)";
const ADDRESS = ["Berge Media", "Korsvika 61", "6006 Ålesund", "Norge"];

export const minBelonningPrivacy: LegalDoc = {
  heading: "Personvernerklæring for Min Belønning",
  updated: "Sist oppdatert 28. september 2026",
  toc: true,
  intro: [
    "Denne personvernerklæringen gjelder for mobilappen Min Belønning («appen») og tjenestene som hører til den («tjenestene»). Tjenestene leveres av Berge Media («vi», «oss» og «vår»).",
    "Erklæringen forklarer hvilke personopplysninger vi behandler, hvorfor vi gjør det, hvem vi deler dem med, hvor lenge vi lagrer dem og hvilke rettigheter du har. Behandlingen skjer i samsvar med personvernforordningen (GDPR) og personopplysningsloven.",
    `Har du spørsmål om personvern, kan du kontakte oss på ${EMAIL}.`,
  ],
  sections: [
    {
      title: "Sammendrag av hovedpunkter",
      summary: true,
      blocks: [
        { type: "p", text: "Sammendraget gir en oversikt. Du finner detaljene i punktene under." },
        {
          type: "qa",
          items: [
            {
              q: "Hvilke opplysninger behandler vi?",
              a: "For foreldre: navn, epostadresse og innlogging. For barn: fornavn eller kallenavn, en figur eller et bilde og en farge, lagt inn av en forelder. I tillegg behandler vi innholdet familien legger inn, som oppgaver, sparemål og bilder. [Les mer](#opplysninger)",
            },
            {
              q: "Behandler vi sensitive opplysninger?",
              a: "Nei. Vi behandler ingen særlige kategorier av personopplysninger, som helse, religion eller etnisitet.",
            },
            {
              q: "Får vi opplysninger fra andre?",
              a: "I begrenset omfang. Logger du inn med Apple eller Google, får vi navnet og epostadressen din derfra. Fra Apple og Google, gjennom RevenueCat, får vi vite om abonnementet Min Belønning+ er aktivt. Opplysninger om barna legges inn av en forelder. [Les mer](#andre)",
            },
            {
              q: "Bruker vi opplysningene til reklame eller sporing?",
              a: "Nei. Appen har ingen reklame, ingen analyseverktøy og ingen sporing, og vi selger aldri personopplysninger.",
            },
            {
              q: "Hvem deler vi opplysninger med?",
              a: "Bare med leverandører som drifter tjenesten for oss, og med de andre medlemmene i din egen familie. [Les mer](#deling)",
            },
            {
              q: "Hvor lagres opplysningene?",
              a: "Databasen, innloggingen og bildene lagres hos Supabase i Irland, innenfor EU. [Les mer](#overforing)",
            },
            {
              q: "Hvor lenge lagrer vi dem?",
              a: "Så lenge kontoen og familien finnes. Sletter du kontoen eller familien i appen, slettes opplysningene med en gang. [Les mer](#lagring)",
            },
            {
              q: "Hvilke rettigheter har du?",
              a: "Du har rett til innsyn, retting, sletting, begrensning, dataportabilitet og å protestere, og du kan klage til Datatilsynet. [Les mer](#rettigheter)",
            },
          ],
        },
      ],
    },
    {
      id: "ansvarlig",
      title: "1. Hvem er ansvarlig?",
      blocks: [
        { type: "short", text: "Berge Media er behandlingsansvarlig for personopplysningene i Min Belønning." },
        { type: "address", lines: [...ADDRESS, `Epost: ${EMAIL}`] },
        {
          type: "p",
          text: "Vi har ikke oppnevnt personvernombud, fordi det ikke kreves for vår virksomhet. Alle spørsmål om personvern kan sendes til epostadressen over.",
        },
      ],
    },
    {
      id: "opplysninger",
      title: "2. Hvilke opplysninger behandler vi?",
      blocks: [
        { type: "short", text: "Vi samler bare inn det som trengs for at appen skal virke for familien din." },
        { type: "h3", text: "2.1 Opplysninger om deg som forelder eller foresatt" },
        {
          type: "ul",
          items: [
            "**Navn:** visningsnavnet ditt i familien, for eksempel «Mamma».",
            "**Epostadresse og passord:** brukes til å logge inn. Passordet lagres kryptert (hashet), og verken vi eller andre kan lese det.",
            "**Innlogging med Apple eller Google:** velger du dette, får vi navnet og epostadressen din og en teknisk identifikator for kontoen. Vi får aldri passordet ditt. Velger du «Skjul epostadressen min» hos Apple, får vi en anonym videresendingsadresse fra Apple i stedet for den ekte adressen.",
            "**Profilbilde,** hvis du velger å legge inn et.",
            "**Familiens navn og innstillinger,** for eksempel familiepotten og et eventuelt ukentlig påfyll.",
          ],
        },
        { type: "h3", text: "2.2 Opplysninger om barn" },
        {
          type: "ul",
          items: [
            "Fornavn eller kallenavn",
            "En figur eller et profilbilde, og en farge",
            "Hvilke telefoner som er koblet til barnet, med telefonmodell, for eksempel «iPhone 15»",
          ],
        },
        {
          type: "p",
          text: "Barnet oppgir ingen epostadresse, ikke noe telefonnummer og ikke noe passord. Les mer i [punkt 4](#barn).",
        },
        { type: "h3", text: "2.3 Innhold familien legger inn" },
        {
          type: "ul",
          items: [
            "Oppgaver med navn, ikon og beløp, og eventuelt beskrivelse, sjekkliste og gjentakelse",
            "Innleveringer, godkjenninger og oppgaver som sendes tilbake",
            "Bildebevis som barnet tar når en oppgave er gjort, hvis familien har Min Belønning+ og forelderen har slått det på",
            "Sparemål, belønninger, utbetalinger og historikk",
            "Varsler i appen, for eksempel at en oppgave venter på godkjenning",
          ],
        },
        {
          type: "p",
          text: "Alt innhold er privat for familien. Bilder komprimeres på telefonen før de sendes, og lagres privat.",
        },
        { type: "h3", id: "andre", text: "2.4 Opplysninger vi får fra andre" },
        {
          type: "ul",
          items: [
            "**Apple og Google:** navn, epostadresse og en teknisk identifikator når du logger inn med dem, se punkt 2.1.",
            "**RevenueCat, på vegne av Apple og Google:** om Min Belønning+ er aktivt, hvilket abonnement det gjelder (månedlig eller årlig), når perioden fornyes eller utløper, og en transaksjonsidentifikator.",
          ],
        },
        {
          type: "p",
          text: "Vi får aldri kortnummer, betalingsmåte eller fakturaadresse. Vi kjøper aldri personopplysninger, og vi henter ikke opplysninger fra offentlige registre, sosiale medier eller andre kilder.",
        },
        {
          type: "p",
          text: "Vår bruk av opplysninger vi mottar fra Googles API følger Google API Services User Data Policy, inkludert kravene om begrenset bruk (Limited Use).",
        },
        { type: "h3", text: "2.5 Opplysninger som samles inn automatisk" },
        {
          type: "ul",
          items: [
            "**Tekniske logger:** når appen kommuniserer med serveren, logger leverandøren vår IP adresse, tidspunkt, type forespørsel og eventuelle feilmeldinger. Loggene brukes bare til drift, feilsøking og sikkerhet.",
            "**Varslingstoken:** en kode fra Apple eller Google som gjør at vi kan sende varsler til telefonen, og om telefonen er en iPhone eller Android.",
            "**Telefonmodell** for telefoner som er koblet til et barn, slik at forelderen ser hvilken telefon som er koblet til.",
            "**Forsøk på å bruke koder:** for å hindre at noen gjetter koder, registrerer vi forsøk på å bruke en kode, med en teknisk identifikator og tidspunkt.",
            "**Hendelseslogg:** viktige handlinger i familien, for eksempel at et barn fjernes eller en telefon kobles fra, registreres med hvem som gjorde det og når. Loggen brukes til sikkerhet.",
            "**Appversjon og oppdateringer:** appen sjekker hvilke versjoner som kan brukes, og henter oppdateringer fra Expo. Forespørslene inneholder plattform, appversjon og IP adresse, men ikke navn eller konto. På iPhone kan knappen «Oppdater» spørre Apple om appens side i App Store.",
          ],
        },
        { type: "p", text: "Vi bruker ingen analyseverktøy, ingen krasjrapportering og ingen reklameidentifikatorer." },
        { type: "h3", text: "2.6 Tilgang til funksjoner på telefonen" },
        {
          type: "p",
          text: "Appen ber om tilgang først når du bruker funksjonen. Du kan når som helst endre tilgangen i telefonens innstillinger.",
        },
        {
          type: "ul",
          items: [
            "**Kamera:** for å skanne QR koden som kobler et barns telefon til familien, og for å ta profilbilde og bildebevis. Når en QR kode skannes, leses bildet bare på telefonen og sendes ikke til oss.",
            "**Bilder:** for å velge et bilde fra biblioteket. Appen får bare tilgang til bildet du velger.",
            "**Varsler:** for å sende pushvarsler, se punkt 3.",
          ],
        },
        {
          type: "p",
          text: "Appen ber aldri om tilgang til posisjon, kontakter, kalender, mikrofon eller Bluetooth.",
        },
        { type: "h3", text: "2.7 Opplysninger som bare lagres på telefonen" },
        {
          type: "p",
          text: "Innloggingen lagres kryptert i telefonens sikre lagring (Keychain på iPhone og Keystore på Android). Appen lagrer også enkelte innstillinger lokalt, som rekorden i spillet og om du har valgt «Senere» på en oppdatering. Dette sendes ikke til oss.",
        },
      ],
    },
    {
      id: "formal",
      title: "3. Formål og rettslig grunnlag",
      blocks: [
        {
          type: "short",
          text: "Vi bruker opplysningene for å levere appen du har valgt å bruke, for å holde den trygg og når du har gitt tillatelse på telefonen.",
        },
        {
          type: "table",
          head: ["Formål", "Opplysninger", "Rettslig grunnlag"],
          rows: [
            [
              "Opprette og administrere kontoen og innloggingen",
              "Navn, epostadresse, passord eller innlogging med Apple eller Google",
              "Avtale, art. 6 nr. 1 bokstav b",
            ],
            [
              "Levere appens funksjoner til familien: oppgaver, godkjenning, belønninger, sparemål, toppliste og historikk",
              "Innhold familien legger inn, og barnas navn, figur og farge",
              "Avtale med forelderen, art. 6 nr. 1 bokstav b. For opplysninger om barna: familiens og vår berettigede interesse i at tjenesten virker slik forelderen har valgt, art. 6 nr. 1 bokstav f",
            ],
            [
              "Koble et barns telefon til familien",
              "Engangskode, teknisk identifikator og telefonmodell",
              "Avtale, art. 6 nr. 1 bokstav b, og berettiget interesse, art. 6 nr. 1 bokstav f",
            ],
            [
              "Sende varsler, for eksempel «Emma er ferdig!» eller «Rydd rommet ble godkjent»",
              "Varslingstoken, barnets fornavn, oppgavens navn og beløp",
              "Samtykke gitt på telefonen, art. 6 nr. 1 bokstav a",
            ],
            [
              "Profilbilder og bildebevis",
              "Bilder du eller barnet velger å legge inn",
              "Samtykke til kamera og bilder på telefonen, art. 6 nr. 1 bokstav a, og avtale, art. 6 nr. 1 bokstav b",
            ],
            [
              "Levere og administrere Min Belønning+",
              "Status for abonnementet og teknisk identifikator",
              "Avtale, art. 6 nr. 1 bokstav b",
            ],
            [
              "Svare på henvendelser og gi hjelp",
              "Epostadresse og det du skriver til oss",
              "Avtale, art. 6 nr. 1 bokstav b, og berettiget interesse, art. 6 nr. 1 bokstav f",
            ],
            [
              "Gi viktig informasjon om tjenesten, for eksempel endringer i vilkår eller at appen må oppdateres",
              "Epostadresse og varsler i appen",
              "Avtale, art. 6 nr. 1 bokstav b",
            ],
            [
              "Sikkerhet, hindre misbruk og rette feil",
              "Tekniske logger, forsøk på å bruke koder og hendelseslogg",
              "Berettiget interesse i å holde tjenesten trygg og stabil, art. 6 nr. 1 bokstav f",
            ],
            [
              "Oppfylle plikter etter lov, for eksempel å svare myndigheter",
              "Det som er nødvendig i det enkelte tilfellet",
              "Rettslig forpliktelse, art. 6 nr. 1 bokstav c",
            ],
          ],
        },
        {
          type: "p",
          text: "Når vi bygger på berettiget interesse, har vi vurdert at interessen ikke veier tyngre enn ditt og barnas personvern. Behandlingen er begrenset til det som er nødvendig, og opplysningene brukes aldri til reklame eller profilering. Du kan protestere mot slik behandling, se [punkt 11](#rettigheter).",
        },
        {
          type: "p",
          text: "For å opprette en konto må du oppgi en epostadresse, eller logge inn med Apple eller Google. Uten dette kan vi ikke levere tjenesten. Alt annet, som profilbilder, bildebevis og varsler, er frivillig.",
        },
      ],
    },
    {
      id: "barn",
      title: "4. Barn",
      blocks: [
        {
          type: "short",
          text: "Barn bruker appen gjennom familien. De lager ingen konto, og forelderen bestemmer hva som lagres.",
        },
        {
          type: "p",
          text: "Min Belønning er laget for familier, og barn bruker appen. Et barn oppretter aldri en konto. En forelder eller foresatt over 18 år oppretter familien, legger til hvert barn og velger hva som lagres om barnet: et fornavn eller kallenavn, en figur eller et bilde og en farge.",
        },
        {
          type: "p",
          text: "Barnets telefon kobles til når forelderen viser en QR kode på sin egen telefon. Koden virker i 10 minutter og kan bare brukes én gang. Ved tilkoblingen opprettes en anonym, teknisk innlogging på barnets telefon. Den inneholder ikke navn, epostadresse, telefonnummer eller passord.",
        },
        {
          type: "p",
          text: "I appen ser barnet sine egne oppgaver, belønninger og sparemål. På topplisten ser barna hverandres fornavn, figur eller bilde og antall gjorte oppgaver innenfor samme familie.",
        },
        {
          type: "p",
          text: "Vi behandler opplysninger om barn bare for at appen skal virke for familien. Vi bruker dem aldri til reklame, profilering eller sporing, og vi deler dem ikke med noen utenfor familien, bortsett fra leverandørene i [punkt 7](#deling).",
        },
        {
          type: "p",
          text: "Forelderen er ansvarlig for barnets bruk av appen og kan når som helst koble fra barnets telefon, fjerne barnet eller slette hele familien. Når et barn fjernes, logges barnets telefoner ut med en gang, og barnets sparemål, varsler og bilder slettes. Barnets fornavn blir stående i familiens belønningshistorikk slik at regnskapet går opp, og slettes sammen med familien.",
        },
        {
          type: "p",
          text: "Vi anbefaler at du velger en figur i stedet for et ekte bilde hvis du ønsker å dele minst mulig. Barn har de samme rettighetene som voksne etter personvernreglene. Forelderen kan bruke rettighetene på vegne av barnet, og vi hjelper gjerne.",
        },
      ],
    },
    {
      id: "virtuelle",
      title: "5. Virtuelle belønninger",
      paragraphs: [
        "Belønningene i appen er virtuelle og er ikke penger. Appen flytter ingen penger, er ingen bank og er ikke en betalingstjeneste. Foreldre betaler ut selv, for eksempel med Vipps, bank eller kontanter, utenfor appen, og kan markere utbetalingen i appen. Vi samler ikke inn bankopplysninger eller betalingsopplysninger for dette.",
      ],
    },
    {
      id: "kjop",
      title: "6. Kjøp av Min Belønning+",
      paragraphs: [
        "Min Belønning+ kjøpes gjennom App Store eller Google Play. Apple eller Google behandler hele betalingen og er selv ansvarlige for betalingsopplysningene. Vi ser aldri kortnummer, betalingsmåte eller fakturaadresse.",
        "RevenueCat forteller oss om abonnementet er aktivt, hvilket abonnement det er, når det fornyes og en transaksjonsidentifikator. Hos RevenueCat er kjøpet knyttet til en teknisk identifikator for kontoen din, ikke til navnet eller epostadressen din.",
        "Når du sletter kontoen, sletter vi også kundeopplysningene dine hos RevenueCat. Et aktivt abonnement stoppes likevel ikke av dette. Du må si opp abonnementet i innstillingene for App Store eller Google Play.",
      ],
    },
    {
      id: "deling",
      title: "7. Hvem deler vi opplysninger med?",
      blocks: [
        {
          type: "short",
          text: "Med medlemmene i din egen familie, og med leverandører som drifter tjenesten for oss. Vi selger aldri personopplysninger.",
        },
        { type: "h3", text: "7.1 Innenfor familien" },
        {
          type: "p",
          text: "Medlemmene i en familie ser hverandres navn, figurer eller profilbilder, oppgaver, belønninger, sparemål og plassering på topplisten. Foreldre ser også hvilke telefoner som er koblet til barna. Ingenting er offentlig, og ingen utenfor familien kan se innholdet.",
        },
        { type: "h3", text: "7.2 Leverandører" },
        {
          type: "p",
          text: "Vi bruker disse leverandørene til å drifte tjenesten. Vi har databehandleravtaler med dem, og de kan bare behandle opplysningene etter våre instrukser.",
        },
        {
          type: "table",
          head: ["Leverandør", "Hva de gjør", "Opplysninger", "Hvor"],
          rows: [
            ["[Supabase](https://supabase.com/privacy)", "Server, database, innlogging og bildelagring", "Opplysningene i appen", "Irland (EU)"],
            ["[RevenueCat](https://www.revenuecat.com/privacy)", "Administrerer abonnementet Min Belønning+", "Teknisk identifikator og status for abonnementet", "USA"],
            ["[Expo](https://expo.dev/privacy)", "Leverer pushvarsler og appoppdateringer", "Varslingstoken, varselets tekst, IP adresse ved oppdatering", "USA"],
            ["[Apple](https://www.apple.com/legal/privacy/)", "App Store, kjøp, Sign in with Apple, TestFlight og varsler (APNs)", "Innlogging, kjøp og varslingstoken", "USA og EU"],
            ["[Google](https://policies.google.com/privacy)", "Google Play, kjøp, innlogging med Google og varsler (Firebase Cloud Messaging)", "Innlogging, kjøp og varslingstoken", "USA og EU"],
          ],
        },
        {
          type: "p",
          text: "For App Store, Google Play, kjøp og sine egne kontoer er Apple og Google også selvstendig ansvarlige etter sine egne personvernerklæringer.",
        },
        { type: "h3", text: "7.3 Andre tilfeller" },
        {
          type: "ul",
          items: [
            "**Plikter etter lov:** vi kan utlevere opplysninger når loven krever det, for eksempel etter pålegg fra en myndighet.",
            "**Overdragelse av virksomheten:** hvis tjenesten overdras til en annen virksomhet, kan opplysningene følge med. Du får beskjed før det skjer, og den nye eieren må følge denne erklæringen.",
          ],
        },
      ],
    },
    {
      id: "overforing",
      title: "8. Overføring til land utenfor EU og EØS",
      paragraphs: [
        "Databasen, innloggingen og bildene lagres hos Supabase i Irland, innenfor EU. RevenueCat, Expo, Apple og Google kan behandle enkelte opplysninger i USA, som beskrevet i punkt 7.",
        "Slike overføringer skjer med gyldig grunnlag etter GDPR kapittel V: Europakommisjonens standard personvernbestemmelser (Standard Contractual Clauses), som er en del av databehandleravtalene, og for virksomheter som er sertifisert, rammeverket Data Privacy Framework mellom EU og USA. Du kan be om en kopi av bestemmelsene ved å kontakte oss.",
      ],
    },
    {
      id: "lagring",
      title: "9. Hvor lenge lagrer vi opplysningene?",
      blocks: [
        { type: "short", text: "Så lenge kontoen og familien finnes. Når du sletter, slettes opplysningene med en gang." },
        {
          type: "table",
          head: ["Opplysninger", "Lagringstid"],
          rows: [
            ["Kontoen din: navn, epostadresse, innlogging og profilbilde", "Til du sletter kontoen. Opplysningene slettes da med en gang."],
            [
              "Familien: barn, oppgaver, sparemål, varsler, belønningshistorikk og abonnementsstatus",
              "Til familien slettes, enten med «Slett familien» eller når den siste forelderen sletter kontoen sin.",
            ],
            [
              "Et barn som fjernes",
              "Telefoner, sparemål, varsler og bilder slettes med en gang. Fornavnet i belønningshistorikken slettes sammen med familien.",
            ],
            ["Bildebevis", "Til en forelder sletter bildet, barnet fjernes eller familien slettes."],
            [
              "QR koder og invitasjonskoder",
              "QR koden virker i 10 minutter og en invitasjon til en foresatt i 15 minutter, og begge kan bare brukes én gang. Koden lagres kryptert og slettes sammen med familien.",
            ],
            ["Forsøk på å bruke koder", "Slettes automatisk etter ett døgn."],
            ["Varslingstoken", "Til du logger ut, sletter kontoen eller Apple eller Google gjør koden ugyldig."],
            [
              "Hendelseslogg",
              "Til familien slettes. Sletter en forelder kontoen sin, fjernes den forelderens identifikator fra loggen.",
            ],
            ["Tekniske logger hos Supabase", "I en kort periode etter leverandørens faste rutiner, deretter slettes de automatisk."],
            ["Henvendelser på epost", "Så lenge det trengs for å hjelpe deg, og senest 12 måneder etter at saken er avsluttet."],
            ["Kundeopplysninger hos RevenueCat", "Slettes når du sletter kontoen."],
            [
              "Sikkerhetskopier",
              "Opplysninger kan finnes i sikkerhetskopier i en kort periode etter sletting, og slettes automatisk når sikkerhetskopiene fornyes. De brukes bare til å gjenopprette tjenesten etter en feil.",
            ],
          ],
        },
        {
          type: "p",
          text: "Sletter en forelder kontoen sin mens det finnes en annen forelder i familien, slettes bare den forelderens konto, medlemskap og profilbilde. Familien blir værende for de andre, og den forelderens identifikator fjernes fra historikken.",
        },
      ],
    },
    {
      id: "sikkerhet",
      title: "10. Hvordan beskytter vi opplysningene?",
      blocks: [
        { type: "short", text: "Med kryptering, streng tilgangskontroll og så få opplysninger som mulig." },
        {
          type: "ul",
          items: [
            "All kommunikasjon mellom appen og serveren er kryptert.",
            "Tilgangskontroll i databasen sørger for at hver familie bare ser sine egne opplysninger, og at et barn bare ser det som er ment for barnet.",
            "Serveren bestemmer alle beløp. Appen kan aldri selv endre belønninger eller familiepotten.",
            "Bilder lagres privat og vises bare gjennom lenker som virker i fem minutter.",
            "Passord lagres kryptert, og innloggingen lagres i telefonens sikre lagring.",
            "Koder virker bare én gang og bare i kort tid, lagres kryptert, og antall forsøk er begrenset.",
            "Hemmelige nøkler finnes bare på serveren, aldri i appen.",
          ],
        },
        {
          type: "p",
          text: "Ingen overføring over internett eller lagring av data kan garanteres å være helt sikker. Skulle det likevel skje et brudd på personopplysningssikkerheten, melder vi fra til Datatilsynet innen 72 timer. Er det sannsynlig at bruddet gir høy risiko for deg, gir vi deg beskjed uten ugrunnet opphold.",
        },
      ],
    },
    {
      id: "rettigheter",
      title: "11. Dine rettigheter",
      blocks: [
        { type: "short", text: "Du bestemmer over dine opplysninger, og det er gratis å bruke rettighetene dine." },
        {
          type: "ul",
          items: [
            "**Innsyn** (art. 15): du kan få vite hvilke opplysninger vi har om deg, og få en kopi.",
            "**Retting** (art. 16): du kan rette opplysninger som er feil. Det meste kan du endre direkte i appen.",
            "**Sletting** (art. 17): du kan slette kontoen, et barn eller hele familien i appen, eller be oss om å slette opplysningene.",
            "**Begrensning** (art. 18): du kan be oss om å begrense behandlingen i visse tilfeller.",
            "**Dataportabilitet** (art. 20): du kan få opplysningene du har gitt oss i et vanlig, maskinlesbart format.",
            "**Protest** (art. 21): du kan protestere mot behandling som bygger på berettiget interesse.",
            "**Trekke tilbake samtykke** (art. 7 nr. 3): se [punkt 13](#samtykke).",
          ],
        },
        {
          type: "p",
          text: `Du kan bruke rettighetene direkte i appen, eller ved å skrive til ${EMAIL}. Du finner også hjelp på ${SUPPORT}. Vi svarer innen én måned. Er henvendelsen omfattende, kan fristen forlenges med inntil to måneder, og da gir vi deg beskjed. For å beskytte opplysningene dine kan vi be deg bekrefte hvem du er, for eksempel ved å skrive fra epostadressen som er knyttet til kontoen.`,
        },
      ],
    },
    {
      id: "slette",
      title: "12. Slik sletter du opplysninger i appen",
      blocks: [
        {
          type: "ul",
          items: [
            "**Slett kontoen:** Mer → Innstillinger → Slett kontoen, og bekreft ved å skrive SLETT. Er du den siste forelderen i familien, slettes hele familien. Ellers slettes bare kontoen din.",
            "**Slett familien:** Mer → Innstillinger → Slett familien, og bekreft ved å skrive familiens navn. Alt om familien slettes, også bilder og barnas tilkoblinger.",
            "**Fjern et barn:** åpne barnets side og trykk Slett.",
            "**Koble fra en telefon:** åpne barnets side og trykk Koble fra.",
            "**Slett et bilde:** trykk Slett bilde når du ser på oppgaven.",
          ],
        },
        {
          type: "p",
          text: `Har du ikke lenger appen, kan du be om sletting ved å skrive til ${EMAIL} fra epostadressen som er knyttet til kontoen. Husk at et aktivt abonnement må sies opp i App Store eller Google Play.`,
        },
      ],
    },
    {
      id: "samtykke",
      title: "13. Samtykke og tillatelser på telefonen",
      paragraphs: [
        "Varsler, kamera og bilder bygger på tillatelser du gir på telefonen. Du kan når som helst trekke dem tilbake i telefonens innstillinger, under Min Belønning. Appen virker fortsatt, men uten den funksjonen. At du trekker tilbake et samtykke, påvirker ikke behandlingen som skjedde før.",
      ],
    },
    {
      id: "automatisert",
      title: "14. Automatiserte avgjørelser og profilering",
      paragraphs: [
        "Vi tar ingen automatiserte avgjørelser som har rettslig virkning eller tilsvarende betydning for deg, og vi driver ikke profilering. Når appen foreslår et ikon for en oppgave, skjer det med en enkel ordliste på telefonen, uten at noe sendes til oss.",
      ],
    },
    {
      id: "sporing",
      title: "15. Informasjonskapsler og sporing",
      paragraphs: [
        "Appen bruker ingen informasjonskapsler, ingen sporingsteknologi og ingen reklameidentifikatorer, og den ber ikke om tillatelse til sporing. Siden vi ikke sporer deg, er det ikke noe å slå av med «Ikke spor».",
        "Denne erklæringen gjelder appen. For nettsidene bergeprod.no og apps.bergeprod.no, se [personvernerklæringen for nettsiden](https://bergeprod.no/personvern).",
      ],
    },
    {
      id: "klage",
      title: "16. Klage til Datatilsynet",
      paragraphs: [
        "Vi ønsker at du kontakter oss først hvis du mener at vi ikke behandler opplysningene dine riktig, så skal vi gjøre vårt beste for å rette det opp. Du har også rett til å klage til Datatilsynet, som er tilsynsmyndigheten i Norge: [datatilsynet.no](https://www.datatilsynet.no). Bor du i et annet land i EU eller EØS, kan du også klage til tilsynsmyndigheten der.",
      ],
    },
    {
      id: "endringer",
      title: "17. Endringer i denne erklæringen",
      paragraphs: [
        "Vi oppdaterer erklæringen når appen eller reglene endres. Datoen øverst viser når den sist ble endret. Ved vesentlige endringer gir vi beskjed i appen før endringene gjelder.",
      ],
    },
    {
      id: "kontakt",
      title: "18. Kontakt oss",
      blocks: [
        {
          type: "p",
          text: "Har du spørsmål om denne erklæringen eller om hvordan vi behandler personopplysninger, kan du kontakte oss:",
        },
        { type: "address", lines: [...ADDRESS, `Epost: ${EMAIL}`, `Hjelp: ${SUPPORT}`] },
      ],
    },
  ],
};
