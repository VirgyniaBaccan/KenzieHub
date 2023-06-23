import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { StyledForm, StyledLoader } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { StyledLink } from "../StyledLink";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const submit = async (formData) => {
    await userLogin(formData, setIsLoading);
    reset();
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <StyledLoader />
      ) : (
        <StyledForm onSubmit={handleSubmit(submit)}>
          <div>
            <h2>Login</h2>
          </div>
          <label>Email</label>
          <StyledInput
            type="email"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
          <span>{errors.email?.message}</span>
          <label>Senha</label>
          <StyledInput
            type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
          <span>{errors.password?.message}</span>
          <StyledButton>Entrar</StyledButton>
          <p>Ainda não possui uma conta?</p>
          <StyledLink to="/registerpage">Cadastre-se </StyledLink>
        </StyledForm>
      )}
    </>
  );
};
