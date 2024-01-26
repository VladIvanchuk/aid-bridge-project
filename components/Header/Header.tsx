import { HeaderContainer, UserContainer } from "@/styles/AppStyles";
import { Input, User, Button } from "@nextui-org/react";
import { CiSearch, CiBellOn } from "react-icons/ci";

const Header = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <Input
        isClearable
        type="text"
        radius="lg"
        variant="bordered"
        classNames={{
          inputWrapper: ["bg-[var(--background-light)]", "border-0"],
        }}
        placeholder="Type to search..."
        startContent={
          <CiSearch className="pointer-events-none flex-shrink-0" />
        }
      />
      <UserContainer className="shadow-sm">
        <User
          name="Jane Doe"
          description="Volunteer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <Button isIconOnly color="primary" variant="flat">
          <CiBellOn />
        </Button>
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
