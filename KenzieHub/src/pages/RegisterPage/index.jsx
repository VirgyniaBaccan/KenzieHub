import { RegisterForm } from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledContainer } from "../../styles/grid";

export const RegisterPage = () => {
  return (
    <StyledContainer>
      <header>
        <img src={logo} alt="Logotipo KenzieHub" />
        <nav>
          <Link to="/">
            Voltar
          </Link>
        </nav>
      </header>
      <div>
        <RegisterForm />
      </div>
    </StyledContainer>
  );
};
