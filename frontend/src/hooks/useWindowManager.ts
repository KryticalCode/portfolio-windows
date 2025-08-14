import { useState } from "react";
import { WindowManager } from "../types";

export const useWindowManager = (): WindowManager => {
  const [openWindows, setOpenWindows] = useState<string[]>(["home"]);
  const [animatingWindows, setAnimatingWindows] = useState<string[]>([]);

  const openWindow = (windowType: string, onOpen?: () => void) => {
    if (!openWindows.includes(windowType)) {
      // Play sound if callback provided
      onOpen?.();

      // Add to animating windows first
      setAnimatingWindows([...animatingWindows, windowType]);
      setOpenWindows([...openWindows, windowType]);

      // Remove from animating after animation completes
      setTimeout(() => {
        setAnimatingWindows(animatingWindows.filter((w) => w !== windowType));
      }, 100);
    }
  };

  const closeWindow = (windowType: string) => {
    setOpenWindows(openWindows.filter((w) => w !== windowType));
  };

  return {
    openWindows,
    animatingWindows,
    openWindow,
    closeWindow,
  };
};
