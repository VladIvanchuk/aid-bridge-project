"use client";
import { useAuth } from "@/contexts/AuthContext";
import { HeaderContainer, UserContainer } from "@/styles/AppStyles";
import { Button, Card, Input, Link, User } from "@nextui-org/react";
import { CiBellOn, CiSearch } from "react-icons/ci";

const Header = (): React.ReactElement | null => {
  const { isAuthPage, isAuthorized } = useAuth();
  if (isAuthPage) return null;
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
      {isAuthorized ? (
        <Link href="profile">
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
        </Link>
      ) : (
        <Card shadow="sm" className="flex-row gap-2 py-2 px-4 w-72">
          <Button as={Link} href="/auth/login" color="primary">
            Увійти
          </Button>
          <Button as={Link} href="/auth/sign-up" color="primary" variant="flat">
            Приєднатись
          </Button>
        </Card>
      )}
    </HeaderContainer>
  );
};

export default Header;
