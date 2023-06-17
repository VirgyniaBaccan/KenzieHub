import { RegisterForm } from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-KenzieHub.svg";

export const RegisterPage = () => {
  return (
    <>
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
    </>
  );
};
