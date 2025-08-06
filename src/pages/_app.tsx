import type { AppProps } from "next/app";
import Wave from "react-wavify";
import "../app/globals.css";
import { useSoundEffects } from "../hooks/useSoundEffects";

export default function App({ Component, pageProps }: AppProps) {
  // call hooks from the top level of the component after imports
  const soundEffects = useSoundEffects();

  return (
    <>
      {/* Global wave background - appears on all pages */}
      <Wave
        fill="#fa9d78"
        paused={false}
        style={{
          position: "fixed",
          top: 500,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />

      {/* Global Sound Toggle - Fixed position in corner */}
      <div className="fixed top-4 right-4">
        <button
          onClick={soundEffects.handleSoundToggle}
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center border-2 border-gray-200 hover:border-gray-300"
          aria-label={
            soundEffects.soundToggle ? "Disable sound" : "Enable sound"
          }
        >
          <img
            src={
              soundEffects.soundToggle
                ? "/volume-enabled.png"
                : "/volume-disabled.png"
            }
            alt={soundEffects.soundToggle ? "Sound Enabled" : "Sound Disabled"}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* All page content renders here - pass sound effects as props */}
      <Component {...pageProps} soundEffects={soundEffects} />
    </>
  );
}
