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
        <div className="flex flex-row flex-wrap gap-8 mt-6">
          <a
            href="https://github.com/rmit-computing-technologies/Hologame"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ProgressBar.png"
              alt="Nintendogs-Like Unity Game"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              Hologame - Looking Glass Display
            </h3>
          </a>
          <a
            href="https://github.com/rmit-fsd-2024-s1/s3625089-s3948914-a2"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github-logo.png"
              alt="Full Stack Node.js App"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              Full Stack Node.js App - RMIT Assignment
            </h3>
          </a>
        </div>
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
        <div className="flex flex-row flex-wrap gap-8 mt-6">
          <a
            href="https://www.github.com/KryticalCode/"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="todo-app.png"
              alt="to-do list app"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              To-Do List App
            </h3>
          </a>
          <a
            href="https://www.github.com/KryticalCode/portfolio-website"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/my-website.png"
              alt="Portfolio Website"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              (This) Portfolio Website
            </h3>
          </a>
          <a
            href="https://github.com/KryticalCode"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github-logo.png"
              alt="Full Stack C# Library Management System"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              Full Stack C# Simple Library Management System
            </h3>
          </a>
          <a
            href="https://github.com/KryticalCode"
            className="flex flex-col items-center max-w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github-logo.png"
              alt="TO ADD"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-center break-words font-semibold text-gray-800">
              PROJECT TO ADD
            </h3>
          </a>
        </div>
      </section>
    </div>
  );
}
