"use client";
import SplitText from "@/components/ui/SplitText";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <Meteors number={30} />
      <SplitText
        text="Taruto-fのウェブサイトへようこそ"
        className="text-4xl font-bold z-10"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
