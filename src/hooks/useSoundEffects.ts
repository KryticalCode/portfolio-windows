import { useState } from "react";
import useSound from "use-sound";

interface SoundEffects {
  soundToggle: boolean;
  handleSoundToggle: () => void;
  handleSoundClick: () => void;
  handleSoundClose: () => void;
}

export const useSoundEffects = (): SoundEffects => {
  const [soundToggle, setSoundToggle] = useState<boolean>(true); // manage sound toggle on/off for website interactions

  // ------------------------------------
  // Sound effects setup
  // ------------------------------------
  const [playClosingSound] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0, // play at full volume if sound is enabled, otherwise muted
  });

  const [playSoundClick] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0,
    onend: () => console.log("Sound has ended"), // debugging
  });

  // ------------------------------------
  // Sound control functions
  // ------------------------------------

  // toggle sound on/off globally and play confirmation sound when enabling
  const handleSoundToggle = () => {
    const newSoundState = !soundToggle;
    setSoundToggle(newSoundState);
    if (newSoundState) {
      handleSoundClose();
    }
  };

  // generic click sound function for button interactions
  const handleSoundClick = () => {
    if (soundToggle) {
      playSoundClick(); // play click sound if sound is enabled
    }
  };

  // possibly change this to a more specific sound efffect later for closing windows
  const handleSoundClose = () => {
    if (soundToggle) {
      playClosingSound();
    }
  };

  return {
    soundToggle,
    handleSoundToggle,
    handleSoundClick,
    handleSoundClose,
  };
};
