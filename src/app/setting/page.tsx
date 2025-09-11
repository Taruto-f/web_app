import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

function AnimatedThemeTogglerDemo() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Settings</h1>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Theme</h2>
        <div className="mt-4">
          <AnimatedThemeToggler />
        </div>
      </div>
    </div>
  );
}

export default AnimatedThemeTogglerDemo;