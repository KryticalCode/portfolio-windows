import Window from "../components/Window";
import NavIcons from "@/components/NavIcons";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { renderWindow } from "@/utils/windowHelpers";
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
            <span className="text-amber-500 text-6xl">i&apos;m matt</span>
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
      {openWindows.includes("about") &&
        renderWindow("about", animatingWindows, handleSoundClose, closeWindow)}

      {/* Links window */}
      {openWindows.includes("links") &&
        renderWindow("links", animatingWindows, handleSoundClose, closeWindow)}

      {/* Projects window */}
      {openWindows.includes("projects") &&
        renderWindow(
          "projects",
          animatingWindows,
          handleSoundClose,
          closeWindow
        )}

      {/* FAQ window */}
      {openWindows.includes("faq") &&
        renderWindow("faq", animatingWindows, handleSoundClose, closeWindow)}

      {/* Contact window */}
      {openWindows.includes("contact") &&
        renderWindow(
          "contact",
          animatingWindows,
          handleSoundClose,
          closeWindow
        )}

      {/* ------------------------------------ */}
    </div>
  );
}
