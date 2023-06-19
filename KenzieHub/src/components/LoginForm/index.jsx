import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { StyledForm, StyledLoader } from "./styles";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { StyledLink } from "../StyledLink";

export const LoginForm = ({ setUserInfos }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUserInfos(data.user);

      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
      localStorage.setItem("USERID", JSON.stringify(data.user.id));

      toast.success("Login realizado com sucesso", { autoClose: 900 });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("E-mail ou senha inválidos", { autoClose: 900 });
    } finally {
      setIsLoading(false);
    }
  };

  const submit = async (formData) => {
    await userLogin(formData);
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
          {errors.email?.message}
          <label>Senha</label>
          <StyledInput
            type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
          {errors.password?.message}
          <StyledButton>Entrar</StyledButton>
          <p>Ainda não possui uma conta?</p>
          <StyledLink to="/registerpage">Cadastre-se </StyledLink>
        </StyledForm>
      )}
    </>
  );
};
