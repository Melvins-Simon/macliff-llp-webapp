"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export function Theme_Switcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const options = [
    { value: "system", icon: Monitor, label: "System" },
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div
      className="flex items-center gap-1 rounded-full p-1 w-max border border-border/50"
      style={{
        background:
          "color-mix(in oklch, var(--muted) 70%, oklch(0.55 0.18 270) 30%)",
      }}
    >
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all cursor-pointer
            ${
              theme === value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/40"
            }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
