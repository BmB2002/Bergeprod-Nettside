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
    year: "2025",
    category: "Kortfilm",
    youtubeId: "JZYX1nl7ocU",
    featured: true,
  },
  {
    title: "BREHEIMEN",
    year: "2025",
    category: "Kortfilm",
    youtubeId: "bG11gaLaUZI",
  },
  {
    title: "HALLEN",
    client: "HALLEN Skatehall",
    year: "2025",
    category: "Promo",
    youtubeId: "pLD1vCJM3Fc",
  },
  {
    title: "Røykvarsleren",
    client: "Brannvernforeningen",
    year: "2025",
    category: "Promo",
    youtubeId: "I1QNJpKJHdc",
    featured: true,
  },
  {
    title: "Søvik",
    year: "2025",
    category: "Dokumentar",
    youtubeId: "3G1TkbNlgFU",
  },
  {
    title: "XPENG Winter Test",
    client: "XPENG",
    year: "2025",
    category: "Promo",
    youtubeId: "0JwDzD7A-J8",
  },
  {
    title: "Hexagon Purus",
    client: "Hexagon Purus",
    year: "2025",
    category: "Bedrift",
    youtubeId: "YTc3IQymQJw",
  },
  {
    title: "Tussa Datasenter 2",
    client: "Tussa",
    year: "2025",
    category: "Bedrift",
    youtubeId: "jqhqT9t_E5o",
  },
  {
    title: "Tussa Datasenter 1",
    client: "Tussa",
    year: "2025",
    category: "Bedrift",
    youtubeId: "qcZi3B6PiSI",
  },
  {
    title: "Statens Vegvesen Bylunsj",
    client: "Statens Vegvesen",
    year: "2025",
    category: "Bedrift",
    youtubeId: "xssUHMDWp_4",
  },
  {
    title: "Haramkonferansen 2025",
    year: "2025",
    category: "Konferanse",
    youtubeId: "uec_HZa0jYQ",
  },
  {
    title: "ToGetWork Kunne Du Gjort Denne Jobben?",
    client: "Hafslund",
    year: "2025",
    category: "Sosiale Medier",
    youtubeId: "t_1tYyKNtoI",
  },
  {
    title: "ToGetWork Tips Fra De Ansatte",
    client: "Hafslund",
    year: "2025",
    category: "Sosiale Medier",
    youtubeId: "jHAlw60enI8",
  },
  {
    title: "ToGetWork Hafslund 3",
    client: "Hafslund",
    year: "2025",
    category: "Sosiale Medier",
    youtubeId: "2qS_RLL6F8E",
  },
  {
    title: "ToGetWork Hafslund 2",
    client: "Hafslund",
    year: "2025",
    category: "Sosiale Medier",
    youtubeId: "slPDziFNKU8",
  },
  {
    title: "ToGetWork Hafslund 1",
    client: "Hafslund",
    year: "2025",
    category: "Sosiale Medier",
    youtubeId: "UNtBSRGu7eA",
  },
  {
    title: "Brand Reel",
    client: "Client Name",
    year: "2025",
    category: "Sosiale Medier",
  },
  {
    title: "Untitled Documentary",
    year: "2024",
    category: "Dokumentar",
  },
  {
    title: "Product Promo",
    client: "Client Name",
    year: "2024",
    category: "Promo",
  },
  {
    title: "Recruitment Film",
    client: "Client Name",
    year: "2024",
    category: "Bedrift",
  },
  {
    title: "Event Highlights",
    client: "Client Name",
    year: "2023",
    category: "Sosiale Medier",
  },
];
