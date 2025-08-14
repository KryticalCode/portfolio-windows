import { useRef } from "react";
import { WindowProps } from "../types";
import WindowTitleBar from "./WindowTitleBar";
import WindowContent from "./WindowContent";
import useResponsiveWindow from "../hooks/useResponsiveWindow";
import DraggableWrapper from "./DraggableWrapper";

export default function Window({
  title,
  children,
  width = "24rem",
  height = "20rem",
  isMovable = false,
  onClose,
  expandContent = false, // Default to false
  responsive = false, // true : mobile = full screen, desktop = width and height props || false : always use width and height props
}: WindowProps) {
  // ----------- log props for debug -----------
  // console.log(`Window component recieved:`, {
  //   title,
  //   width,
  //   height,
  //   responsive,
  // });
  // --------------- end debug -------------------
  //
  // create a ref (which is a mutable object) to attach to the draggable node -> this is required by react-draggable and allows it to manage the DOM node directly
  const nodeRef = useRef<HTMLDivElement>(null);
  // useResponsiveWindow custom hook to handle the responsive logic
  const { styles } = useResponsiveWindow(responsive, width, height);

  const WindowContainer = (
    <div
      ref={nodeRef}
      className={`
        flex flex-col bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10
        ${
          isMovable
            ? "absolute"
            : "fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        }
        ${responsive ? "w-[95vw] h-[90vh] lg:w-auto lg:h-auto" : ""}
      `}
      style={styles}
    >
      <WindowTitleBar title={title} isMovable={isMovable} onClose={onClose} />
      <WindowContent expandContent={expandContent}>{children}</WindowContent>
    </div>
  );

  // Return non-draggable window for static windows (like home)
  return (
    <DraggableWrapper isMovable={isMovable} nodeRef={nodeRef}>
      {WindowContainer}
    </DraggableWrapper>
  );
}
