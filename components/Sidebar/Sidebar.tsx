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
      <SidebarContainer className="border-r-1 border-stone-200 bg-stone-100">
        <LogoContainer>Logo</LogoContainer>
        <Navbar />
        <div className="py-4 absolute bottom-0">
          <User
            name="Jane Doe"
            description="Volunteer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
