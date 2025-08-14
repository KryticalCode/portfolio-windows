import NavIcons from "./NavIcons";

interface HomeContentProps {
  openWindow: (windowType: string) => void;
}

export default function HomeContent({ openWindow }: HomeContentProps) {
  return (
    <div className="flex-1 h-full justify-center items-center flex flex-col text-center">
      <div className=" p-5 flex flex-row gap-6 items-center ">
        <span className="text-6xl">hi!</span>
        <span className="text-amber-500 text-6xl">i&apos;m matt</span>
      </div>
      <p>Aspiring web-developer and recent Computer Science graduate</p>
      <NavIcons openWindow={openWindow} />
    </div>
  );
}
