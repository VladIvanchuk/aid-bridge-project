"use client";
import {
  LogoContainer,
  SidebarContainer,
  SidebarWrapper,
} from "@/styles/SidebarStyles";
import { AuthModal, Navbar } from "..";

const Sidebar = (): React.ReactElement => {
  return (
    <>
      <SidebarWrapper>
        <SidebarContainer>
          <LogoContainer>Logo</LogoContainer>
          <Navbar />
        </SidebarContainer>
      </SidebarWrapper>
      {/* <AuthModal /> */}
    </>
  );
};

export default Sidebar;
