import { faqData } from "./FAQData";
import { WindowConfig, WindowConfigKey } from "../types";

// union type for window configurations
export const windowConfigs: Record<WindowConfigKey, WindowConfig> = {
  home: {
    width: "50rem",
    height: "35rem",
    isMovable: false,
    expandContent: true,
    responsive: true,
  },
  about: {
    // WindowConfig for "about" window
    width: "53rem",
    height: "46rem",
    isMovable: true,
    responsive: true,
  },
  links: {
    width: "30rem",
    height: "30rem",
    isMovable: true,
    expandContent: true,
    wrapperClass: "flex justify-center items-center h-full", // centered layout for links
    responsive: false,
  },
  projects: {
    width: "80rem",
    height: "45rem",
    isMovable: true,
    responsive: true,
  },
  faq: {
    width: "40rem",
    height: "35rem",
    isMovable: true,
    contentProps: { faqItems: faqData },
    responsive: true,
  },
  contact: {
    width: "45rem",
    height: "45rem",
    isMovable: true,
    responsive: true,
  },
};
