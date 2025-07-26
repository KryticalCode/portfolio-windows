import { useState } from "react";
import Window from "../components/Window";
import AboutContent from "@/components/AboutContent";
import Links from "@/components/Links";
import {
  CircleUser,
  Link,
  FolderCode,
  FileQuestionMark,
  AtSign,
} from "lucide-react";

export default function Index() {
  const [openWindows, setOpenWindows] = useState<string[]>(["home"]);

  const openWindow = (windowType: string) => {
    if (!openWindows.includes(windowType)) {
      setOpenWindows([...openWindows, windowType]);
    }
  };

  return (
    <div>
      {/* main home window */}
      <Window title="home" width="50rem" height="35rem" isMovable={false}>
        <div className="h-full justify-center items-center flex flex-col text-center ">
          <p className=" text-3xl p-5">hi! i'm matt</p>
          <p>Aspiring web-developer and recent Computer Science graduate</p>

          {/* nav icons */}
          <div className="flex flex-wrap flex-row justify-center gap-4 mt-8">
            <CircleUser
              size={50}
              className={"hover:opacity-75 transition-opacity cursor-pointer"}
              onClick={() => openWindow("about")}
            />
            <Link
              size={50}
              className={"hover:opacity-75 transition-opacity cursor-pointer"}
              onClick={() => openWindow("links")}
            />
            <FolderCode
              size={50}
              className={"hover:opacity-75 transition-opacity cursor-pointer"}
              onClick={() => openWindow("projects")}
            />
            <FileQuestionMark
              size={50}
              className={"hover:opacity-75 transition-opacity cursor-pointer"}
              onClick={() => openWindow("faq")}
            />
            <AtSign
              size={50}
              className={"hover:opacity-75 transition-opacity cursor-pointer"}
              onClick={() => openWindow("contact")}
            />
          </div>
        </div>
      </Window>

      {/* About window */}
      {openWindows.includes("about") && (
        <Window
          title="about"
          width="40rem"
          height="35rem"
          isMovable={true}
          onClose={() =>
            setOpenWindows(openWindows.filter((w) => w !== "about"))
          }
        >
          <AboutContent />
        </Window>
      )}

      {/* Links window */}
      {openWindows.includes("links") && (
        <Window
          title="links"
          width="40rem"
          height="35rem"
          isMovable={true}
          onClose={() =>
            setOpenWindows(openWindows.filter((w) => w !== "links"))
          }
        >
          <Links />
        </Window>
      )}
    </div>
  );
}
