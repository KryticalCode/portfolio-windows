import Window from "../components/Window";
import AnimatedWindow from "../components/AnimatedWindow";
import { getContentComponent } from "./windowContentFactory";
import { WindowConfigKey } from "../types";
import { windowConfigs } from "../data/windowConfigs";

// Render logic for each open window with and without animation can be handled (mainly for home window without animation)
function renderWindow(
  windowId: WindowConfigKey,
  animatingWindows: string[], // passed as paramater from useWindowManager
  handleSoundClose: () => void, // passed as paramater from useSoundEffects
  closeWindow: (windowType: string) => void, // passed as parameter from useWindowManager
  openWindow?: (windowType: string) => void
) {
  const config = windowConfigs[windowId]; // get the configuration for the window based on the windowId
  // --- debug for window rendering ---
  // console.log(`Window: ${windowId}`, {
  //   width: config.width,
  //   height: config.height,
  //   responsive: config.responsive,
  // });
  // ----------- end debug -------------
  const content = getContentComponent(windowId, openWindow);
  const finalContent = config.wrapperClass ? (
    <div className={config.wrapperClass}>{content}</div>
  ) : (
    content
  );

  // Special case: render home window directly without AnimatedWindow wrapper as it uses relative positioning, which was causing issues with the home page layout
  if (windowId === "home") {
    return (
      <Window
        key={windowId}
        title={windowId}
        width={config.width}
        height={config.height}
        isMovable={config.isMovable}
        expandContent={config.expandContent}
        responsive={config.responsive}
      >
        {finalContent}
      </Window>
    );
  }

  // For all other windows, use AnimatedWindow wrapper
  return (
    <AnimatedWindow
      key={windowId} // uses windowId (of type WindowConfigKey e.g., "about", "links", etc.) as the unique key to map over in index.tsx 'open windows' rendering
      isAnimating={animatingWindows.includes(windowId)}
    >
      <Window
        title={windowId}
        width={config.width}
        height={config.height}
        isMovable={config.isMovable}
        expandContent={config.expandContent}
        responsive={config.responsive}
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

export { renderWindow };
