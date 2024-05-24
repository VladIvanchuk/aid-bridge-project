"use client";
import { useAuth } from "@/contexts/AuthContext";
import { registerUser } from "@/lib/auth/api";
import { FormProps } from "@/types/AuthTypes";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

const SignUpForm = ({ setSelected }: FormProps): React.ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister, loading, error } = useAuth();

  return (
    <form className="flex flex-col gap-4">
      <Input
        required
        label="Ім'я"
        placeholder="Введіть своє ім'я"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <div className="flex justify-center gap-1">
        <p className="text-center text-small">Вже маєте обліковий запис?</p>
        <Link
          className="cursor-pointer"
          size="sm"
          onPress={() => setSelected("login")}
        >
          Увійти
        </Link>
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          fullWidth
          color="primary"
          onClick={() => handleRegister(name, email, password)}
        >
          Зареєструватися
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
