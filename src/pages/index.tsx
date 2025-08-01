import Window from "../components/Window";
import AboutContent from "@/components/AboutContent";
import LinksContent from "@/components/LinksContent";
import NavIcons from "@/components/NavIcons";
import ProjectsContent from "@/components/ProjectsContent";
import FAQContent from "@/components/FAQContent";
import ContactContent from "@/components/ContactContent";
import { faqData } from "@/data/FAQData";
import AnimatedWindow from "@/components/AnimatedWindow";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { windowConfigs, WindowConfigKey } from "@/data/windowConfigs";

export default function Index() {
  // ------------------------------------
  // State management
  // ------------------------------------

  // Custom hooks for managing open windows and sound effects
  const { openWindows, animatingWindows, openWindow, closeWindow } =
    useWindowManager();
  const { soundToggle, handleSoundToggle, handleSoundClick, handleSoundClose } =
    useSoundEffects();

  // ------------------------------------

  // Render logic for each open window
  const renderWindow = (windowId: WindowConfigKey) => {
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
  };

  const getContentComponent = (windowId: WindowConfigKey) => {
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
  };

  // ------------------------------------

  return (
    <div>
      {/* main home window */}
      <Window
        title="home"
        width="50rem"
        height="35rem"
        isMovable={false}
        expandContent={true}
      >
        <div className="flex-1 h-full justify-center items-center flex flex-col text-center">
          <div className=" p-5 flex flex-row gap-6 items-center ">
            <span className="text-6xl">hi!</span>
            <span className="text-amber-500 text-6xl">i'm matt</span>
          </div>
          <p>Aspiring web-developer and recent Computer Science graduate</p>
          <NavIcons
            openWindow={openWindow}
            handleSoundClick={handleSoundClick}
          />
        </div>
      </Window>

      {/* ------------------------------------ */}
      {/* Open windows rendering */}
      {/* ------------------------------------ */}

      {/* About window */}
      {openWindows.includes("about") && renderWindow("about")}

      {/* Links window */}
      {openWindows.includes("links") && renderWindow("links")}

      {/* Projects window */}
      {openWindows.includes("projects") && renderWindow("projects")}

      {/* FAQ window */}
      {openWindows.includes("faq") && renderWindow("faq")}

      {/* Contact window */}
      {openWindows.includes("contact") && renderWindow("contact")}

      {/* ------------------------------------ */}
    </div>
  );
}
