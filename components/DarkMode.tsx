"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <Button
      className="flex justify-center"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      <div className="relative">
        <Moon className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 scale-100 dark:scale-0" />
        <Sun className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 scale-0 dark:scale-100" />
      </div>
    </Button>
  );
}
