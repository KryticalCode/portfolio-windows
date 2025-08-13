import useSound from "use-sound";

interface SoundEffects {
  handleSoundClick: () => void;
  handleSoundClose: () => void;
}

// the hook now takes the global sound toggle state as an argument
export const useSoundEffects = (soundToggle: boolean): SoundEffects => {
  // ------------------------------------
  // Sound effects setup
  // ------------------------------------
  const [playClosingSound] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0,
  });

  const [playSoundClick] = useSound("on-click.mp3", {
    volume: soundToggle ? 1 : 0,
  });

  // ------------------------------------
  // Sound control functions
  // ------------------------------------

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
    handleSoundClick,
    handleSoundClose,
  };
};
