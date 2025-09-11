import { Github, PenSquare, Disc, Instagram, Code, Globe } from "lucide-react";

const snsLinks = [
  {
    name: "Scratch",
    url: "https://scratch.mit.edu/users/-5min-",
    description: "Follow me on Scratch for updates and thoughts.",
    icon: <PenSquare className="h-6 w-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Taruto-f",
    description: "たくさんのプロジェクトを確認できます。",
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/Taruto",
    description: "Connect with me on Discord.",
    icon: <Disc className="h-6 w-6" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/haruto.fu_2624",
    description: "Follow my photos and stories on Instagram.",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    name: "Atcoder",
    url: "https://atcoder.jp/users/h1mazin",
    description: "Find me on Atcoder.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: "My Website",
    url: "https://your-website.com",
    description: "Check out my personal website or blog.",
    icon: <Globe className="h-6 w-6" />,
  },
];

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg">
        I&apos;m a passionate developer who loves building things for the web. Here are some of my social media links.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {snsLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex items-center mb-2">
              {link.icon}
              <h2 className="ml-3 text-2xl font-bold">{link.name}</h2>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">{link.description}</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{link.url}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
