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

export default function Index() {
  // ------------------------------------
  // State management
  // ------------------------------------
  const { openWindows, animatingWindows, openWindow, closeWindow } =
    useWindowManager(); // custom hook for managing open windows and animations
  const { soundToggle, handleSoundToggle, handleSoundClick, handleSoundClose } =
    useSoundEffects(); // custom hook for managing sound effects

  // ------------------------------------
  // Window management functions
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
      {openWindows.includes("about") && ( // && if this is true, render the below window content
        <AnimatedWindow isAnimating={animatingWindows.includes("about")}>
          <Window
            title="about"
            width="50rem"
            height="40rem"
            isMovable={true}
            onClose={() => {
              handleSoundClose();
              closeWindow("about");
            }}
          >
            <AboutContent />
          </Window>
        </AnimatedWindow>
      )}

      {/* Links window */}
      {openWindows.includes("links") && (
        <AnimatedWindow isAnimating={animatingWindows.includes("links")}>
          <Window
            title="links"
            width="30rem"
            height="30rem"
            isMovable={true}
            expandContent={true}
            onClose={() => {
              handleSoundClose();
              closeWindow("links");
            }}
          >
            <div className="flex justify-center items-center h-full">
              <LinksContent />
            </div>
          </Window>
        </AnimatedWindow>
      )}

      {/* Projects window */}
      {openWindows.includes("projects") && (
        <AnimatedWindow isAnimating={animatingWindows.includes("projects")}>
          <Window
            title="projects"
            width="75rem"
            height="45rem"
            isMovable={true}
            onClose={() => {
              handleSoundClose();
              closeWindow("projects");
            }}
          >
            <ProjectsContent />
          </Window>
        </AnimatedWindow>
      )}

      {/* FAQ window */}
      {openWindows.includes("faq") && (
        <AnimatedWindow isAnimating={animatingWindows.includes("faq")}>
          <Window
            title="faq"
            width="40rem"
            height="35rem"
            isMovable={true}
            onClose={() => {
              handleSoundClose();
              closeWindow("faq");
            }}
          >
            <FAQContent faqItems={faqData} />
          </Window>
        </AnimatedWindow>
      )}

      {/* Contact window */}
      {openWindows.includes("contact") && (
        <AnimatedWindow isAnimating={animatingWindows.includes("contact")}>
          <Window
            title="contact"
            width="30rem"
            height="35rem"
            isMovable={true}
            onClose={() => {
              handleSoundClose();
              closeWindow("contact");
            }}
          >
            <ContactContent />
          </Window>
        </AnimatedWindow>
      )}
    </div>
  );
}
