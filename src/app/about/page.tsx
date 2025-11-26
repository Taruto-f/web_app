"use client";

import { Github, PenSquare, Disc, Instagram, Code, Globe } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";

const snsLinks = [
  {
    name: "Scratch",
    url: "https://scratch.mit.edu/users/-5min-",
    description: "Follow me on Scratch for updates and thoughts.",
    icon: <PenSquare className="h-6 w-6" />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "GitHub",
    url: "https://github.com/Taruto-f",
    description: "たくさんのプロジェクトを確認できます。",
    icon: <Github className="h-6 w-6" />,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/Taruto",
    description: "Connect with me on Discord.",
    icon: <Disc className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/haruto.fu_2624",
    description: "Follow my photos and stories on Instagram.",
    icon: <Instagram className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Atcoder",
    url: "https://atcoder.jp/users/h1mazin",
    description: "Find me on Atcoder.",
    icon: <Code className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "My Website",
    url: "https://your-website.com",
    description: "Check out my personal website or blog.",
    icon: <Globe className="h-6 w-6" />,
    color: "from-purple-500 to-violet-600",
  },
];

const stats = [
  { label: "Projects", value: 42 },
  { label: "Contributions", value: 1234 },
  { label: "Stars", value: 156 },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <BlurFade delay={0.2} inView>
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            About Me
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I&apos;m a passionate developer who loves building things for the web.
            Here are some of my social media links and achievements.
          </p>
        </div>
      </BlurFade>

      {/* Stats Section */}
      <BlurFade delay={0.3} inView>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8 text-center"
            >
              <BorderBeam size={250} duration={12 + idx * 2} delay={idx * 3} />
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-lg text-neutral-600 dark:text-neutral-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* SNS Links Section */}
      <div className="space-y-6">
        <BlurFade delay={0.4} inView>
          <h2 className="text-3xl font-bold text-center">Connect With Me</h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snsLinks.map((link, idx) => (
            <BlurFade key={link.name} delay={0.5 + idx * 0.1} inView>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <MagicCard
                  className="cursor-pointer h-full flex flex-col p-6 shadow-2xl hover:scale-105 transition-transform duration-300"
                  gradientColor="#262626"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}>
                      {link.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{link.name}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                    {link.description}
                  </p>
                  <p className="text-sm text-blue-500 dark:text-blue-400 truncate">
                    {link.url}
                  </p>
                </MagicCard>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Bio Section */}
      <BlurFade delay={1.0} inView>
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12">
          <BorderBeam size={300} duration={15} />
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Story
          </h2>
          <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
            <p>
              プログラミングとデザインの交差点で創造性を追求している開発者です。
              美しく、使いやすく、そして革新的なウェブアプリケーションを作ることに情熱を注いでいます。
            </p>
            <p>
              常に新しい技術を学び、実践することで、ユーザー体験を向上させることを目指しています。
              コードは芸術であり、すべてのプロジェクトは物語を語る作品だと信じています。
            </p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
