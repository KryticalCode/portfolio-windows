interface WindowContentProps {
  expandContent: boolean;
  children: React.ReactNode;
}

const WindowContent = ({ expandContent, children }: WindowContentProps) => {
  return (
    /* Content */
    /* Will keep flex-col for consistent layout, can override with specific styles in child components
          if required */
    <div
      className={`flex flex-col p-6 bg-white overflow-y-auto ${
        expandContent ? "flex-1" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default WindowContent;
