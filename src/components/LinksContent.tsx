export default function LinksContent() {
  return (
    <div className="p-4 grid grid-cols-2 justify-items-center gap-15">
      <a
        href="https://github.com/KryticalCode/"
        className="flex flex-col items-center space-y-2.5"
        target="_blank"
      >
        <img src="/github-logo.png" alt="GitHub Logo" className="w-10 h-10" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/"
        className="flex flex-col items-center space-y-2.5"
        target="_blank"
      >
        <img src="/linkedin.png" alt="LinkedIn Logo" className="w-10 h-10" />
        <span>LinkedIn</span>
      </a>
      {/* <a
        href="https://www.discord.com/"
        className="flex flex-col items-center space-y-2.5"
        target="_blank"
      >
        <img src="/discordlogo.png" alt="Discord Logo" className="w-10 h-10" />
        <span>Discord</span>
      </a> */}
      <span className="text-sm text-gray-500 col-span-2 text-center">
        [Links will open in a new tab]
      </span>
    </div>
  );
}
