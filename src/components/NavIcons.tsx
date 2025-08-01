import {
  CircleUser,
  Link,
  FolderCode,
  FileQuestionMark,
  AtSign,
} from "lucide-react";

interface NavIconProps {
  openWindow: (windowType: string, onOpen?: () => void) => void;
  handleSoundClick?: () => void;
}

export default function NavIcons({
  openWindow,
  handleSoundClick,
}: NavIconProps) {
  return (
    /* Main container for nav icons */
    <div className="flex flex-wrap flex-row justify-center gap-8 mt-15">
      {/* About */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("about", handleSoundClick)}
      >
        <CircleUser size={55} opacity={0.6} />
        <span>about</span>
      </div>

      {/* Links */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("links", handleSoundClick)}
      >
        <Link size={55} opacity={0.6} />
        <span>links</span>
      </div>

      {/* Projects */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("projects", handleSoundClick)}
      >
        <FolderCode size={55} opacity={0.6} />
        <span>projects</span>
      </div>

      {/* FAQ */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("faq", handleSoundClick)}
      >
        <FileQuestionMark size={55} opacity={0.6} />
        <span>faq</span>
      </div>

      {/* Contact */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("contact", handleSoundClick)}
      >
        <AtSign size={55} opacity={0.6} />
        <span>contact</span>
      </div>
    </div>
  );
}
