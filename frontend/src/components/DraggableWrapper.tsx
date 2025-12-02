import Draggable from "react-draggable";
import { useState, useEffect } from "react";

interface DraggableWrapperProps {
  isMovable: boolean;
  children: React.ReactNode;
  nodeRef: React.RefObject<HTMLDivElement | null>; // ref can be null initially
}

export default function DraggableWrapper({
  isMovable,
  children,
  nodeRef,
}: DraggableWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMovable) {
    // On mobile, disable dragging - just render children without Draggable wrapper
    // The Window component will handle centering via fixed positioning
    if (isMobile) {
      return <>{children}</>;
    }

    // On desktop, enable dragging
    return (
      <Draggable
        nodeRef={nodeRef}
        handle=".cursor-move"
        bounds="body"
        defaultPosition={{ x: 100, y: 100 }}
      >
        {children}
      </Draggable>
    );
  }
  // if not movable, just return children without wrapping in Draggable
  return <>{children}</>;
}
