export default function AboutContent() {
  return (
    <div className="w-full h-full overflow-x-hidden space-y-10.5 flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <img
          src="/dev-pic.png"
          alt="developer"
          className="size-40 rounded-full"
        ></img>

        <p className="pl-10">
          <b>Matt</b>
          <br />
          Amatuer web-developer, pc and video game enthusiast
          <br />
          Forklift operator / timber-yard worker at Bunnings Warehouse
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-2xl text-amber-600 font-bold">Development</div>
        <div className="flex flex-wrap gap-2">
          <p className="bg-amber-50 rounded-lg px-3 py-1">C#</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Java</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">
            JavaScript (TypeScript)
          </p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">HTML</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">CSS (Tailwind)</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {/* gap-4 originally */}
        <div className="text-2xl text-amber-600 font-bold">Tools</div>
        <div className="flex flex-wrap gap-2">
          <p className="bg-amber-50 rounded-lg px-3 py-1">Visual Studio Code</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Git</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">GitHub</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Figma</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Postman</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Docker</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Unity 2D/3D</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Linux</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Node.js</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">React</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Next.js</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Express.js</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">MongoDB</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">MySQL</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">SQLite</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">AWS</p>
          <p className="bg-amber-50 rounded-lg px-3 py-1">Vercel</p>
        </div>
      </div>

      <a
        className="text-sm font-bold"
        href="https://github.com/KryticalCode/portfolio-windows/blob/main/README.md"
        target="_blank"
      >
        More info about this website........
      </a>
    </div>
  );
}
