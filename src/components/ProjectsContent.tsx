export default function ProjectsContent() {
  return (
    <div className="flex flex-col space-y-8 ">
      {/* ------------------------------- */}
      {/* school projects section */}
      {/* ------------------------------- */}
      <section>
        <h2 className="mb-2">school projects</h2>
        <p className="font-light">
          These are some of the projects that I had worked on during my time at
          RMIT. Some were individual, while others were partner / group
          projects.
        </p>
        <div className="flex flex-row flex-wrap gap-12 mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <a
            href="https://github.com/rmit-computing-technologies/Hologame"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ProgressBar.png"
              alt="Nintendogs-Like Unity Game"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">
              Hologame - Looking Glass Display
            </span>
          </a>
          <a
            href="https://github.com/rmit-fsd-2024-s1/s3625089-s3948914-a2"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="folder-empty.png"
              alt="Full Stack Node.js App"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">
              Full Stack Node.js App - RMIT Assignment
            </span>
          </a>
        </div>
      </section>

      {/* ------------------------------- */}
      {/* personal projects section */}
      {/* ------------------------------- */}
      <section>
        <h2 className="mb-2">personal projects</h2>
        <p className="font-light">
          Independant projects that I have created, some for fun, some to
          reinforce key-areas in my learning
        </p>
        <div className="flex flex-row flex-wrap gap-12 mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <a
            href="https://www.github.com/KryticalCode/"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="todo-app.png"
              alt="to-do list app"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">To-Do List App</span>
          </a>
          <a
            href="https://www.github.com/KryticalCode/portfolio-website"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/my-website.png"
              alt="Portfolio Website"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">
              (This) Portfolio Website
            </span>
          </a>
          <a
            href="https://github.com/KryticalCode"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github-logo.png"
              alt="Full Stack C# Library Management System"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">
              Full Stack C# Simple Library Management System
            </span>
          </a>
          <a
            href="https://github.com/KryticalCode"
            className="flex flex-col items-center max-w-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github-logo.png"
              alt="TO ADD"
              className="w-80 h-50 object-cover rounded-lg shadow-md"
            />
            <span className="text-center break-words mt-2">PROJECT TO ADD</span>
          </a>
        </div>
      </section>
    </div>
  );
}
