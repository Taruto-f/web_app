"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AnimatedThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("rounded-full")}>
        <Sun />
      </Button>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180, y: 20 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        exit={{ opacity: 0, rotate: 180, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="icon"
          className={cn("rounded-full")}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}