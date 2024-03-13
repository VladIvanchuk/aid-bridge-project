"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const AuthContext = createContext(false);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <AuthContext.Provider value={isAuthPage}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
