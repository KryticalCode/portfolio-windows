interface WindowTitleProps {
  title: string;
  isMovable: boolean;
  onClose?: () => void; // optional close handler
}

const WindowTitleBar = ({ title, isMovable, onClose }: WindowTitleProps) => {
  return (
    /* Title Bar */
    <div
      className={`bg-gray-600 text-white px-6 py-3 rounded-t-lg h-13 flex justify-between items-center text-m font-medium ${
        isMovable ? "cursor-move" : "cursor-default"
      }`}
    >
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
  );
};

export default WindowTitleBar;
