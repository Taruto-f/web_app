"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WordRotate } from "@/components/ui/word-rotate";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ArrowRight, Github, Mail, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
      {/* Orbiting Icons around the hero */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Code2 className="size-6" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Github className="size-6" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Mail className="size-8" />
      </OrbitingCircles>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <BlurFade delay={0.25} inView>
          <div className="inline-flex items-center rounded-full border border-white/5 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm mb-4">
            <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Welcome to my portfolio</span>
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-4">
            Taruto-f
          </h1>
        </BlurFade>

        <BlurFade delay={0.45} inView>
          <div className="text-2xl md:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
            I'm a{" "}
            <WordRotate
              className="text-purple-600 dark:text-purple-400"
              words={["Developer", "Creator", "Designer", "Student"]}
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.55} inView>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            プログラミングとデザインが大好きな開発者です。
            <br />
            美しく実用的なウェブアプリケーションを作ることを目指しています。
          </p>
        </BlurFade>

        <BlurFade delay={0.65} inView>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/projects">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg flex items-center gap-2">
                  View Projects
                  <ArrowRight className="size-4" />
                </span>
              </ShimmerButton>
            </Link>

            <Link href="/about">
              <ShimmerButton
                className="shadow-2xl"
                background="linear-gradient(110deg, #1e3a8a 45%, #3b82f6 55%, #1e3a8a)"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  About Me
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
