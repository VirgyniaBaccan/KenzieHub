import { LoginForm } from "../../components/LoginForm";

export const LoginPage = ({ setUserInfos }) => {
  return (
    <div>
      <LoginForm setUserInfos={setUserInfos} />
    </div>
  );
};
