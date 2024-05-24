"use client";
import { useAuth } from "@/contexts/AuthContext";
import { loginUser } from "@/lib/auth/api";
import { FormProps } from "@/types/AuthTypes";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

const LoginForm = ({ setSelected }: FormProps): React.ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading, error } = useAuth();

  return (
    <form className="flex flex-col gap-4">
      <Input
        required
        label="Email"
        placeholder="Введіть свою електронну адресу"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        label="Пароль"
        placeholder="Введіть свій пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-small">
          Потрібно створити обліковий запис?
        </p>
        <Link
          className="cursor-pointer"
          size="sm"
          onPress={() => setSelected("sign-up")}
        >
          Зареєструватися
        </Link>
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          fullWidth
          color="primary"
          onClick={() => handleLogin(email, password)}
        >
          Увійти
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
