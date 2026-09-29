import type { LegalDoc } from "../apps";

const EMAIL = "[hei@bergeprod.no](mailto:hei@bergeprod.no)";
const PRIVACY = "[personvernerklæringen](https://apps.bergeprod.no/minbelonning/privacy)";
const ADDRESS = ["Berge Media, org.nr. 933 194 132", "Korsvika 61", "6006 Ålesund", "Norge", `Epost: ${EMAIL}`];

export const minBelonningTerms: LegalDoc = {
  heading: "Vilkår for bruk av Min Belønning",
  updated: "Sist oppdatert 29. september 2026",
  toc: true,
  intro: [
    "Disse vilkårene («vilkårene») er en avtale mellom deg og Berge Media («vi», «oss» og «vår») om bruk av mobilappen Min Belønning, som heter My Reward på engelsk («appen») og tjenestene som hører til den («tjenesten»).",
    `Når du oppretter en konto eller bruker appen, godtar du vilkårene. Les dem sammen med ${PRIVACY}, som forklarer hvordan vi behandler personopplysninger. Godtar du ikke vilkårene, skal du ikke bruke appen.`,
    "Vilkårene gjelder i tillegg til lisensavtalen i App Store eller Google Play, avhengig av hvor du lastet ned appen. Apple og Google er ikke parter i disse vilkårene og har ikke ansvar for appen eller innholdet i den.",
  ],
  sections: [
    {
      title: "Sammendrag av hovedpunkter",
      summary: true,
      blocks: [
        { type: "p", text: "Sammendraget gir en oversikt. De fullstendige vilkårene står i punktene under." },
        {
          type: "qa",
          items: [
            {
              q: "Hvem kan lage en konto?",
              a: "En forelder eller foresatt over 18 år. Barn bruker appen gjennom familien, og forelderen er ansvarlig for barnas bruk.",
            },
            {
              q: "Er belønningene ekte penger?",
              a: "Nei. Belønningene er et regnskap familien fører selv. Appen flytter ingen penger, og det er forelderen som bestemmer om og hvordan de betales ut.",
            },
            {
              q: "Hva koster appen?",
              a: "Appen er gratis å bruke med visse grenser. Min Belønning+ er et frivillig abonnement som fornyes automatisk til du sier det opp i App Store eller Google Play.",
            },
            {
              q: "Hvem eier innholdet?",
              a: "Dere eier det dere legger inn. Vi bruker det bare for at appen skal virke for familien.",
            },
            {
              q: "Kan jeg slutte når jeg vil?",
              a: "Ja. Du kan slette kontoen eller hele familien i appen når som helst, og dataene slettes med en gang.",
            },
          ],
        },
      ],
    },
    {
      id: "om",
      title: "1. Om tjenesten og hvem vi er",
      blocks: [
        {
          type: "p",
          text: "Min Belønning hjelper familier å lage oppgaver, godkjenne dem og holde oversikt over belønninger og sparemål. Foreldre lager oppgavene, barna gjør dem, og foreldrene godkjenner.",
        },
        { type: "p", text: "Tjenesten leveres av:" },
        { type: "address", lines: ADDRESS },
      ],
    },
    {
      id: "ord",
      title: "2. Ord og uttrykk",
      items: [
        "**Familie:** gruppen av foreldre, foresatte og barn som bruker appen sammen.",
        "**Forelder** eller **foresatt:** en voksen med konto i appen som er medlem av en familie.",
        "**Barn:** et barn som er lagt til i familien av en forelder, og som bruker appen på en telefon som er koblet til familien.",
        "**Innhold:** alt familien legger inn i appen, som navn, bilder, oppgaver og sparemål.",
        "**Belønning:** et beløp som registreres i appen når en oppgave godkjennes. Belønningen er virtuell, se [punkt 6](#virtuelle).",
        "**Familiepotten:** beløpet forelderen setter av i appen, som barna kan tjene fra.",
        "**Min Belønning+:** abonnementet som gir familien flere funksjoner, se [punkt 9](#pris).",
      ],
    },
    {
      id: "hvem",
      title: "3. Hvem kan bruke appen",
      paragraphs: [
        "Kontoen må opprettes av en forelder eller foresatt som er over 18 år. Barn kan ikke opprette egne kontoer, men bruker appen gjennom en familie som en forelder har laget. Appen tilbys familier i Norge og resten av EU og EØS.",
        "Forelderen er ansvarlig for at barnas bruk av appen er i tråd med disse vilkårene, og for at det er greit for barnet å bruke appen. Appen er laget for privat bruk i familien og kan ikke brukes i næringsvirksomhet, for eksempel i barnehager, skoler eller klubber, uten avtale med oss.",
      ],
    },
    {
      id: "konto",
      title: "4. Kontoen din",
      items: [
        "Du må oppgi riktige opplysninger og holde dem oppdatert.",
        "Du logger inn med epostadresse og passord, eller med Apple eller Google. Lager du en konto med epostadressen din, bekrefter du den med en kode vi sender deg på epost. Passordet ditt skal du holde for deg selv, og du er ansvarlig for det som skjer med kontoen din.",
        "Hver konto tilhører én person og kan ikke deles eller overdras.",
        "En konto kan være medlem av én familie om gangen.",
        "Mistenker du at noen andre har tilgang til kontoen din, må du endre passordet og kontakte oss.",
      ],
    },
    {
      id: "familien",
      title: "5. Familien, foresatte og barn",
      paragraphs: [
        "Forelderen som oppretter familien, legger til barna og bestemmer hva som lagres om dem. Et barns telefon kobles til familien ved at forelderen viser en QR kode på sin egen telefon. Koden virker i 10 minutter og kan bare brukes én gang. Vis den bare til ditt eget barn.",
        "Med Min Belønning+ kan du invitere andre foresatte til familien. Alle foresatte i familien kan lage og godkjenne oppgaver, legge til og fjerne barn, koble fra telefoner og slette familien. Inviter bare personer du stoler på.",
        "Sletter en forelder kontoen sin, blir familien værende for de andre foresatte. Sletter den siste forelderen kontoen sin, slettes hele familien.",
      ],
    },
    {
      id: "virtuelle",
      title: "6. Belønningene er virtuelle",
      blocks: [
        { type: "short", text: "Belønningene er et regnskap i appen, ikke penger." },
        {
          type: "ul",
          items: [
            "Belønningene og familiepotten er bare tall som familien registrerer selv. De er ikke penger, ikke elektroniske penger og ikke et tilgodehavende hos oss.",
            "Appen flytter ingen penger, er ingen bank og er ikke en betalingstjeneste. Belønningene gir ingen renter og kan ikke løses inn hos oss.",
            "Det er forelderen som bestemmer om, når og hvordan belønningene betales ut, for eksempel med Vipps, bank eller kontanter, utenfor appen.",
            "Avtaler om belønninger er mellom forelderen og barnet. Vi er ikke part i slike avtaler og har ikke ansvar for dem.",
            "Familien velger om beløpene vises i norske kroner eller amerikanske dollar, og kan endre dette i appen når som helst. Valget endrer bare hvordan beløpene vises. Ingen penger veksles eller flyttes.",
            "Beløp registreres i hele kroner, eller i dollar med én desimal. Familiepotten kan ha et øvre tak, som vises i appen.",
          ],
        },
      ],
    },
    {
      id: "innhold",
      title: "7. Innhold dere legger inn",
      blocks: [
        {
          type: "p",
          text: "Dere eier innholdet dere legger inn. Du gir oss en begrenset rett til å lagre, behandle og vise innholdet til familien så lenge det trengs for å levere tjenesten. Vi bruker det ikke til noe annet.",
        },
        { type: "p", text: "Du er ansvarlig for innholdet du legger inn, og skal ikke legge inn innhold som:" },
        {
          type: "ul",
          items: [
            "er ulovlig, krenkende, truende eller trakasserende",
            "viser eller omtaler andre personer uten at du har lov til det",
            "krenker andres rettigheter, for eksempel opphavsrett",
            "inneholder skadelig kode eller personopplysninger om personer utenfor familien",
          ],
        },
        {
          type: "p",
          text: "Bilder av barn skal bare deles innenfor egen familie. Bilder lagres privat, og bare familien kan se dem. Vi kan fjerne innhold som bryter med loven eller disse vilkårene.",
        },
      ],
    },
    {
      id: "bruk",
      title: "8. Akseptabel bruk",
      blocks: [
        { type: "p", text: "Du skal bruke appen slik den er ment å brukes. Du skal ikke:" },
        {
          type: "ul",
          items: [
            "prøve å få tilgang til andre familiers opplysninger eller til deler av tjenesten du ikke har tilgang til",
            "omgå sikkerhetstiltak, grenser eller betaling for Min Belønning+",
            "bruke automatiserte verktøy, som roboter, mot tjenesten, eller overbelaste den",
            "kopiere, endre eller dekompilere appen, bortsett fra det loven uttrykkelig tillater",
            "bruke appen til ulovlige formål eller på en måte som kan skade andre",
          ],
        },
        {
          type: "p",
          text: `Finner du et sikkerhetshull, setter vi pris på at du sier fra til ${EMAIL} i stedet for å utnytte det.`,
        },
      ],
    },
    {
      id: "pris",
      title: "9. Gratisversjonen og Min Belønning+",
      blocks: [
        {
          type: "short",
          text: "Appen er gratis med grenser. Min Belønning+ gir mer, fornyes automatisk og sies opp i App Store eller Google Play.",
        },
        { type: "h3", text: "9.1 Gratisversjonen" },
        {
          type: "p",
          text: "Appen kan brukes gratis. Per i dag kan en familie i gratisversjonen blant annet ha opptil 3 barn, 3 aktive og 5 lagrede oppgaver, ett sparemål per barn og én forelder, og se de nyeste hendelsene på forsiden. Gjeldende grenser vises i appen.",
        },
        { type: "h3", text: "9.2 Min Belønning+" },
        {
          type: "p",
          text: "Min Belønning+ gjelder for hele familien. Per i dag gir abonnementet blant annet plass til opptil 10 barn, opptil 20 aktive og 50 lagrede oppgaver, faste oppgaver som gjentas, bildebevis, beskrivelse og sjekkliste på oppgaver, flere sparemål per barn, flere foresatte i familien, familieoversikt og hele historikken.",
        },
        { type: "h3", text: "9.3 Pris, betaling og fornyelse" },
        {
          type: "ul",
          items: [
            "Min Belønning+ kjøpes gjennom App Store eller Google Play og kan betales månedlig eller årlig. Prisen vises i appen og i butikken før du kjøper, og er inkludert merverdiavgift. Per i dag er prisen 49 kr i måneden eller 399 kr i året.",
            "Betalingen trekkes fra kontoen din i App Store eller Google Play når du bekrefter kjøpet.",
            "Abonnementet fornyes automatisk for en ny periode til samme pris, med mindre du sier det opp senest 24 timer før perioden er slutt.",
            "Du sier opp i innstillingene for App Store eller Google Play. Å slette appen eller kontoen sier ikke opp abonnementet.",
            "Etter oppsigelse har familien Min Belønning+ ut perioden du har betalt for.",
          ],
        },
        { type: "h3", text: "9.4 Angrerett og refusjon" },
        {
          type: "p",
          text: "Kjøp, betaling, angrerett og refusjon behandles av Apple eller Google etter deres vilkår. Ønsker du pengene tilbake, må du be om det hos Apple eller Google. Rettighetene du har som forbruker etter norsk lov, gjelder alltid.",
        },
        { type: "h3", text: "9.5 Endringer i pris og innhold" },
        {
          type: "p",
          text: "Vi kan endre prisen eller hva som er med i gratisversjonen og Min Belønning+. Endrer vi prisen, får du beskjed før den nye prisen gjelder, og du kan si opp før det skjer. Apple eller Google kan også be deg godta en prisøkning før den gjelder.",
        },
        { type: "h3", text: "9.6 Når abonnementet slutter" },
        {
          type: "p",
          text: "Slutter abonnementet, går familien over til gratisversjonen. Innholdet dere har laget, blir liggende, men funksjonene som krever Min Belønning+ blir utilgjengelige, og grensene i gratisversjonen gjelder igjen.",
        },
      ],
    },
    {
      id: "varsler",
      title: "10. Varsler og beskjeder",
      paragraphs: [
        "Appen kan sende pushvarsler om det som skjer i familien, for eksempel at en oppgave venter på godkjenning. Du kan slå varslene av og på i telefonens innstillinger. Vi kan også gi viktige beskjeder om tjenesten i appen eller på epost, for eksempel om endringer i vilkårene. Vi sender ikke reklame.",
      ],
    },
    {
      id: "tilgang",
      title: "11. Tilgjengelighet, oppdateringer og endringer",
      items: [
        "Vi jobber for at appen skal være tilgjengelig og virke som den skal, men vi kan ikke love at den alltid er uten feil eller avbrudd, for eksempel ved vedlikehold eller feil hos leverandører.",
        "Vi kan forbedre, endre, legge til eller fjerne funksjoner.",
        "Noen ganger må du oppdatere appen for å kunne fortsette å bruke den, for eksempel av sikkerhetshensyn.",
        "Skulle vi legge ned tjenesten, gir vi beskjed i rimelig tid, normalt minst 30 dager i forveien, og stopper fornyelsen av Min Belønning+.",
      ],
    },
    {
      id: "rettigheter",
      title: "12. Rettigheter til appen",
      paragraphs: [
        "Appen, navnene Min Belønning og My Reward, logoene, illustrasjonene, designet og koden tilhører Berge Media eller våre lisensgivere og er beskyttet av opphavsrett og andre rettigheter. Du får en personlig, begrenset rett til å bruke appen til privat bruk i familien, så lenge du følger disse vilkårene. Retten kan ikke overdras.",
      ],
    },
    {
      id: "tredjepart",
      title: "13. Tjenester fra andre",
      paragraphs: [
        `Appen bruker tjenester fra andre, blant annet Apple og Google for nedlasting, kjøp, innlogging og varsler, RevenueCat for abonnementet, Supabase for server og lagring og Resend for eposter. Når du bruker Apple eller Google, gjelder også deres vilkår. Vi har ikke ansvar for tjenester fra andre, men vi velger leverandører med omhu og har databehandleravtaler med dem. Du finner en oversikt i ${PRIVACY}.`,
      ],
    },
    {
      id: "ansvar",
      title: "14. Ansvar",
      items: [
        "Vi leverer appen med den kvaliteten og funksjonaliteten som er beskrevet, og retter feil så snart vi kan.",
        "Vi har ikke ansvar for indirekte tap, som tapt fortjeneste, eller for tap som skyldes forhold utenfor vår kontroll.",
        "Vi har ikke ansvar for avtaler eller uenigheter i familien om oppgaver og belønninger.",
        "Så langt loven tillater det, er vårt samlede ansvar overfor deg begrenset til det du har betalt for Min Belønning+ de siste 12 månedene.",
        "Begrensningene gjelder ikke ved grov uaktsomhet eller forsett, og de begrenser aldri rettighetene du har som forbruker etter norsk lov.",
      ],
    },
    {
      id: "avslutning",
      title: "15. Sletting, oppsigelse og stenging",
      paragraphs: [
        "**Du kan slutte når som helst.** Du kan slette kontoen din under Mer → Innstillinger → Slett kontoen, eller slette hele familien under Mer → Innstillinger → Slett familien. Dataene slettes da med en gang, slik det er beskrevet i personvernerklæringen. Et aktivt abonnement må du si opp i App Store eller Google Play.",
        "**Vi kan stenge eller begrense en konto** hvis den brukes i strid med disse vilkårene eller loven. Når det er rimelig, gir vi først en advarsel og mulighet til å rette forholdet. Ved alvorlige brudd, for eksempel ulovlig innhold eller forsøk på å bryte sikkerheten, kan vi stenge kontoen med en gang.",
      ],
    },
    {
      id: "personvern",
      title: "16. Personvern",
      paragraphs: [`Hvordan vi behandler personopplysninger, også om barn, står i ${PRIVACY}.`],
    },
    {
      id: "endringer",
      title: "17. Endringer i vilkårene",
      paragraphs: [
        "Vi kan endre vilkårene når tjenesten eller reglene endres. Ved vesentlige endringer gir vi beskjed i appen i rimelig tid før de gjelder, normalt minst 30 dager i forveien. Fortsetter du å bruke appen etter at endringene gjelder, godtar du de nye vilkårene. Godtar du dem ikke, kan du slette kontoen og si opp abonnementet.",
      ],
    },
    {
      id: "lov",
      title: "18. Lovvalg og tvister",
      paragraphs: [
        "Vilkårene reguleres av norsk lov. Er du uenig i noe, ber vi deg kontakte oss først, så prøver vi å finne en løsning. Som forbruker kan du også få hjelp av Forbrukerrådet, og saken kan bringes inn for Forbrukerklageutvalget. Tvister som ikke løses, avgjøres av de alminnelige domstolene. Som forbruker kan du alltid reise sak der du bor.",
      ],
    },
    {
      id: "kontakt",
      title: "19. Kontakt oss",
      blocks: [
        { type: "p", text: "Har du spørsmål om vilkårene, kan du kontakte oss:" },
        {
          type: "address",
          lines: [...ADDRESS, "Hjelp: [apps.bergeprod.no/minbelonning/support](https://apps.bergeprod.no/minbelonning/support)"],
        },
      ],
    },
  ],
};
