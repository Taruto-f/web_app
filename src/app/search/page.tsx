"use client";

import { Search } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <BlurFade delay={0.2} inView>
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
            Search
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Find what you&apos;re looking for
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8">
          <BorderBeam size={300} duration={12} />

          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>

            <ShimmerButton className="w-full shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg flex items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                Search
              </span>
            </ShimmerButton>
          </div>
        </div>
      </BlurFade>

      {searchQuery && (
        <BlurFade delay={0.6} inView>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Search Results</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing results for: <span className="font-bold text-purple-600">&quot;{searchQuery}&quot;</span>
            </p>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-6">
              <p className="text-center text-neutral-500 dark:text-neutral-400">
                No results found. Try a different search term.
              </p>
            </div>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
