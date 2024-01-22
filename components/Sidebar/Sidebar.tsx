import { User } from "@nextui-org/react";
import { Navbar } from "..";
import {
  LogoContainer,
  SidebarContainer,
  SidebarWrapper,
  UserContainer,
} from "@/styles/SidebarStyles";

const Sidebar = (): React.ReactElement => {
  return (
    <SidebarWrapper>
      <SidebarContainer className="border-r-1 border-stone-200 bg-stone-100">
        <LogoContainer>Logo</LogoContainer>
        <Navbar />
        <UserContainer>
          <User
            name="Jane Doe"
            description="Volunteer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </UserContainer>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
