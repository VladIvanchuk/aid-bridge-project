"use client";
import { useAuth } from "@/contexts/AuthContext";
import { HeaderContainer, UserContainer } from "@/styles/AppStyles";
import { Button, Card, Input, User } from "@nextui-org/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";

const Header = (): React.ReactElement => {
  const { handleOpenAuth, isAuthorized, user } = useAuth();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

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
      {hydrated && (
        <>
          {isAuthorized ? (
            <Link href="profile">
              <UserContainer className="shadow-sm">
                <User
                  name={user?.userProfile.username}
                  description={user?.userProfile.role}
                  avatarProps={{
                    src: user?.userProfile.profilePhoto,
                  }}
                />
                <Button isIconOnly color="primary" variant="flat">
                  <CiBellOn />
                </Button>
              </UserContainer>
            </Link>
          ) : (
            <Card shadow="sm" className="flex-row gap-2 py-2 px-4 w-72">
              <Button onClick={() => handleOpenAuth("login")} color="primary">
                Увійти
              </Button>
              <Button
                onClick={() => handleOpenAuth("sign-up")}
                color="primary"
                variant="flat"
              >
                Приєднатись
              </Button>
            </Card>
          )}
        </>
      )}
    </HeaderContainer>
  );
};

export default React.memo(Header);
