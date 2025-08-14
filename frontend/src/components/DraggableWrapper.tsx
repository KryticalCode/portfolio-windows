import Draggable from "react-draggable";

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
  if (isMovable) {
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
