import Draggable from "react-draggable";
import { useRef } from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  isMovable?: boolean;
  onClose?: () => void;
  expandContent?: boolean; // New prop for content expansion
}

export default function Window({
  title,
  children,
  width = "24rem",
  height = "20rem",
  isMovable = false,
  onClose,
  expandContent = false, // Default to false
}: WindowProps) {
  const nodeRef = useRef(null);

  const WindowContent = (
    <div
      ref={nodeRef}
      className={`
        flex flex-col bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10
        ${
          isMovable
            ? "absolute"
            : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      `}
      style={{ width, height }}
    >
      {/* Title Bar */}
      <div className="bg-gray-600 text-white px-6 py-3 rounded-t-lg h-13 flex justify-between items-center text-m font-medium cursor-move">
        <span>{title}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-lg leading-none bg-transparent border-none cursor-pointer"
          >
            [×]
          </button>
        )}
      </div>

      {/* Content */}
      {/* Will keep flex-col for consistent layout, can override with specific styles in child components
      if required */}
      <div
        className={`flex flex-col p-6 bg-white ${
          expandContent ? "flex-1" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );

  // Only wrap movable windows with Draggable
  if (isMovable) {
    return (
      <Draggable
        nodeRef={nodeRef}
        handle=".cursor-move"
        bounds="body"
        defaultPosition={{ x: 100, y: 100 }}
      >
        {WindowContent}
      </Draggable>
    );
  }

  // Return non-draggable window for static windows (like home)
  return WindowContent;
}
