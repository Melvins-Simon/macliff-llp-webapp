"use client";

import { type ChildrenProps } from "@/types";
import Navbar from "../navbar";

export default function LangingPageLayout({ children }: ChildrenProps) {
  return (
    <div className="w-full h-max bg-background  overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
