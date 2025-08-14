import React from "react";
import HomeContent from "../components/HomeContent";
import { WindowConfigKey } from "../types";
import { faqData } from "../data/FAQData";
import AboutContent from "../components/AboutContent";
import LinksContent from "../components/LinksContent";
import ProjectsContent from "../components/ProjectsContent";
import FAQContent from "../components/FAQContent";
import ContactContent from "../components/ContactContent";

function getContentComponent(
  windowId: WindowConfigKey,
  openWindow?: (windowType: string) => void
) {
  switch (windowId) {
    case "home":
      return <HomeContent openWindow={openWindow || (() => {})} />;
    case "about":
      return <AboutContent />;
    case "links":
      return <LinksContent />;
    case "projects":
      return <ProjectsContent />;
    case "faq":
      return <FAQContent faqItems={faqData} />;
    case "contact":
      return <ContactContent />;
    default:
      return null;
  }
}

export { getContentComponent };
