import { useEffect, useState } from "react";

/* Custom hook for responsive behaviour
 *
 * Handles window size detection and returns appropriate styles based on screen size.
 * Used to make windows responsive - full screen on mobile, fixed on desktop.
 *
 *
 */
const useResponsiveWindow = (
  responsive: boolean,
  width: string,
  height: string
) => {
  // track whether the current screen is desktop (>= 1024px)
  const [isDesktop, setIsDesktop] = useState(false);

  // set up screen size listener to update isDesktop state (window.innerWidth is a global variable that returns the width of the browser window)
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // tailwind css breakpoint 'lg' (1024px)
    };

    checkScreen(); // check immediately on component mount
    window.addEventListener("resize", checkScreen); // listen for when the window resizes
    return () => window.removeEventListener("resize", checkScreen); // clean up listener on unmount => avoid memory leaks / performance if left running
  }, []);

  // Calculate styles based on responsive setting and screen size
  // Logic: responsive windows use CSS classes on mobile, props on desktop
  // Non-responsive windows always use the provided width/height props (home page is not responsive for example)
  const styles = responsive
    ? isDesktop
      ? { width, height } // Desktop: use provided width and height props provided to the component
      : {} // Mobile: let CSS classes handle sizing (.e., w-[95vw] h-[90vh])
    : { width, height }; // Non-responsive: always use provided width and height props provided to the component

  return { styles };
};

export default useResponsiveWindow;
