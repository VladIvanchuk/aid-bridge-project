import { User } from "@nextui-org/react";
import { Navbar } from "..";
import {
  LogoContainer,
  SidebarContainer,
  SidebarWrapper,
} from "@/styles/SidebarStyles";

const Sidebar = (): React.ReactElement => {
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
