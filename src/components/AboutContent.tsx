const developmentSkills = [
  "C#",
  "Java",
  "JavaScript (TypeScript)",
  "HTML",
  "CSS (Tailwind)",
];
const toolsSkills = [
  "Visual Studio Code",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Docker",
  "Unity 2D/3D",
  "Linux",
  "Node.js",
  "React",
  "Next.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "SQLite",
  "AWS",
  "Vercel",
];

// component to display skills in styled badges
// props: React passes one object containing all props
// destructuring: { skills } - extracts 'skills' property from the props object
// typescript: { skills: string[] } - tells TS the props object has a 'skills' property that's an array of strings
// process: maps over skills array, creates a styled <p> for each skill
// key prop (required): helps React efficiently update the list when it changes
// returns: flex container with skills
const DisplaySkills = ({ skills }: { skills: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <p key={skill} className="bg-amber-50 rounded-lg px-3 py-1">
        {skill}
      </p>
    ))}
  </div>
);

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
        <DisplaySkills skills={developmentSkills} />
      </div>

      {/* gap-4 originally */}
      <div className="flex flex-col gap-1">
        <div className="text-2xl text-amber-600 font-bold">Tools</div>
        <DisplaySkills skills={toolsSkills} />
      </div>
      {/* GitHub link for more info */}
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
