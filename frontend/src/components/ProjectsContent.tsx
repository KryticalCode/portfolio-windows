import {
  ProjectCard,
  schoolProjects,
  personalProjects,
} from "../data/projectCards";

const ProjectGrid = ({ projects }: { projects: ProjectCard[] }) => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-6 items-stretch">
      {projects.map((project, href) => (
        <a
          key={href}
          href={project.href}
          className="flex flex-col items-center w-96 h-110 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300 border border-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={project.src}
            alt={project.alt}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-center break-words font-semibold text-gray-800">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-3 justify-center ">
            {project.techStack.map((stack, index) => (
              <span
                key={index}
                className="text-sm bg-amber-50 rounded-lg px-3 py-1 border border-amber-200"
              >
                {stack}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
};

export default function ProjectsContent() {
  return (
    <div className=" space-y-8 ">
      {/* ------------------------------- */}
      {/* school projects section */}
      {/* ------------------------------- */}
      <section>
        {/* school projects title and description */}
        <div className="border-l-4 border-amber-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            school projects
          </h2>
          <p className="font-light text-gray-600 leading-relaxed">
            These are some of the projects that I had worked on during my time
            at RMIT. Some were individual, while others were partner / group
            projects.
          </p>
        </div>
        {/* school project cards */}
        <ProjectGrid projects={schoolProjects} />

        {/* ------------------------------- */}
      </section>

      {/* ------------------------------- */}
      {/* personal projects section */}
      {/* ------------------------------- */}
      <section>
        {/* personal projects title and description */}
        <div className="border-l-4 border-amber-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            personal projects
          </h2>
          <p className="font-light text-gray-600 leading-relaxed">
            Independant projects that I have created, some for fun, some to
            reinforce key-areas in my learning
          </p>
        </div>
        {/* personal project cards */}
        <ProjectGrid projects={personalProjects} />
      </section>
    </div>
  );
}

// To have all the cards the same width:
// use w-80 instead of max-w-80 (for forcing fixed width)
// Use place-items-stretch (to force cards to fit grid cells)
// --- Will leave it as content-based sizing for now, as it looks more natural.... ---
