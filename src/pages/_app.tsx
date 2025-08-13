import type { AppProps } from "next/app";
import Wave from "react-wavify";
import "../app/globals.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const SoundToggle = dynamic(() => import("../components/SoundToggle"), {
  ssr: false, // disable server-side rendering for this component, was crashing AWS beanstalk build
});

export default function App({ Component, pageProps }: AppProps) {
  // call hooks from the top level of the component after imports

  // global sound state is now managed here, in the common top-level component
  const [soundToggle, setSoundToggle] = useState<boolean>(true);
  const { handleSoundClose } = useSoundEffects(soundToggle);

  // function will be passed to the toggle button to change the sound state in other components
  const toggleSound = () => {
    const newSoundState = !soundToggle;
    setSoundToggle(newSoundState);
    if (newSoundState) {
      handleSoundClose(); // play a sound when enabling
    }
  };

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

      {/* pass the state and the toggle function to the button */}
      <SoundToggle soundToggle={soundToggle} handleSoundToggle={toggleSound} />

      {/* pass the state and functions down to all other pages */}
      <Component {...pageProps} soundToggle={soundToggle} />
    </>
  );
}
