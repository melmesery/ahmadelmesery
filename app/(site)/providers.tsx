"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ProfileProvider } from "@/context/ProfileContext.tsx";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ProfileProvider>{children}</ProfileProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
