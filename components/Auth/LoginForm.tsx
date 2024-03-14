import { FormProps } from "@/types/AuthTypes";
import { Button, Input, Link } from "@nextui-org/react";

const LoginForm = ({ setSelected }: FormProps): React.ReactElement => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Введіть свою електронну адресу"
        type="email"
      />
      <Input
        isRequired
        label="Пароль"
        placeholder="Введіть свій пароль"
        type="password"
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
        <Button fullWidth color="primary">
          Увійти
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
