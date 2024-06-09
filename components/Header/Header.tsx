"use client";
import { useAuth } from "@/contexts/AuthContext";
import { HeaderContainer, UserContainer } from "@/styles/AppStyles";
import { Button, Card, User } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Search from "./Search";

const Header = (): React.ReactElement => {
  const { handleOpenAuth, isAuthorized, user, handleLogout } = useAuth();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <HeaderContainer>
      <Search />
      {hydrated && (
        <>
          {isAuthorized ? (
            <UserContainer className="shadow-sm">
              <Link href="/profile">
                <User
                  name={user?.userProfile.username}
                  description={user?.userProfile.role}
                  avatarProps={{
                    src: user?.userProfile.profilePhoto,
                  }}
                />
              </Link>
              <Button
                isIconOnly
                color="primary"
                variant="flat"
                onClick={handleLogout}
              >
                <IoIosLogOut />
              </Button>
            </UserContainer>
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
