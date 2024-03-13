"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Tabs,
  Tab,
  Button,
  Input,
  Link,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { LoginForm, SignUpForm } from "..";
import { AuthPage } from "@/types/AuthTypes";

const Auth = ({ initialTab }: { initialTab: AuthPage }): React.ReactElement => {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<AuthPage>(initialTab);

  useEffect(() => {
    setSelected(pathname.includes("/auth/login") ? "login" : "sign-up");
  }, [pathname]);

  const handleSelectionChange = (key: string | number) => {
    setSelected(key as AuthPage);
    const newPath = `/auth/${key === "login" ? "login" : "sign-up"}`;
    router.push(newPath);
  };

  return (
    <div className="flex flex-col w-full h-full items-center mt-24">
      <Card className="max-w-full w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={handleSelectionChange}
          >
            <Tab key="login" title="Login">
              <LoginForm setSelected={setSelected} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignUpForm setSelected={setSelected} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default Auth;
