export type Category =
  | "Bedrift"
  | "Sosiale Medier"
  | "Dokumentar"
  | "Promo"
  | "Konferanse"
  | "Kortfilm";

export interface Project {
  title: string;
  client?: string;
  year: string;
  category: Category;
  description?: string;
  featured?: boolean;
  /** Path under /public, e.g. "/work/project.jpg". Optional — falls back to the
   *  YouTube thumbnail (if youtubeId is set) or a styled placeholder. */
  image?: string;
  /** YouTube video ID — the bit after "watch?v=" or "/embed/".
   *  e.g. for https://www.youtube.com/embed/YTc3IQymQJw it's "YTc3IQymQJw".
   *  When set, the card plays the film in a popup and auto-loads its thumbnail. */
  youtubeId?: string;
  /** External link to the film (used only if there is no youtubeId). */
  href?: string;
}

export const categories: Category[] = [
  "Bedrift",
  "Sosiale Medier",
  "Dokumentar",
  "Promo",
  "Konferanse",
  "Kortfilm",
];

export const projects: Project[] = [
  {
    title: "Minne",
    client: "Mental Helse Norge",
    year: "2026",
    category: "Kortfilm",
    youtubeId: "JZYX1nl7ocU",
    featured: true,
    description: "En kort holdningskampanje om mental helse laget for Mental Helse Norge.",
  },
  {
    title: "BREHEIMEN",
    year: "2025",
    category: "Kortfilm",
    youtubeId: "bG11gaLaUZI",
    description: "Naturfilm produsert for Breheimsenteret om landskapet og naturopplevelsene i Breheimen. I dette prosjektet hadde jeg rollen som filmfotograf, med ansvar for det visuelle uttrykket og fotograferingen.",
  },
  {
    title: "HALLEN",
    client: "HALLEN Skatehall",
    year: "2025",
    category: "Promo",
    youtubeId: "pLD1vCJM3Fc",
    description: "Promo for HALLEN skatehall i Ålesund. Filmen fanger miljøet, energien og kulturen i skatehallen for åpningsdagen deres.",
  },
  {
    title: "Røykvarsleren",
    client: "Brannvernforeningen",
    year: "2025",
    category: "Promo",
    youtubeId: "I1QNJpKJHdc",
    featured: true,
    description: "Kortfilm laget for Brannvernforeningen, vist under Røykvarslerdagen. Filmen følger en mann som kommer hjem og lager pizza, men avdekker gradvis en livsfarlig konsekvens av å ha tatt ned røykvarsleren.",
  },
  {
    title: "Søvik",
    year: "2025",
    category: "Dokumentar",
    youtubeId: "3G1TkbNlgFU",
    description: "Dokumentar om malerkunstneren Ragnhild Søvik, med fokus på hennes kunstneriske prosess og hverdagsliv. Jeg hadde rollen som fotograf og stod for filmens visuelle uttrykk.",
  },
  {
    title: "XPENG Winter Test",
    client: "AVIA",
    year: "2026",
    category: "Promo",
    youtubeId: "0JwDzD7A-J8",
    description: "En video som viser når 2 nordmenn reiste for å teste ut de nye bilene til XPENG. Min rolle: Klipper.",
  },
  {
    title: "Sølvtrans Lærling",
    client: "Sølvtrans",
    year: "2026",
    category: "Bedrift",
    youtubeId: "8fbqmpe4Zv4",
    featured: true,
    description: "En promo video for nye lærlinger i Sølvtrans hvor de reiser til Sandsøya.",
  },
  {
    title: "Hexagon Purus",
    client: "Hexagon Purus",
    year: "2025",
    category: "Bedrift",
    youtubeId: "YTc3IQymQJw",
    description: "Promo for Hexagon Purus, et internasjonalt selskap som utvikler og leverer hydrogentanksystemer. Filmen presenterer selskapets teknologi og rolle i det grønne skiftet.",
  },
  {
    title: "Statens Vegvesen Bylunsj",
    client: "AVIA",
    year: "2025",
    category: "Bedrift",
    youtubeId: "xssUHMDWp_4",
  },
  {
    title: "Haramkonferansen 2025",
    year: "2025",
    category: "Konferanse",
    youtubeId: "uec_HZa0jYQ",
    featured: true,
    description: "Oppsummeringsfilm fra Haramkonferansen 2025, produsert i samarbeid med ÅKP.",
  },
  {
    title: "Tussa Datasenter 1",
    client: "OCLIN",
    year: "2026",
    category: "Bedrift",
    youtubeId: "qcZi3B6PiSI",
  },
  {
    title: "Tussa Datasenter 2",
    client: "OCLIN",
    year: "2026",
    category: "Bedrift",
    youtubeId: "jqhqT9t_E5o",
  },
  {
    title: "BUA Samlefilm",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "X8cVJOcrP0s",
  },
  {
    title: "ToGetWork Kunne Du Gjort Denne Jobben?",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "t_1tYyKNtoI",
  },
  {
    title: "ToGetWork Tips Fra De Ansatte",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "jHAlw60enI8",
  },
  {
    title: "ToGetWork Hafslund 3",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "2qS_RLL6F8E",
  },
  {
    title: "ToGetWork Hafslund 2",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "slPDziFNKU8",
  },
  {
    title: "ToGetWork Hafslund 1",
    client: "AVIA",
    year: "2026",
    category: "Sosiale Medier",
    youtubeId: "UNtBSRGu7eA",
  },
];
