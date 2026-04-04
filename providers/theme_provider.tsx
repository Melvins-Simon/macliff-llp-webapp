"use client";

import { type ChildrenProps } from "@/types";
import { ThemeProvider as NextThemes } from "next-themes";

export default function Theme_provider({ children }: ChildrenProps) {
  return (
    <NextThemes defaultTheme="system" attribute={"class"} enableSystem>
      {children}
    </NextThemes>
  );
}
