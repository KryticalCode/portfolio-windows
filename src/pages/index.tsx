import { useState } from "react";
import Window from "../components/Window";
import AboutContent from "@/components/AboutContent";
import Links from "@/components/Links";
import NavIcons from "@/components/NavIcons";

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
          <NavIcons openWindow={openWindow} />
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
