import Window from "../components/Window";
import NavIcons from "../components/NavIcons";
import { useWindowManager } from "../hooks/useWindowManager";
import { renderWindow } from "../utils/windowHelpers";
import { useSoundEffects } from "../hooks/useSoundEffects"; // import hook directly
import { WindowConfigKey } from "../data/windowConfigs";

// page receives the soundToggle state from _app.tsx
export default function Index({ soundToggle }: { soundToggle: boolean }) {
  const { openWindows, animatingWindows, openWindow, closeWindow } =
    useWindowManager();

  // the hook here now uses the global state passed down as a prop to control sound effects
  const { handleSoundClick, handleSoundClose } = useSoundEffects(soundToggle);

  const openWindowWithSound = (windowType: string) => {
    handleSoundClick();
    openWindow(windowType);
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
            <span className="text-amber-500 text-6xl">i&apos;m matt</span>
          </div>
          <p>Aspiring web-developer and recent Computer Science graduate</p>
          <NavIcons openWindow={openWindowWithSound} />
        </div>
      </Window>

      {/* ------------------------------------ */}
      {/* Open windows rendering */}
      {/* ------------------------------------ */}

      {openWindows.map((windowId) => {
        // don't render the 'home' window again in this loop as it is already rendered above
        // prevents duplicate rendering of the home window
        if (windowId === "home") return null;

        return renderWindow(
          windowId as WindowConfigKey, // ensure windowId is a valid key
          animatingWindows,
          handleSoundClose, // pass the close handler
          closeWindow
        );
      })}

      {/* ------------------------------------ */}
    </div>
  );
}
