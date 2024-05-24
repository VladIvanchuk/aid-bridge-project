"use client";

import { loginUser, registerUser } from "@/lib/auth/api";
import { getUserData } from "@/lib/user/api";
import { IUser } from "@/models/user";
import { AuthPage } from "@/types/AuthTypes";
import { useDisclosure } from "@nextui-org/react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpenChange: () => void;
  authType: AuthPage;
  setAuthType: React.Dispatch<React.SetStateAction<AuthPage>>;
  handleOpenAuth: (type: AuthPage) => void;
  handleRegister: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
  error: string | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [authType, setAuthType] = useState<AuthPage>("login");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpenAuth = (type: AuthPage) => {
    onOpen();
    setAuthType(type);
  };

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      await loginUser({ email, password });
      setIsAuthorized(true);
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
  };

  const handleRegister = async (
    name: string,
    email: string,
    password: string,
  ) => {
    setLoading(true);
    try {
      await registerUser({ name, email, password });
      setIsAuthorized(true);
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData();
        setUser(data.user);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    }
    if (isAuthorized) {
      fetchData();
    }
  }, [isAuthorized]);

  const contextValue = {
    isAuthorized,
    setIsAuthorized,
    isOpen,
    onOpenChange,
    authType,
    setAuthType,
    handleOpenAuth,
    handleLogin,
    handleRegister,
    handleLogout,
    loading,
    error,
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
