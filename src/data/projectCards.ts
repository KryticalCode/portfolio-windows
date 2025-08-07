export interface ProjectCard {
  href: string; // url
  src: string; // image source e.g., /iamge.png
  alt: string; // image alt text e.g., "Project description"
  title: string; // project title
}

export const schoolProjects: ProjectCard[] = [
  {
    href: "https://github.com/rmit-computing-technologies/Hologame",
    src: "/ProgressBar.png",
    alt: "Nintendogs-Like Unity Game",
    title: "Hologame - Looking Glass Display",
  },
  {
    href: "https://github.com/rmit-fsd-2024-s1/s3625089-s3948914-a2",
    src: "github-logo.png",
    alt: "Full Stack Node.js App",
    title: "Full Stack Node.js App - RMIT Assignment",
  },
  {
    href: "https://github.com/KryticalCode/airbnb-mern-app",
    src: "airbnb-mern.png",
    alt: "Full Stack Node.js MongoDB App",
    title: "My Airbnb App - MERN App",
  },
];

export const personalProjects: ProjectCard[] = [
  {
    href: "https://www.github.com/KryticalCode/portfolio-website",
    src: "/my-website.png",
    alt: "Portfolio Website",
    title: "Portfolio Website",
  },
  {
    href: "https://todo-app-two-psi-89.vercel.app/",
    src: "todo-app.png",
    alt: "to-do list app",
    title: "To-Do List App",
  },
  {
    href: "https://github.com/KryticalCode",
    src: "github-logo.png",
    alt: "Full Stack C# Library Management System",
    title: "Full Stack C# Simple Library Management System",
  },
  {
    href: "https://github.com/KryticalCode/my-website",
    src: "my-website-slide.png",
    alt: "My Portfolio Website Slideshow V1",
    title:
      "Portfolio Website Slideshow - Original version of my portfolio [incomplete]",
  },
];
