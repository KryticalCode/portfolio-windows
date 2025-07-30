import { useState } from "react";
import Window from "../components/Window";
import AboutContent from "@/components/AboutContent";
import LinksContent from "@/components/LinksContent";
import NavIcons from "@/components/NavIcons";
import ProjectsContent from "@/components/ProjectsContent";
import FAQContent from "@/components/FAQContent";
import ContactContent from "@/components/ContactContent";
import { faqData } from "@/data/FAQData";
import useSound from "use-sound";

export default function Index() {
  // ------------------------------------
  // State management
  // ------------------------------------
  const [openWindows, setOpenWindows] = useState<string[]>(["home"]);
  const [soundToggle, setSoundToggle] = useState<boolean>(true); // manage sound toggle on/off for website interactions

  // ------------------------------------
  // Sound effects setup
  // ------------------------------------
  const [playClosingSound] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0, // play at full volume if sound is enabled, otherwise muted
  });

  const [playSoundClick] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0, // play at full volume if sound is enabled
    onend: () => console.log("Sound has ended"), // debugging
  });

  // ------------------------------------
  // Sound control functions
  // ------------------------------------

  // toggle sound on/off globally and play confirmation sound when enabling
  const handleSoundToggle = () => {
    const newSoundState = !soundToggle;
    setSoundToggle(newSoundState);
    if (newSoundState) {
      handleSoundClose(); // play confirmation sound when turning sound on
    }
  };

  // generic click sound function for button interactions
  const handleSoundClick = () => {
    if (soundToggle) {
      playSoundClick(); // play click sound if sound is enabled
    }
  };

  // possibly change this to a more specific sound efffect later
  const handleSoundClose = () => {
    if (soundToggle) {
      playClosingSound();
    }
  };

  // ------------------------------------
  // Window management functions
  // ------------------------------------

  // open new window with sound effect
  const openWindow = (windowType: string) => {
    if (!openWindows.includes(windowType)) {
      handleSoundClick(); // play sound when opening window
      setOpenWindows([...openWindows, windowType]);
    }
  };

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
          <NavIcons openWindow={openWindow} />
        </div>
      </Window>

      {/* ------------------------------------ */}
      {/* Open windows rendering */}
      {/* ------------------------------------ */}

      {/* About window */}
      {openWindows.includes("about") && (
        <Window
          title="about"
          width="50rem"
          height="40rem"
          isMovable={true}
          onClose={() => {
            handleSoundClose(); // Play sound when closing the window test
            setOpenWindows(openWindows.filter((w) => w !== "about"));
          }}
        >
          <AboutContent />
        </Window>
      )}

      {/* Links window */}
      {openWindows.includes("links") && (
        <Window
          title="links"
          width="30rem"
          height="30rem"
          isMovable={true}
          expandContent={true}
          onClose={() => {
            handleSoundClose();
            setOpenWindows(openWindows.filter((w) => w !== "links"));
          }}
        >
          <div className="flex justify-center items-center h-full">
            <LinksContent />
          </div>
        </Window>
      )}

      {/* Projects window */}
      {openWindows.includes("projects") && (
        <Window
          title="projects"
          width="75rem"
          height="45rem"
          isMovable={true}
          onClose={() => {
            handleSoundClose();
            setOpenWindows(openWindows.filter((w) => w !== "projects"));
          }}
        >
          <ProjectsContent />
        </Window>
      )}

      {/* FAQ window */}
      {openWindows.includes("faq") && (
        <Window
          title="faq"
          width="40rem"
          height="35rem"
          isMovable={true}
          onClose={() => {
            handleSoundClose();
            setOpenWindows(openWindows.filter((w) => w !== "faq"));
          }}
        >
          <FAQContent faqItems={faqData} />
        </Window>
      )}

      {/* Contact window */}
      {openWindows.includes("contact") && (
        <Window
          title="contact"
          width="30rem"
          height="35rem"
          isMovable={true}
          onClose={() => {
            handleSoundClose();
            setOpenWindows(openWindows.filter((w) => w !== "contact"));
          }}
        >
          <ContactContent />
        </Window>
      )}
    </div>
  );
}
