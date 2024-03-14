"use client";
import { AuthPage } from "@/types/AuthTypes";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { LoginForm, SignUpForm } from "..";
import { useAuth } from "@/contexts/AuthContext";

const Auth = (): React.ReactElement => {
  const { authType, setAuthType } = useAuth();

  const handleSelectionChange = (key: string | number) => {
    setAuthType(key as AuthPage);
  };

  return (
    <Tabs
      fullWidth
      size="md"
      aria-label="Tabs form"
      selectedKey={authType}
      onSelectionChange={handleSelectionChange}
    >
      <Tab key="login" title="Вхід">
        <LoginForm setSelected={setAuthType} />
      </Tab>
      <Tab key="sign-up" title="Реєстрація">
        <SignUpForm setSelected={setAuthType} />
      </Tab>
    </Tabs>
  );
};

export default Auth;
