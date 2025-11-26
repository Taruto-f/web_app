"use client";

import { Briefcase, Github, ExternalLink, Star, GitFork } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Portfolio Website",
    description: "モダンなポートフォリオサイト。Next.js、TypeScript、Tailwind CSSを使用。",
    url: "https://github.com/Taruto-f",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    stars: 42,
    forks: 8,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Task Manager App",
    description: "効率的なタスク管理アプリケーション。Reactとローカルストレージを活用。",
    url: "#",
    tags: ["React", "LocalStorage", "CSS"],
    stars: 28,
    forks: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Weather Dashboard",
    description: "天気情報をリアルタイムで表示するダッシュボード。API統合の実装。",
    url: "#",
    tags: ["API", "JavaScript", "Chart.js"],
    stars: 35,
    forks: 12,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "E-Commerce Platform",
    description: "フルスタックのEコマースプラットフォーム。決済機能も実装。",
    url: "#",
    tags: ["Full-Stack", "Node.js", "MongoDB"],
    stars: 56,
    forks: 18,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "AI Chat Bot",
    description: "自然言語処理を活用したチャットボット。OpenAI API使用。",
    url: "#",
    tags: ["AI", "OpenAI", "Python"],
    stars: 64,
    forks: 22,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Code Editor",
    description: "ブラウザベースのコードエディタ。シンタックスハイライト機能付き。",
    url: "#",
    tags: ["Monaco", "React", "WebAssembly"],
    stars: 48,
    forks: 15,
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 -z-10 opacity-20",
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="space-y-12">
        {/* Header Section */}
        <BlurFade delay={0.2} inView>
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
              My Projects
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on.
              Each one represents a unique challenge and learning experience.
            </p>
          </div>
        </BlurFade>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <BlurFade key={project.name} delay={0.3 + idx * 0.1} inView>
              <MagicCard
                className="cursor-pointer h-full flex flex-col p-6 shadow-2xl hover:scale-105 transition-all duration-300 group"
                gradientColor="#262626"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* CTA Section */}
        <BlurFade delay={1.2} inView>
          <div className="text-center mt-12">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
              Want to see more? Check out my GitHub profile!
            </p>
            <a
              href="https://github.com/Taruto-f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  View GitHub Profile
                </span>
              </ShimmerButton>
            </a>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
