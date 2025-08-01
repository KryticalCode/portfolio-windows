interface AnimatedWindowProps {
  children: React.ReactNode;
  isAnimating: boolean;
}

{
  /* AnimatedWindow component acting as a wrapper div for the Window component */
}
export default function AnimatedWindow({
  children,
  isAnimating,
}: AnimatedWindowProps) {
  return (
    <div
      className={`transition-all duration-300 origin-center relative z-10 ${
        isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {children}
    </div>
  );
}
