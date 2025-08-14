import { renderWindow } from "../utils/index";
import { WindowConfigKey } from "../types/index";
import { useWindowManager } from "../hooks/useWindowManager";
import { useSoundEffects } from "../hooks/useSoundEffects";

import React from "react";

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
      {/* render main home window using windowHelper*/}
      {renderWindow(
        "home",
        animatingWindows,
        handleSoundClose,
        closeWindow,
        openWindowWithSound
      )}

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
          closeWindow,
          undefined // don't pass openWindow here as it's not needed for other windows besides 'home'
        );
      })}

      {/* ------------------------------------ */}
    </div>
  );
}
