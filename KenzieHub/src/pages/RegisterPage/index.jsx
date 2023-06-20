import { RegisterForm } from "../../components/RegisterForm";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledContainer } from "../../styles/grid";
import { StyledHeader, StyledLink } from "./styles";

export const RegisterPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <img src={logo} alt="Logotipo KenzieHub" />
          <nav>
            <StyledLink to="/">Voltar</StyledLink>
          </nav>
        </StyledHeader>
        <RegisterForm />
      </StyledContainer>
    </>
  );
};
