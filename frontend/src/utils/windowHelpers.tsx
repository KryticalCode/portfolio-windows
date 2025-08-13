import Window from "../components/Window";
import AboutContent from "../components/AboutContent";
import AnimatedWindow from "../components/AnimatedWindow";
import ContactContent from "../components/ContactContent";
import FAQContent from "../components/FAQContent";
import LinksContent from "../components/LinksContent";
import ProjectsContent from "../components/ProjectsContent";
import { faqData } from "../data/FAQData";
import { WindowConfigKey, windowConfigs } from "../data/windowConfigs";

// Render logic for each open window
function renderWindow(
  windowId: WindowConfigKey,
  animatingWindows: string[], // passed as paramater from useWindowManager
  handleSoundClose: () => void, // passed as paramater from useSoundEffects
  closeWindow: (windowType: string) => void // passed as parameter from useWindowManager
) {
  const config = windowConfigs[windowId];
  const content = getContentComponent(windowId);
  const finalContent = config.wrapperClass ? (
    <div className={config.wrapperClass}>{content}</div>
  ) : (
    content
  );

  return (
    <AnimatedWindow isAnimating={animatingWindows.includes(windowId)}>
      <Window
        title={windowId}
        width={config.width}
        height={config.height}
        isMovable={config.isMovable}
        expandContent={config.expandContent}
        onClose={() => {
          handleSoundClose();
          closeWindow(windowId);
        }}
      >
        {finalContent}
      </Window>
    </AnimatedWindow>
  );
}

function getContentComponent(windowId: WindowConfigKey) {
  switch (windowId) {
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

export { renderWindow, getContentComponent };
