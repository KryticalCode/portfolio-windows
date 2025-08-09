import { faqData } from "@/data/FAQData";

// keys for window configurations
// these will be the only valid keys for windowConfigs
export type WindowConfigKey =
  | "about"
  | "links"
  | "projects"
  | "faq"
  | "contact";

//
export interface WindowConfig {
  width: string;
  height: string;
  isMovable: boolean;
  expandContent?: boolean;
  contentProps?: Record<string, unknown>; // More specific than 'any', allows any JSON-serializable value - fix for Vercel build instead of any (react strice not allowed)
  wrapperClass?: string; // optional class for wrapping content with specific style in child components / div
}

// union type for window configurations
export const windowConfigs: Record<WindowConfigKey, WindowConfig> = {
  about: {
    // WindowConfig for "about" window
    width: "53rem",
    height: "46rem",
    isMovable: true,
  },
  links: {
    width: "30rem",
    height: "30rem",
    isMovable: true,
    expandContent: true,
    wrapperClass: "flex justify-center items-center h-full", // centered layout for links
  },
  projects: {
    width: "80rem",
    height: "45rem",
    isMovable: true,
  },
  faq: {
    width: "40rem",
    height: "35rem",
    isMovable: true,
    contentProps: { faqItems: faqData },
  },
  contact: {
    width: "45rem",
    height: "40rem",
    isMovable: true,
  },
};

// Record<WindowConfigKey, WindowConfig>
//            ↑                 ↑
//        Key type         Value type
//       (the names)      (the config objects)

// allows for flexible contentProps
