import { FormProps } from "@/types/AuthTypes";
import { Button, Input, Link } from "@nextui-org/react";

const SignUpForm = ({ setSelected }: FormProps): React.ReactElement => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Ім'я"
        placeholder="Введіть своє ім'я"
        type="name"
      />
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
        <Button fullWidth color="primary">
          Зареєструватися
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
