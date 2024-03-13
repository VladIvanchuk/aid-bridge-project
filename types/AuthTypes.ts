export type AuthPage = "login" | "sign-up";

export interface FormProps {
  setSelected: React.Dispatch<React.SetStateAction<AuthPage>>;
}
