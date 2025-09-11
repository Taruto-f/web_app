import { Briefcase } from "lucide-react";

const projects = [
  {
    name: "Project 1",
    description: "A brief description of Project 1.",
    url: "#",
  },
  {
    name: "Project 2",
    description: "A brief description of Project 2.",
    url: "#",
  },
  {
    name: "Project 3",
    description: "A brief description of Project 3.",
    url: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="mt-4 text-lg">
        Here are some of the projects I have worked on.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex items-center mb-2">
              <Briefcase className="h-6 w-6" />
              <h2 className="ml-3 text-2xl font-bold">{project.name}</h2>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
