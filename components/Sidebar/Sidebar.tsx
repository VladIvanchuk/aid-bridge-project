"use client";
import { useAuth } from "@/contexts/AuthContext";
import {
  LogoContainer,
  SidebarContainer,
  SidebarWrapper,
} from "@/styles/SidebarStyles";
import { Navbar } from "..";

const Sidebar = (): React.ReactElement | null => {
  const isAuthPage = useAuth();
  if (isAuthPage) return null;
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <LogoContainer>Logo</LogoContainer>
        <Navbar />
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
