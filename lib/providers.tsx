"use client";

import { NextUIProvider } from "@nextui-org/react";
import StyledComponentsRegistry from "./registry";
import { AuthProvider } from "@/contexts/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <StyledComponentsRegistry>
        <AuthProvider>{children}</AuthProvider>
      </StyledComponentsRegistry>
    </NextUIProvider>
  );
}
