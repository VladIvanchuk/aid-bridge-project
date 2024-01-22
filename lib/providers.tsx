"use client";

import { NextUIProvider } from "@nextui-org/react";
import StyledComponentsRegistry from "./registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </NextUIProvider>
  );
}
