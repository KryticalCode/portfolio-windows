import {
  CircleUser,
  Link,
  FolderCode,
  FileQuestionMark,
  AtSign,
} from "lucide-react";

interface NavIconProps {
  openWindow: (windowType: string) => void;
}

export default function NavIcons({ openWindow }: NavIconProps) {
  return (
    /* Main container for nav icons */
    <div className="flex flex-wrap flex-row justify-center gap-4 mt-8">
      {/* About */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("about")}
      >
        <CircleUser size={50} />
        <span>about</span>
      </div>

      {/* Links */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("links")}
      >
        <Link size={50} />
        <span>links</span>
      </div>

      {/* Projects */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("projects")}
      >
        <FolderCode size={50} />
        <span>projects</span>
      </div>

      {/* FAQ */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("faq")}
      >
        <FileQuestionMark size={50} />
        <span>faq</span>
      </div>

      {/* Contact */}
      <div
        className="flex flex-col items-center space-y-2.5 hover:opacity-75 transition-opacity cursor-pointer"
        onClick={() => openWindow("contact")}
      >
        <AtSign size={50} />
        <span>contact</span>
      </div>
    </div>
  );
}
