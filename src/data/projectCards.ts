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
    title: "Hologame - Looking Glass Display (Private Repo)",
  },
  {
    href: "https://github.com/KryticalCode/fullstack-employee-store",
    src: "soil-fullstack-1.png",
    alt: "Full Stack Node.js App",
    title: "Fullstack Employee Store - Docker and Node.js",
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
    title: "To-Do List App (Hosted on Vercel)",
  },
  {
    href: "https://github.com/KryticalCode",
    src: "github-logo.png",
    alt: "Full Stack C# Library Management System",
    title: "Full Stack C# Simple Library Management System - Work in Progress",
  },
  {
    href: "https://github.com/KryticalCode/my-website",
    src: "my-website-slide.png",
    alt: "My Portfolio Website Slideshow V1",
    title:
      "Portfolio Website Slideshow - Original version of my portfolio [incomplete]",
  },
];
