"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { loginUser, registerUser } from "@/lib/auth/api";
import { getUserData } from "@/lib/user/api";
import { IUser } from "@/models/user";
import { AuthPage } from "@/types/AuthTypes";
import { useDisclosure } from "@nextui-org/react";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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
  createProfile: boolean;
  setCreateProfile: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  fetchUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useLocalStorage<boolean>(
    "isAuthorized",
    false,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useLocalStorage<IUser | null>("user", null);
  const [createProfile, setCreateProfile] = useState(false);
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
      onOpenChange();
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    setUser(null);
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
      setCreateProfile(true);
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = useCallback(async () => {
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
  }, [setUser, setError, setIsAuthorized, setLoading]);

  useEffect(() => {
    if (isAuthorized && !user) {
      fetchUserData();
    }
  }, [fetchUserData, isAuthorized, setIsAuthorized, user]);

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
    createProfile,
    setCreateProfile,
    user,
    fetchUserData,
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
