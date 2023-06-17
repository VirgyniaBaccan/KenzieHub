import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { StyledLoader } from "./styles";
import { Link } from "react-router-dom";

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

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
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
      {isLoading ? (
        <StyledLoader></StyledLoader>
      ) : (
        <form onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <label>Digite aqui seu email</label>
          <input type="email" {...register("email")} />
          {errors.email?.message}
          <label>Digite aqui sua senha</label>
          <input type="password" {...register("password")} />
          {errors.password?.message}
          <button>Entrar</button>
          <p>Ainda não possui uma conta?</p>
          <button>
            <Link to="/registerpage">Cadastro</Link>
          </button>
        </form>
      )}
    </>
  );
};
