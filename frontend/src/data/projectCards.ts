export interface ProjectCard {
  href: string; // url
  src: string; // image source e.g., /iamge.png
  alt: string; // image alt text e.g., "Project description"
  title: string; // project title
  techStack: string[]; // technology stack used for the project e.g., "React, Node.js, MongoDB"
}

export const schoolProjects: ProjectCard[] = [
  {
    href: "https://github.com/rmit-computing-technologies/Hologame",
    src: "/ProgressBar.png",
    alt: "Nintendogs-Like Unity Game",
    title: "Hologame - Looking Glass Display (Private Repo)",
    techStack: [
      "Unity",
      "C#",
      "3D Graphics",
      "Looking Glass Display",
      "Ultraleap Hand Tracking",
    ],
  },
  {
    href: "https://github.com/KryticalCode/fullstack-employee-store",
    src: "/soil-fullstack-1.png",
    alt: "Full Stack Node.js App",
    title: "Full Stack Employee Store",
    techStack: ["Docker", "MySQL", "React", "Node.js", "Bootstrap CSS"],
  },
  {
    href: "https://github.com/KryticalCode/airbnb-mern-app",
    src: "/airbnb-mern.png",
    alt: "Full Stack Node.js MongoDB App",
    title: "My Airbnb Booking App",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const personalProjects: ProjectCard[] = [
  {
    href: "https://github.com/KryticalCode/portfolio-windows",
    src: "/my-website.png",
    alt: "Portfolio Website",
    title: "Portfolio Website",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Nodemailer",
      "Google APIs",
      "OAuth2",
    ],
  },
  {
    href: "https://todo-app-two-psi-89.vercel.app/",
    src: "/todo-app.png",
    alt: "to-do list app",
    title: "To-Do List App",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Kinde Auth",
      "Vite",
    ],
  },
  {
    href: "https://github.com/KryticalCode/my-website",
    src: "/my-website-slide.png",
    alt: "My Portfolio Website Slideshow V1",
    title:
      "Portfolio Website Slideshow - Original version of my portfolio [incomplete]",
    techStack: ["React", "JavaScript", "CSS"],
  },
  {
    href: "https://github.com/KryticalCode",
    src: "/github-logo.png",
    alt: "Full Stack C# Library Management System",
    title: "Full Stack C# Simple Library Management System - Work in Progress",
    techStack: ["C#", "ASP.NET Core"],
  },
];
