"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function DarkLightToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size="icon" onClick={toggleTheme} variant="outline">
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}