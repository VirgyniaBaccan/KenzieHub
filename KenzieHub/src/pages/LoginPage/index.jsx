import { LoginForm } from "../../components/LoginForm";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledContainer } from "../../styles/grid";

export const LoginPage = () => {
  return (
    <StyledContainer>
      <header>
        <img src={logo} alt="Logotipo KenzieHub" />
      </header>
      <LoginForm />
    </StyledContainer>
  );
};
