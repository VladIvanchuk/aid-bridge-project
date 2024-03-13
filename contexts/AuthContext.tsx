"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthPage: boolean;
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  const contextValue = {
    isAuthPage,
    isAuthorized,
    setIsAuthorized,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
