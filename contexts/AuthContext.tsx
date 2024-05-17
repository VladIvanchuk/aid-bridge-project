"use client";

import { AuthPage } from "@/types/AuthTypes";
import { useDisclosure } from "@nextui-org/react";
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpenChange: () => void;
  authType: AuthPage;
  setAuthType: React.Dispatch<React.SetStateAction<AuthPage>>;
  handleOpenAuth: (type: AuthPage) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authType, setAuthType] = useState<AuthPage>("login");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpenAuth = (type: AuthPage) => {
    onOpen();
    setAuthType(type);
  };

  const contextValue = {
    isAuthorized,
    setIsAuthorized,
    isOpen,
    onOpenChange,
    authType,
    setAuthType,
    handleOpenAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
