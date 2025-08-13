interface SoundToggleProps {
  soundToggle: boolean;
  handleSoundToggle: () => void;
}

export default function SoundToggle({
  soundToggle,
  handleSoundToggle,
}: SoundToggleProps) {
  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleSoundToggle}
        className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 flex items-center justify-center border-2 border-gray-200 hover:border-gray-300"
        aria-label={soundToggle ? "Disable sound" : "Enable sound"}
      >
        <img
          src={soundToggle ? "/volume-enabled.png" : "/volume-disabled.png"}
          alt={soundToggle ? "Sound Enabled" : "Sound Disabled"}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}
