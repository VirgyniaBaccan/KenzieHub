import { LoginForm } from "../../components/LoginForm";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledContainer } from "../../styles/grid";

export const LoginPage = ({ setUserInfos }) => {
  return (
    <StyledContainer>
      <header>
        <img src={logo} alt="Logotipo KenzieHub" />
      </header>
      <LoginForm setUserInfos={setUserInfos} />
    </StyledContainer>
  );
};
