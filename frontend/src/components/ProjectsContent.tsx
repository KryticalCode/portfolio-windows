import {
  ProjectCard,
  schoolProjects,
  personalProjects,
} from "../data/projectCards";
import Image from "next/image";

const ProjectGrid = ({ projects }: { projects: ProjectCard[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6 items-stretch">
      {projects.map((project, href) => (
        <a
          key={href}
          href={project.href}
          className="flex flex-col items-center w-96 h-110 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300 border border-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Relative container for the image, to maintain aspect ratio */}
          <div className="relative w-full h-48 mb-3">
            <Image // Next.js Image component to optimize images => automatically resizes and optimizes images for different screen sizes
              src={project.src}
              fill // fill prop which allows the image to fill the parent container using absolute positioning as the parent container is relative
              alt={project.alt}
              // (max-width: 768px) 100vw → Mobile: image takes full screen width
              // (max-width: 1024px) 50vw → Tablet: image takes half screen width
              // 33vw → Desktop: image takes 1/3 screen width (since there are 3 columns)
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded-lg" // object-cover to maintain aspect ratio and cover the entire container
            />
          </div>
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
